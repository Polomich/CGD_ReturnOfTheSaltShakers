const tops = ["", "images/top1.png", "images/top2.png", "images/top3.png"];

var top = 0;

const bottoms = [
  "",
  "images/bottom1.png",
  "images/bottom2.png",
  "images/bottom3.png",
];

var bottom = 0;

const accs = ["", "images/acc1.png", "images/acc2.png", "images/acc3.png"];

var acc = 0;

function nexttop() {
  if (top == tops.length - 1) {
    top = 0;
    document.getElementById("thetop").setAttribute("src", tops[top]);
  } else {
    top++;
    document.getElementById("thetop").setAttribute("src", tops[top]);
  }
  console.log(top);
}

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
