stmt = require('../src/PrintStatement');
invoices = require('../data/invoices.json');
plays = require('../data/plays.json');

const expected =
`Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;

invoices.forEach((invoice) => {
  test('statement', () => {
    expect(stmt.statement(invoice, plays)).toBe(expected);
  });
});
