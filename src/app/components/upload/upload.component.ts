import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/apis/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile: File | undefined;

  selectedProduit: String = "";

  constructor(private http: HttpClient, private imageService: ImageService) {}

  onFileSelected(event:any): void {
    this.selectedFile = event.target.files?.[0];
  }

  onProduitSelected(event:any): void {
    this.selectedProduit = event.target.form['produit_id'].value;
  }

  onSubmit(event: Event): void {
    event.preventDefault();  // Prevent the default form submission behavior
    if (this.selectedFile && this.selectedProduit) {
      const formData = new FormData();

      formData.append('image', this.selectedFile, this.selectedFile.name);
      formData.append('produit_id', String(this.selectedProduit));

      this.imageService.uploadImage(formData).subscribe(
        response => {
          console.log('Image uploaded successfully:', response);
          // Handle the response as needed
        },
        error => {
          console.error('Error uploading image:', error);
          // Handle the error
        }
      );
    }
  }
}
