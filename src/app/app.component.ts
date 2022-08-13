import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'length',
      type: 'input',
      templateOptions: {
        min: 1,
        type: 'number',
        label: 'Blank Length',
        placeholder: 'Enter Blank Length',
        required: true,
      },
    },
    {
      key: 'width',
      type: 'input',
      templateOptions: {
        min: 1,
        type: 'number',
        label: 'Blank Width',
        placeholder: 'Enter Blank Width',
        required: true,
      },
    },
    {
      key: 'thickness',
      type: 'input',
      templateOptions: {
        min: 1,
        type: 'number',
        label: 'Thickness',
        placeholder: 'Enter Thickness',
        required: true,
      },
    },
    {
      key: 'height',
      type: 'input',
      templateOptions: {
        min: 1,
        type: 'number',
        label: 'Height',
        placeholder: 'Enter height',
        required: true,
      },
    },
    {
      key: 'partSurfaceArea',
      type: 'input',
      templateOptions: {
        min: 1,
        type: 'number',
        label: 'Part Surface Area',
        placeholder: 'Enter Part Surface Area',
        required: true,
      },
    },
    {
      key: 'partVolume',
      type: 'input',
      templateOptions: {
        min: 1,
        type: 'number',
        label: 'Part Volume',
        placeholder: 'Enter Part Volume',
        required: true,
      },
    },
    {
      key: 'perimeter',
      type: 'input',
      templateOptions: {
        min: 1,
        type: 'number',
        label: 'Blank & Holes/slots/cutouts Perimeter',
        placeholder: 'Enter Blank & Holes/slots/cutouts Perimeter',
        required: true,
      },
    },
    {
      key: 'bendLengths',
      type: 'input',
      templateOptions: {
        min: 1,
        type: 'number',
        label: 'Total Bend Lengths',
        placeholder: 'Enter Total Bend Lengths',
        required: true,
      },
    },
    {
      key: 'formLength',
      type: 'input',
      templateOptions: {
        min: 1,
        type: 'number',
        label: 'Total Form length',
        placeholder: 'Enter Total Form length',
        required: true,
      },
    },
    {
      key: 'material',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Material',
        placeholder: 'Enter Material',
        required: true,
      },
    },
    {
      key: 'angle',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'angle',
        placeholder: 'Enter angle',
        required: true,
      },
    },
    {
      key: 'count',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'count',
        placeholder: 'Enter count',
        required: true,
      },
    },
    {
      key: 'annualVolume',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'annualVolume',
        placeholder: 'Enter annualVolume',
        required: true,
      },
    },
    {
      key: 'productionLife',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'productionLife',
        placeholder: 'Enter productionLife',
        required: true,
      },
    },
    {
      key: 'isTrimRequired',
      type: 'input',
      templateOptions: {
        type: 'select',
        options: [
          { label: 'YES', value: true },
          { label: 'YES', value: false },
        ],
        label: 'productionLife',
        placeholder: 'Enter productionLife',
        required: true,
      },
    },
  ];

  onSubmit() {
    alert(JSON.stringify(this.model, null, 4));
  }
}
