var Election = artifacts.require("./Election.sol")

contract("Election",function(accounts){
    var election_i;
    it("Initializes with 2 candidates", function(){
        return Election.deployed().then(function(i){
            return i.candidatesCount();
        }).then(function(count){
            assert.equal(count,2);
        });
    });

    it("Candidates initialized with correct vals", function(){
        return Election.deployed().then(function(i){
            election_i = i;
            return election_i.candidates(1);
        }).then(function(c){
            assert.equal(c[0].toNumber(), 1,"Correct Id");
            assert.equal(c[2].toNumber(),0, "Correct votes")
            return election_i.candidates(2)
        }).then(function(c){
            assert.equal(c[0].toNumber(), 2,"Correct Id");
            assert.equal(c[2].toNumber(),0, "Correct votes")
        });
    });

});
