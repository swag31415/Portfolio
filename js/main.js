const base_url = {
  pages: 'https://swag31415.github.io/',
  repo: 'https://github.com/swag31415/'
}

const repos = [
  'SuperLottery',
  'kirtan',
  'Jugs-Web',
  'CoderArt',
  'ChessMove',
  'Hangman-JS',
  'TheGame',
  'Sorter',
  'Stonkey',
  'Helpful',
  'Txty',
  'Krishna-Compendium',
  'StoryTracker',
  'Sudoku',
  'Spliner',
  'BasedInfinity',
]

const cards = [
  {
    title: 'Kirtan Atlanta',
    desc: 'The central hub for all things Kirtan',
    page_link: 'https://kirtanatlanta.com/',
    image_link: 'https://kirtanatlanta.com/assets/logo.png',
    code_link: 'https://github.com/swag31415/kirtan-atlanta'
  }
]

function get_card(page_link, image_link, title, desc, code_link) {
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
    <div class="card-action">
      <a href=${code_link} class="white-text"><i class="fab fa-github"></i> See Code</a>
    </div>
  </div>`
}

repos.forEach(async name => {
  let url = base_url['pages'] + name + '/'
  try {
    let resp = await fetch(url + 'desc.json')
    if (!resp.ok) throw new Error('Error getting ' + url + 'desc.json')
    let data = JSON.parse(await resp.text())
    let card = get_card(url, url + data.image, data.name, data.desc, base_url['repo'] + name + '/')
    document.getElementById('cards').insertAdjacentHTML('afterbegin', card)
  } catch (err) { console.error(err) }
})

cards.forEach(data => {
  let card = get_card(data.page_link, data.image_link, data.title, data.desc, data.code_link)
  document.getElementById('cards').insertAdjacentHTML('beforeend', card)
})
