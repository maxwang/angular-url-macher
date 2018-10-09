import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  folderName: string;
  constructor(route: ActivatedRoute) {

    route.url.subscribe(params => {
      // console.log(params);
      this.folderName = params.slice(1).join('/');
    });

  }

  ngOnInit() {

  }

}
