import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbarr").style.top = "0";
            } else {
                document.getElementById("navbarr").style.top = "-88px";
            }
            prevScrollpos = currentScrollPos;
        }
  }

}
