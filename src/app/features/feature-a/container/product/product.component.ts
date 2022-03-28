import { Component, OnInit } from '@angular/core';
import { StoreApiService } from '../../services/store-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private storeService: StoreApiService) {}

  ngOnInit() {
    this.storeService.getData();
  }
}
