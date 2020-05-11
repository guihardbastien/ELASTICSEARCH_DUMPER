#!/usr/bin/env node

import clear from 'clear';
import * as ThickerCLI from 'thicker_cli';
import got from 'got';

const urlBase = 'http://localhost:9200/';

clear();
ThickerCLI.Interface.printSomethingBig('EsDUMP');
init();

/**
 * Routes the CLI
 */
async function init():Promise<any> {

    const url = `${urlBase}_aliases?pretty=true`;

    let json: {[key:string]:any} = {};

    try {
        const response = await got(url);
        json = JSON.parse(response.body);

    } catch (error) {
        console.log(error.response.body);
    }

    const indexes = Object.keys(json);

    await ThickerCLI.Interface.selectPrompt(indexes, 'checkbox',
        'Select index(es) you\'d like to dump')
    .then((answers: {[key:string]:any}) => {
        answers.choices.forEach((a:string) => {
            dump(a);
        });
    });
}

/**
 * Dumps doc as console log
 * @param index
 */
async function dump(index: string) {
    const uri = `${urlBase}${index}/_search?pretty`;
    const res = await got(uri);
    const body = JSON.parse(res.body);
    const hits = body.hits.hits;
    hits.forEach((doc: {[key:string]:any}) => {
        const head = JSON.stringify(
                { index: { _index: doc._index, _type: doc._type, _id: doc._id } });
        const data = JSON.stringify(doc._source);
        console.log(head);
        console.log(data);
    });
}