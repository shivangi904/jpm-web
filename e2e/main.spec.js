'use strict';

describe('Login Page', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    //page = require('./main.po');
  });

  
  it('should have a title', function() {    
    expect(browser.getTitle()).toEqual('cape-webapp');
  });

  it('should have a title', function() {    
    expect(browser.getTitle()).toNotEqual('cape webapp');
  });

  // it('should include jumbotron with correct data', function() {
  //   expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
  //   expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
  //   expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  // });

  // it('should list more than 5 awesome things', function () {
  //   expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  // });

  it('success login', function(){
      element(by.model('loginCtrl.userName')).sendKeys('test');
      element(by.model('loginCtrl.password')).sendKeys('test');
      element(by.css('.login-button')).click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:3000/index.html#/main/project-info/canvas-list/PRJ-009172');
  });

  it('failure login with invalid username', function(){
      element(by.model('loginCtrl.userName')).sendKeys('test1');
      element(by.model('loginCtrl.password')).sendKeys('test');
      element(by.css('.login-button')).click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:3000/index.html#/login');
      var errorMsg = browser.findElement(by.css('.ng-binding'));
      expect(errorMsg.getText()).toBe('Invalid Login');
      
  });

  it('failure login with invalid passsword', function(){
      element(by.model('loginCtrl.userName')).sendKeys('test');
      element(by.model('loginCtrl.password')).sendKeys('test1');
      element(by.css('.login-button')).click();
      expect(browser.getCurrentUrl()).toBe('http://localhost:3000/index.html#/login');
      var errorMsg = browser.findElement(by.css('.ng-binding'));
      expect(errorMsg.getText()).toBe('Invalid Login');      
  });

  it('failure login with correct error message', function(){
       element(by.model('loginCtrl.userName')).sendKeys('test');
       element(by.model('loginCtrl.password')).sendKeys('test');
      element(by.css('.login-button')).click();
      //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/index.html#/login');
      var errorMsg = browser.findElement(by.css('.ng-binding'));
      expect(errorMsg.getText()).toBe('Invalid Login');      
  });

  it('failure login with wrong error message', function(){
       element(by.model('loginCtrl.userName')).sendKeys('M1000001');
       element(by.model('loginCtrl.password')).sendKeys('9bebab98c80a755f1');
       element(by.css('.login-button')).click();
       //expect(browser.getCurrentUrl()).toBe('http://localhost:3000/index.html#/login');
       var errorMsg = browser.findElement(by.css('.ng-binding'));
       expect(errorMsg.getText()).toNotEqual('InvalidLogin');      
  });


  

});
