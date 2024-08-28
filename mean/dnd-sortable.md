# 20240826

[dnd-kit](https://docs.dndkit.com/)

## dnd-kit メモ

**UniqueIdentifier**  
`DragStartEvent、DragEndEvent の利用中、id は、string で返される`

## ではなぜ、UniqueIdentifier を使う必要があるのか

dnd は、柔軟性を求める機能。
従って、id は string や number など適当な型を要求することがある

```
const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props.id,
    })
```

listeners の中身
[dnd-kit:touch-action](https://docs.dndkit.com/api-documentation/sensors/touch#recommendations)

    # A パターン
    export function Container(props: ContainerType) {
      const { setNodeRef } = useDroppable({
        // useDroppable に渡す際、オブジェクトの形にする必要があるため{id:props.id}となる
        id: props.id,
      })
    }

---

    # B パターン
    export function Container({ id, items }: ContainerType) {
      const { setNodeRef } = useDroppable({
        id: id, // useDroppable に渡す際、オブジェクトの形にする必要があるため{id:props.id}となる
      })
    }

## Next.js における 'use client'と CSR の関係性

これは、レンダリング前と後で情報が異なりますよ？？ってエラー。  
厳密には、`サーバーサイドレンダリングで生成された DOM と、クライアントサイドで再レンダリングされた DOM が異なる場合にこのような問題が発生`

個人的には、`use client`書いてるし必要ない記述なんじゃない？と思い直した。  
が、下のエラーメッセージが吐き出された。

```
・エラーメッセージ
app-index.js:33 Warning: Prop aria-describedby did not match. Server: "DndDescribedBy-0" Client: "DndDescribedBy-2"
```

> 'use client' が宣言されているページであっても、aria-describedby に関するエラーが発生している理由は、Next.js のようなフレームワークでは、初期レンダリングが一度サーバーサイドで行われ、その後クライアントサイドでハイドレーション（hydration）されるという仕組みがあるためです。このハイドレーションプロセスで、サーバーサイドレンダリング時の状態とクライアントサイドでの状態に不一致が生じると、このような警告が発生することがあります。

Chat-GPT に質問したところ、`'use client'`の有無は関係なく、Next.js では、初回レンダリングは強制的にサーバーサイドレンダリングになる。その後 クライアントサイドで hydration（ハイドレーション）される。

最初にサーバーサイドレンダリングが発生するため、したの記述が必要になる。

```
// CSRにスイッチ // 'use client'が書いてあっても
  const [isClient, setIsClient] = React.useState<boolean>(false) // 初回レンダリング時、isClientはfalse
  React.useEffect(() => {
    setIsClient(true) // クライアントサイドでのみisClientをtrueに設定
  }, [])

  if (!isClient) {
    return null
  }
```

## コンテナの取得関数(SortableContext のバリュー位置が変わったときに動いている)

```
const findContainer = (id: UniqueIdentifier) => {
    // items(state)の中にidが含まれてたらidを返す
    if (id in items) {
      return id
    }
    // items(state)の中にidが含まれてたらidを返す。コンテナ内のitemIdである場合をカバーするために必要
    return Object.keys(items).find((key: string) =>
      items[key].includes(id.toString())
    )
  }
```

### handleDragStart

    #この書き方だと取れない
    const handleDragStart = (event: DragStartEvent) => {
      // eventオブジェクトからactiveプロパティを取り出している
        const { active: id } = event
        console.log(id)
      }

---

    # ドロップ要素を持ち上げたときに実行
    const handleDragStart = (event: DragStartEvent) => {
      // event オブジェクトから active プロパティを取り出している
      const { active } = event //eventからactiveを取り出している。
      const { id } = active
      setActiveId(id)
      }

### どうやって event から active が取れるかわかったのかについて

方法は 2 種類。

1. log で吐き出す
2. 引数として受け取っている event の型(DragStartEvent)の中身を確認する

```

import type { Active, Over } from '../store';
import type { Collision } from '../utilities/algorithms';
import type { Translate } from './coordinates';
interface DragEvent {
    activatorEvent: Event;
    active: Active;
    collisions: Collision[] | null;
    delta: Translate;
    over: Over | null;
}
export interface DragStartEvent extends Pick<DragEvent, 'active'> {
}
export interface DragMoveEvent extends DragEvent {
}
export interface DragOverEvent extends DragMoveEvent {
}
export interface DragEndEvent extends DragEvent {
}
export interface DragCancelEvent extends DragEndEvent {
}
export {};
```

```
const activeItems = ['1', '2', '3'];
const id = '2';
const activeIndex = activeItems.indexOf(id); // activeIndex の型は number になります
```

activeIndex の値は 1 になります。  
indexOf が id（この場合 '2'）が見つかった位置である 1 を返すから
