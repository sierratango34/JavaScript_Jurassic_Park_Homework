const Park = function(name, ticket_price){
  this.name = name;
  this.ticket_price = ticket_price;
  this.collection_of_dinos = [];
};

Park.prototype.addDino = function(dino){
  this.collection_of_dinos.push(dino);

};

Park.prototype.removeDino = function(dino){
  let positionOfDinotoDelete = this.collection_of_dinos.indexOf(dino);
  dinoRemoved = this.collection_of_dinos.splice(positionOfDinotoDelete, 1);
};

Park.prototype.whatAttractsMostVisitors = function(){
  let dinoNumbers
    this.collection_of_dinos.push(dino.guestsAttractedPerDay);
  sortedDinoNumbers = dinoNumbers.sort();
  return sortedDinoNumbers.pop();
};

// Park.prototype.whatAttractsMostVisitors = function(){
//
//
//   this.collection_of_dinos
// };

module.exports = Park;
