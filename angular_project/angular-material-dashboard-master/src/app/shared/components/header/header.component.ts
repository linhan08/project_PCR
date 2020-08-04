import { Component, OnInit, Output, Input, EventEmitter, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TokenStorageService } from 'src/app/modules/auth/service/token-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs: boolean;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private tokenStorageService: TokenStorageService) {}

  ngOnInit() { }
  
  signOut() {
    window.sessionStorage.clear();
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  logout() {
    this.tokenStorageService.signOut();
  }
}
