import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.scss']
})
export class EditempComponent implements OnInit {

  constructor(private _actRoute : ActivatedRoute) { }

  ngOnInit() {
    this._actRoute.paramMap.subscribe(params=>{
      console.log(params.get("id"));
      // console.log(params.get("name"));
    })

}

}
