import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

interface FormModel {
  length: number;

  width: number;

  thickness: number;

  height: number;

  partSurfaceArea: number;

  partVolume: number;

  perimeter: number;

  bendLengths: number;

  formLength: number;

  material: string;

  angle: number;

  count: number;

  annualVolume: number;

  productionLife: number;

  isTrimRequired: boolean;
}

interface RecommendedProps {
  force: number;

  length: number;

  width: number;

  height: number;
}

interface RecommendedSummary {
  key: string;

  label: string;

  actual: number;

  recommended: number;
}

interface Summary {
  partNo: string;

  partName: string;

  materialCost: number;

  laborCost: number;

  directOverheadCost: number;

  amortizedBatchSetup: number;

  otherDirectCost: number;

  indirectOverheadCost: number;

  mfgCost: number;

  buyPartCost: number;

  totalVariableCost: number;

  qty: number;

  totalPiecePartCost: number;

  sga: number;

  margin: number;

  totalWithSgaAndMargin: number;
}

interface SummaryData {
  key: string;

  label: string;

  value: number;
}

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('summaryCards') summaryCards;
  showSummary = false;

  recommendedTransfer: RecommendedProps;
  recommendedTransferSummary: RecommendedSummary[] = [
    {
      key: 'force',
      label: 'Clamping Force (kN)',
      actual: 1500,
      recommended: 0,
    },
    {
      key: 'length',
      label: 'Press Table Length (mm)',
      actual: 1300,
      recommended: 0,
    },
    {
      key: 'width',
      label: 'Press Table Width (mm)',
      actual: 700,
      recommended: 0,
    },
    {
      key: 'height',
      label: 'Shut Height (mm)',
      actual: 450,
      recommended: 0,
    },
  ];

  recommendedOfflinceBlanking: RecommendedProps;
  recommendedOfflinceBlankingSummary: RecommendedSummary[] = [
    {
      key: 'force',
      label: 'Clamping Force (kN)',
      actual: 5000,
      recommended: 0,
    },
    {
      key: 'length',
      label: 'Press Table Length (mm)',
      actual: 2000,
      recommended: 0,
    },
    {
      key: 'width',
      label: 'Press Table Width (mm)',
      actual: 1300,
      recommended: 0,
    },
    {
      key: 'height',
      label: 'Shut Height (mm)',
      actual: 650,
      recommended: 0,
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
  model: FormModel;
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
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
      ],
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
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
      ],
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
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
            label: 'Blank & Holes / slots / cutouts Perimeter',
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
      ],
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
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
        {
          key: 'material',
          type: 'input',
          defaultValue: 'Steel, Hot Worked, AISI 1006',
          className: 'flex-1',
          templateOptions: {
            type: 'text',
            label: 'Material',
            placeholder: 'Enter Material',
            required: true,
          },
        },
      ],
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
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
      ],
    },

    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
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

  onSubmit() {
    const fv: FormModel = this.form.value;

    let edgeMarginWidth = 8;

    let partSpaceWidth = 8;

    let height = fv.height;

    let partAddendumPerSide = 0;

    let density = 7.85;

    let finalPartLength =
      partAddendumPerSide * 2 + edgeMarginWidth * 2 + fv.length;

    let finalPartWidth =
      partAddendumPerSide * 2 + partSpaceWidth * 2 + fv.length;

    let grossWeight = Number(
      (
        (finalPartLength * finalPartWidth * density * fv.thickness * 10) /
        10000000
      ).toFixed(2)
    );

    let partWeight = Number(
      ((fv.partVolume * density * 10) / 10000000).toFixed(2)
    );

    let hardness = 125;

    let tensileYieldStrength = 240;

    let ultimateTensileStrength = 335;

    let shearStrength = 221;

    let youngModulus = 207000;

    let poissonRatio = 0.28;

    let kSHE = 543;

    let nSHE = 0.21;

    let rLPA = 0.99;

    let materialCost = 1.63;

    let offlineBlankingTonnage =
      (finalPartLength * 2 + finalPartWidth * 2) *
      fv.thickness *
      (shearStrength / 1000);

    const lookupMultiplicationFactor = 2;

    let blankingPressTonnage = Math.round(
      fv.perimeter * lookupMultiplicationFactor * (shearStrength / 1000) +
        fv.perimeter *
          lookupMultiplicationFactor *
          (shearStrength / 1000) *
          0.05
    );

    let bendingPressTonnage = 0;

    let formingPressTonnage = Math.round(
      fv.formLength *
        lookupMultiplicationFactor *
        (tensileYieldStrength / 1000) +
        fv.formLength *
          lookupMultiplicationFactor *
          (tensileYieldStrength / 1000) *
          0.3
    );

    let totalTonnage =
      blankingPressTonnage + bendingPressTonnage + formingPressTonnage;

    let transferMachine = {
      name: 'Transfer Die Press - 1,500kN Press Force',

      reach: 1,

      lift: 1,

      mechTransfer: 3048,

      drop: 1,

      retract: 1,

      strokePerMinute: 1,

      formDepthTime: Math.round(fv.height / 100),

      holdingTime: 0,

      totalCycleTime: 0,

      setupTime: 0.5,

      noOfLabor: 1,

      laborRate: 5.48,

      directOverhead: 11.74,

      batchQty: fv.annualVolume / 12,
    };

    transferMachine['totalCycleTime'] =
      transferMachine.reach +
      transferMachine.lift +
      transferMachine.drop +
      transferMachine.retract +
      transferMachine.strokePerMinute +
      transferMachine.holdingTime;

    let offlineBlanking = {
      name: 'Offline Blank Press - 5,000kN Press Force',

      laborRate: 5.48,

      directOverhead: 48.69,

      cycleTime: 2,

      overallCycleTime: 0,

      setupTime: 0.5,
    };

    offlineBlanking.overallCycleTime = Math.max(6, offlineBlanking.cycleTime);

    this.recommendedTransfer = {
      force: totalTonnage,

      length: Math.max(finalPartLength, finalPartWidth),

      width: Math.min(finalPartLength, finalPartWidth),

      height: height,
    };

    this.recommendedOfflinceBlanking = {
      force: offlineBlankingTonnage,

      length: Math.max(finalPartLength, finalPartWidth),

      width: Math.min(finalPartLength, finalPartWidth),

      height: height,
    };

    // Update summary
    for (const k in this.recommendedTransfer) {
      const obj = this.recommendedTransferSummary.find((rTs) => rTs.key === k);

      if (obj) {
        obj.recommended = this.recommendedTransfer[k];
      }
    }

    for (const k in this.recommendedOfflinceBlanking) {
      const obj = this.recommendedOfflinceBlankingSummary.find(
        (rBs) => rBs.key === k
      );

      if (obj) {
        obj.recommended = this.recommendedOfflinceBlanking[k];
      }
    }

    this.summary = {
      partNo: '',

      partName: '',

      materialCost: materialCost * grossWeight,

      laborCost:
        (transferMachine.totalCycleTime / 3600) * transferMachine.laborRate +
        (offlineBlanking.overallCycleTime / 3600) * offlineBlanking.laborRate,

      directOverheadCost:
        (transferMachine.totalCycleTime / 3600) *
          transferMachine.directOverhead +
        (offlineBlanking.overallCycleTime / 3600) *
          offlineBlanking.directOverhead,

      amortizedBatchSetup:
        (transferMachine.setupTime *
          (transferMachine.laborRate + transferMachine.directOverhead)) /
          transferMachine.batchQty +
        (offlineBlanking.setupTime *
          (offlineBlanking.laborRate + offlineBlanking.directOverhead)) /
          transferMachine.batchQty,

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

    this.showSummary = true;

    setTimeout(() => {
      this.summaryCards.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 200);
  }
}
