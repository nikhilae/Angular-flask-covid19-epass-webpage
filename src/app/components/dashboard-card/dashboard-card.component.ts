<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {
<<<<<<< HEAD

  @Input('totalConfirmed')
  totalConfirmed;
  @Input('totalDeaths')
  totalDeaths;
  @Input('totalActive')
  totalActive;
  @Input('totalRecovered')
  totalRecovered;
=======
  @Input('totalConfirmed')
  totalConfirmed=0;

  @Input('totalDeaths')
  totalDeaths=0;
  @Input('totalActive')
  totalActive=0;
  @Input('totalRecovered')
  totalRecovered=0;
>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> 894bb4131aab135bfaee74744dfdaf68f58a4b59
