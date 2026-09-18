let frogamt = prompt("how many frog");
const maxFrogCapacity = 15
let spaceforfrog = frogamt > 0 && frogamt <= maxFrogCapacity;
let nofrog = frogamt > maxFrogCapacity;

if (spaceforfrog){
    print("hey frog, come on in frog");

} else {
    print("no more room, frog...");
}