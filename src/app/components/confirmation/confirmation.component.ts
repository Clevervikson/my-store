// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

// Define an interface for the ConfirmationDetails object
interface ConfirmationDetails {
  name: string;
  amount: number;
}

@Component({
  // Define component metadata
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  // Initialize customerName and totalAmount properties
  customerName: string = "Victor";
  totalAmount: number = 0;

  // Inject the CartService dependency
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // Declare a variable to hold the ConfirmationDetails object
    let details: ConfirmationDetails = {name: "", amount: 0};

    // Call the getConfDetails() method of the CartService to retrieve ConfirmationDetails
    details = this.cartService.getConfDetails();

    // Update customerName and totalAmount properties with the result
    this.customerName = details.name;
    this.totalAmount = details.amount;
  }

}
