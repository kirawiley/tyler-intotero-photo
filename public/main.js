const logo = document.getElementById('logo')
const instagram = document.getElementById('instagram')
const twitter = document.getElementById('twitter')
const flikr = document.getElementById('flikr')
const portfolio = document.getElementById('portfolio')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
const homeContainer = document.getElementById('homepage-container')
const portfolioContainer = document.getElementById('portfolio-container')
const aboutContainer = document.getElementById('about-container')
const contactContainer = document.getElementById('contact-container')
const landscapesButton = document.getElementById('landscapes-wrapper')
const portraitsButton = document.getElementById('portraits-wrapper')
const picturesPortfolio = document.getElementById('show-portfolio')
const landscapesContainer = document.getElementById('landscapes-container')
const portraitsContainer = document.getElementById('portraits-container')
const sendButton = document.getElementById('send-email')

function openInNewTab(url) {
  const tab = window.open(url, '_blank')
  tab.focus()
}

function emailObject() {
  const emailInput = document.getElementById('email')
  const messageInput = document.getElementById('message')
  const email = emailInput.value
  const message = messageInput.value

  return {
    email: email,
    message: message
  }
}

function postEmail(email) {
  return fetch('/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email)
    })
}

sendButton.addEventListener('click', () => {
  const email = emailObject()
  postEmail(email)
})

landscapesButton.addEventListener('click', () => {
  portfolioContainer.classList.add('hidden')
  picturesPortfolio.classList.remove('hidden')
  portraitsContainer.classList.add('hidden')
  landscapesContainer.classList.remove('hidden')
})

portraitsButton.addEventListener('click', () => {
  portfolioContainer.classList.add('hidden')
  picturesPortfolio.classList.remove('hidden')
  landscapesContainer.classList.add('hidden')
  portraitsContainer.classList.remove('hidden')
})

//-------------------------Homepage Listeners-----------------------------

logo.addEventListener('click', () => {
  homeContainer.classList.remove('hidden')
  portfolioContainer.classList.add('hidden')
  picturesPortfolio.classList.add('hidden')
  contactContainer.classList.add('hidden')
  aboutContainer.classList.add('hidden')
})

portfolio.addEventListener('click', () => {
  homeContainer.classList.add('hidden')
  portfolioContainer.classList.remove('hidden')
  picturesPortfolio.classList.add('hidden')
  contactContainer.classList.add('hidden')
  aboutContainer.classList.add('hidden')
})

about.addEventListener('click', () => {
  homeContainer.classList.add('hidden')
  portfolioContainer.classList.add('hidden')
  picturesPortfolio.classList.add('hidden')
  contactContainer.classList.add('hidden')
  aboutContainer.classList.remove('hidden')
})

contact.addEventListener('click', () => {
  homeContainer.classList.add('hidden')
  portfolioContainer.classList.add('hidden')
  picturesPortfolio.classList.add('hidden')
  aboutContainer.classList.add('hidden')
  contactContainer.classList.remove('hidden')
})

instagram.addEventListener('click', () => {
  openInNewTab('https://instagram.com/tylerr_i/')
})

twitter.addEventListener('click', () => {
  openInNewTab('https://twitter.com/tytheguye')
})

flikr.addEventListener('click', () => {
  openInNewTab('https://www.flickr.com/photos/136198743@N07/')
})
