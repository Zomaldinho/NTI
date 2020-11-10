let clients = [];

let createClient = () => {
  while(true){
    let name = prompt("create Client name");
    if (name == 'exit') break;
    let accNo = prompt("create Client account number");
    let balance = parseInt(prompt("create Client balance"));
  
    let newClient = { name, accNo, balance };
    clients.push(newClient);
    
  }
  console.log(clients)
};

let showClient = () => {
  let accNo = prompt("Show Client Please enter Account Number");
  let client = clients.filter((cl) => (cl.accNo == accNo));
  console.log(client);
};

let tellerOp = () => {
  let accNo = prompt("TellerOp Please enter Account Number");
  let opType = prompt("TellerOp Please enter Add or Draw");
  let amount = prompt("TellerOp Please enter the amount");
  let index = clients.findIndex((cl) => (cl.accNo == accNo));
  console.log(index);
  if (opType.toLowerCase() == "add") {
    console.log('inside if')
    clients[index].balance += parseInt(amount);
  } else if (opType.toLowerCase() == "draw") {
    clients[index].balance -= parseInt(amount);
  }
  console.log(clients);
};

let balanceInquery = () => {
  let accNo = prompt("Balance Inq Please enter Account Number");
  let client = clients.filter((cl) => (cl.accNo == accNo));
  console.log(client.balance);
};

createClient();
// showClient();
tellerOp();
// balanceInquery();
toString()


document.querySelector('body').appendChild(document.createElement('p').innerHTML)