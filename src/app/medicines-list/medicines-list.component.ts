import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from '../authent.service';
import { Medicine } from '../medicine';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.css']
})
export class MedicinesListComponent implements OnInit {

  medicinesList: Medicine[] = []
  filteredMedicines: Medicine[] = []
  searchMedicine: string = "";
  flag: boolean = true;
  //   {med_id: "SK101", med_name: "Unienzyme", med_composition: "Fungal Diastase 100mg, Papain 60mg, and Charcoal 75mg", med_quantity: 10, med_price: 30},
  //   {med_id: "SK102", med_name: "Aciloc 300", med_composition: "Ranitidine 300.0mg", med_quantity: 15, med_price: 55},
  //   {med_id: "SK121", med_name: "Dolo 500", med_composition: "Paracetamol 500mg", med_quantity: 36, med_price: 28},
  //   {med_id: "SK357", med_name: "Pudin Hara", med_composition: "Pudina Satva", med_quantity: 45, med_price: 15},
  //   {med_id: "SK951", med_name: "Telmikind 40/10", med_composition: "Telmisartan 40mg, Amlodipine 10mg", med_quantity: 12, med_price: 54},
  //   {med_id: "SK203", med_name: "Thyrox 100", med_composition: "levothyroxine 100mg", med_quantity: 19, med_price: 98},
  //   {med_id: "SK304", med_name: "Humilin 30/70", med_composition: "70% Human Insulin Isophane Suspension, 30% Human Insulin Injection ", med_quantity: 15, med_price: 150},
  //   {med_id: "SK153", med_name: "Phoscut 400", med_composition: "Sevlamer 400mg", med_quantity: 17, med_price: 200},
  //   {med_id: "SK106", med_name: "Dytor 40", med_composition: "Torsemide 40mg", med_quantity: 16, med_price: 85},
  //   {med_id: "SK969", med_name: "Pan-D", med_composition: "Pantaprazole, Domperidine", med_quantity: 69, med_price: 190},
  //   {med_id: "SK142", med_name: "MOX-500", med_composition: "Amoxicillin 500mg", med_quantity: 85, med_price: 350},
  //   {med_id: "SK108", med_name: "REDBC 4000IU", med_composition: "Erythopoeitien Alpha 4000IU", med_quantity: 43, med_price: 800}
  // ]

  constructor(private router: Router, private medicines: MedicinesService, public authenticationService: AuthentService) { }

  ngOnInit(): void {
    this.medicinesList = this.medicines.getAllMedicines();
  }
  delete(medicine: Medicine): void{
    if(this.authenticationService.isLoggedIn()){
      // console.log(medicine);
      this.medicines.deleteMedicine(medicine);
      // this.flag = true;
      console.log(medicine);
    }
    else{
      this.router.navigate(['login'])
    }
  }

  search():void{
    if(this.searchMedicine == ''){
      return ;
    }
    let pattern = new RegExp(this.searchMedicine.toLowerCase());
    for(let i=0; i<this.medicinesList.length; i++){
      var str1 = this.medicinesList[i].med_name;
      var str2 = this.medicinesList[i].med_composition;
      if(str1 != null && pattern.test(str1.toLowerCase())){
        this.filteredMedicines.push(this.medicinesList[i]);
      }
      else if(str2 != null && pattern.test(str2.toLowerCase())){
        this.filteredMedicines.push(this.medicinesList[i]);
      }
    }
    if(this.searchMedicine === "")
      this.filteredMedicines = [];
    this.flag = false;
    console.log("Inside medicine-list componenent search() method and flag=" + this.flag);
    console.log(this.filteredMedicines);
  }
}
