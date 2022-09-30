import { Component, AfterViewInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html'
})
export class VerticalNavigationComponent implements AfterViewInit {


  public showSearch = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  get usuario(){
    return sessionStorage.getItem('user')?.toLowerCase();
    //return this.authService.usuario.userName;
  }

  get nombre(){
    return sessionStorage.getItem('userName')?.toUpperCase();
  }

  logout(){
    this.router.navigateByUrl('/authentication/login')
    this.authService.logout()
  }

  ngAfterViewInit() { }


}
