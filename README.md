# ElasticDump

## Description

Allows you to dump elasticsearch index content in bulk import format for later use.

## Overview

* Directory structure
* Features
* How to contribute to this library? 
* How to build the library to be used in production-ready projects?
* How to use ?

### Directory structure 

```bash
.
├── config
│   ├── base.ts
│   └── index.ts
├── core
├── desc.d.ts
├── errors
│   └── index.ts
└── index.ts
```

### How to build the library to be used in production-ready projects?

```bash
git clone https://gitlab.superpitch.fr/superpitch/framework/ELASTICSEARCH-DUMPER.git
cd ELASTICSEARCH_DUMPER
npm install
npm run build
npm install -g
```

### How to use ?

Just type the following command while having your DB up and running: 

```bash
esdump
```

## NPM custom commands

- `build`: Build the JavaScript files. 
- `build:watch`: Build the JavaScript files in watch mode. 
- `test:watch`: Run jest in interactive test mode.
- `docs`: Generate the docs directory.