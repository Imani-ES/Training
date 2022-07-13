import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.css'
import config from '../build/contracts/Tickets.json'

const CONTRACT_ADDRESS = config.networks['5777'].address;
const contract_abi = config.abi;

const web3 = new Web3(Web3.givenProvider || 'localhost:7545');
const contract = new web3.eth.Contract(contract_abi,CONTRACT_ADDRESS);

let account;

const account_El = document.getElementById('account')

const main = async () => {
    const accounts = await web3.eth.requestAccounts();
    account = accounts[0];
    account_El.innerText = account
};

main();