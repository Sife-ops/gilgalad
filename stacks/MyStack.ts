import * as sst from "@serverless-stack/resources";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create the table
    const table = new sst.Table(this, "Counter", {
      fields: {
        counter: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "counter" },
    });

    // Create the HTTP API
    const api = new sst.Api(this, "Api", {
      defaultFunctionProps: {
        // Pass in the table name to our API
        environment: {
          tableName: table.dynamodbTable.tableName,
        },
      },
      routes: {
        "POST /": "src/lambda.main",
      },
    });

    // Allow the API to access the table
    api.attachPermissions([table]);

    // Deploy our React app
    // const site = new sst.ReactStaticSite(this, "ReactSite", {
    const site = new sst.ViteStaticSite(this, "ViteSite", {
      path: "frontend",
      environment: {
        // Pass in the API endpoint to our app
        VITE_API_URL: api.url,
      },
      customDomain: {
        domainName: "dev2.goettsch.xyz",
        domainAlias: "www.dev2.goettsch.xyz",
        hostedZone: 'goettsch.xyz',
      },
    });

    // Show the API endpoint in the output
    this.addOutputs({
      SiteUrl: site.url,
      ApiEndpoint: api.url,
    });
  }
}
