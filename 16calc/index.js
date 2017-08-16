let add = parseInt("2",16)

let x = parseInt("800BD32E", 16);

for (i=0; i<1000; i++) {
  console.log(toHex(x) + " 0000");
  if(toHex(x) == "800BD334") {
    break;
  }
  x=x+add;
}

function toHex(n){
  return n.toString(16).toUpperCase();
}