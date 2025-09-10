import { rowElement, rowID } from './interface';

export function insertRow(row: rowElement): rowID;
export function updateRow(rowID: rowID, row: rowElement): rowID;
export function deleteRow(rowID: rowID): void;