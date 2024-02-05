import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicinesService } from '../medicines.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit {
  id: string | null = "";
  selectedMedicine: Medicine = new Medicine();
  constructor(private router: Router, private route: ActivatedRoute, private medService: MedicinesService) { }

  ngOnInit(): void {
    let med_id = this.route.snapshot.paramMap.get('id');
    this.id = med_id;
    this.selectedMedicine = this.medService.getMedicineById(this.id);
    console.log(med_id);
  }

  update(): void{
    if(this.selectedMedicine.med_name == ''){
      alert('Please enter medicine name');
      return 
    }
    else if(this.selectedMedicine.med_composition == ''){
      alert('Please enter medicine composition');
      return 
    }
    else if(this.selectedMedicine.med_price <= 0){
      alert('Please enter price of medicine greater than 0.');
      return 
    }
    else if(this.selectedMedicine.med_quantity <= 0){
      alert('Please enter quantity of medicine greater than 0.');
      return 
    }
    console.log(this.selectedMedicine);
    this.router.navigate(['medicineList']);
  }

}
