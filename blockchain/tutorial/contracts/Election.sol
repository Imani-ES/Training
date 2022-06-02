pragma solidity >=0.4.22 <0.9.0;

contract Election {
    //Model Candidate
    struct Candidate  {
        uint id;
        string name;
        uint voteCount;
    }

    //Store candidate    
    mapping(uint =>Candidate) public candidates;
    //keep track of candidates
    uint public candidatesCount;
    //Constructor
    constructor () public {
        addCandidate("Chicken");
        addCandidate("Pizza");
    }
    function addCandidate (string memory _name) private {
        candidatesCount += 1;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
    function Elect (uint choice) public {
        candidates[choice].voteCount += 1;
    }

}