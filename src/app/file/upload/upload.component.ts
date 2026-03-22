import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatahandlarService } from 'src/app/serice/datahandlar.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  userForm!: FormGroup;
  constructor(private fb: FormBuilder, private datahandlar: DatahandlarService) {

  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      file: [null, [Validators.required]]
    });
  }
files: File[] = [];

onFileChange(event: any) {
  const selectedFiles = Array.from(event.target.files) as File[];

  console.log(selectedFiles);
  

  if (selectedFiles.length > 0) {
    this.files = selectedFiles;

    // mark control as touched & valid manually
    this.userForm.get('file')?.setValue(this.files);
    this.userForm.get('file')?.markAsTouched();
  }
}
  submitForm() {
    const formData = new FormData();
    const formValues = this.userForm.value;

    // Append fields
    formData.append('name', formValues.name || '');
    formData.append('email', formValues.email || '');
    formData.append('password', formValues.password || '');
    formData.append('gender', formValues.gender || '');

    // // Append file safely
    // if (formValues.file) {
    //   formData.append('file', formValues.file);
    // }


      // ✅ Append multiple files
  this.files.forEach((file) => {
    formData.append('files', file); 
    // OR: 'files[]' (depends on backend)
  });

    //  formData.forEach((value, key) => {
    //   console.log(key, value);
    // });
    // Optional

    formData.forEach((value, key) => {
      console.log(key, value);
    })

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched(); // 🔥 important
      return;
    }

    console.log(this.userForm.value);
    this.datahandlar.uploadfieApi(formData).subscribe(response => {
      console.log('Upload successful:', response);
    },
      error => {
        console.error('Upload failed:', error);
      });
    console.log('Form Value:', formData);
  }

}
