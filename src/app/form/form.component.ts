import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatahandlarService } from '../serice/datahandlar.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  testfrom!: FormGroup;
  submitted = false;
  myForm!: FormGroup;
  constructor(private ser: DatahandlarService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],        // ✅ required
      password: ['', Validators.required],    // ✅ required
      hasEmail: [''],
      email: ['']
    });
  }
  ngOnInit() {
    this.ser.getalldata().subscribe((res: any) => {
      const data = res.filter((item: any) => item.userId === 1);
      console.log(data);
    });
    this.handleValidation();


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

  // -dynaically add-----------
  handleValidation() {
    this.myForm.get('hasEmail')?.valueChanges.subscribe(value => {
      console.log(value);
      
      const emailControl = this.myForm.get('email');

      if (value === 'yes') {
        emailControl?.setValidators([Validators.required, Validators.email]);
      } else {
        emailControl?.clearValidators();
      }

      emailControl?.updateValueAndValidity();
    });
  }

  onSubmit1() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
