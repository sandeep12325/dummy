import { Component } from '@angular/core';
import { DatahandlarService } from '../serice/datahandlar.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectfrom: FormGroup | any;
  updateform: FormGroup | any;
  userlist: any
  constructor(private dataserve: DatahandlarService) {

  }
  ngOnInit() {
    this.dataserve.getAllData().subscribe((res) => {
      this.userlist = res
    })

    this.createFrom()
  }

  createFrom() {
    this.selectfrom = new FormGroup({
      username: new FormControl(null)
    })

    this.updateform = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
    })
  }

  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Manager' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'User' }
  ];
  onSelect() {
    console.log(this.selectfrom.value)
  }
  action = false
  updateuse: any
  onEdit(val: any) {
    this.updateuse = val
    this.action = true
    this.updateform.patchValue({
      name: val.name,
      email: val.email,
      mobile: val.mobile
    })


  }

  // Onupdate() {
  //   this.dataserve.userAdd(this.updateform.value).subscribe((res) => {
  //     console.log(res)
  //     this.dataserve.getAllData().subscribe((res) => {
  //       this.userlist = res
  //     })
  //   })
  // }
  Onupdate() {
    if (this.action == false) {
      this.dataserve.userAdd(this.updateform.value).subscribe((res) => {
        console.log(res)
        this.updateform.reset()
        this.dataserve.getAllData().subscribe((res) => {
          this.userlist = res
        })
      })
    } else {
      this.dataserve.updataUser(this.updateuse._id, this.updateform.value).subscribe((res) => {
        console.log(res)
        this.action = false;
        this.updateform.reset()
        this.dataserve.getAllData().subscribe((res) => {
          this.userlist = res
        })
      })
    }
  }


  Ondelete(val: any) {

    if (confirm("Are you sure to delete")) {
      this.dataserve.deleteuser(val._id).subscribe((res) => {
        this.dataserve.getAllData().subscribe((res) => {
          this.userlist = res
        })
      })
    }
  }
}
