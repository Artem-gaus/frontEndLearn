import { Product } from './Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataSevice{
    private url = "htpp://localhost:5000/api/products";

    constructor(private http: HttpClient){}

    getProduct(){
        return this.http.get(this.url);
    }
    createProduct(product: Product){
        return this.http.post(this.url, product);
    }
    updateProduct(product: Product){
        return this.http.put(this.url + "/" + product.id, product);
    }
    deleteProducts(id: number){
        return this.http.delete(this.url + "/" + id);
   }
}