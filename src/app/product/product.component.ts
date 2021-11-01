import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  barcodeValue: string = "";

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((p) => {
      if (p['barcodevalue']) {
        this.barcodeValue = p['barcodevalue'];
      }
    });
    
  }

}
