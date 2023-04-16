# タスク当番表

## 機能

### タイトル

- 名前の変更

### メンバー

- 追加 (+ボタン)
- 削除 (-ボタン)
- 名前の変更

### 当番

- 何番目のメンバーが当番かを保持する
- 次の担当者へ変更
- 前の担当者へ変更

### URL

- URL コピー
- URL のクエリパラメータから設定を反映
  - title : 当番表名
  - position : 左から何番目が当番か
  - members : メンバー名の配列

サンプル

```
// 当番表名:当番表
// メンバー:hoge,fuga,piyo
// 当番:左から2番目(fuga)
http://localhost:3000/?member=hoge,fuge,piyo&position=2&title=%E5%BD%93%E7%95%AA%E8%A1%A8
```

## DESIGN

https://www.figma.com/file/otwUK0MlWndFvrQ21gqmUb/design?node-id=0%3A1&t=gZbcj7FPcKVeWrS6-1
