# Angular Scully JAMStack Template

### What is Scully, and what is this?

[Scully](https://github.com/scullyio/scully) is a static site generator for [Angular](https://angular.io/). Normally an Angular app would control everything through its own virtual DOM. This means initally the app provides the web browser with a blank page, then the contents are filled in by JS code. This allows server-side rendering if you host on a Node server, but not everybody needs that and would prefer faster startup times instead. Scully simply pre-renders each page of your app to produce a static site which loads instantly. An API layer can be hosted separatley to your site, and your site only needs a cheap/free static web host (like GitHub pages). This approach is known as [JAMStack](https://jamstack.org/).

This repo is just a basic template Scully/Angular web app, with some example pages/components/layouts, and some useful utilities like an API client and Cookie service.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Features

Important: Uses SCSS and TypeScript.

- Global SCSS and Colours set up
- Example local and global components
- Example event bindings in custom component
- Example layout
- Cookie Service with example - to get and set values to store in web browser, provided through dependency injection
- Network Service with example - to interact with JSON REST APIs, provided through dependency injection

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. Use the `--prod` flag for a production build.  
  
Then run `npm run scully` and scully will convert your angular app into a static site. The static built version is in the `./dist/static` folder. Use the `--scanRoutes` flag if you have added/changed routes since your last build. i.e. `npm run scully -- --scanRoutes`.  
  
Once you have done a scully build, opening the HTML file will not work (as the uris won't work with local file paths), but you can run it on a local dev server for testing with `npm run scully -- --open`.

## Documenation

[Angular Documenation](https://angular.io/docs)  
[Scully Documenation](https://github.com/scullyio/scully/blob/master/docs/scully.md)


## License

This code is released under MIT license. This means you can use this for whatever you want. Modify, distribute, sell, fork, and use this as much as you like. Both for personal and commercial use. I hold no responsibility if anything goes wrong.

If you use this, you don't need to refer to this repo, or give me any kind of credit but it would be appreciated.

## Contributing

Pull Requests are welcome. But, note that by creating a pull request you are giving me permission to merge your code and release it under the MIT license mentioned above. At no point will you be able to withdraw merged code from the repository, or change the license under which it has been made available.