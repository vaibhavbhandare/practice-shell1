Shell Core app pages 

## Getting Started with Core Pages Microapp Development

The Carbon based foundational web components library can be easily installed in following steps.

### Access Locally

Pulldown a local copy of this Github repository created for you.

```
$ git clone git@github.com:TaviscaSolutions/shell-pages-microapp.git
$ cd [REPO_NAME]
```

Using ssh is recommended over using HTTPS.

### Set correct credentials

Step 2 would be to set correct registry address and login to NPM via console. This is required for our privacy and security.

```
$ npm config set registry  "https://packages.common.cnxloyalty.com/repository/npm-group/"
$ npm logout
$ npm login
```

#### Enter following details when asked -

```
Username: <Get username from registry admin>
Password: <Get password from registry admin>
Email: <Get email from registry admin>
```

### Install 

    $ lerna bootstrap --hoist


### Start Dev Server

    $ lerna run start --scope <microapp-name> --stream

The start command should open a tab in your browser at http://localhost:4200/


**Note:** To start development server on a specific port, you can change CWD to the desired microapp and run `ng serve --port <port-numer>`. Moving forward, this option will be available through ORXe CLI. 

### Run Tests without _--coverage_ option 

    $ lerna run test --scope <microapp-name>  --stream

### Run Tests with --coverage option

    $ lerna run test:coverage --scope <microapp-name> --stream

### Generate microapp build with single bundle

    $ lerna run build:single --scope <microapp-name> --stream

### Generate microapp build with Angular framework extracted

    $ lerna run build:custom --scope <microaapp-name> --stream


Final build can be found at [microapp-name]/dist/[microapp-name]/main-*.js

### Run Lint on microapp

    $ lerna run lint --scope <microapp-name> --stream


#### Enjoy
