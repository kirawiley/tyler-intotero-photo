const logo = $('#logo')
const instagram = $('#instagram')
const twitter = $('#twitter')
const flikr = $('#flikr')
const portfolio = $('#portfolio')
const about = $('#about')
const contact = $('#contact')
const homeContainer = $('#homepage-container')
const portfolioContainer = $('#portfolio-container')
const aboutContainer = $('#about-container')
const contactContainer = $('#contact-container')
const landscapesButton = $('#landscapes-wrapper')
const portraitsButton = $('#portraits-wrapper')
const picturesPortfolio = $('#show-portfolio')
const landscapesContainer = $('#landscapes-container')
const portraitsContainer = $('#portraits-container')
const sendButton = $('#send-email')
const emailInput = $('#email')
const messageInput = $('#message')

function openInNewTab(url) {
  const tab = window.open(url, '_blank')
  tab.focus()
}

function emailObject() {
  const email = emailInput.val()
  const message = messageInput.val()

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

sendButton.click(() => {
  const email = emailObject()
  if (email.email === '' || email.message === '') {
    alert('Please fill out both fields.')
  }

  else {
    postEmail(email)
    alert('Thank you for your email! It has been sent to Tyler\'s inbox and he will get back to you shortly.')
    emailInput.val('')
    messageInput.val('')
  }
})

landscapesButton.click(() => {
  portfolioContainer.addClass('hidden')
  picturesPortfolio.removeClass('hidden')
  portraitsContainer.addClass('hidden')
  landscapesContainer.removeClass('hidden')
})

portraitsButton.click(() => {
  portfolioContainer.addClass('hidden')
  picturesPortfolio.removeClass('hidden')
  landscapesContainer.addClass('hidden')
  portraitsContainer.removeClass('hidden')
})

//-------------------------Homepage Listeners-----------------------------

logo.click(() => {
  homeContainer.removeClass('hidden')
  portfolioContainer.addClass('hidden')
  picturesPortfolio.addClass('hidden')
  contactContainer.addClass('hidden')
  aboutContainer.addClass('hidden')
})

portfolio.click(() => {
  homeContainer.addClass('hidden')
  portfolioContainer.removeClass('hidden')
  picturesPortfolio.addClass('hidden')
  contactContainer.addClass('hidden')
  aboutContainer.addClass('hidden')
})

about.click(() => {
  homeContainer.addClass('hidden')
  portfolioContainer.addClass('hidden')
  picturesPortfolio.addClass('hidden')
  contactContainer.addClass('hidden')
  aboutContainer.removeClass('hidden')
})

contact.click(() => {
  homeContainer.addClass('hidden')
  portfolioContainer.addClass('hidden')
  picturesPortfolio.addClass('hidden')
  aboutContainer.addClass('hidden')
  contactContainer.removeClass('hidden')
})

instagram.click(() => {
  openInNewTab('https://instagram.com/tylerr_i/')
})

twitter.click(() => {
  openInNewTab('https://twitter.com/tytheguye')
})

flikr.click(() => {
  openInNewTab('https://www.flickr.com/photos/136198743@N07/')
})
