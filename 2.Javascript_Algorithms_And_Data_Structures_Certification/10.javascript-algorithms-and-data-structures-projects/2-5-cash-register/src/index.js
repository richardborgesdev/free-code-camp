const moneyName = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  ONE_HUNDRED: 100
};

const findInCashRegister = (change, cid) => {
  for (let index = cid.length - 1; index >= 0; index--) {
    const [name, inCash] = cid[index];

    if (change >= moneyName[name] && moneyName[name] <= inCash) {
      return { index: index, decrease: moneyName[name] };
    }
  }

  return false;
};

const registerOut = (cid, changeRegister) => {
  let change = [];
  let status = "CLOSED";
  console.log(cid, changeRegister);

  for (let index = 0; index < cid.length; index++) {
    if (changeRegister[index][1] > 0) {
      change.push(changeRegister[index]);
      status = "OPEN";
    } else if (cid[index][1] === 0) {
      change.push(cid[index]);
    } else if (cid[index][1] < 0) {
      change.push(cid[index]);
      status = "INSUFFICIENT_FUNDS";
    }
  }

  change.reverse();
  return { status, change };
};

const checkCashRegister = (price, cash, cid) => {
  let change = cash - price;
  let registerFound = findInCashRegister(change, cid);
  let changeRegister = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];

  while (registerFound) {
    change = parseFloat(change - registerFound.decrease).toFixed(2);

    cid[registerFound.index][1] -= registerFound.decrease;
    changeRegister[registerFound.index][1] += registerFound.decrease;

    registerFound = findInCashRegister(change, cid);
  }

  return registerOut(cid, changeRegister);
};
/*
console.log(
  "1,2",
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]),
  { status: "OPEN", change: [["QUARTER", 0.5]] }
);

console.log(
  3,
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]),
  {
    status: "OPEN",
    change: [
      ["TWENTY", 60],
      ["TEN", 20],
      ["FIVE", 15],
      ["ONE", 1],
      ["QUARTER", 0.5],
      ["DIME", 0.2],
      ["PENNY", 0.04]
    ]
  }
);
*/
console.log(
  4,
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  { status: "INSUFFICIENT_FUNDS", change: [] }
);
/*
console.log(
  5,
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  { status: "INSUFFICIENT_FUNDS", change: [] }
);

console.log(
  6,
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]),
  {
    status: "CLOSED",
    change: [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ]
  }
);
*/
