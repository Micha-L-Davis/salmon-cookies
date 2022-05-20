import React from 'react';

const stores = [];
const tableData = [];

function Store (location, minCust, maxCust, avgCookiePerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.hourlySales = [];

  stores.push(this);
};

// eslint-disable-next-line no-unused-vars
const seattle = new Store('Seattle', 23, 65, 6.3);
// eslint-disable-next-line no-unused-vars
const tokyo = new Store('Tokyo', 3, 24, 1.2);
// eslint-disable-next-line no-unused-vars
const dubai = new Store('Dubai', 11, 38, 2.3);
// eslint-disable-next-line no-unused-vars
const paris = new Store('Paris', 20, 38, 2.3);
// eslint-disable-next-line no-unused-vars
const lima = new Store('Lima', 2, 16, 4.6);

function randomHourlyCustomers(store){
  let customersPerHour = (Math.floor(Math.random() * (store.maxCust - store.minCust + 1) + store.minCust))
  return customersPerHour;
}

function randomCookiesPerHour(store){
  let hourlyCookieTotal = Math.ceil(randomHourlyCustomers(store) * (store.avgCookiePerSale))
  return hourlyCookieTotal;
}

function buildStoreSalesData(store){
  let total = 0;
  let storeArr = [];
  storeArr.push(store.location);
  for(let i = 0; i < 14; i++){
    let hourlytotal = randomCookiesPerHour(store)
    total += hourlytotal;
    storeArr.push(hourlytotal)
  }
  storeArr.push(total);
  return storeArr;
}


let SalesData = () => {

  return(
    <tbody>
    <tr>
      {
        buildStoreSalesData(seattle).map((element , idx) => (
          <td key={idx}>{element}</td>
        ))
      }
    </tr>
    <tr>
        {
          buildStoreSalesData(tokyo).map((element , idx) => (
            <td key={idx}>{element}</td>
          ))
        }
    </tr>
    <tr>
        {
          buildStoreSalesData(dubai).map((element , idx) => (
            <td key={idx}>{element}</td>
          ))
        }
    </tr>
    <tr>
        {
          buildStoreSalesData(paris).map((element , idx) => (
            <td key={idx}>{element}</td>
          ))
        }
    </tr>
    <tr>
        {
          buildStoreSalesData(lima).map((element , idx) => (
            <td key={idx}>{element}</td>
          ))
        }
    </tr>
    </tbody>
  )
} 

export default SalesData;

// function buildSalesData() {
//   let total = 0;
//   this.hourlySales[0] = this.location;
//   for (let i = 1; i < 15; i++) {
//     let sales = Math.round(this.randomHourlyCustomers() * this.avgCookiePerSale);
//     total += sales;
//     this.hourlySales[i] = sales;
//   }
//   this.hourlySales[15] = total;
//   tableData.push(this.hourlySales);
// };


//   randomHourlyCustomers() {
//     return randomIntInclusive(this.minCust, this.maxCust);
//   };

//   renderStore = function (parent, isNew = false) {
//     this.buildSalesData();
//     if (isNew) {
//       parent.appendChild(this.trElem);
//     }
//     else {
//       removeAllChildren(this.trElem);
//     }
//     populateRowData(this.hourlySales, this.trElem);
//   };

//   randomIntInclusive(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   buildSalesData();
//   return;
