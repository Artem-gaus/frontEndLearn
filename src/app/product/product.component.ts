import { Product } from './../Product';
import { Component, OnInit } from '@angular/core';
import { DataSevice } from './../data.sevsice';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [DataSevice]
})
export class ProductComponent implements OnInit {
  product: Product = new Product();
  products: Product[];
  tableMode: boolean = true;

  constructor(private dataService: DataSevice) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.dataService.getProduct()
      .subscribe((data: Product[]) => this.products = data);
  }

  save(){
    if (this.product.id == null){
      this.dataService.createProduct(this.product)
        .subscribe((data: Product) => this.products.push(data));
    }
    else{
      this.dataService.updateProduct(this.product)
        .subscribe(data => this.loadProducts());
    }
    this.cancel();
  }
  delete(p: Product){
    this.dataService.deleteProducts(p.id)
      .subscribe(data => this.loadProducts());
  }
  editProduct(p: Product){
    this.product = p;
  }
  cancel(){
    this.product = new Product();
    this.tableMode = true;
  }
  add(){
    this.cancel();
    this.tableMode = false;
  }
}
