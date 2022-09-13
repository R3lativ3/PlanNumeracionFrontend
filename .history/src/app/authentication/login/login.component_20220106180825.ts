import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private fb: FormBuilder, private authService: AuthService, public router: Router) {}

  loginform = true;
  recoverform = false;

  form: FormGroup = this.fb.group({
    UserName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6) ]],
    Password: ['', [Validators.required, Validators.minLength(6) ]],
  });

  login(){

    const {UserName, Password} = this.form.value

    this.authService.login(UserName, Password)
    .subscribe( ok => {
        if(ok[0] === 'si'){
          this.router.navigateByUrl('/dashboard/classic')
        }else{
          console.log(ok)
          Swal.fire('Error', ok, ok[1])
        }
    })
  }

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
}
