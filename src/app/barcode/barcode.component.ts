import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit {

  errorMsg: string = "";
  showBarCode: boolean = true;
  showFiller: boolean = false;
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  notFound() {
    this.showBarCode = false;
    this.errorMsg = "Unable to start Barcode Scanner. No device(s) found.";
  }

  getResult(data: string) {
    this.router.navigate(['/product/' + data]);
  }
}
