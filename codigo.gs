function onEdit(){
var nHoja = "FORMATO DE VENTA";
var pCelda = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nHoja).getActiveCell();
var pColumna = pCelda.getColumn();

if (pColumna == 10 && SpreadsheetApp.getActiveSheet()){
var rango = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nHoja).getRange(pCelda.getRow(), pColumna + 1 );
var UbicarRango = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(pCelda.getValue());
  var rango1 =  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nHoja).getRange(pCelda.getRow(), pColumna + 1);
  var rango2 =  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nHoja).getRange(pCelda.getRow(), pColumna + 2);
rango1.clearContent();
rango2.clearContent();
rango1.clearDataValidations(), rango2.clearDataValidations();
ListDep(rango, UbicarRango);
}

else if (pColumna == 11 && SpreadsheetApp.getActiveSheet()){ 
var rango = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nHoja).getRange(pCelda.getRow(), pColumna + 1 );
var UbicarRango = SpreadsheetApp.getActiveSpreadsheet().getRangeByName(pCelda.getValue());
  var rango1 =  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nHoja).getRange(pCelda.getRow(), pColumna + 1);
  var rango2 =  SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nHoja).getRange(pCelda.getRow(), pColumna + 2);
rango1.clearContent(); 
rango2.clearContent(); 
rango1.clearDataValidations(), rango2.clearDataValidations(); 
ListDep(rango, UbicarRango);
}
}
