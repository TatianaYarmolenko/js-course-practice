// console.log(document)
// console.dir(document)
// console.log(document.body.parentNode)
// console.log(document.parentNode)

// console.log(document.childNodes)
// console.log(document.body.children)

// console.log(document.firstChild)

// console.log(document.lastChild)

// console.log(document.previousSibling)
// console.log(document.body.previousSibling)

// console.log(document.nextSibling)
// console.log(document.body.nextSibling)

// const logoByTag = document.querySelector('span')
// console.log(logoByTag)

// const logoById = document.querySelector('#headerLogo')
// console.log(logoById)

// const logoByIdquery = document.querySelector('#headerLogo')
// console.log(logoByIdquery)

// const logoById = document.getElementById('headerLogo')
// console.log(logoById)

// const logoByClass = document.querySelector('.header__logo-text')
// console.log(logoByClass)

// const logoLink = document.querySelector('[href="./index.html"]')
// console.log(logoLink)

// const allLinksByTag = document.querySelectorAll('a')
// console.log(allLinksByTag)

// const linksClassLink = document.querySelectorAll('.link')
// console.log(linksClassLink)

// const linksByClassName = document.getElementsByClassName('link')
// console.log(linksByClassName)

// const elemsWithSRC = document.querySelectorAll('[src]')
// console.log(elemsWithSRC)

// console.dir(logoByTag);
// console.log(logoByTag.textContent);
// logoByTag.textContent = 'Lama'
// logoByTag.style.color = 'green'

// console.log(logoByTag.className)
// console.log(logoByTag.classList)
// logoByTag.classList.add('mainLogo')

// logoByTag.classList.remove('header__logo-text')

// // logoByTag.classList.toggle('mainLogo')
// logoByTag.classList.replace('mainLogo', 'mause')
const headerLogoLink = document.createElement('a')
console.log(headerLogoLink);

headerLogoLink.setAttribute('href', './index.html')
console.log(headerLogoLink.attributes);

headerLogoLink.classList.add('logo', 'header-logo')
console.log(headerLogoLink.classList);

headerLogoLink.textContent = 'Studio'
console.log(headerLogoLink.textContent);

const logoParent = document.getElementById('logo-parent')
console.log(logoParent);

const logoSpan = document.createElement('span')
logoSpan.classList.add('text')
console.log(logoSpan);
logoSpan.textContent = 'Web'

// logoParent.appendChild(headerLogoLink)
logoParent.prepend(headerLogoLink)
headerLogoLink.prepend(logoSpan)
console.log(headerLogoLink);