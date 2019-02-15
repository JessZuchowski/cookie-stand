'use strict';

// helper functions

var _random = function(min, max) {
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
    store_open: 0600 
    store_close: 2000

    cookies_sold_each_hour (each means collection so this will be an array [])

    calculate_cookies_per_hour (method)
    calculate_cookies_all_hours (method)
    render
}
*/

var Cookie_stand = function (store_name, min_cust, max_cust, avg_cookies_per_cust, store_open, store_close){
  this.store_name = store_name;
  this.min_cust = min_cust;
  this.max_cust = max_cust; 
  this.avg_cookies_per_cust = avg_cookies_per_cust;
  this.store_open = store_open; 
  this.store_close = store_close;
  this.cookies_sold_each_hour = [];
  this.avg_cookies_per_cust = avg_cookies_per_cust || 6.3; 
};

Cookie_stand.prototype.cookies_per_hour = function () {
  var random_cust = Math.floor(_random(this.min_cust, this.max_cust));
  return Math.floor(this.avg_cookies_per_cust * random_cust);
};

Cookie_stand.prototype.calculate_cookies_sold_each_hour = function () {
  for (var i = 6; i < 20; i++) {
    var cookies_sold = this.cookies_per_hour();
    this.cookies_sold_each_hour.push(cookies_sold);
  }
};

var render_one_stores_table = function() {
  this.calculate_cookies_sold_each_hour();
  var target = document.getElementById('store-table');

  var store_row = document.createElement('tr');

  var name_td = document.createElement('td');
  name_td.textContent = this.store_name; 
  store_row.appendChild(name_td);

  for (var i = 0; i < this.cookies_sold_each_hour.length; i++) {
    var cookie_hour_td = document.createElement('td');
    cookie_hour_td.textContent = this.cookies_sold_each_hour[i];
    store_row.appendChild(cookie_hour_td);
  }
  
 
  target.appendChild(store_row);
};

Cookie_stand.prototype.render_as_a_table_row = render_one_stores_table;
//The var function is an object constructor with 7 parameters. Each sets the value of a property within the object. 
Cookie_stand.prototype.render = function() {
  this.calculate_cookies_sold_each_hour();

  var target = document.getElementById('store-table');
  var tr_el = document.createElement('tr');
  var td_el = document.createElement('td');
//creates a method to be rendered and uses Id from HTML (store-container) and creates elements within that target. Renders to page. 

  td_el.textContent = this.store_name;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.min_cust;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.max_cust;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.avg_cookies_per_cust;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.store_open;
  tr_el.appendChild(td_el);

  td_el = document.createElement('td');
  td_el.textContent = this.store_close;
  tr_el.appendChild(td_el);



  for(var i = 0; i < this.cookies_sold_each_hour.length; i++){
    td_el = document.createElement('td');
    td_el.textContent = this.cookies_sold_each_hour[i];
    tr_el.appendChild(td_el);
  }
//iterates for each hour to add array value to table. 

  target.appendChild(tr_el);
};  

//still need to add table data elements with text content for each parameter.

//=======init

var pike_store = new Cookie_stand(23, 65, 6.3, '1st and Pike', 6, 20);
var seatac_store = new Cookie_stand(3, 24, 1.2, 'SeaTac', 6, 20);
var seattle_center_store = new Cookie_stand(11, 38, 3.7, 'Seattle Center', 6, 20);
var cap_hill_store = new Cookie_stand(20, 38, 2.3, 'Capitol Hill', 6, 20);
var alki_store = new Cookie_stand(2, 16, 4.6, 'Alki', 6, 20);
//pike_store.render();
//takes the object and asigns a new keyword to call the constructor function. includes values used in the properties of the object. 

var all_stores = [pike_store, seatac_store, seattle_center_store, cap_hill_store, alki_store];
for(var i = 0; i < all_stores.length; i++){
  all_stores[i].render_as_a_table_row();
}

//pike_store.calculate_cookies_sold_each_hour();
//render_all_stores_table();




/*
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
*/