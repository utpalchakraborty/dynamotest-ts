#!/bin/bash
set -x
awslocal --region=us-east-1 dynamodb create-table \
            --table-name auth_data \
            --attribute-definitions \
                  AttributeName=app,AttributeType=S \
                  AttributeName=user,AttributeType=S \
            --key-schema AttributeName=app,KeyType=HASH AttributeName=user,KeyType=RANGE \
            --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

awslocal dynamodb put-item --table-name auth_data --item '{"app": {"S": "cmp"}, "user": {"S": "utpal"}}'
awslocal dynamodb put-item --table-name auth_data --item '{"app": {"S": "pom"}, "user": {"S": "pablo"}}'