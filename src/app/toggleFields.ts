export class ToggleFields{
    sowFieldsVis: boolean = true;
    careFieldsVis: boolean = false;
    fertFieldsVis: boolean = false;
    otherFieldsVis: boolean = false;
    toggle(selectedH2): void{
        switch (selectedH2) {
        case 'sowFields':
            this.sowFieldsVis = true;
            this.careFieldsVis = false;
            this.fertFieldsVis = false;
            this.otherFieldsVis = false;
            break;
        case 'careFields':
            this.sowFieldsVis = false;
            this.careFieldsVis = true;
            this.fertFieldsVis = false;
            this.otherFieldsVis = false;
            break;
        case 'fertFields':
            this.sowFieldsVis = false;
            this.careFieldsVis = false;
            this.fertFieldsVis = true;
            this.otherFieldsVis = false;
            break;
        case 'otherFields':
            this.sowFieldsVis = false;
            this.careFieldsVis = false;
            this.fertFieldsVis = false;
            this.otherFieldsVis = true;
            break;
        
        }
  }
}
