// import {statement} from './src/PrintStatement.js';
stmt = require('./src/PrintStatement.js')
invoices = require('./data/invoices.json');
plays = require('./data/plays.json');

invoices.forEach((invoice) => {
  console.log(stmt.statement(invoice, plays));
});
