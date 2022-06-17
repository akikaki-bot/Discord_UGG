# Discord User Guild Get (UGG)

BearerTokenからユーザー情報を取得し、Array<Data>で返却します。

# Types

Data (データの返却時に使用します。)

Use Type : "ArrayHikisuu"

```json

{
    id: string
    name: string
    icon: string
    owner: boolean
    permissions: number
    features: ArrayHikisuu
    permissions_new: string
}

```

ArrayHikisuu (ただの飾りです)

```json

[]

```

