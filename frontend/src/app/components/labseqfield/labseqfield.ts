import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LabseqFieldService} from '../../services/labseqfieldservice/labseq-field-service';

@Component({
  selector: 'app-labseqfield',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './labseqfield.html',
  styleUrl: './labseqfield.css'
})
export class Labseqfield {
  constructor(private labseqfieldService: LabseqFieldService) {}
  LabseqFormGroup= new FormGroup({
    labseqIndex: new FormControl()
  })
  calculatedValue: any;

  onSubmit() {
    const value = this.LabseqFormGroup.get("labseqIndex")?.value;
    if (value !== null && value !== undefined) {
      this.labseqfieldService.getLabseqValue(value).subscribe({
        next: (result) => {
          this.calculatedValue = result;
        },
        error: (err) => {
          console.error("Erro:", err);
        }
      });
    }
  }
}
