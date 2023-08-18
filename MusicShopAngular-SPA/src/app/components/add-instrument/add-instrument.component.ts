import { Instrument } from 'src/app/models/instrument';
import { CatalogService } from './../../services/catalog.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.scss']
})
export class AddInstrumentComponent {
  instrument: Instrument = {
    name: '',
    price: 0,
    category: "blabla"
  };

  constructor(private catalogService: CatalogService){}

  onSubmit(form: any) {
    if (form.valid) {
      // Perform actions with the submitted data, such as sending to a server
      console.log('Form submitted:', this.instrument);
      this.catalogService.addInstrument(this.instrument).subscribe((response: any) => {
        console.log(response);
      })
    } else {
      console.log('Form is invalid.');
    }
  }
}
