/**
 * Created by akselon on 2017-04-24.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    // templateUrl: './assets/app.component.html',
    template: `
        <nav>
            <div id="nav-brand">Bettinger</div>
            <div id="nav-icon" (click)="toggleMenu();" [ngClass]="{'open': menuShowed}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <div id="btgr-menu" [hidden]="!menuShowed">
            <ul>
                <li class="info">Menu</li>
                <li><a href="#">Strona główna</a></li>
                <li><a href="#">Typerzy</a></li>
                <li><a href="#">Nadchodzące mecze</a></li>
                <li class="spacer"></li>
                <li><a href="#">Mój profil</a></li>
                <li><a href="#">Wyloguj</a></li>
            </ul>
        </div>
    `,
    styles: [`
        #btgr-menu {
            width: 100%;
            height: 100%;
            background-color: #581845;
            position: fixed;
            text-align: center;
            -webkit-transition: .5s ease-in-out;
            -moz-transition: .5s ease-in-out;
            -o-transition: .5s ease-in-out;
            transition: .5s ease-in-out;
            color: #FF5733;
        }
        #btgr-menu header {
            font-size: 30px;
            font-weight: 700;
            color: #c70039;
        }
        ul {
            list-style: none;
            padding: 0;
            position: relative;
            top: 35%;
            transform: perspective(1px) translateY(-50%);
        }
        li, li a {
            font-size: 40px;
            margin-bottom: 15px;
            text-decoration: none;
            color: #FF5733;
        }
        li a:hover {
            color: #FFCC00;
        }
        li.spacer {
            height: 40px;
        }
        li.info {
            font-size: 30px;
        }
        nav {
            display: block;
            height: 45px;
            padding: 15px;
            background-color: #581845;
            color: #FFC300;
            font-family: "proxima-nova-soft", "Proxima Nova Soft", Helvetica, Arial, sans-serif;
        }
        #nav-brand {
            font-size: 40px;
            font-weight: 700;
            left: 0;
            float: left;
        }
        #nav-brand:after {
             content: '';
             display: block;
             clear: both;
         }
        #nav-icon {
            margin: 0;
            float: right;
            right: 0;
            width: 60px;
            height: 45px;
            position: relative;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .5s ease-in-out;
            -moz-transition: .5s ease-in-out;
            -o-transition: .5s ease-in-out;
            transition: .5s ease-in-out;
            cursor: pointer;
        }
        #nav-icon span {
            display: block;
            position: absolute;
            height: 9px;
            width: 100%;
            background: #FFC300;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
        }
        #nav-icon span:nth-child(1) {
            top: 0px;
        }
        #nav-icon span:nth-child(2),#nav-icon span:nth-child(3) {
            top: 18px;
        }
        #nav-icon span:nth-child(4) {
            top: 36px;
        }
        #nav-icon.open span:nth-child(1) {
            top: 18px;
            width: 0%;
            left: 50%;
        }
        #nav-icon.open span:nth-child(2) {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        #nav-icon.open span:nth-child(3) {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
        }

        #nav-icon.open span:nth-child(4) {
            top: 18px;
            width: 0%;
            left: 50%;
        }
    `]
})
export class AppComponent {
    title = 'Bettinger';
    menuShowed = false;
    public toggleMenu() {
        this.menuShowed = !this.menuShowed
        console.log('menuShowed = ', this.menuShowed);
    }
}
