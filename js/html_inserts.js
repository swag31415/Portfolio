customElements.define('insert-html', class InsertHTML extends HTMLElement {
  constructor () {
    super()
    let link = this.getAttribute('link')
    fetch(link).then(resp => {
      if (!resp.ok) throw new Error(resp.statusText)
      return resp.text()
    })
    .then(html => {
      let content = document.createRange().createContextualFragment(html)
      this.after(content)
    })
    .catch(err => {
      console.error(`Failed to insert HTML '${link}'`)
      console.error(err)
    })
    .finally(() => this.remove())
  }
})

// See readme
var m_ready = new Promise(res => {
  if (typeof M == 'undefined') window.addEventListener('materialize-ready', () => res(true))
  else res(true)
})