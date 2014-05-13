'use strict';

var request = require('request');

describe('Always true tests', function(){

  it('should be true (sync)', function(){
    true.should.be.true;
  });

  it('should be true (async)', function(done){
    true.should.be.true;
    return done();
  });
});


describe('Test using request to pull a webpage', function(){
  var url = 'http://www.google.com';
  it('should pull ' + url, function(done){
    request(url, function(err, response, body){
      (err === null).should.be.true;
      body.should.be.a.String;
      return done();
    });
  });


});

