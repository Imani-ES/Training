pragma solidity >=0.4.22 <0.9.0;

contract Election {
    //Store candidate
    //read candidate
    //Constructor
    
    string public candidate1;
    uint public votes1 = 0;
    string public candidate2;
    uint public votes2 = 0;

    constructor () public {
        candidate1 = "Candidate 1";

    }

    function Elect (uint choice) private {
        if (choice == 1) {
            votes1 += 1;
        }
        if (choice == 2)
            votes2 += 1;
    }

}