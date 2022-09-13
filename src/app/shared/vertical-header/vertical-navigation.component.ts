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

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'German',
    code: 'de',
    icon: 'de'
  }]


  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Notificacion',
      subject: 'Notificacion',
      time: '9:30 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: '.',
      subject: 'Notificacion',
      time: '9:30 AM'
    }
  ];

  constructor(private modalService: NgbModal, private translate: TranslateService, private authService: AuthService, private router: Router) {
    translate.setDefaultLang('en');
  }

  get usuario(){
    return this.authService.usuario.userName;
  }

  get name(){
    return this.authService.usuario.name;
  }

  logout(){
    this.router.navigateByUrl('/authentication/login')
    this.authService.logout()
  }

  ngAfterViewInit() { }

  changeLanguage(lang: any) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
  }
}
