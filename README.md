<h1 align="center">Welcome to anime.js 👋</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/@freezegold/anime.js?orange=blue" />
  <a href="https://www.npmjs.com/package/@freezegold/anime.js">
    <img alt="downloads" src="https://img.shields.io/npm/dm/@freezegold/anime.js.svg?color=blue" target="_blank" />
  </a>
  <a href="https://github.com/freezegr/insta.js/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://github.com/freezegr/gitmoji-changelog">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
</p>

## Instaletion 

`npm i @freezegold/covid-19 --save`

## example

```js
const virus = require('@freezegold/covid-19');

virus.covid('global', (err, res) => {
  if(err) throw err
  console.log(res)
  /* return 
    {
      confirmed: '53,479,378',
      recovered: '34,519,061',
      deaths: '1,304,682'
    }
  */
});

virus.covid('greece', (err, res) => {
  if(err) throw err
  console.log(res)
  /* return 
    {
      confirmed: '69,675',
      recovered: '23,074',
      deaths: '997'
    }
  */
});
```