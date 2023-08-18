import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA1: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];

const ELEMENT_DATA2: PeriodicElement[] = [
  {position: 1, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 2, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 3, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
];

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;
}
