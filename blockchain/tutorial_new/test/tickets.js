const assert = require('assert');
const { isTypedArray } = require('util/types');
const Tickets = artifacts.require("Tickets");

contract('Tickets', (accounts) =>{
    const BUYER = accounts[1];
    var ticket_id = 1;    
    const BUYER_2 = accounts[2];
    const ticket_id_2 = ticket_id + 1;

    it('should allow for proper buying functionality', async() =>{
        const i = await Tickets.deployed();        
        //get tickets original state
        const original = await i.tickets(ticket_id);
        //buy ticket
        await i.buyTicket(ticket_id,{
            from: BUYER,
            value: original.price
        });
        //get ticket's updated state
        const updated = await i.tickets(ticket_id);
        assert.equal(updated.owner,BUYER,'The Buyer should now own this Ticket');
        
        //set up theif that tries to buy ticket 1 
        const ticket_2 = await i.tickets(ticket_id_2);
        try{
            await i.buyTicket(ticket_id_1,{
                from: BUYER_2,
                value: original.price
            });
            assert.ok(false,'This transaction should not have went through')
        }catch(err){assert.ok(true,err);};
             
        //set up broke boy test
        try{
            await i.buyTicket(ticket_id_2,{
            from: BUYER_2,
            value: 0
            });
            assert.ok(false,'This transaction should not have went through');

        }   catch(err) {assert.ok(true,err);};
        

    });
});