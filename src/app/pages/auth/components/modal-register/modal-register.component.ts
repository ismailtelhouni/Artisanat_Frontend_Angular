import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationService } from 'src/app/services/utils/navigation';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent {

  @Input() close: ()=>void = ()=>{};

  constructor(
    private navigation:NavigationService,
    public dialogRef: MatDialogRef<ModalRegisterComponent>,
    ){}

    onCancelClick(): void {
      this.dialogRef.close();
    }

    onClientClick(): void {
      this.dialogRef.close('register');
      const role = {
          "name":"ROLE_CLIENT"
        }
      this.navigation.navigateToParam('/register',role);
    }

    onArtisanClick(): void {
      this.dialogRef.close('register-artisan');
      const role = {
        "name":"ROLE_ARTISAN"
      }
      this.navigation.navigateToParam('/register-artisan',role);
    }

}
