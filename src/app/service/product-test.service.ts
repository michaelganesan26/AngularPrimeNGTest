import { IProduct } from './product.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';



@Injectable()
export class ProductTestService {

  _products: IProduct[] = [];

  constructor() {
    if (this._products.length == 0) {
      this.generateProducts();
    }


  }


  private generateProducts() {

    Observable.range(1, 30).subscribe((rangeId: number) => {
      this._products.push({ id: rangeId, description: `XID ${rangeId * 10}`, price: parseFloat(`${rangeId * 0.01 * 8.9}`) });
    });

  }

  getProductsObservable(): Observable<IProduct>{

    return Observable.from(this._products);
  }




  //Return the array of products
  getProducts(): Promise<IProduct[]> {

    return new Promise<IProduct[]>((resolve,reject)=>{

        if(this._products.length>0){

          resolve(this._products);
        }
        else{
           reject("Sorry, no items to report!");

        }


    });

  }


}
