import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css']
})
export class FileUploadDialogComponent {
  selectedFile!: File;

  constructor(private dialogRef: MatDialogRef<FileUploadDialogComponent>) { }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submit() {
    this.dialogRef.close(this.selectedFile); // 👈 send file back
  }

  close() {
    this.dialogRef.close();
  }
}
