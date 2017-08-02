import { Component  } from '@angular/core';
import { PlantService } from './plant.service'

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./app.component.css']
})

export class DashboardComponent{
    constructor(private _plantService: PlantService){}
    getPlants(): void{
        this._plantService.getPlants().subscribe(
             data => {
               //notes.push(data);
               for(var i = 0; i <data.length; i++ ){
                  //this.notes.push(data[i]);
               }
             },
             err => console.error(err)
           );
    }
    queryPlants(): void{
        
    }
}