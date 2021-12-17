const pages = [
  'https://swag31415.github.io/kirtan/'
]

function get_card(page_link, image_link, title, desc) {
  return `
  <div class="card blue-grey darken-4">
    <div class="card-image">
      <a href="${page_link}">
        <img src="${image_link}">
      </a>
    </div>
    <div class="card-content white-text">
      <span class="card-title">${title}</span>
      <p>${desc}</p>
    </div>
  </div>`
}

pages.forEach(async url => {
  try {
    let resp = await fetch(url + 'desc.json')
    if (!resp.ok) throw new Error('Error getting ' + url + 'desc.json')
    let data = JSON.parse(await resp.text())
    let card = get_card(url, url + data.image, data.name, data.desc)
    document.getElementById('cards').insertAdjacentHTML('beforeend', card)
  } catch (err) { console.error(err) }
})