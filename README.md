# ELASTICSEARCH_DUMPER
CLI for dumping Elasticsearch DB for later bulk import
* get all indexes to be in a list 
* select
* dump
* send it as email 

```bash

#!/bin/bash

arr=(
distripass-development-user
distripass-development-service
distripass-development-mastercredential
distripass-development-organization
distripass-development-group
)

echo "" > bulk_import.json

for item in ${arr[*]}
do
        curl -s -XGET "http://127.0.0.1:9200/"$item"/_search?pretty"  | jq -c '.hits.hits[] | { index: {_index:._index, _type:._type, _id:._id}}, ._source' >> bulk_import.json

done

```
