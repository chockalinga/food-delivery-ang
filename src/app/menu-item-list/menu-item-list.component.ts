import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';
import { CartService } from '../cart/service cart';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent implements OnInit {

 constructor(private menuservice:MenuService, private cartService: CartService) { }

  studentsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  menus: Observable<Menu[]>;
  menu : Menu=new Menu();
  deleteMessage=false;
  menulist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[5, 15, 20, -1], [5, 15, 20, "All"]],
      processing: true
    };   
    this.menuservice.getMenuList().subscribe(data =>{
    this.menus =data;
    this.dtTrigger.next();
    })

  }

  
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  deleteMenu(id: number) {
    this.menuservice.deleteMenu(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.menuservice.getMenuList().subscribe(data =>{
            this.menus =data
            })
        },
        error => console.log(error));
  }


  updateMenu(id: number){
    this.menuservice.getMenu(id)
      .subscribe(
        data => {
          this.menulist=data           
        },
        error => console.log(error));
  }

  menuupdateform=new FormGroup({
    menu_id:new FormControl(),
    menu_name:new FormControl(),
    menu_price:new FormControl(),
    menu_destination:new FormControl()
  });

  updatemenu(updstu){
    this.menu=new Menu(); 
   this.menu.menu_id=this.MenuId.value;
   this.menu.menu_name=this.MenuName.value;
   this.menu.menu_price=this.MenuPrice.value;
   this.menu.menu_destination=this.MenuDestination.value;
   console.log(this.MenuDestination.value);
   

   this.menuservice.updateMenu(this.menu.menu_id,this.menu).subscribe(
    data => {     
      this.isupdated=true;
      this.menuservice.getMenuList().subscribe(data =>{
        this.menus =data
        })
    },
    error => console.log(error));
  }

  get MenuName(){
    return this.menuupdateform.get('menu_name');
  }

  get MenuDestination(){
    return this.menuupdateform.get('menu_destination');
  }

  get MenuPrice(){
    return this.menuupdateform.get('menu_price');
  }

  get MenuId(){
    return this.menuupdateform.get('menu_id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
