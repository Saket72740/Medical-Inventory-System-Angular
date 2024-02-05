import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from '../authent.service';
import { Medicine } from '../medicine';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchedMedicines: Medicine[] = [];
  id: string = "";
  flag: boolean = false;
  constructor(private router: Router, private medicines: MedicinesService, private authenticationService: AuthentService) { 

  }

  ngOnInit(): void {
    
  }

  delete(medicine: Medicine): void{
    // console.log(medicine);
    if(this.authenticationService.isLoggedIn()){
    var index = this.medicines.medicineList.indexOf(medicine);
    let meds = this.medicines.medicineList.splice(index, 1);
    var index2 = this.searchedMedicines.indexOf(medicine);
    var medsSeracher = this.searchedMedicines.splice(index, 1);
    // this.flag = true;
    // this.router.navigate(['.']);
    console.log(meds);
    console.log(medsSeracher);
    }
    else{
      this.router.navigate(['login']);
    }
  }

}
