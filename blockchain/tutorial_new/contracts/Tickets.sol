pragma solidity >= 0.4.22 <0.9.0;

//uint constant TOTAL_TICKETS = 10;

contract Tickets{
    
    address public owner = msg.sender;

    //Create Ticket Object
    struct Ticket {
        uint id;
        uint price;
        address owner;
    }
    uint constant public TOTAL_TICKETS = 10;

    Ticket[TOTAL_TICKETS] public tickets;

    constructor(){
        //Create tickets
        for(uint i = 0; i < TOTAL_TICKETS; i+= 1){
            tickets[i].price = 1e16 - i*10; //.01 Ether
            tickets[i].id = i;
            tickets[i].owner = address(0x0);
        }

    }

    //function for buying tickets
    function buyTicket(uint ticket_id) external payable{
        require(ticket_id < TOTAL_TICKETS && ticket_id >= 0);
        require(tickets[ticket_id].owner == address(0x0));
        require(msg.value >= tickets[ticket_id].price);
        tickets[ticket_id].owner = msg.sender;
    }

    //function ticket_length() public {    }
}