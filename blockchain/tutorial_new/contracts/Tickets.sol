pragma solidity >= 0.4.22 <0.9.0;

uint constant TOTAL_TICKETS = 10;

contract Tickets{
    
    address public owner = msg.sender;

    struct Ticket {
        uint id;
        uint price;
        bool sold;
    }

    Ticket[TOTAL_TICKETS] public tickets;

    constructor(){
        for(uint i = 0; i < TOTAL_TICKETS; i+= 1){

        }

    }

}