# serendie-datatable-sandbox

Serendie Design System の DataTable コンポーネントを検証するためのサンドボックスリポジトリです。

本リポジトリでは、DataTable の利用パターンや実装例を集約し、利用者がサンプルコードを参照しながら実装できることを目的としています。

---

## 目的

以下の観点で DataTable を検証します。

* 基本的な利用方法の確認
* 実践的な実装パターンの共有
* UI/UX の検証
* パフォーマンスの確認
* アクセシビリティの確認
* 不具合や改善点の洗い出し

---

## セットアップ

### 前提条件

* Node.js 20 以上
* npm または pnpm

### インストール

```bash
npm install
```

または

```bash
pnpm install
```

### 起動

```bash
npm run dev
```

または

```bash
pnpm dev
```

---

## サンプル一覧

### Basic

基本的な DataTable の表示例です。

確認項目

* カラム定義
* ソート
* データ表示

### Tooltip

長い文字列を省略表示し、Tooltip で全文を表示します。

確認項目

* text-overflow
* Tooltip 連携

## 検証観点

### UI

* レイアウト崩れがないこと
* 長文表示が適切であること
* アイコン配置が適切であること
