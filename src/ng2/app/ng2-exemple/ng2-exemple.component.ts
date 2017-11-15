import { Component, OnInit , Inject} from '@angular/core';
import {PHONE_SERVICE} from '../phones-service/phone.service';

@Component({
  selector: 'app-ng2-exemple',
  templateUrl: './ng2-exemple.component.html',
  styleUrls: ['./ng2-exemple.component.css']
})
export class Ng2ExempleComponent implements OnInit {
  phones: any[] = [];

  constructor(@Inject(PHONE_SERVICE) private phoneService: any) { }

  ngOnInit() {
    this.phones = this.phoneService.query();
  }

}
