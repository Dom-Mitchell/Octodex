import './style.css'

fetch('https://sdg-octodex.herokuapp.com/')
  .then((response) => {
    return response.json()
  })
  .then((octocats) => {
    console.log(octocats)

    const newMain = document.querySelector('main')

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'octocat-container')
    newMain?.appendChild(newDiv)

    for (let i = 0; i < octocats.data.length; i++) {
      const secondDiv = document.createElement('div')
      secondDiv.setAttribute('class', 'individual-cat')
      newDiv?.appendChild(secondDiv)

      const newFigure = document.createElement('figure')
      secondDiv.appendChild(newFigure)

      const newA = document.createElement('a')
      newA.setAttribute('href', octocats.data[i].link)
      newFigure.appendChild(newA)

      const newImg = document.createElement('img')
      newImg.setAttribute('src', octocats.data[i].image)
      newA.appendChild(newImg)

      const thirdDiv = document.createElement('div')
      document.body.appendChild(thirdDiv)
      thirdDiv.setAttribute('class', 'item-footer')
      secondDiv.appendChild(thirdDiv)

      const fourthDiv = document.createElement('div')
      fourthDiv.setAttribute('class', 'center-footer-content')
      thirdDiv.appendChild(fourthDiv)

      const newSpan = document.createElement('span')
      newSpan.textContent = `#${octocats.data[i].number}: `
      fourthDiv.appendChild(newSpan)

      const secondA = document.createElement('a')
      secondA.setAttribute('href', octocats.data[i].link)
      secondA.textContent = octocats.data[i].name
      fourthDiv.appendChild(secondA)

      const fifthDiv = document.createElement('div')
      fifthDiv.setAttribute('class', 'author-icon-list')
      thirdDiv.appendChild(fifthDiv)

      for (let a = 0; a < octocats.data[i].authors.length; a++) {
        const thirdA = document.createElement('a')
        thirdA.setAttribute('href', octocats.data[i].authors[a].link)
        fifthDiv.appendChild(thirdA)

        const secondImg = document.createElement('img')
        secondImg.setAttribute('src', octocats.data[i].authors[a].image)
        thirdA.appendChild(secondImg)
      }
    }
  })