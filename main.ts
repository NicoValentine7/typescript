// any vs unknown

let anyInput: any;
let s: string;

anyInput = 3;
s = "str";
s = anyInput; // !?
console.log("s", s);

// unknown
let unknownInput: unknown;
// s = unknown;

unknownInput = "unko now!";

// unKnownは型チェックしないと使えない
if (typeof unknownInput === "string") {
  s = unknownInput;
}

console.log("unknown", unknownInput);

// never型
// never型は、関数が終了しないか、常に例外を投げることを表します。つまり、その関数から値が戻ることは「決して」ないということです。これは、実行が関数の呼び出し元に戻ることがない場合に使用されます。
// never型は、不到達コード（例: 無限ループ、例外を投げる関数）に適用されます。

function log(str: string): void {
    console.log(str);
}

function error(msg: string): never {
    throw new Error(msg);
}

log("string");
error("errorだよ😇");
