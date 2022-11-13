console.log("hello world");

let points = [
  {x: 0, y: 0},
  {x: 1, y: 1}
];

let primes = [2, 3, 5, 7];

points.dist = function() {
  let p1 = this[0];
  let p2 = this[1];
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  return Math.sqrt(a*a + b*b);
};

// points.dist()

function ads(x) {
  if (x >= 0) {
    return x;
  } 
  else {
    return -x;
  }
}
// ads(10) === ads(-10)

function sum(array) {
  let sum = 0;
  for(let x of array) {
    sum += x;
  }
  return sum;
}
// sum(primes)

function factorial(n) {
  let product = 1;
  while(n > 1) {
    product *= n;
    n--;
  }
  return product;
}
// factorial(5)

function factorial2(n) {
  let i, product = 1;
  for(i = 2; i <= n; i++) 
    product *= i;
    return product;
}
// factorial2(5)


class Point {
  constructor(x, y ) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y
    );
  }
}
let p = new Point(2,2);

// p.distance()

// 文字頻度ヒストグラムを計算するプログラム
class DefaultMap extends Map {
  constructor(defaultValue) {
    super();
    this.defaultValue = defaultValue;
  }

  get(key) {
    if (this.has(key)) {
      return super.get(key);
    }
    else {
      return this.defaultValue;
    }
  }
}

// このクラスは文字頻度ヒストグラムを計算し、表示する
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0);
    this.totalLetters = 0;
  }
  // この関数は、textの中の文字でヒストグラムを更新する
  add(text) {
    text = text.replace(/\s/g, "").toUpperCase();

    // テキストの中の文字をループする
    for(let character of text) {
      let count = this.letterCounts.get(character);
      this.letterCounts.set(character, count+1);
      this.totalLetters++;
    }
  }
  // ヒストグラムを文字列に変換して、ASCIIグラフィックとして表示する
  toString() {
    let entries = [...this.LetterCounts];

    // 文字数順にソートする。文字数が同じの場合は、アルファベット順でソートする
    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });
    
    // 文字列をパーセントに変換する
    for(let entry of entries) {
      entry[1] = entry[1] /this.totalLetters*100;
    }

    // 1%未満の文字は表示しない
    entries = entries.filter(entry => entry[1] >= 1);

    // 各項目を一行のテキストに変換する。
    let lines = entries.map (
      ([l,n]) => `${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    // 各行を改行文字で区切って結合し、結合した文字列を返す
    return lines.join("\n");
  }
}

// このasync関数はHistgramオブジェクトを生成する。
// 表示入力からテキストを非同期に読み出し、読み出したテキストをヒストグラムに
// 追加する。テキストを最後まで読み出したら、ヒストグラムを返す。

async function histogramFromStdin() {
  Process.stdin.setEncoding("utf-8");
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

// この最後の一行がこのプログラムのメイン部分
// 標準入力からHistogramオブジェクトを生成し、ヒストグラムを表示する。
histogramFromStdin().then(histogram => { console.log(histogram.toString());
});

// 正規表現
let text = "testing: 1, 2, 3";
let pattern = /\d+/g;

pattern.test(text); //true: マッチする部分が存在する
text.search(pattern); //9: 最初にマッチした文字の位置
text.match(pattern); //["1", "2", "3"]: 全てのマッチを含む配列
text.replace(pattern, "#"); //"testing : #, #, # "  置き換えられる
text.split(/\D+/); //["", "1", "2", "3"]: 数字以外の文字で配列に分割

// 分割代入
let [x, y] = [1, 2];
[x, y] = [x + 1, y + 1];
[x, y] = [y, x];
