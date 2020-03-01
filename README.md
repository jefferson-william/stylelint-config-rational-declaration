# stylelint-config-rational-declaration

Stylelint config that sorts related property declarations by grouping together following the order:

1.  Positioning
2.  Structure
2.  Dimension
2.  Definition
3.  Typography
4.  Visual
5.  Animation
6.  Misc

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  /* Structure */
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  float: right;

  /* Grid */
  display: grid;
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;

  /* Dimension */
  width: 100px;
  height: 100px;

  /* Definition */
  border: 1px solid #888;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;

  /* Typography */
  color: #888;
  font: normal 16px Helvetica, sans-serif;
  line-height: 1.3;
  text-align: center;

  /* Visual */
  background-color: #eee;
  opacity: 1;

  /* Animation */
  transition: all 1s;

  /* Misc */
  user-select: none;
}
```

## Usage

1.  Add `stylelint`, `stylelint-order` and this package to your project:

```bash
npm install --save-dev stylelint stylelint-order stylelint-config-rational-declaration
# or, if you prefer yarn over npm:
yarn add --dev stylelint stylelint-order stylelint-config-rational-declaration
```

2.  Add this package to the end of your extends array inside Stylelint
    configuration (.stylelintrc for example):

```javascript
{
  "extends": [
    // "stylelint-config-standard",
    "stylelint-config-rational-declaration"
  ]
}
```

This shareable config contains the following:
```javascript
{
  "plugins": [
    "stylelint-order",
    "stylelint-config-rational-declaration/plugin"
  ],
  "rules": {
    "order/properties-order": [],
    "plugin/rational-declaration": [true, {
      "empty-line-between-groups": false,
    }]
  }
}
```

Since it adds `stylelint-order` and `stylelint-config-rational-declaration` to plugins and also adds required rules, you don't have to do this yourself when extending this config.


## Optional options / rules

#### empty-line-between-groups

If `true` adds an empty line between groups. The default value is `false`.

## FAQ

<details>
  <summary>Why should I use the rational order and group and sort CSS properties by type instead of alphabetical order?</summary>

  The pros and cons of both ways in detail:

* [Happy Potter and the Order of CSS](https://dev.to/thekashey/happy-potter-and-the-order-of-css-5ec)
* [“Outside In” — Ordering CSS Properties by Importance](https://webdesign.tutsplus.com/articles/outside-in-ordering-css-properties-by-importance--cms-21685)
</details>

## Credits

https://github.com/constverum/stylelint-config-rational-order/packages

* [Code Guide by @mdo](http://codeguide.co/)
* [Code Guide by HTML Academy](https://github.com/htmlacademy/codeguide)
