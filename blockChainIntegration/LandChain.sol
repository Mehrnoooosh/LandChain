pragma solidity ^0.8.0;

contract LandChain {
    
    struct Transaction {
        bytes32 propertyHash;
        bytes32 realtorHash;
        uint sellPrice;
        uint sellDate;
    }
    
    Transaction[] public transactions;
    
    function recordTransaction(bytes32 _propertyHash, bytes32 _realtorHash, uint _sellPrice, uint _sellDate) public {
        transactions.push(Transaction(_propertyHash, _realtorHash, _sellPrice, _sellDate));
    }
    
    function getTransactionCount() public view returns (uint) {
        return transactions.length;
    }
    
    function getTransaction(uint index) public view returns (bytes32, bytes32, uint, uint) {
        return (transactions[index].propertyHash, transactions[index].realtorHash, transactions[index].sellPrice, transactions[index].sellDate);
    }
    
    function getTransactionsForProperty(bytes32 _propertyHash) public view returns (bytes32[] memory, bytes32[] memory, uint[] memory, uint[] memory) {
        uint count = 0;
        for (uint i = 0; i < transactions.length; i++) {
            if (transactions[i].propertyHash == _propertyHash) {
                count++;
            }
        }
        
        bytes32[] memory propertyHashes = new bytes32[](count);
        bytes32[] memory realtorHashes = new bytes32[](count);
        uint[] memory sellPrices = new uint[](count);
        uint[] memory sellDates = new uint[](count);
        
        uint index = 0;
        for (uint i = 0; i < transactions.length; i++) {
            if (transactions[i].propertyHash == _propertyHash) {
                propertyHashes[index] = transactions[i].propertyHash;
                realtorHashes[index] = transactions[i].realtorHash;
                sellPrices[index] = transactions[i].sellPrice;
                sellDates[index] = transactions[i].sellDate;
                index++;
            }
        }
        
        return (propertyHashes, realtorHashes, sellPrices, sellDates);
    }
}
