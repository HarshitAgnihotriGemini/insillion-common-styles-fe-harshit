import { Component } from '@angular/core';
import dayjs from 'dayjs';

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

  ranges: any = {
    Today: [dayjs(), dayjs()],
    'Last 3 Days': [dayjs().subtract(2, 'days'), dayjs()],
    'Last 7 Days': [dayjs().subtract(6, 'days'), dayjs()],
    'Last 30 Days': [dayjs().subtract(29, 'days'), dayjs()],
    'Last 3 Months': [
      dayjs().subtract(3, 'month').startOf('month'),
      dayjs().subtract(1, 'month').endOf('month'),
    ],
    // ... and so on
  };
}
