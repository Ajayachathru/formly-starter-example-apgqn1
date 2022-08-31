import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { map } from 'rxjs/operators';
import {
  BlankingMachineData,
  FormModel,
  MaterialData,
  RecommendedProps,
  RecommendedSummary,
  Summary,
  SummaryData,
  TransferMachineData,
} from './app.interface';
import { AppService } from './app.service';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}

  @ViewChild('tabs', { static: false }) tabs?: TabsetComponent;
  @ViewChild('summaryCards') summaryCards;
  showSummary = false;

  MATERIALS: MaterialData[] = [];
  TF_MACHINES: TransferMachineData[] = [];
  BLANKING_MACHINES: BlankingMachineData[] = [];

  transferMachineOptions: Array<string>;

  recommendedTransfer: RecommendedProps;
  recommendedTransferSummary: RecommendedSummary[] = [
    {
      key: 'force',
      label: 'Clamping Force (kN)',
      actual: 0,
      recommended: 0,
    },
    {
      key: 'length',
      label: 'Press Table Length (mm)',
      actual: 0,
      recommended: 0,
    },
    {
      key: 'width',
      label: 'Press Table Width (mm)',
      actual: 0,
      recommended: 0,
    },
    {
      key: 'height',
      label: 'Shut Height (mm)',
      actual: 0,
      recommended: 0,
    },
  ];

  recommendedOfflinceBlanking: RecommendedProps;
  recommendedOfflinceBlankingSummary: RecommendedSummary[] = [
    {
      key: 'force',
      label: 'Clamping Force (kN)',
      actual: 0,
      recommended: 0,
    },
    {
      key: 'length',
      label: 'Press Table Length (mm)',
      actual: 0,
      recommended: 0,
    },
    {
      key: 'width',
      label: 'Press Table Width (mm)',
      actual: 0,
      recommended: 0,
    },
    {
      key: 'height',
      label: 'Shut Height (mm)',
      actual: 0,
      recommended: 0,
    },
  ];

  transferMachineSummary: SummaryData[] = [
    {
      key: 'name',
      label: 'Transfer Machine',
      value: 0,
      type: 'string',
    },
    {
      key: 'reach',
      label: 'Transfer Mech Reach In (secs)',
      value: 0,
    },
    {
      key: 'lift',
      label: 'Transfer Mech Lift (secs)',
      value: 0,
    },
    {
      key: 'mechTransfer',
      label: 'Transfer Mech Transfer (secs)',
      value: 0,
    },
    {
      key: 'drop',
      label: 'Transfer Mech Drop (secs)',
      value: 0,
    },
    {
      key: 'retract',
      label: 'Transfer Mech Retract (secs)',
      value: 0,
    },
    {
      key: 'strokePerMinute',
      label: 'Stroke Per minute (secs)',
      value: 0,
    },
    {
      key: 'formDepthTime',
      label: 'Form Depth Time (secs)',
      value: 0,
    },
    {
      key: 'holdingTime',
      label: 'Holding Time (secs)',
      value: 0,
    },
    {
      key: 'totalCycleTime',
      label: 'Total cycle time (secs)',
      value: 0,
    },
    {
      key: 'setupTime',
      label: 'Setup Time (hr)',
      value: 0,
    },
    {
      key: 'noOfLabor',
      label: 'No of Labor',
      value: 0,
    },
    {
      key: 'laborRate',
      label: 'Transfer Labor Rate/Hr',
      value: 0,
    },
    {
      key: 'directOverhead',
      label: 'Transfer Direct Overhead/Hr',
      value: 0,
    },
    {
      key: 'batchQty',
      label: 'Batch Qty',
      value: 0,
    },
  ];

  offlineBlankingSummary: SummaryData[] = [
    {
      key: 'name',
      label: 'Offline Blanking Machine',
      value: 0,
      type: 'string',
    },
    {
      key: 'laborRate',
      label: 'Transfer Labor Rate/Hr',
      value: 0,
    },
    {
      key: 'directOverhead',
      label: 'Transfer Direct Overhead/Hr',
      value: 0,
    },
    {
      key: 'cycleTime',
      label: 'Cycle Time (secs)',
      value: 0,
    },
    {
      key: 'overallCycleTime',
      label: 'Overall cycle time (secs)',
      value: 0,
    },
    {
      key: 'setupTime',
      label: 'Setup Time (hr)',
      value: 0,
    },
  ];

  derivedMetrics: SummaryData[] = [
    {
      key: 'edgeMarginWidth',
      label: 'Edge margin width',
      value: 0,
    },
    {
      key: 'partSpaceWidth',
      label: 'Part search width',
      value: 0,
    },
    {
      key: 'height',
      label: 'Height',
      value: 0,
    },
    {
      key: 'partAddendumPerSide',
      label: 'Part Addendum per side',
      value: 0,
    },
    {
      key: 'density',
      label: 'Density',
      value: 0,
    },
    {
      key: 'finalPartLength',
      label: 'Final Part Length',
      value: 0,
    },
    {
      key: 'finalPartWidth',
      label: 'Final Part Width',
      value: 0,
    },
    {
      key: 'grossWeight',
      label: 'Gross weight in kg',
      value: 0,
    },
    {
      key: 'partWeight',
      label: 'Part weight in kg',
      value: 0,
    },
    {
      key: 'hardness',
      label: 'Hardness',
      value: 0,
    },
    {
      key: 'tensileYieldStrength',
      label: 'Tensile Yield Strength',
      value: 0,
    },
    {
      key: 'ultimateTensileStrength',
      label: 'Ultimate Tensile Strength',
      value: 0,
    },
    {
      key: 'shearStrength',
      label: 'Shear Strength',
      value: 0,
    },
    {
      key: 'youngModulus',
      label: "Young's Modulus",
      value: 0,
    },
    {
      key: 'poissonRatio',
      label: "Poisson's Ratio",
      value: 0,
    },
    {
      key: 'kSHE',
      label: 'K (strain-hardening coefficient)',
      value: 0,
    },
    {
      key: 'nSHE',
      label: 'N (strain-hardening exponent)',
      value: 0,
    },
    {
      key: 'rLPA',
      label: 'R (Lankford parameter, average)',
      value: 0,
    },
    {
      key: 'materialCost',
      label: 'Material Cost/Kg',
      value: 0,
    },
    {
      key: 'offlineBlankingTonnage',
      label: 'Offline Blanking tonnage',
      value: 0,
    },
    {
      key: 'blankingPressTonnage',
      label: 'Press Tonnage Required Blanking + Holding Force (kN)',
      value: 0,
    },
    {
      key: 'bendingPressTonnage',
      label: 'Press Tonnage Required Bending + Holding Force (kN)',
      value: 0,
    },
    {
      key: 'formingPressTonnage',
      label: 'Press Tonnage Required Forming + Holding Force (kN)',
      value: 0,
    },
    {
      key: 'totalTonnage',
      label: 'Total Tonnage Required (kN)',
      value: 0,
    },
  ];

  summary: Summary;
  summaryData: SummaryData[] = [
    {
      key: 'materialCost',
      label: 'Material Cost',
      value: 0,
    },
    {
      key: 'laborCost',
      label: 'Labor Cost',
      value: 0,
    },
    {
      key: 'directOverheadCost',
      label: 'Direct Overhead Cost',
      value: 0,
    },
    {
      key: 'amortizedBatchSetup',
      label: 'Amortized Batch setup',
      value: 0,
    },
    {
      key: 'otherDirectCost',
      label: 'Other Direct Cost',
      value: 0,
    },
    {
      key: 'indirectOverheadCost',
      label: 'Indirect Overhead Cost',
      value: 0,
    },
    {
      key: 'mfgCost',
      label: 'MFG Cost',
      value: 0,
    },
    {
      key: 'buyPartCost',
      label: 'Buy Part cost',
      value: 0,
    },
    {
      key: 'totalVariableCost',
      label: 'Total Variable Cost',
      value: 0,
    },
    {
      key: 'qty',
      label: 'Qty',
      value: 0,
    },
    {
      key: 'totalPiecePartCost',
      label: 'Total Piece Part Cost',
      value: 0,
    },
    {
      key: 'sga',
      label: 'SGA',
      value: 0,
    },
    {
      key: 'margin',
      label: 'Margin',
      value: 0,
    },
    {
      key: 'totalWithSgaAndMargin',
      label: 'Total Piece Part Cost ($) with SG&A and Margin',
      value: 0,
    },
  ];

  form = new FormGroup({});
  options: FormlyFormOptions = {
    formState: {
      selectOptionsData: {
        material: [],
      },
    },
  };
  model: FormModel;
  fields: FormlyFieldConfig[];

  edgeMarginWidth = 8;

  partSpaceWidth = 8;

  height = 0;

  partAddendumPerSide = 0;

  density = 0;

  finalPartLength = 0;

  finalPartWidth = 0;

  partWeight = 0;

  hardness = 0;

  tensileYieldStrength = 0;

  ultimateTensileStrength = 0;

  shearStrength = 0;

  youngModulus = 0;

  poissonRatio = 0;

  kSHE = 0;

  nSHE = 0;

  rLPA = 0;

  materialCost = 0;

  grossWeight = 0;

  offlineBlankingTonnage = 0;

  blankingPressTonnage = 0;

  bendingPressTonnage = 0;

  formingPressTonnage = 0;

  totalTonnage = 0;

  transferMachine = {
    name: '',

    reach: 0,

    lift: 0,

    mechTransfer: 0,

    drop: 0,

    retract: 0,

    strokePerMinute: 0,

    formDepthTime: 0,

    holdingTime: 0,

    totalCycleTime: 0,

    setupTime: 0,

    noOfLabor: 0,

    laborRate: 0,

    directOverhead: 0,

    batchQty: 0,
  };

  offlineBlanking = {
    name: '',

    laborRate: 0,

    directOverhead: 0,

    cycleTime: 0,

    overallCycleTime: 0,

    setupTime: 0,
  };

  ngOnInit() {
    this.initFormFields();
    this.appService.getMaterials().subscribe((materials: MaterialData[]) => {
      this.MATERIALS = materials;
    });

    this.appService
      .getMachines()
      .subscribe((machines: TransferMachineData[]) => {
        this.TF_MACHINES = machines;
        this.transferMachine['name'] = machines[0].name;
      });

    this.appService
      .getBlankingMachines()
      .subscribe((machines: BlankingMachineData[]) => {
        this.BLANKING_MACHINES = machines;
        this.offlineBlanking['name'] = machines[0].name;
      });
  }

  initFormFields() {
    this.fields = [
      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'length',
            type: 'input',
            defaultValue: 600,
            className: 'flex-1',
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
            defaultValue: 600,
            className: 'flex-1',
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
            defaultValue: 2,
            className: 'flex-1',
            templateOptions: {
              min: 1,
              type: 'number',
              label: 'Thickness',
              placeholder: 'Enter Thickness',
              required: true,
            },
          },
        ],
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'height',
            type: 'input',
            defaultValue: 22.41,
            className: 'flex-1',
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
            defaultValue: 68_814.37,
            className: 'flex-1',
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
            defaultValue: 71_762.2,
            className: 'flex-1',
            templateOptions: {
              min: 1,
              type: 'number',
              label: 'Part Volume',
              placeholder: 'Enter Part Volume',
              required: true,
            },
          },
        ],
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'perimeter',
            type: 'input',
            defaultValue: 7_129.28,
            className: 'flex-1',
            templateOptions: {
              min: 1,
              type: 'number',
              label: 'Perimeter',
              placeholder: 'Enter Blank & Holes / slots / cutouts Perimeter',
              required: true,
            },
          },
          {
            key: 'bendLengths',
            type: 'input',
            defaultValue: 0,
            className: 'flex-1',
            templateOptions: {
              min: 0,
              type: 'number',
              label: 'Total Bend Lengths',
              placeholder: 'Enter Total Bend Lengths',
              required: true,
            },
          },
          {
            key: 'formLength',
            type: 'input',
            defaultValue: 8_304.74,
            className: 'flex-1',
            templateOptions: {
              min: 1,
              type: 'number',
              label: 'Total Form length',
              placeholder: 'Enter Total Form length',
              required: true,
            },
          },
        ],
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'material',
            type: 'select',
            defaultValue: 'Steel, Hot Worked, AISI 1006',
            className: 'flex-1',
            templateOptions: {
              label: 'Material',
              required: true,
              valueProp: 'name',
              labelProp: 'name',
              options: this.appService.getMaterials().pipe(
                map((data: MaterialData[]) => {
                  this.options.formState.selectOptionsData.material = data;
                  return this.options.formState.selectOptionsData.material;
                })
              ),
              // change: this.onSubmit.bind(this),
            },
          },
          {
            key: 'angle',
            type: 'input',
            defaultValue: 90,
            className: 'flex-1',
            templateOptions: {
              type: 'number',
              label: 'Angle',
              placeholder: 'Enter Angle',
              required: true,
            },
          },
          {
            key: 'count',
            type: 'input',
            defaultValue: 1,
            className: 'flex-1',
            templateOptions: {
              type: 'number',
              label: 'count',
              placeholder: 'Enter count',
              required: true,
            },
          },
        ],
      },

      {
        fieldGroupClassName: 'display-flex',
        fieldGroup: [
          {
            key: 'annualVolume',
            type: 'input',
            defaultValue: 2_50_000,
            className: 'flex-1',
            templateOptions: {
              type: 'number',
              label: 'Annual Volume',
              placeholder: 'Enter Annual Volume',
              required: true,
            },
          },
          {
            key: 'productionLife',
            type: 'input',
            defaultValue: 5,
            className: 'flex-1',
            templateOptions: {
              type: 'number',
              label: 'Production Life',
              placeholder: 'Enter Production Life',
              required: true,
            },
          },
          {
            key: 'isTrimRequired',
            type: 'select',
            defaultValue: false,
            className: 'flex-1',
            templateOptions: {
              options: [
                { label: 'YES', value: true },
                { label: 'NO', value: false },
              ],
              label: 'Trim Required ?',
              required: true,
            },
          },
        ],
      },
    ];
  }

  onChangeTrasnferMachine() {}

  onSubmit() {
    const fv: FormModel = this.form.value;

    const selectedMaterial = this.MATERIALS.find((m) => m.name === fv.material);

    if (selectedMaterial) {
      [
        'density',
        'hardness',
        'tensileYieldStrength',
        'ultimateTensileStrength',
        'shearStrength',
        'youngModulus',
        'poissonRatio',
        'kSHE',
        'nSHE',
        'rLPA',
        'materialCost',
      ].forEach((k) => {
        this[k] = selectedMaterial[k];
      });

      this.density /= 1000;
    }

    this.height = fv.height;

    this.finalPartLength =
      this.partAddendumPerSide * 2 + this.edgeMarginWidth * 2 + fv.length;

    this.finalPartWidth =
      this.partAddendumPerSide * 2 + this.partSpaceWidth * 2 + fv.length;

    this.grossWeight = Number(
      (
        (this.finalPartLength *
          this.finalPartWidth *
          this.density *
          fv.thickness *
          10) /
        10000000
      ).toFixed(2)
    );

    this.partWeight = Number(
      ((fv.partVolume * this.density * 10) / 10000000).toFixed(2)
    );

    this.offlineBlankingTonnage =
      (this.finalPartLength * 2 + this.finalPartWidth * 2) *
      fv.thickness *
      (this.shearStrength / 1000);

    this.blankingPressTonnage = Math.round(
      fv.perimeter * fv.thickness * (this.shearStrength / 1000) +
        fv.perimeter * fv.thickness * (this.shearStrength / 1000) * 0.05
    );

    this.formingPressTonnage = Math.round(
      fv.formLength * fv.thickness * (this.tensileYieldStrength / 1000) +
        fv.formLength * fv.thickness * (this.tensileYieldStrength / 1000) * 0.3
    );

    this.totalTonnage =
      this.blankingPressTonnage +
      this.bendingPressTonnage +
      this.formingPressTonnage;

    const selectedMachine = this.TF_MACHINES.find(
      (m) => m.name === this.transferMachine.name
    );

    if (selectedMachine) {
      [
        'reach',
        'lift',
        'mechTransfer',
        'drop',
        'retract',
        'setupTime',
        'noOfLabor',
        'laborRate',
        'directOverhead',
      ].forEach((k) => {
        this.transferMachine[k] = selectedMachine[k];
      });
      this.transferMachine['strokePerMinute'] = Math.ceil(
        selectedMachine.strokePerMinute / 100
      );
    }

    // this.transferMachine = {
    //   name: 'Transfer Die Press - 1,500kN Press Force',

    //   reach: 1,

    //   lift: 1,

    //   mechTransfer: 3048,

    //   drop: 1,

    //   retract: 1,

    //   strokePerMinute: 1,

    //   formDepthTime: Math.round(fv.height / 100),

    //   holdingTime: 0,

    //   totalCycleTime: 0,

    //   setupTime: 0.5,

    //   noOfLabor: 1,

    //   laborRate: 5.48,

    //   directOverhead: 11.74,

    //   batchQty: fv.annualVolume / 12,
    // };

    this.transferMachine['formDepthTime'] = Math.round(fv.height / 100);
    this.transferMachine['batchQty'] = Math.round(fv.annualVolume / 12);
    this.transferMachine['totalCycleTime'] =
      this.transferMachine.reach +
      this.transferMachine.lift +
      this.transferMachine.drop +
      this.transferMachine.retract +
      this.transferMachine.strokePerMinute +
      this.transferMachine.holdingTime;

    const selectedOfflinceBlankingMachine = this.BLANKING_MACHINES.find(
      (m) => m.name === this.offlineBlanking.name
    );

    if (selectedOfflinceBlankingMachine) {
      ['laborRate', 'directOverhead', 'cycleTime', 'setupTime'].forEach((k) => {
        this.offlineBlanking[k] = selectedOfflinceBlankingMachine[k];
      });

      this.density /= 1000;
    }

    this.offlineBlanking.overallCycleTime = Math.max(
      6,
      this.offlineBlanking.cycleTime
    );

    this.recommendedTransfer = {
      force: this.totalTonnage,

      length: Math.max(this.finalPartLength, this.finalPartWidth),

      width: Math.min(this.finalPartLength, this.finalPartWidth),

      height: this.height,
    };

    this.recommendedOfflinceBlanking = {
      force: this.offlineBlankingTonnage,

      length: Math.max(this.finalPartLength, this.finalPartWidth),

      width: Math.min(this.finalPartLength, this.finalPartWidth),

      height: this.height,
    };

    // Update summary
    for (const k in this.recommendedTransfer) {
      const obj = this.recommendedTransferSummary.find((rTs) => rTs.key === k);

      if (obj) {
        if (selectedMachine) {
          obj.actual = selectedMachine[k];
        }
        obj.recommended = Math.ceil(this.recommendedTransfer[k]);
      }
    }

    for (const k in this.recommendedOfflinceBlanking) {
      const obj = this.recommendedOfflinceBlankingSummary.find(
        (rBs) => rBs.key === k
      );

      if (obj) {
        if (selectedOfflinceBlankingMachine) {
          obj.actual = selectedOfflinceBlankingMachine[k];
        }
        obj.recommended = Math.ceil(this.recommendedOfflinceBlanking[k]);
      }
    }

    this.summary = {
      partNo: '',

      partName: '',

      materialCost: this.materialCost * this.grossWeight,

      laborCost:
        (this.transferMachine.totalCycleTime / 3600) *
          this.transferMachine.laborRate +
        (this.offlineBlanking.overallCycleTime / 3600) *
          this.offlineBlanking.laborRate,

      directOverheadCost:
        (this.transferMachine.totalCycleTime / 3600) *
          this.transferMachine.directOverhead +
        (this.offlineBlanking.overallCycleTime / 3600) *
          this.offlineBlanking.directOverhead,

      amortizedBatchSetup:
        (this.transferMachine.setupTime *
          (this.transferMachine.laborRate +
            this.transferMachine.directOverhead)) /
          this.transferMachine.batchQty +
        (this.offlineBlanking.setupTime *
          (this.offlineBlanking.laborRate +
            this.offlineBlanking.directOverhead)) /
          this.transferMachine.batchQty,

      otherDirectCost: 0,

      indirectOverheadCost: 0,

      mfgCost: 0,

      buyPartCost: 0,

      totalVariableCost: 0,

      qty: 1,

      totalPiecePartCost: 0,

      sga: 0,

      margin: 0,

      totalWithSgaAndMargin: 0,
    };

    this.summary.otherDirectCost = this.summary.materialCost * 0.022;

    this.summary.indirectOverheadCost = this.summary.laborCost * 0.25;

    this.summary.mfgCost =
      this.summary.laborCost +
      this.summary.directOverheadCost +
      this.summary.amortizedBatchSetup +
      this.summary.otherDirectCost +
      this.summary.indirectOverheadCost;

    this.summary.totalVariableCost =
      this.summary.materialCost +
      this.summary.mfgCost +
      this.summary.buyPartCost;

    this.summary.totalPiecePartCost =
      this.summary.totalVariableCost * this.summary.qty;

    this.summary.sga = this.summary.totalPiecePartCost * 0.04;

    this.summary.margin =
      (this.summary.totalPiecePartCost + this.summary.sga) * 0.04;

    this.summary.totalWithSgaAndMargin =
      this.summary.totalPiecePartCost + this.summary.sga + this.summary.margin;

    console.log('this.summary', this.summary);

    this.summaryData.map((sd) => {
      sd.value = this.summary[sd.key];
      return sd;
    });

    this.derivedMetrics.map((sd) => {
      sd.value = this[sd.key];
      return sd;
    });

    this.transferMachineSummary.map((d) => {
      d.value = this.transferMachine[d.key];
      return d;
    });

    this.offlineBlankingSummary.map((d) => {
      d.value = this.offlineBlanking[d.key];
      return d;
    });

    this.derivedMetrics.map((sd) => {
      sd.value = this[sd.key];
      return sd;
    });

    this.showSummary = true;

    setTimeout(() => {
      this.tabs.tabs[1].active = true;
    }, 100);
  }
}
