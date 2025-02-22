-- 簡単な出力
select
    "*",
from
    "tableA"
    -- where句で、
select
    'day',
    "cash",
    'tableB.payment',
    "tableC.category"
from
    "tableA"
    join "tableB" on "tableA.payment_id" = "tableB.id"
    join "tableC" on "tableB.category_id" = "tableC.id"
where "cash" > HOGE