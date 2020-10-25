## Angular Micro Application Scaffolding


## Scripts

### Generate Single Bundle File

If you need a standalone build, which can be injected in the DOM without any external dependencies, execute

    npm run build:single

Although this build works stand alone the major drawback of this type of build would be that lots of dependencies would be duplicated in all the Micro Applications.

### Generate Single Build File with extracted core dependencies

Although this build extracts core packages and final bundle for Micro Application is really small the major drawback of this type of build would be that initial payload would be comparatively higher

    npm run build:extracted
