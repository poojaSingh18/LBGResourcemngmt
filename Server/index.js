node_xj = require("xls-to-json");
function getData(){
    node_xj({
      input: "./model/sample-file1.xls",  // input xls
    output: "./model/employeesDetails.json" // output json
    //  sheet: "sheetname",  // specific sheetname
    }, function(err, result) {
      if(err) {
        console.error(err);
      } else {
        //console.log("result ---",result);
      }
    });
}

module.exports.getData=getData;
