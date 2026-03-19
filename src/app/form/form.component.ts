import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatahandlarService } from '../serice/datahandlar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  testfrom!: FormGroup;
  submitted = false
  constructor(private ser: DatahandlarService) {

  }
  ngOnInit() {
    this.ser.getalldata().subscribe((res: any) => {
      const data = res.filter((item: any) => item.userId === 1);
      console.log(data);
    });



    this.testfrom = new FormGroup({
      mobile: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required)
    })
  }

  OnSubmit() {
    this.submitted = true
    console.log(this.testfrom.value);

  }

  // --------------
  mobile: string = '';
  email: string = '';

  onSubmit(m: any, e: any) {

    // mark as touched so errors show on submit
    m.control.markAsTouched();
    e.control.markAsTouched();

    if (m.invalid || e.invalid) {
      console.log('Form Invalid');
      return;
    }

    console.log('Mobile:', this.mobile);
    console.log('Email:', this.email);

    // ya ek object me
    console.log({
      mobile: this.mobile,
      email: this.email
    });
  }
}
