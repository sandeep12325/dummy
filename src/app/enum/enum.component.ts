import { Component } from '@angular/core';
import { UserRole } from '../core/user-role.enum';
import { DatahandlarService } from '../serice/datahandlar.service';
import { UserPayload } from '../interface/user.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.css']
})
export class EnumComponent {
  // assign enum to variable so template can access it
  UserRole = UserRole;

  currentRole: UserRole = UserRole.User;

  constructor(private userService: DatahandlarService, private route: ActivatedRoute) { }
  ngOnInit() {
    // let data = this.route.snapshot.data['name'];
    let data = this.route.data.subscribe((res) => {
      console.log(res['name']);
    })


  }

  changeRole(role: UserRole) {
    this.currentRole = role;
  }

  // -----------

  userData: UserPayload = {
    name: '',
    email: '',
    age: 0
  };


  submitForm() {
    const userData: UserPayload = {
      name: '',
      email: '',
      age: 0
    };

    console.log(userData);

    this.userService.createUser(userData).subscribe(response => {
      console.log('User created', response);
    });
  }


  items = [
    { name: 'Apple', price: 10, quantity: 2 },
    { name: 'Banana', price: 5, quantity: 4 },
    { name: 'Orange', price: 8, quantity: 3 }
  ];

  useClick() {
    // 🛑 Execution will pause here when you click
    debugger;

    // You can inspect 'this.items' and individual properties
    console.log('First item name:', this.items[0].name);
    console.log('All items:', this.items);
  }

  calculateTotal(val: number) {
    debugger;
    //   let total = 0;

    //   for (let i = 0; i < this.items.length; i++) {
    //     const item = this.items[i];
    //     total += item.price * item.quantity;

    //     // 🛑 Debugger will pause here
    //   debugger;

    //     console.log(`Item: ${item.name}, Subtotal: ${item.price * item.quantity}`);
    //   }

    //   console.log('Total Price:', total);
    //   return total;
  }


  // ------search---
  searchText: string = '';

  // data: string[] = [
  //   'Apple',
  //   'Banana',
  //   'Mango',
  //   'Orange',
  //   'Pineapple',
  //   'Grapes',
  //   'Watermelon'
  // ];

  // filteredData: string[] = [];

  data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Mango' },
    { id: 4, name: 'Orange' },
    { id: 5, name: 'Pineapple' }
  ];

  filteredData: any[] = [];

  onSearch() {
    if (!this.searchText) {
      this.filteredData = [];
      return;
    }

    this.filteredData = this.data.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  selectItem(item: any) {
    this.searchText = item.name;

    console.log(this.searchText)
    this.filteredData = [];
  }



  // ------------event propogation--------

    onParentClick() {
    console.log('Parent Clicked');
  }

  onChildClick(event: Event) {
    console.log('Child Clicked');

    // Stop event bubbling
    // event.stopPropagation();
    
  }

}
