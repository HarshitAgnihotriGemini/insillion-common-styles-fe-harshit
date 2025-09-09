import { Component } from '@angular/core';
import dayjs from 'dayjs';
import { BsDaterangepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  selectedCityId: number | null = null;
  cities = [
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'Delhi' },
    { id: 3, name: 'Bengaluru' },
    { id: 4, name: 'Kolkata' },
    { id: 5, name: 'Chennai' },
  ];
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs } | null = null;

  bsRangeConfig: Partial<BsDaterangepickerConfig>;

  constructor() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to the start of the day

    this.bsRangeConfig = {
      // Custom styling for the container to match your theme
      containerClass: 'theme-dark-blue',
      // Define the predefined ranges
      ranges: [
        {
          value: [today, today],
          label: 'Today',
        },
        {
          value: [new Date(new Date().setDate(today.getDate() - 7)), today],
          label: 'Last 7 Days',
        },
        {
          value: [new Date(new Date().setDate(today.getDate() - 30)), today],
          label: 'Last 30 Days',
        },
        {
          value: [new Date(new Date().setMonth(today.getMonth() - 3)), today],
          label: 'Last 3 Months',
        },
      ],
    };
  }
}
