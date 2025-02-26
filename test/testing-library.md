# testing library

```javascript
const { container } = render(<Evaluation rating={2} />);
```

render の戻り値として`container`が存在する（他にも色々ある）

戻り値の`container`を利用すると dom 操作ができる

つまりレンダリングしたコンポーネント内の要素検証ができる
