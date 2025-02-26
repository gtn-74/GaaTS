# test memo

## テストスイート

テストケースをまとめた単位で、関連する複数のテストケースをグループ化する他 m に利用する

## マッチャー

テストで期待する結果が返却されているか検証する記述。

マッチャーが、期待した結果であるか、否かを検証することがテストのよう

`手前がテスト内容.以降が期待する結果`

`expect(value).toBe(10);`

## よく使うマッチャー一覧

| **カテゴリ**         | **マッチャー**                                 | **用途**                         |
| -------------------- | ---------------------------------------------- | -------------------------------- |
| **基本**             | `toBe()`、`toEqual()`                          | 値の比較                         |
| **数値の範囲**       | `toBeGreaterThan()`、`toBeLessThan()`          | 範囲の確認                       |
| **非同期処理**       | `.resolves.toBe()`、`.rejects.toThrow()`       | Promise の結果をチェック         |
| **モック関数**       | `toHaveBeenCalled()`、`toHaveBeenCalledWith()` | 関数が呼ばれたかどうか           |
| **DOM テスト**       | `toBeInTheDocument()`                          | HTML の要素が存在するか          |
| **オブジェクト比較** | `toMatchObject()`                              | オブジェクトの部分一致をチェック |
| **時間のテスト**     | `jest.useFakeTimers()`                         | タイマー関連の処理をテスト       |

## よく使うマッチャー一覧

| **マッチャー**    | **説明**                       | **例**                                                  |
| ----------------- | ------------------------------ | ------------------------------------------------------- |
| `toBe(value)`     | 厳密な比較 (`===`)             | `expect(1 + 2).toBe(3);`                                |
| `toEqual(value)`  | オブジェクトや配列の中身を比較 | `expect({ a: 1 }).toEqual({ a: 1 });`                   |
| `toBeNull()`      | `null` かどうか                | `expect(null).toBeNull();`                              |
| `toBeDefined()`   | `undefined` でないか           | `expect(value).toBeDefined();`                          |
| `toBeTruthy()`    | `true` と評価されるか          | `expect(1).toBeTruthy();`                               |
| `toBeFalsy()`     | `false` と評価されるか         | `expect(0).toBeFalsy();`                                |
| `toContain(item)` | 配列や文字列に含まれるか       | `expect([1, 2, 3]).toContain(2);`                       |
| `toMatch(regex)`  | 文字列が正規表現にマッチするか | `expect('hello world').toMatch(/world/);`               |
| `toHaveLength(n)` | 配列や文字列の長さが `n` か    | `expect('abc').toHaveLength(3);`                        |
| `toThrow()`       | 例外を投げるか                 | `expect(() => { throw new Error('error') }).toThrow();` |

## スタブ

モックの一種、特定の入力に対して決まった出力を返すダミー関数

## スパイ

関数の呼び出し回数、引数を監視するためのモック
