import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css'
import config from '../build/contracts/Tickets.json'

const CONTRACT_ADDRESS = config.networks['5777'].address;
const contract_abi = config.abi;

const web3 = new Web3(Web3.givenProvider || 'localhost:7545');
const contract = new web3.eth.Contract(contract_abi,CONTRACT_ADDRESS);

let account;

const account_El = document.getElementById('account');
const tickets_El = document.getElementById('tickets');

const refreshTickets = async () => {
    tickets_El.innerHTML = "Fetching Tickets..."
    
    //not sure how to attain TotalTickets
    const TOTAL_TICKETS = await contract.methods.TOTAL_TICKETS.call();
    console.log(TOTAL_TICKETS)

    for (let i = 0; i< 10; i++){
        const t = await contract.methods.tickets(i).call();
        console.log("Got ticket" + t)  
        //add into tickets_EL      
    }
}
const main = async () => {
    
    account_El.innerText = "Connecting Wallet...";
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    account_El.innerText = account;
    console.log(contract)
    await refreshTickets();
};

main();