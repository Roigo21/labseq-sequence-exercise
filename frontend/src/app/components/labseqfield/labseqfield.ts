import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LabseqFieldService, LabseqResponse} from '../../services/labseqfieldservice/labseq-field-service';
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
  executionTime: any;
  errorMessage: string | null = null;

  onSubmit() {
    const value = this.LabseqFormGroup.get("labseqIndex")?.value;

    if (value === null || value === undefined) {
      this.errorMessage = "Please enter a number!";
      return;
    }

    if (value < 0) {
      this.errorMessage = "n must be a positive number!";
      return;
    }

    this.errorMessage = null;
    this.labseqfieldService.getLabseqValue(value).subscribe({
      next: (result:LabseqResponse) => {
        this.calculatedValue = result.result;
        this.executionTime = result.execTimeNanoSeconds;
      },
      error: (err) => {
        console.error("Erro:", err);
      }
    });
  }
}
