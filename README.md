# Ember-cli-number-abbr
[![Build Status](https://travis-ci.org/lazybensch/ember-cli-number-abbr.svg)](https://travis-ci.org/lazybensch/ember-cli-number-abbr)


This addon provides you with a helper that formats large numbers in a human readable form. It's quite straight forward, just have a look at the examples below:

## Examples

The most basic example:
```html
<label>{{number-abbr 14984374}}</label>
<label>{{number-abbr 1000000000000000000000000000000000}}</label>
```
```html
<label>15M</label>
<label>1Dec</label>
```

You can change the delimiter:
```html
<label>{{number-abbr 1728437411}}</label>
<label>{{number-abbr 1728437411 ','}}</label>
```
```html
<label>1.72M</label>
<label>1,72M</label>
```

You can change the precision *(amount of significant numbers rather then decimal places. this is usefull for styling)*:
```html
<label>{{number-abbr 1728437411 '.' 5}}</label>
```
```html
<label>1.72843M</label>
```

You can enable padding so your numbers will allways have a fixed width:
```html
<label>{{number-abbr 14100000000 '.' 4}}</label>
<label>{{number-abbr 14100000000 '.' 4 true}}</label>
```
```html
<label>14.1B</label>
<label>14.100B</label>
```

You can provide your own list of abbreviations:
```javascript
  withSpaces: ['', ' K', ' M' , ' B', ' T', ' Qua', ' Qui', ' Sex', ' Sep', ' Oct', ' Non', ' Dec'],
  withSpaces: ['', ' Thousand', ' Million' , ' Billion', '...'],
  theRealThing: ['', ' Thousand', ' Million' , ' Milliard', '...'],
```
```html
<label>{{number-abbr 14100000000 '.' 4 withSpaces}}</label>
<label>{{number-abbr 12100000000 '.' 4 fullWords}}</label>
<label>{{number-abbr 12100000000 '.' 4 theRealThing}}</label>
```
```html
<label>14.1 B</label>
<label>12.100 Billion</label>
<label>12.100 Milliard</label>
```

## Installation

To use this addon in your project, just type:
```
$ ember install ember-cli-number-abbr
```
or for older versions of ember-cli *(pre 1.4.0)*:
```
$ npm install --save-dev ember-cli-number-abbr
$ ember generate ember-cli-number-abbr
```

## Contributing

I am happy about any contributions or PRs. If you are missing some piece of functionality please open an issue. This addon is quite simple and can be extended easily.

* `git clone https://github.com/lazybensch/ember-cli-number-abbr`
* `cd ember-cli-number-abbr`
* `npm install`
* `bower install`
* `ember test`

