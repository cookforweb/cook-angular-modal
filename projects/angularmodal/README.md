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

Add the modal in your-component.component.html

```angular2html
<button class="button button-default" (click)="openModal('modal-sm')">Open Modal</button>
<button class="button button-default" (click)="closeModal('modal-sm')">Close Modal</button>
      
<cook-angularmodal [id]="'modal-sm'"
  [size]="'small'"
  [title]="'Small Modal'">
  <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</cook-angularmodal>
```

Now add AngularmodalService as a depedency in your-component.component.ts

```ecmascript 6
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cook-angular-modal';

  constructor(public modalService: AngularmodalService) {}

  openModal($field) {
    this.modalService.open($field);
  }
  closeModal($field) {
    this.modalService.close($field);
  }
}
```


## Licence 

MIT