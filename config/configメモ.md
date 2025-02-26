# configメモ

## tsconfigってどのタイミングで読み込まれてるの？

`dev` `next dev`を 'npm run dev' で立ち上げた際、tsconfigが読み込まれる。ローカルホストが立ち上がる際に、



## 1️⃣ TypeScript コードをパース & AST 化
- Next.js は tsconfig.json を読み取り、lib の設定に基づいて型定義を適用。
- TypeScript の パーサー（コンパイラAPI） がコードを AST（抽象構文木） に変換。
## 2️⃣ 型チェック（TypeScript の tsc 部分）
- AST を元に 型チェックを実行。
- lib の値（例: "DOM" や "DOM.Iterable"）に基づき、使用できる API や型を検証。
- 型エラーがある場合、この時点でエラーを出す（ただし、Next.js は npm run dev では型エラーを即座に止めない）。
## 3️⃣ Babel による JavaScript への変換
- Next.js は Babel を使って TypeScript の構文を JavaScript に変換。
- この時点で TypeScript の型情報は すべて削除 され、純粋な JavaScript コードになる。
- lib による影響は、このフェーズでは 発生しない（lib はあくまで型情報の補完用）。
## 4️⃣ JavaScript のコードを Webpack / SWC で最適化
- Next.js は SWC または Webpack を使用して、最適化された JavaScript を生成。
- lib とは関係なく、JavaScript の実行環境（ブラウザや Node.js）に適した形式でコードを処理。