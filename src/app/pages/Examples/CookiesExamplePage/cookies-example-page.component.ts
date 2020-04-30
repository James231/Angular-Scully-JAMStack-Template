import { Component, OnInit } from '@angular/core';
import { CookieService } from './../../../services/CookieService';

@Component({
  selector: 'app-cookies-example-page',
  templateUrl: './cookies-example-page.component.html',
  styleUrls: ['./cookies-example-page.component.scss']
})
export class CookiesExamplePageComponent implements OnInit {

    public cookie_data: string = "-----";

    constructor(private cookieService: CookieService) { }

    ngOnInit(): void {
    }

    public GetCookieData(): void {
        let data = this.cookieService.GetValue("data");
        if (data == "") {
            this.cookie_data = "No data stored";
        } else {
            this.cookie_data = data;
        }
    }

    public SetCookieData(): void {
        var currentdate = new Date();
        this.cookieService.SetValue("data", "The current time is: " + currentdate.toLocaleTimeString());
    }

    public ClearCookieData(): void {
        this.cookieService.RemoveValue("data");
        this.cookie_data = "Cookies cleared.";
    }
}
