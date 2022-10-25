# **個人練習 - SongRock**

### 練習初衷
 - 搭建一個與參考頁面同樣的網頁。
 - 練習 CSS 切版。
 - 透過原生 JS / Vue 達成導覽列的變化。
 - 以 SCSS 及 CSS 的單位選擇，完成 RWD 的建構。

### 參考頁面
**[SingingRock 商品頁面](https://www.singingrock.com/working-and-rescue-harness-accessories)**

*僅參考網頁排版與設計作為應徵作品使用，無其他商業之用途。*

## 導覽列
### 目的
 - 導覽列下捲時都固定於頁面最上方。
 - 下捲時導覽列顏色變化，吸頂後顏色變回。
 - RWD，小視窗時導覽列選單縮合為漢堡按鈕。
### 技術使用
 - 利用 CSS position 將導覽列固定於頁面上方。
 - 透過監聽 window scroll 事件，讓下捲開始後，切換導覽列顏色的 class。  
 - 監聽 window resize 事件，讓視窗變小時，切換成 phone 版本的 component。
   - 利用 Vue transition 加上 **[Animate.css](https://animate.style/)** 達成點選後選單與搜尋框下拉出現的功能。
   
**檔案位置：** js/header.js 、 js/headerPhone.js

## 商品陳列
### 目的
 - 讓商品列表置中，個別商品從左至右排列向下。
 - RWD時，從四個一列響應成二個一列。
### 技術使用
 - CSS flex排列，並使用flex-wrap。
 - 將商品的資訊寫入至Vue，並以Vue做數量上的渲染。
 
**檔案位置：** js/app.js 、 scss/_stuff.scss

## 其他
 - 使用CSS / SCSS完成RWD設置。
 - 使用ES6 Module串接各component的JS檔案。
