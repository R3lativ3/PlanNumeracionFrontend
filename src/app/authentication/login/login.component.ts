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
  loading = false

  form: FormGroup = this.fb.group({
    UserName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6) ]],
    Password: ['', [Validators.required, Validators.minLength(6) ]],
  });
  login(){
    this.loading = true
    const {UserName, Password} = this.form.value
    this.authService.login(UserName, Password).subscribe(resp => {
      sessionStorage.clear();
      if(resp.ok){
        sessionStorage.setItem('token', resp.user.token)
        sessionStorage.setItem('user', resp.user.userName)
        sessionStorage.setItem('userName', resp.user.name)
        return this.router.navigateByUrl('/')
      }else{
        this.loading = false
        return Swal.fire('Error', resp.message, 'error')
      }
    }, e => {
      this.loading = false
      return Swal.fire('Error', e, 'error')
    })
  }


  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
}
