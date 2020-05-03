#!/usr/bin/env node

import clear from 'clear';
import * as ThickerCLI from 'thicker_cli/lib';

clear();
ThickerCLI.Interface.printSomethingBig('ES_DUMP');
init();

const indexes = ['test1', 'test2'];

/**
 * Routes the CLI
 */
async function init():Promise<any> {
    const answer = await ThickerCLI.Interface.selectPrompt(indexes, 'list', 'Select index(es) you\'d like to dump');
    switch (answer.choices) {
        case indexes[0]:
            console.log('test1');

            break;
        case indexes[1]:
            console.log('test2');

            break;
        default:
            throw Error('illegal choice');
    }
}