import { Injectable } from '@angular/core';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor() { }

  medicineList: Medicine[] = [
    {med_id: "SK101", med_name: "Unienzyme", med_composition: "Fungal Diastase 100mg, Papain 60mg, and Charcoal 75mg", med_quantity: 10, med_price: 30},
    {med_id: "SK102", med_name: "Aciloc 300", med_composition: "Ranitidine 300.0mg", med_quantity: 15, med_price: 55},
    {med_id: "SK121", med_name: "Dolo 500", med_composition: "Paracetamol 500mg", med_quantity: 36, med_price: 28},
    {med_id: "SK357", med_name: "Pudin Hara", med_composition: "Pudina Satva", med_quantity: 45, med_price: 15},
    {med_id: "SK951", med_name: "Telmikind 40/10", med_composition: "Telmisartan 40mg, Amlodipine 10mg", med_quantity: 12, med_price: 54},
    {med_id: "SK203", med_name: "Thyrox 100", med_composition: "levothyroxine 100mg", med_quantity: 19, med_price: 98},
    {med_id: "SK304", med_name: "Humilin 30/70", med_composition: "70% Human Insulin Isophane Suspension, 30% Human Insulin Injection ", med_quantity: 15, med_price: 150},
    {med_id: "SK153", med_name: "Phoscut 400", med_composition: "Sevlamer 400mg", med_quantity: 17, med_price: 200},
    {med_id: "SK106", med_name: "Dytor 40", med_composition: "Torsemide 40mg", med_quantity: 16, med_price: 85},
    {med_id: "SK969", med_name: "Pan-D", med_composition: "Pantaprazole, Domperidine", med_quantity: 69, med_price: 190},
    {med_id: "SK142", med_name: "MOX-500", med_composition: "Amoxicillin 500mg", med_quantity: 85, med_price: 350},
    {med_id: "SK108", med_name: "REDBC 4000IU", med_composition: "Erythopoeitien Alpha 4000IU", med_quantity: 43, med_price: 800}
  ];

  getAllMedicines(): Medicine[]{
    return this.medicineList;
  }

  getMedicineById(id: string | null): Medicine{
    if(id == null){
      return new Medicine();
    }
    var pattern = new RegExp(id.toLowerCase());
    for(let i=0;i<this.medicineList.length;i++){
      var str = this.medicineList[i].med_id;
      if(str != undefined && pattern.test(str.toLowerCase())){
        return this.medicineList[i];
      }
    }
    return new Medicine();
  }

  addMedicine(medicine: Medicine): void{
    this.medicineList.push(medicine);
  }

  getMedicineId(med_name: string | undefined): string | undefined{
    if(med_name == undefined)
      return undefined;
    for(var i=0;i< this.medicineList.length; i++){
      var str = this.medicineList[i].med_name;
      if(str != undefined && (str.toLowerCase() === med_name.toLowerCase())){
        return this.medicineList[i].med_id;
      }
    }
    return undefined;
  }

  getMedicineComposition(med_name: string | undefined): string | undefined{
    if(med_name == undefined)
      return undefined;
    for(var i=0;i< this.medicineList.length; i++){
      var str = this.medicineList[i].med_name;
      if(str != undefined && (str.toLowerCase() === med_name.toLowerCase())){
        return this.medicineList[i].med_composition;
      }
    }
    return undefined;
  }

  getMedicinePrice(med_name: string | undefined): number{
    if(med_name == undefined)
      return 0;
    for(var i=0;i< this.medicineList.length; i++){
      var str = this.medicineList[i].med_name;
      if(str != undefined && (str.toLowerCase() === med_name.toLowerCase())){
        return this.medicineList[i].med_price;
      }
    }
    return 0;
  }

  getMedicineQuanity(med_name: string | undefined): number{
    if(med_name == undefined)
      return 0;
    for(var i=0;i< this.medicineList.length; i++){
      var str = this.medicineList[i].med_name;
      if(str != undefined && (str.toLowerCase() === med_name.toLowerCase())){
        return this.medicineList[i].med_quantity;
      }
    }
    return 0;
  }

  updateMedicine(meds: Medicine[]): void{
    for(var i=0; i<meds.length; i++){
      for(var j=0; j<this.medicineList.length; j++){
        if(meds[i].med_id == this.medicineList[j].med_id){
          this.medicineList[j].med_quantity -= meds[i].med_quantity;
        }
      }
    }
  }

  deleteMedicine(med: Medicine): void{
    var index = this.medicineList.indexOf(med);
    let meds = this.medicineList.splice(index, 1);
    console.log('Medicine deleted successfully');
  }

}
