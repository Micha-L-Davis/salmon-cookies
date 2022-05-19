import React from 'react';
const stores = [];
const trElems = [];
const tableData = [];

class Store {
  // constructor(location, minCust, maxCust, avgCookiePerSale) {
  //   this.location = location;
  //   this.minCust = minCust;
  //   this.maxCust = maxCust;
  //   this.avgCookiePerSale = avgCookiePerSale;
  //   this.hourlySales = [];

  //   //this.trElem = document.createElement('tr');
  //   stores.push(this);
  // }

  buildSalesData() {
    let total = 0;
    this.hourlySales[0] = this.location;
    for (let i = 1; i < 15; i++) {
      let sales = Math.round(this.randomHourlyCustomers() * this.avgCookiePerSale);
      total += sales;
      this.hourlySales[i] = sales;
    }
    this.hourlySales[15] = total;
    tableData.push(this.hourlySales);
  };

  randomHourlyCustomers() {
    return randomIntInclusive(this.minCust, this.maxCust);
  };

  // renderStore = function (parent, isNew = false) {
  //   this.buildSalesData();
  //   if (isNew) {
  //     parent.appendChild(this.trElem);
  //   }
  //   else {
  //     removeAllChildren(this.trElem);
  //   }
  //   populateRowData(this.hourlySales, this.trElem);
  // };

  randomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  buildSalesData();
  return;
};
