# portfolio
Like a v2 of [swag_site](https://github.com/swag31415/swag-site)

See it live [here](https://swag31415.github.io/Portfolio/)

## Usage
Just open `index.html`

## Notes
- `<insert-html>` is a bit weird in how it loads javascript; Just take a look at what `inserts/foot.html` does for Materialize. To make using Materialize in particular easier, it fires a `materialize-ready` event when Materialize is ready. Since the event may have fired before your code has run `js/html_inserts.js` includes a `Promise` called `m_ready` which resolves as `true` when Materialize is ready. To use it then just include the following around your code.
  ```javascript
  m_ready.then(() => {
    // Your code here
  })
  ```
  Feel free to use this construct for other inserts.

## License
[MIT](https://choosealicense.com/licenses/mit/)
