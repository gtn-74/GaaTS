# メモリとポインター

## 多分

```c
#include <stdio.h>

int main() {
    int x = 42;
    int *p = &x; // x のアドレスを p に格納

    printf("x のアドレス: %p\n", (void*)&x);
    printf("p の値（x のアドレス）: %p\n", (void*)p);
    printf("*p の値（x の値）: %d\n", *p); // ポインタを通じて x の値を取得

    return 0;
}

```

```go
package main

import "fmt"

func main() {
    x := 42
    p := &x // x のアドレスを p に格納

    fmt.Printf("x のアドレス: %p\n", &x)
    fmt.Printf("p の値（x のアドレス）: %p\n", p)
    fmt.Println("*p の値（x の値）:", *p) // ポインタを通じて x の値を取得
}

```