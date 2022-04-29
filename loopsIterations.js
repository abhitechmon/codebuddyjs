// level {1/2/3}

function triangle(n) {

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      console.log(" ");
    }
    for (let k = 1; k <= i; k++) {
      console.log(k);
    }
    for (let l = i - 1; l >= 1; l--) {
      console.log(l);
    }
    console.log("\n");
  }
}

let rows=4;
triangle(rows);