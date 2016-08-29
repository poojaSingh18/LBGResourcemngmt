var express=require('express');
var router=express.Router();
var fs = require('fs');
var filter=require('../filter/dataFilter.js');
//var source=require('../model/employeesDetails.json');

router.get('/getOneById/:id',function(req,res)// find an employee by passing employee id
{
  var d=[];
  console.log(req.params.id);
  filter.findByEmpId(req.params.id,function(err,employeeObject) //pass empId from req object.
  {
  if(!err)
  {
    d.push(employeeObject);
    console.log(employeeObject);
  res.send(d);
  }
  });
})

router.get('/getAll',function(req,res)// find an employee by passing employee id
{
  filter.findAll(function(err,employeesObject) //pass empId from req object.
  {
  if(!err)
  {
  //console.log(employeesObject);
  res.send(employeesObject);

  }
  });
})

router.get('/allTheEmployeesByMentorName/:mentor',function(req,res) //find all the employees who are under particular mentor
  {
    filter.findAllTheEmployess(req.params.mentor,function(err,allTheEmployees)
    {
      if(!err)
        {
          res.send(allTheEmployees);
        }
    })
  });

  router.get('/getAgileStats',function(req,res) //find all the employees who are under particular mentor
    {
      console.log("in routes");
      filter.findAgileStats(function(err,agileStatsObj)
      {
        if(!err)
          {
            res.send(agileStatsObj);
          }
          else {
            console.log("eror",err);
          }
      })
    });

    router.get('/getBfsiStats',function(req,res) //find all the employees who are under particular mentor
      {
        console.log("in routes");
        filter.findBfsiStats(function(err,BfsiStatsObj)
        {
          if(!err)
            {
              res.send(BfsiStatsObj);
            }
            else {
              console.log("eror",err);
            }
        })
      });

    router.get('/getDigithonStats',function(req,res) //find all the employees who are under particular mentor
      {
        console.log("in routes");
        filter.findDigithonStats(function(err,DigithonStatsObj)
        {
          if(!err)
            {
              res.send(DigithonStatsObj);
            }
            else {
              console.log("eror",err);
            }
        })
      });

    router.get('/getMentorStats',function(req,res) //find all the employees who are under particular mentor
      {
        console.log("in routes");
        filter.findMentorStats(function(err,MentorStatsObj)
        {
          if(!err)
            {
              console.log("Mentors Obj",MentorStatsObj)
              res.send(MentorStatsObj);
            }
            else {
              console.log("eror",err);
            }
        })
      });

  router.get('/allTheMentors',function(req,res)
{
  filter.allTheMentors(function(err,allTheMentors)
{
  if(!err)
  console.log("mentors array --> ",allTheMentors);
    //res.send(allTheMentors);//array of mentors
})
});
router.post('/addResource',function(req,res)
{
  console.log(req.body);
  filter.addAnEmployee(req.body,function(message)
{
  console.log("response-----",message);
    res.send(message);
})
})
module.exports=router;
