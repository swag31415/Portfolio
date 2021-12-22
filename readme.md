# portfolio
Like a v2 of [swag_site](https://github.com/swag31415/swag-site)

See it live [here](https://swag31415.github.io/Portfolio/)

## Usage
Just open `index.html`

## Notes
- To access javascript functions generated by `<insert-html>` elements you need to wrap it with `window.onload`
  ```javascript
    window.addEventListener('load', function () {
      // Your code here
    })
  ```
- Materialize's `M` is included in the `foot.html` insert. When it's ready it fires the `materialize-ready` event which you can listen for as follows
  ```javascript
  window.addEventListener('materialize-ready', function () {
    // Your code here
  })
  ```
  Since the event may have fired before your code has run you can use a Promise to cover all the cases
  ```javascript
  var m_ready = new Promise(res => {
    if (typeof M == 'undefined') window.addEventListener('materialize-ready', () => res(true))
    else res(true)
  })

  m_ready.then(() => {
    // Your code here
  })
  ```
  Feel free to use this construct for other inserts. **This one in particular is included in `html_inserts.js` for convenience**

## License
[MIT](https://choosealicense.com/licenses/mit/)
