var node_xj = require("xlsx-to-json");
function getData(){
    node_xj({
      input: "./model/output.xlsx",  // input xls
    output: "./model/employeesDetails.json" // output json
    // sheet: "Sheet 1"  // specific sheetname
    }, function(err, result) {
      if(err) {
        console.error(err);
      } else {
        //console.log("result ---",result);
        console.log("-----xl to json converted----");
      }
    });
}

module.exports.getData=getData;
