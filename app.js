'use strict';

// helper functions

var _random = function(min, max){
  return Math.random()*(max - min) + min; 
};

//======================

/*
Lists of Stores
    Lists of hours a store is open paired with total numbers.

Store objects {
    min_cust
    max_cust
    avg_cookies_per_customer (per means individual customer)
    store_name
    store_open: 0800 
    store_close: 1900

    cookies_sold_each_hour (each means collection so this will be an array [])

    calculate_cookies_per_hour (method)
    calculate_cookies_all_hours (method)
    render
}
*/
//=======Store Location: 1st and Pike
var Pike = {
  min_cust : 23,
  max_cust : 65,
  avg_cookies_per_customer : 6.3, 
  store_name : '1st and Pike',
  store_open : 8, 
  store_close : 19,
  cookies_sold_each_hour : []
};
//created object for store 1st and Pike.
Pike.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
}; 
//uses _helper and Math functions to generate random numbers for customers between min and max, returns integer from product of average cookies and customer. 
Pike.calculate_cookies_sold_each_hour = function () {
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
//creates function for store hours (from 0800-1900) that calculates cookies sold per hour and pushes the new elements to an array.
  console.log(this);
};

Pike.render = function (){
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');
//uses Id from HTML (store-container) and creates elements within that target. Renders to page. 
  h2_el.textContent = this.store_name;
//creates h2 text using newest store name.    
  for(var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);     
  }
//documents each new li (cookies sold each hour) and adds text ul.  
  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
//condenses li into ul into h2.  
};
//=======Store Location: Alki
var Alki = {
  min_cust : 2,
  max_cust : 16,
  avg_cookies_per_customer : 4.6, 
  store_name : 'Alki',
  store_open : 8, 
  store_close : 19,
  cookies_sold_each_hour : []
};

Alki.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};

Alki.calculate_cookies_sold_each_hour = function () {
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
  console.log(this);
};

Alki.render = function (){
  // li > h2(name), ul(store hours) > li(9 : 30 cookies);
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');

  h2_el.textContent = this.store_name;

  for(var i = 0; i < this.cookies_sold_each_hour.length; i++) {

    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);     
  }

  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);

};

//=======Store Location: CapHill
var CapHill = {
  min_cust : 20,
  max_cust : 38,
  avg_cookies_per_customer : 2.3, 
  store_name : 'Capitol Hill',
  store_open : 8, 
  store_close : 19,
  cookies_sold_each_hour : []
};
  
CapHill.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};
  
CapHill.calculate_cookies_sold_each_hour = function () {
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
  console.log(this);
};
  
CapHill.render = function (){
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');
  
  h2_el.textContent = this.store_name;
  
  for(var i = 0; i < this.cookies_sold_each_hour.length; i++) {
  
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);     
  }
  
  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
  
};



//=======Store Location: SeaTac

var SeaTac = {
  min_cust : 3,
  max_cust : 24,
  avg_cookies_per_customer : 1.2, 
  store_name : 'SeaTac',
  store_open : 8, 
  store_close : 19,
  cookies_sold_each_hour : []
};
  
SeaTac.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};
  
SeaTac.calculate_cookies_sold_each_hour = function () {
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
  console.log(this);
};
  
SeaTac.render = function (){
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');
  
  h2_el.textContent = this.store_name;
  
  for(var i = 0; i < this.cookies_sold_each_hour.length; i++) {
  
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);     
  }
  
  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
  
};

//=======Store Location: Seattle Center

var Seattle = {
  min_cust : 11,
  max_cust : 38,
  avg_cookies_per_customer : 3.7, 
  store_name : 'Seattle Center',
  store_open : 8, 
  store_close : 19,
  cookies_sold_each_hour : []
};
    
Seattle.calculate_cookies_per_hour = function(){
  var random_customers = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_customer * random_customers);
};
    
Seattle.calculate_cookies_sold_each_hour = function () {
  for(var i = this.store_open; i < this.store_close; i++){
    var cookies_sold = this.calculate_cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
  console.log(this);
};
    
Seattle.render = function (){
  var target = document.getElementById('store-container');
  var li_el = document.createElement('li');
  var h2_el = document.createElement('h2');
  var ul_el = document.createElement('ul');
    
  h2_el.textContent = this.store_name;
    
  for(var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    
    var hour_li_el = document.createElement('li');
    hour_li_el.textContent = this.cookies_sold_each_hour[i];
    ul_el.appendChild(hour_li_el);     
  }
    
  li_el.appendChild(h2_el);
  li_el.appendChild(ul_el);
  target.appendChild(li_el);
    
};

//=======init
Pike.calculate_cookies_sold_each_hour();
Pike.render();

Alki.calculate_cookies_sold_each_hour();
Alki.render();

CapHill.calculate_cookies_sold_each_hour();
CapHill.render();

SeaTac.calculate_cookies_sold_each_hour();
SeaTac.render();

Seattle.calculate_cookies_sold_each_hour();
Seattle.render();