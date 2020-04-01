import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  Type
} from "@angular/core";
import { LazycompComponent } from "./lazycomp/lazycomp.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Lazy Loading Component Example";
  lazyCom: Promise<Type<LazycompComponent>>;

  constructor(
    private viewCotainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  async load() {
    //below code to lazy load the component in the dom bydefault at the end

    /* this.viewCotainerRef.clear();
    const { LazycompComponent }=await import ('./lazycomp/lazycomp.component');
    this.viewCotainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(LazycompComponent)
    ); */

    //below code to lazy load the component in the dom at any palce you want using ngComponentOutlet
    
    if (!this.lazyCom) {
      this.lazyCom = import("./lazycomp/lazycomp.component").then(
        ({ LazycompComponent }) => LazycompComponent
      );
    }
  }
}
