var fs=require('fs');

allDetails=[];
function findByEmpId(empId,callback)
{
  var obj;
  fs.readFile('model/employeesDetails.json', 'utf8', function (err, data) {
    if(!err)
    {
      try {
      //  obj=JSON.parse(data);
      obj=allDetails;
        var flag=false
        var object={};
        obj.filter(function(employee)
        {
          if(employee['Emp No']==empId)
          {
          flag=true;
          object=employee;
        }
            //callback(err,employee);
        })
        callback(err,object);
      } catch (e) {
      console.log('malformed request', e);
      }
    }
    else
    {
      console.log(err);
    }

  });
}

function findAll(callback)
{
  var obj;
  var result=[];
  var arr=[];
  fs.readFile('model/employeesDetails.json', 'utf8', function (err, data) {
    if(!err)
    {
    try {
      obj=JSON.parse(data);
      //obj=allDetails;
      obj.filter(function(employee)
    {
      if(arr.indexOf(employee.Mentor)==-1)
      {
        arr.push(employee.Mentor);
      }
    })
    allDetails=obj;
    result.push(obj);
    result.push(arr);
      callback(err,result);
    } catch (e) {
      console.log('malformed request', e);
    }
    }
    else
    {
      console.log(err);
    }

  });
}

function findAllTheEmployess(mentorName,callback)
{
  console.log("inside mentor filter");
  var obj;
  fs.readFile('model/employeesDetails.json', 'utf8', function (err, data) {
    if(!err)
    {
      try {
        console.log("cjeckinfin..........");
        // obj=JSON.parse(data);
        obj=allDetails;
        var allTheEmployees=obj.filter(function(employee)
        {
          if(employee['Mentor']==mentorName)
            return employee;
        })
        callback(err,allTheEmployees);
      } catch (e) {
      console.log('malformed request', e);
      }
    }
    else
    {
      console.log(err);
    }

  });
}

function allTheMentors(callback)
{
  var obj;
  fs.readFile('model/employeesDetails.json', 'utf8', function (err, data)
  {
    try {
      // obj=JSON.parse(data);
      obj=allDetails;
      if(!err)
      {
        var arr=[];
        obj.filter(function(employee)
      {
        if(arr.indexOf(employee.Mentor)==-1)
        {
          arr.push(employee.Mentor);
        }
      })
      callback(err,arr);
      }
    } catch (e) {
      console.log('malformed request', e);
      //return res.status(400).send('malformed request: ' + data);
    }
})
};

function findAgileStats(callback)
{
  console.log("inf filter");
  var obj1 = {};
  var arrObjects=[];
  fs.readFile('model/employeesDetails.json', 'utf8', function (err, data)
  {
    //console.log("error----------");
    if(!err){
      try {
        obj1=JSON.parse(data);
        // obj=allDetails;
        var agileComp = 0;
        var agileIncomp = 0;
        var agileNa = 0;
        obj1.filter(function(employee)
        {
        	if(employee['Agile Trainings Complete? (Y/N)']=='yes')
        		agileComp++;
        	else if(employee['Agile Trainings Complete? (Y/N)']=='NA')
        		agileNa++;
          else
            agileIncomp++;
        });
        var obj={};
        obj["agile"]= "AgileComplete";
        obj["value"]= agileComp;
        obj["color"]= 'darkcyan';
        arrObjects.push(obj);
        obj={};
        obj["agile"]="AgileIncomplete";
        obj["value"]=agileIncomp;
        obj["color"]= 'cadetblue';
        arrObjects.push(obj);
        obj={};
        obj["agile"]="AgileNA";
        obj["value"]=agileNa;
        obj["color"]= 'aquamarine';
        arrObjects.push(obj);
        callback(err, arrObjects);
      } catch (e) {

      }
    }
    else {
      console.log("error-------------",err);
    }
  })
};

function findBfsiStats(callback)
{
  console.log("inf filter");
  var obj1 = {};
  var arrObjects=[];
  fs.readFile('model/employeesDetails.json', 'utf8', function (err, data)
  {
    //console.log("error----------");
    if(!err){
    //  console.log("data--------",data);

      try {
      obj1=JSON.parse(data);
      // obj=allDetails;
      var bfsiComp = 0;
      var bfsiIncomp = 0;
      var bfsiNa = 0;

      obj1.filter(function(employee)
      {
      	if(employee['BFSI Training Courses Complete? (Y/N)']=='yes')
      		bfsiComp++;
      	else if(employee['BFSI Training Courses Complete? (Y/N)']=='NA')
      		bfsiNa++;
        else
          bfsiIncomp++;
      });

      var obj={};
      obj["bfsi"]="BfsiIncomplete";
      obj["value"]=bfsiIncomp;
      obj["color"]= 'darkolivegreen';
      arrObjects.push(obj);

      obj={};
      obj["bfsi"]= "BfsiComplete";
      obj["value"]= bfsiComp;
      obj["color"]= 'darkkhaki';
      arrObjects.push(obj);

      obj={};
      obj["bfsi"]="BfsiNA";
      obj["value"]=bfsiNa;
      obj["color"]= 'darkorange';
      arrObjects.push(obj);

      callback(err, arrObjects);
    }
      catch (e) {
          console.log('malformed request', data);
          //return res.status(400).send('malformed request: ' + data);

      }
    }
    else {
      console.log("error-------------",err);
    }
  })
};

function findDigithonStats(callback)
{
  console.log("inf filter");
  var obj1 = {};
  var arrObjects=[];
  fs.readFile('model/employeesDetails.json', 'utf8', function (err, data)
  {
    //console.log("error----------");
    if(!err){
    //  console.log("data--------",data);

    try {
      obj1=JSON.parse(data);
      // obj=allDetails;
      var digithonComp = 0;
      var digithonIncomp = 0;
      var digithonNa = 0;

      obj1.filter(function(employee)
      {
        if(employee['Digithon Cleared? (Y/N/NA)']=='yes')
          digithonComp++;
        else if(employee['Digithon Cleared? (Y/N/NA)']=='NA')
          digithonNa++;
        else
          digithonIncomp++;
      });

      var obj={};
      obj["digithon"]="DigithonIncomplete";
      obj["value"]=digithonIncomp;
      obj["color"]= 'mediumslateblue';
      arrObjects.push(obj);

      obj={};
      obj["digithon"]="DigithonNA";
      obj["value"]=digithonNa;
      obj["color"]= 'darkmagenta';
      arrObjects.push(obj);

      obj={};
      obj["digithon"]= "DigithonComplete";
      obj["value"]= digithonComp;
      obj["color"]= 'darkslateblue';
      arrObjects.push(obj);

      callback(err, arrObjects);

    } catch (e) {

    }
    }
    else {
      console.log("error-------------",err);
    }
  })
};

function get_random_color(n) {
  return "#" + (n%1000);
    // return "#" + (Math.round(Math.random()  * 0XFFF)).toString(16);
}
function findMentorStats(callback)
{
  console.log("inf filter");
  var obj1 = {};
  var mentor=[];
  var newmentor={};
  var flag=0;
  var test=0;
  var mentorIndex = 0;
  fs.readFile('model/employeesDetails.json', 'utf8', function (err, data)
  {
    if(!err){
      console.log("!er");
      try {
        obj1=JSON.parse(data);
        // obj=allDetails;
        //var arrFlag=[];
        obj1.filter(function(employee)
        {

          console.log(++test+"----------"+employee['Mentor']);
          if(mentor.length==0)
          {
            newmentor.mentorname=employee['Mentor'];
            newmentor.value= 1;
            newmentor.color=get_random_color(employee['Emp No']);
            mentor.push(newmentor);
            //arrFlag.push(employee['Mentor']);
          }
          else{
              for(var i=0; i<mentor.length; i++)
              {
               if(employee['Mentor'] === mentor[i].mentorname)
               {
                //mentor[i].value=mentor[i].value+1;
                flag=1;
                mentorIndex = i;
                break;
               }
              }

              if(flag != 1)
              {
                newmentor={};
                newmentor.mentorname=employee['Mentor'];
                newmentor.value=1;
                newmentor.color=get_random_color(employee['Emp No']);
                mentor.push(newmentor);
              }
              else {
                mentor[mentorIndex].value = ++mentor[mentorIndex].value;
                flag = 0;
              }

        }

      });
  callback(err, mentor);
      } catch (e) {
console.log("not eero",e);
      }
    }
    else {
      console.log("error-------------",err);
    }
  })
};

module.exports.findAll=findAll;
module.exports.findByEmpId=findByEmpId;
module.exports.findAllTheEmployess=findAllTheEmployess;
module.exports.allTheMentors=allTheMentors;
module.exports.findAgileStats=findAgileStats;
module.exports.findBfsiStats=findBfsiStats;
module.exports.findDigithonStats=findDigithonStats;
module.exports.findMentorStats=findMentorStats;
