var should=require("chai").should();
var supertest=require('supertest');
var app=require('../app.js');
var server=supertest('http://localhost:8080/lbgRoute');
describe('Sample unit test for getOneById route',function () {

  it("should return Resource Details",function (done) {
    console.log("inside .........");
    server
    .get('/getOneById/326740')
  //  .expect('content-type',/json/)
    .expect(200)
    .end(function (err,res) {
      if(err)
      throw err;
      console.log(res.length);
      var arr=res.body[0];
    //  console.log(arr["Emp No"]);
      //res.status.should.equal(200);
      //res.body.error.should.equal(false);
      done();
    });
  });
});
describe('Sample unit test for all route',function () {
  //should return home page
  it("should return all Resource Details",function (done) {
    //calling home page api
    server
    .get('/getAll')
  //  .expect('content-type',/json/)
    .expect(200)
    .end(function (err,res) {
      if(err)
      throw err;
      console.log(res.body.length);
      done();
    });
  });
});
describe('Sample unit test for allTheEmployeesByMentorName route',function () {
  //should return home page
  it("should return all Resource Details by Mentor name",function (done) {
    //calling home page api
    server
    .get('/allTheEmployeesByMentorName/Gunjan Gupta')
  //  .expect('content-type',/json/)
    .expect(200)
    .end(function (err,res) {
      if(err)
      throw err;

      console.log(res.body.length);

      done();
    });
  });
});
describe('Sample unit test for getBfsiStats route',function () {
  //should return home page
  it("should return all BFSI course Details",function (done) {
    //calling home page api
    server
    .get('/getBfsiStats')
  //  .expect('content-type',/json/)
    .expect(200)
    .end(function (err,res) {
      if(err)
      throw err;

      console.log(res.body.length);
      done();
    });
  });
});
describe('Sample unit test for getAgileStats route',function () {
  //should return home page
  it("should return all Aglile couerse Details",function (done) {
    //calling home page api
    server
    .get('/getAgileStats')
  //  .expect('content-type',/json/)
    .expect(200)
    .end(function (err,res) {
      if(err)
      throw err;

      console.log(res.body.length);

      done();
    });
  });
});
describe('Sample unit test for getDigithonStats route',function () {
  //should return home page
  it("should return all Digithon Details",function (done) {
    //calling home page api
    server
    .get('/getDigithonStats')
  //  .expect('content-type',/json/)
    .expect(200)
    .end(function (err,res) {
      if(err)
      throw err;

      console.log(res.body.length);

      done();
    });
  });
});
describe('Sample unit test for getMentorStats route',function () {
  //should return home page
  it("should return all Mentors Details",function (done) {
    //calling home page api
    server
    .get('/getMentorStats')
  //  .expect('content-type',/json/)
    .expect(200)
    .end(function (err,res) {
      if(err)
      throw err;

      console.log(res.body.length);

      done();
    });
  });
});
/*describe('Sample unit test for allTheMentors route',function () {
  //should return home page
  it("should return all mentors names Details",function (done) {
    //calling home page api
    server
    .get('/allTheMentors')
  //  .expect('content-type',/json/)
    .expect(200)
    .end(function (err,res) {
      if(err)
      throw err;

      console.log(res.body.length);

      done();
    });
  });
});
*/
/*describe('Sample unit test for addResource route',function () {
  //should return home page
  it("should return success",function (done) {
    //calling home page api
    server
    .post('/addResource')
  //  .expect('content-type',/json/)
    .expect(200)
    .end(function (err,res) {
      if(err)
      throw err;

      console.log(res.body.length);

      done();
    });
  });
});
*/
