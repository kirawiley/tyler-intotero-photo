const logo = document.getElementById('logo')
const instagram = document.getElementById('instagram')
const twitter = document.getElementById('twitter')
const flikr = document.getElementById('flikr')
const portfolio = document.getElementById('portfolio')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
const homeContainer = document.getElementById('homepage-container')
const portfolioContainer = document.getElementById('portfolio-container')
const landscapesButton = document.getElementById('landscapes-wrapper')
const portraitsButton = document.getElementById('portraits-wrapper')
const picturesPortfolio = document.getElementById('show-portfolio')
const landscapesContainer = document.getElementById('landscapes-container')

function openInNewTab(url) {
  const tab = window.open(url, '_blank')
  tab.focus()
}

landscapesButton.addEventListener('click', (event) => {
  portfolioContainer.classList.add('hidden')
  picturesPortfolio.classList.remove('hidden')
  landscapesContainer.classList.remove('hidden')
})

portraitsButton.addEventListener('click', (event) => {
  portfolioContainer.classList.add('hidden')
  picturesPortfolio.classList.remove('hidden')
})

//-------------------------Homepage Listeners-----------------------------

logo.addEventListener('click', (event) => {
  homeContainer.classList.remove('hidden')
  portfolioContainer.classList.add('hidden')
  picturesPortfolio.classList.add('hidden')
})

portfolio.addEventListener('click', (event) => {
  homeContainer.classList.add('hidden')
  portfolioContainer.classList.remove('hidden')
  picturesPortfolio.classList.add('hidden')
})

about.addEventListener('click', (event) => {
  homeContainer.classList.add('hidden')
})

contact.addEventListener('click', (event) => {
  homeContainer.classList.add('hidden')
})

instagram.addEventListener('click', (event) => {
  openInNewTab('https://instagram.com/tylerr_i/')
})

twitter.addEventListener('click', (event) => {
  openInNewTab('https://twitter.com/tytheguye')
})

flikr.addEventListener('click', (event) => {
  openInNewTab('https://www.flickr.com/photos/136198743@N07/')
})
