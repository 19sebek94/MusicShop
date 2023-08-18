import { Component, Input } from '@angular/core';
import { Instrument } from 'src/app/models/instrument';

@Component({
  selector: 'app-instrument-card',
  templateUrl: './instrument-card.component.html',
  styleUrls: ['./instrument-card.component.scss']
})
export class InstrumentCardComponent {
  @Input() instrument: Instrument | undefined;
}
