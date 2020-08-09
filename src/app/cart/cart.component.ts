import { OnInit, Component } from "@angular/core";
import { CartService } from "./service cart";


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
  })

  
export class CartComponent implements OnInit {
    items;
    submitted:boolean=false;
  
    constructor(
      private cartService: CartService
    ) { }
  
    ngOnInit() {
      this.items = this.cartService.getItems();
    }
    clearCart(){
        this.items=this.cartService.clearCart(); 
        this.submitted=true;
    }

  }