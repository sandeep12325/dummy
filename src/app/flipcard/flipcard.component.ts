import { Component } from '@angular/core';

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.css']
})
export class FlipcardComponent {

  // Static flight data
  flights = [
    {
      airline: 'IndiGo',
      from: 'Delhi',
      to: 'Mumbai',
      time: '10:00 AM - 12:00 PM',
      stops: 'Non-stop',
      duration: '2h 00m',
      price: 4500
    },
    {
      airline: 'Air India',
      from: 'Delhi',
      to: 'Bangalore',
      time: '2:00 PM - 5:30 PM',
      stops: '1 Stop',
      duration: '3h 30m',
      price: 6800
    },
    {
      airline: 'Vistara',
      from: 'Delhi',
      to: 'Hyderabad',
      time: '6:00 AM - 8:30 AM',
      stops: 'Non-stop',
      duration: '2h 30m',
      price: 5200
    }
  ];

  // Filters
  maxPrice: number = 20000;
  selectedStops: string[] = [];
  selectedAirlines: string[] = [];

  // Get unique airlines
  get airlinesList() {
    return [...new Set(this.flights.map(f => f.airline))];
    return this.flights.map(f=>f.airline)
  }

  // Filtered flights
  get filteredFlights() {
    
    return this.flights.filter(flight => {

      const priceMatch = flight.price <= this.maxPrice;

      const stopMatch =
        this.selectedStops.length === 0 ||
        this.selectedStops.includes(flight.stops);

      const airlineMatch =
        this.selectedAirlines.length === 0 ||
        this.selectedAirlines.includes(flight.airline);

      return priceMatch && stopMatch && airlineMatch;
    });
  }

  // Checkbox handlers
  onStopChange(event: any, value: string) {
    if (event.target.checked) {
      this.selectedStops.push(value);
    } else {
      this.selectedStops = this.selectedStops.filter(v => v !== value);
    }
  }

  onAirlineChange(event: any, value: string) {
    if (event.target.checked) {
      this.selectedAirlines.push(value);
    } else {
      this.selectedAirlines = this.selectedAirlines.filter(v => v !== value);
    }
  }

  ngOnInit()
  {
    console.log(this.airlinesList);
    console.log("=======",this.filteredFlights);
    
  }
}
