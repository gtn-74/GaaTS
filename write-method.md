# GaaTS

[GaaTS とは](https://qiita.com/sta/items/e85dc381774acc9ac3c2#gaats-%E3%81%A8%E3%81%AF)

## マークダウン記法

### 強調

normal **italic** normal // 太線  
normal _italic_ normal // 斜め線

### 取り消し線

~~取り消し線~~

### 箇条書き

- リスト 1
  - ネスト リスト 1_1
    - ネスト リスト 1_1_1
    - ネスト リスト 1_1_2
  - ネスト リスト 1_2
- リスト 2
- リスト 3

### 番号付き

1. 番号付きリスト 1
   1. 番号付きリスト 1_1
   1. 番号付きリスト 1_2
1. 番号付きリスト 2
1. 番号付きリスト 3

### 表組み

| header1    |     header2 |   header3    |
| :--------- | ----------: | :----------: |
| align left | align right | align center |
| a          |           b |      c       |

| Left align | Right align | Center align |
| :--------- | ----------: | :----------: |
| This       |        This |     This     |
| column     |      column |    column    |
| will       |        will |     will     |
| be         |          be |      be      |
| left       |       right |    center    |
| aligned    |     aligned |   aligned    |

\

### 引用

> お世話になります。xxx です。
>
> ご連絡いただいた、バグの件ですが、仕様です。

#### 二重引用

> お世話になります。xxx です。
>
> ご連絡いただいた、バグの件ですが、仕様です。
>
> > お世話になります。 yyy です。
> >
> > あの新機能バグってるっすね

### pre 記法

    # Tab
    class Hoge
        def hoge
            print 'hoge'
        end
    end

---

    # space
    class Hoge
      def hoge
        print 'hoge'
      end
    end

### 水平線

---

### リング表示

https://www.google.co.jp/

### プレビューコマンド

vscode で md のプレビューを確認できる!

`command + K + V`
