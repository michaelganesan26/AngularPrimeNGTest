import { Observable } from 'rxjs/Observable';
import { IProduct, ProductService } from './service/product.service';
import { Component, OnInit, Injector } from '@angular/core';
import { NgIf, NgForOf, NgSwitchCase } from '@angular/common';
import { IOptionsValues } from 'selenium-webdriver/chrome';
import { IAppConfig, APP_CONFIG } from './service/application.token';

//Import enums
import { BillTypes } from './service/enum.constants';


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
  appConfig: IAppConfig;

  btnTitleText: string = "Testing Button Event";
  doubleClickFlag: boolean = true;
  showHideText: boolean = false;

  BillTypes = BillTypes; //You have to set this or else enum will not work

  myBillTypes: BillTypes = BillTypes.Draft;

  constructor(private productService: ProductService, injector: Injector) {

    this.appConfig = injector.get(APP_CONFIG);


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

  eventButtonClick(event: string) {

    console.log(`Your button message is: ${event}`);

    this.showHideText = !this.showHideText; //flip the show hide text

  }

}
