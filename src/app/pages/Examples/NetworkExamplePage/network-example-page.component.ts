import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { NetworkService } from './../../../services/NetworkService';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-network-example-page',
  templateUrl: './network-example-page.component.html',
  styleUrls: ['./network-example-page.component.scss']
})
export class NetworkExamplePageComponent implements OnInit {

    public response: string = "Not Sent";
    public repositories: Repo[];

    constructor(private ref: ChangeDetectorRef, private networkService: NetworkService) { }

    ngOnInit(): void {
    }

    public SendButtonPressed(): void {
        this.response = "Loading ...";
        this.networkService.GetRequest<Repo[]>("users/James231/repos", (status: number)=>{}, (status: number, result: Repo[]) => {
            this.response = "Status: " + status;
            this.repositories = result;
            this.ref.detectChanges();
        });
    }
}

class Repo {
    public name: string;
    public description: string;
    public owner: Owner;
    public html_url: string;
}

class Owner {
    public login: string;
    public html_url: string;
}