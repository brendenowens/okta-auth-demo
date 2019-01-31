/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

const createConfigFile = require('./tools/create-config-file');

const sampleConfig = {
  webServer: {
    port: 8080,
    oidc: {
      clientId: '',
      clientSecret: '',
      issuer: 'https://.com/oauth2/default',
      redirectUri: 'http://localhost:8080/authorization-code/callback',
      scope: 'openid profile email'
    },
  },
  resourceServer: {
    port: 8000,
    oidc: {
      issuer: 'https://dev-738834-admin.oktapreview.com/oauth2/default'
    },
    assertClaims: {
      aud: 'api://default',
      cid: '0oaj44hfp32i1fl7Y0h7'
    }
  }
};

createConfigFile(sampleConfig);
