const bottoms = ["", "images/dress1.png", "", ""];

var bottom = 0;

const accs = ["", "images/acc1.png", "images/acc2.png", "images/acc3.png"];

var acc = 0;

function nextbottom() {
  if (bottom == bottoms.length - 1) {
    bottom = 0;
    document.getElementById("thebottom").setAttribute("src", bottoms[bottom]);
  } else {
    bottom++;
    document.getElementById("thebottom").setAttribute("src", bottoms[bottom]);
  }
  console.log(bottom);
}

function nextacc() {
  if (acc == accs.length - 1) {
    acc = 0;
    document.getElementById("theacc").setAttribute("src", accs[acc]);
  } else {
    acc++;
    document.getElementById("theacc").setAttribute("src", accs[acc]);
  }
  console.log(acc);
}
