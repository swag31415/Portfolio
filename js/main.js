const pages = [
  'https://swag31415.github.io/kirtan/',
  'https://swag31415.github.io/Jugs-Web/',
  'https://swag31415.github.io/CoderArt/',
  'https://swag31415.github.io/ChessMove/',
  'https://swag31415.github.io/Hangman-JS/',
  'https://swag31415.github.io/TheGame/',
  'https://swag31415.github.io/Sorter/',
  'https://swag31415.github.io/Stonkey/',
  'https://swag31415.github.io/Helpful/',
  'https://swag31415.github.io/Txty/'
]

const cards = [
  {
    title: 'Kirtan Atlanta',
    desc: 'The central hub for all things Kirtan',
    page_link: 'https://kirtanatlanta.com/',
    image_link: 'https://kirtanatlanta.com/assets/logo.png'
  }
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
    document.getElementById('cards').insertAdjacentHTML('afterbegin', card)
  } catch (err) { console.error(err) }
})

cards.forEach(data => {
  let card = get_card(data.page_link, data.image_link, data.title, data.desc)
  document.getElementById('cards').insertAdjacentHTML('beforeend', card)
})