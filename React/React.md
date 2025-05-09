# React の動き

React とは、UI 構築のための js ライブラリ

## UI とは

ユーザーと、コンピューターの接着面、疎通の境界

データの状態をきっかけに、コンポーネントを更新している

<!-- jsエンジン上で動く -->

## （Declarative）宣言的とは

状態、受け取ったデータの内容に応じて見た目を変化させている

データの変更をフックに見た目（コンポーネント）を更新させている

**インタラクティブ：双方向**

### update and render

update は、React コンポーネントから、仮想 DOM に対して、変更を通知する所作

render は、変更前の仮想 DOM から変更後の仮想 DOM に変更を反映させること

### when your data changes

React 内での、data は、state と props のみ

状態によって見た目が変化することは理にかなってる

### Declarative views make your code more predictable and easier to debug.

UI がコードとして記述されているから、**コードの実行過程と結果をより予測可能にして、デバッグをさらに容易にする**

### デバッグが簡単である理由

前提として、React は、状態によって UI が変化する概念。

そのため、適切な state、props がわたってきてないがために、描画できない。
ハードコーディングで、直接固定値を渡したり、react tool で状態を変更させることで、簡単にデバッグできる

## 自身の状態をカプセル化し、コンポーネントを作成する

呼び出し側は、コンポーネントの内部状況を知らなくて良い

コンポーネントのロジックは、テンプレートではなく、ロジックで描画できる

DOMと状態を分離できる

useStateを使って描画させるDOMを出しわけできる

これは状態によって見た目が変わるが、状態がないと画面を表示できないというわけではない。つまり関心を分離できている