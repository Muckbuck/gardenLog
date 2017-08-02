/*
TODO
-------------------------------
1.Separate into two components.
2.Do the same for the html.
3.Implement method that handles the call from plant-service
  and display it in the new template.
--------------------------------
*/
import { Component } from '@angular/core';
import { PlantService } from './plant.service';
import { SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { ToggleFields } from './toggleFields';

@Component({
  templateUrl:'./new-plant.component.html',
  styleUrls: ['./app.component.css']
})

export class PlantComponent{
  notes: String[];
  //Flags
  sowFieldsVis: boolean = true;
  careFieldsVis: boolean = false;
  fertFieldsVis: boolean = false;
  otherFieldVis: boolean = false;
  summaryVis: boolean = false;
  //The current date
  date: Date = new Date();
  day: Number = this.date.getDate();
  month: Number = this.date.getMonth() + 1;
  year: Number = this.date.getFullYear();
  currentDate: String = `${this.year}-0${this.month}-${this.day}`;
  //The summary of what is currently in localStorage
  summary: Object; 
  //Tags
  tags: String[];
  //Mostly empty object awaiting input about a new plant
  plant: Object = { 
    sow: { name: '', startDate: this.currentDate, endDate: this.currentDate }, 
    care: { comment: '' }, 
    fertilizer: { name: '', startDate: this.currentDate, endDate: this.currentDate }, 
    other: { comment: '', tags: [] } 
  };
  //An event emitter that is waiting for input before appending to localStorage
  onKey(event: any, category: string, subCategory){
    this.plant[category][subCategory] = event.target.value;  
    this.appendToLocal('fields', this.plant);
  }
  //An event emitter that is waiting for input before appending to localStorage
  onChange(event: any, category: string, subCategory){
    this.plant[category][subCategory] = event.target.value;  
    this.appendToLocal('fields', this.plant);
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    localStorage.setItem('fields', ' ');
  } 
  toggleFields(selectedH2): void{
    
    switch (selectedH2) {
      case 'sowFields':
        this.sowFieldsVis = true;
        this.careFieldsVis = false;
        this.fertFieldsVis = false;
        this.otherFieldVis = false;
        break;
      case 'careFields':
        this.sowFieldsVis = false;
        this.careFieldsVis = true;
        this.fertFieldsVis = false;
        this.otherFieldVis = false;
        break;
      case 'fertFields':
        this.sowFieldsVis = false;
        this.careFieldsVis = false;
        this.fertFieldsVis = true;
        this.otherFieldVis = false;
        break;
      case 'otherFields':
        this.sowFieldsVis = false;
        this.careFieldsVis = false;
        this.fertFieldsVis = false;
        this.otherFieldVis = true;
        break;
    
    }
  }
  appendToLocal(item, object): void{
    localStorage.removeItem(item);
    localStorage.setItem(item, JSON.stringify(object));
    this.summary = object;
    this.summaryVis = true;  
  }
  //Makes a get request via the plant.service to retrieve all plants stored in the db
  constructor(private _plantService: PlantService){}
  //Makes a post request for a new plant to be stored in the db
  postPlant(cleanPlantObj): void{
    let localObject = JSON.parse(localStorage.getItem('fields'));
    console.log(JSON.stringify(localObject.sow.name));

    var newPlantObj = {
        sow:{name: localObject.sow.name, startDate: localObject.sow.startDate, endDate: localObject.sow.endDate }, 
        care:{comment: localObject.care.comment}, 
        fertilizer:{name: localObject.fertilizer.name, startDate: localObject.fertilizer.startDate, endDate: localObject.fertilizer.endDate}, 
        other:{comment: localObject.other.comment, tags: localObject.other.tags} 
    };
    var notes;
    this._plantService.postPlant(newPlantObj).subscribe(
             data => {
               notes = data;
             },
             err => console.error(err)
           ); 
    }
  
}
