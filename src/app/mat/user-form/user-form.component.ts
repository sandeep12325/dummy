import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatahandlarService } from 'src/app/serice/datahandlar.service';
import { FileUploadDialogComponent } from '../file-upload-dialog/file-upload-dialog.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private api: DatahandlarService
  ) { }

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    role: ['', Validators.required],
    file: [null as File | null, Validators.required]   // 👈 FIX
  });

  // 👉 Open Dialog for file
  openFileDialog() {
    const dialogRef = this.dialog.open(FileUploadDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe((file: File) => {
      if (file) {
        this.selectedFile = file;
        this.userForm.patchValue({ file: file });
      }
    });
  }

  // 👉 Submit Form
  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    const value = this.userForm.value;

    formData.append('name', value.name!);
    formData.append('email', value.email!);
    formData.append('password', value.password!);
    formData.append('role', value.role!);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    formData.forEach((value, key) => {
      console.log(key, value);
    });

   let res= this.api.createUsermat(formData);
   console.log(res);
   
  }
}
