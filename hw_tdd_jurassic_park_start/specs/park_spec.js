const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function(){

  let park;
  let dino;
  let bigdino;
  let veggiesaur;

  beforeEach(function(){
    park = new Park("Siam Park", 10);
    dino = new Dinosaur('t-rex','carnivore', 200);
    bigdino = new Dinosaur('megasaurous', 'super-carnivore', 500);
    veggiesaur = new Dinosaur('veggiesaurous', 'omnivore', 20);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Siam Park");
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection_of_dinos;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino);
    const actual = park.collection_of_dinos;
    assert.deepStrictEqual(actual, [dino]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino);
    park.addDino(bigdino);
    park.addDino(veggiesaur);
    park.removeDino(bigdino);
    const actual = park.collection_of_dinos;
    assert.deepStrictEqual(actual, [dino, veggiesaur]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dino);
    park.addDino(bigdino);
    park.addDino(veggiesaur);
    const actual = park.whatAttractsMostVisitors();
    assert.strictEqual(actual, 500);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
