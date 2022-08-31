export interface MaterialData {
  name: string;
  materialType: string;
  USA_name: string;
  unitCost: number;
  scrapCostPercent: number;
  density: number;
  hardness: number;
  tensileYieldStrength: number;
  ultimateTensileStrength: number;
  shearStrength: number;
  youngModulus: number;
  poissonRatio: number;
  kSHE: number;
  nSHE: number;
  rLPA: number;
}

export interface TransferMachineData {
  name: string;
  laborRate: number;
  customWorkCenterDirectOverheadRate: number;
  customWorkCenterIndirectOverheadRate: number;
  numberOfOperators: number;
  laborTimeStandard: number;
  setupTime: number;
  strokePerMinute: number;
  constCoeffHandlingTime: number;
  massCoeffHandlingTime: number;
  pressForce: number;
  pressTableLength: number;
  pressTableWidth: number;
  shutHeight: number;
  pitchMargin: number;
  sideMargin: number;
  trimStripWidth: number;
  transferMechReach: number;
  transferMechLift: number;
  mechTransfer: number;
  drop: number;
  retract: number;
  machinePrice: number;
  machineLength: number;
  machineWidth: number;
}

export interface BlankingMachineData {
  name: string;
  laborRate: number;
  directOverhead: number;
  cycleTime: number;
  overallCycleTime: number;
  setupTime: number;
  force: number;
  length: number;
  width: number;
  height: number;
}

export interface TransferMachine {
  name: string;
  reach: number;
  lift: number;
  mechTransfer: number;
  drop: number;
  retract: number;
  strokePerMinute: number;
  formDepthTime: number;
  holdingTime: number;
  totalCycleTime: number;
  setupTime: number;
  noOfLabor: number;
  laborRate: number;
  directOverhead: number;
  batchQty: number;
}

export interface FormModel {
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

  transferMachine: TransferMachine;
}

export interface RecommendedProps {
  force: number;

  length: number;

  width: number;

  height: number;
}

export interface RecommendedSummary {
  key: string;

  label: string;

  actual: number;

  recommended: number;
}

export interface Summary {
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

export interface SummaryData {
  key: string;

  label: string;

  value: number;

  type?: string;
}
