# 仮想 DOM と JavaScript エンジンについて

React は、仮想 DOM をメモリ上に構築する

変更があった場合、変更後の仮想 DOM と変更前の仮想 DOM を比較し、差分を変更分として描画している。

## JavaScript エンジン

仮想 DOM は、js エンジンのヒープ領域のメモリに保存される

仮想 DOM は、差分を図るだけ。実際の DOM 更新は、ブラウザのレンダリングエンジンが更新する

ブラウザエンジンの種類

- Blink、WebKit など

v8 は、Blink のコア

- Node.js: C++, V8
- Deno: Rust, V8
- Bun: Zig, JavaScriptCore (Webkit)

## js コードの読まれ方

実行コンテキスト単位で処理が実行される
コールスタックに積まれる


