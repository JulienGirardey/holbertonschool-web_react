/// <reference path="crud.d.ts" />
import { rowID, rowElement } from './interface';
import * as CRUD from './crud';

const row: rowElement = {
	firstName: "Guillaume",
	lastName: "Salva",
	age: 23
};

const newRowID: rowID = CRUD.insertRow(row);

const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)

const updatedRow: rowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
