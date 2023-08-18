import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  instruments: Instrument[] | undefined;

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    var result = this.catalogService
      .getAllInstruments()
      .subscribe((response: Instrument[]) => {
        this.instruments = response;
        console.log(response);
      });
  }
}
