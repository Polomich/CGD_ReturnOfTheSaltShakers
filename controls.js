const hats = ["", "images/hat1.png", "images/hat2.png"];

var hat = 0;

const tops = [
  "",
  "images/top1.png",
  "images/top2.png",
  "images/top3.png",
  "images/top4.png",
  "images/top5.png",
  "images/top6.png",
  "images/top7.png",
  "images/top8.png",
];

var topp = 0; // using 'topp' instead of 'top' because it's a reserved variable name.

const bottoms = [
  "",
  "images/bottom1.png",
  "images/bottom2.png",
  "images/bottom3.png",
  "images/bottom4.png",
];

var bottom = 0;

const shoes = ["", "images/shoe1.png", "images/shoe2.png"];

var shoe = 0;

const accs = [
  "",
  "images/acc1.png",
  "images/acc2.png",
  "images/acc3.png",
  "images/acc4.png",
  "images/acc5.png",
  "images/acc6.png",
  "images/acc7.png",
];

var acc = 0;
var acc2 = 0;

function nexthat() {
  console.log(hat);
  console.log(hats[hat]);
  if (hat == hats.length - 1) {
    hat = 0;
    document.getElementById("thehat").setAttribute("src", hats[hat]);
  } else {
    hat++;
    document.getElementById("thehat").setAttribute("src", hats[hat]);
  }
  console.log(hat);
}

function nexttop() {
  console.log(topp);
  console.log(tops[topp]);
  if (topp == tops.length - 1) {
    topp = 0;
    document.getElementById("thetop").setAttribute("src", tops[topp]);
  } else {
    topp++;
    document.getElementById("thetop").setAttribute("src", tops[topp]);
  }
  console.log(topp);
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

function nextshoe() {
  if (shoe == shoes.length - 1) {
    shoe = 0;
    document.getElementById("theshoe").setAttribute("src", shoes[shoe]);
  } else {
    shoe++;
    document.getElementById("theshoe").setAttribute("src", shoes[shoe]);
  }
  console.log(shoe);
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

function nextacc2() {
  if (acc2 == accs.length - 1) {
    acc2 = 0;
    document.getElementById("theacc2").setAttribute("src", accs[acc2]);
  } else {
    acc2++;
    document.getElementById("theacc2").setAttribute("src", accs[acc2]);
  }
  console.log(acc2);
}
