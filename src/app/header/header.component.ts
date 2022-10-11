import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	constructor() {}

	@Input() curentCurrency: Observable<any> | undefined

	ngOnInit(): void {}

	addCurencyValue() {}
}
