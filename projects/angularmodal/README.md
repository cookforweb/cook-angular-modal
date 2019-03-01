#Angular Modal

With this package you can easily move any html content from your components into modals.

This package only tested in Angular 7. Debugging in more angular versions is welcome.

## Installation

    npm install @cookforweb/angularmodal
    
## Instructions

After package install add AngularmodalModule in @NgModule imports

```js
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        AngularmodalModule, // Add AngularmodalModule in @NgModule imports
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
``` 

You can override some default settings (for now you can override only modal header color)  

```js
    const modalOptions: AngularmodalOptions = {
      colors: {
        titleBackground: '#aaa69d',
      }
    };

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        AngularmodalModule.withConfig( modalOptions ), // Add AngularmodalModule in @NgModule imports
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
```

## Licence 

MIT