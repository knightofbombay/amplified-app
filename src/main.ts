import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from "aws-amplify";
//import aws_exports from "./aws-exports";

const myAppConfig = {
  // ...
  'aws_project_region': 'us-east-1',
  'aws_appsync_graphqlEndpoint': 'https://tbd7dwk4y5fczofwfgyoc42fti.appsync-api.us-east-1.amazonaws.com/graphql',
  'aws_appsync_region': 'us-east-1',
  'aws_appsync_authenticationType': 'API_KEY',
  'aws_appsync_apiKey': 'da2-ouhsq7l2lba2fnczfnwgrhzray',
  // ...
}

// Amplify.configure(aws_exports);

Amplify.configure(myAppConfig);


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
