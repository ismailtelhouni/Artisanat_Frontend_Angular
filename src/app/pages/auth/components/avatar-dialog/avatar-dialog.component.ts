import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.css']
})
export class AvatarDialogComponent implements OnInit {

  avatars: Array<any> = new Array<any>();

  constructor(
    public dialogRef: MatDialogRef<AvatarDialogComponent>,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    // this.firebaseService.getAvatars()
    // .subscribe(data => this.avatars = data);
    this.avatars = [
      {'link':'../../../../../assets/img/avatar2.jpg'},
      {'link':'../../../../../assets/img/avatar3.jpg'},
      {'link':'../../../../../assets/img/avatar4.jpg'},
      {'link':'../../../../../assets/img/avatar5.jpg'},
      {'link':'../../../../../assets/img/avatar6.jpg'},
    ]
  }

  close(avatar:any){
    this.dialogRef.close(avatar);
  }

}
