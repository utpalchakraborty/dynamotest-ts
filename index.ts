import {DynamoDBClient, ListTablesCommand, ScanCommand} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb"
import * as dotenv from 'dotenv'

dotenv.config()

const dynamodb = new DynamoDBClient({
    region: process.env["AWS_REGION"],
    endpoint: process.env["AWS_ENDPOINT"],
    credentials : {
        accessKeyId :  <string> process.env["AWS_ACCESS_KEY_ID"] ,
        secretAccessKey: <string> process.env["AWS_SECRET_KEY"]
    }
});

export const handler = async () => {
    const tablesResponse2 = await dynamodb.send(new ListTablesCommand({
        Limit: 10
    }));
    console.log(tablesResponse2);

    const rows = await dynamodb.send(new ScanCommand({TableName: "auth_data"}));

    rows.Items?.forEach(
        (item) => console.log(unmarshall(item)))
};

handler()


