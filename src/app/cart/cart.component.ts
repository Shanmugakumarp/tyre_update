import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TyremodelService } from './../tyremodel.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public tyreData = [];
  public quantity = [];
  public total = 0;
  public brand = [{ value: 'mic', displayName: 'Michellin' }, { value: 'fire', displayName: 'Firestone' }, { value: 'bridge', displayName: 'Bridgestone' }];

  constructor(private _http: HttpClient, private _tyreService: TyremodelService) { }

  ngOnInit() {
    let count = 10;
    for (let i = 0; i < count; i++) {
      this.quantity.push({ value: i, displayName: i });
    }
    this._tyreService.getTyreData()
      .subscribe((res) => {
        this.tyreData = res;
      });
  }

  onQuantitySelect(value, obj, index) {
    obj['subtotal'] = obj.price * value;
    this.total = 0;
    for (let i = 0; i < this.tyreData.length; i++) {
      this.total = this.tyreData[i] && this.tyreData[i].subtotal ? this.tyreData[i].subtotal + this.total : this.total;
    }
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 100) + 'k';
    }

    return value;
  }

}
