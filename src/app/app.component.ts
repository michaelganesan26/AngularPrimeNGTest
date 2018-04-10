import { Observable } from 'rxjs/Observable';
import { IProduct, ProductService } from './service/product.service';
import { Component, OnInit, Injector } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { IOptionsValues } from 'selenium-webdriver/chrome';
import { IAppConfig, APP_CONFIG } from './service/application.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  products: IProduct[];
  productsObservable: Observable<IProduct>;
  tempProducts: IProduct[] = [];
  appConfig:IAppConfig;

  constructor(private productService: ProductService,injector:Injector) {

      this.appConfig= injector.get(APP_CONFIG);


  }

  ngOnInit() {

    this.productService.getProducts().then((currentProducts: IProduct[]) => {

      this.products = currentProducts;

    }).catch((error) => {
      console.log(`Error message: ${error}`);

    });

    this.productsObservable = this.productService.getProductsObservable();

    this.productsObservable.subscribe(x => {
      this.tempProducts.push(x);

    });


    console.log(`This is your app configuration file: ${this.appConfig.name}`);



  }


}
