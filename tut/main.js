var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');

Game.creeps['Worker1'].role = 'harvester';
Game.creeps['Worker2'].role = 'harvester';
Game.creeps['Builder1'].role = 'builder';
Game.creeps['Guard1'].memory.role = 'guard';


for(var creepName in Game.creeps) {
    var creep = Game.creeps[creepName];

    if(creep.memory.role === 'harvester') {
        harvester(creep);
    }

    if(creep.memory.role === 'builder') {
        builder(creep);
    }
    if (creep.memory.role === 'guard') {
        guard(creep);   
    }
}
