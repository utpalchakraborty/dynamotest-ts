# dynamotest

Steps to run and test this

1. Check the default .env file that is loaded and make sure the values are ok. Mostly, the above should work.

2. Install the needed npm packages
`npm install`

3. Bring up the localstack by running
`docker-compose up`

Once the local stack is ready, dynamo db will come up and create the table auth_data and insert two rows into it.

4. Then test the application by running `npx ts-node index.js`


