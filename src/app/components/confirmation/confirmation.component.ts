import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

interface ConfirmationDetails {
  name: string;
  amount: number;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  cusName: string = "Ahmed";
  totalAmount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    let dets: ConfirmationDetails = {name: "", amount: 0};
    dets = this.cartService.getConfDetails();
    this.cusName = dets.name;
    this.totalAmount = dets.amount;
  }

}
