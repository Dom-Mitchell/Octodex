import './style.css'
// import React from 'react'

fetch('https://sdg-octodex.herokuapp.com/')
  .then((response) => {
    return response.json()
  })
  .then((octocats) => {
    console.log(octocats)

    //   <div class="octocat-container">
    //   <div class="individual-cat">
    //     <figure>
    //       <a href="https://octodex.github.com/octoqueer/">
    //         <img src="https://octodex.github.com/images/Octoqueer.png" />
    //       </a>
    //     </figure>

    //     <div class="item-footer">
    //       <div class="center-footer-content">
    //         <span>#148:</span
    //         ><a href="https://octodex.github.com/octoqueer/">Octoqueer</a>
    //       </div>

    //       <div class="author-icon-list">
    //         <a href="https://github.com/cameronfoxly">
    //           <img src="https://github.com/cameronfoxly.png" />
    //         </a>
    //         <a href="https://github.com/johncreek">
    //           <img src="https://github.com/johncreek.png" />
    //         </a>
    //         <a href="https://github.com/tonyjaramillo">
    //           <img src="https://github.com/tonyjaramillo.png" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // Example with Gavin
    // const newUl = document.querySelector('ul')
    const newMain = document.querySelector('main')

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'octocat-container')
    newMain?.appendChild(newDiv)

    // const newDiv = document.querySelector('.octocat-container')
    // const thirdDiv = document.querySelector('.item-footer')
    // const fifthDiv = document.querySelector('.author-icon-list')

    for (let i = 0; i < octocats.data.length; i++) {
      //
      //
      const secondDiv = document.createElement('div')
      // document.body.appendChild(secondDiv)
      secondDiv.setAttribute('class', 'individual-cat')
      // document.body.insertAfter(newDiv, secondDiv)
      newDiv?.appendChild(secondDiv)

      const newFigure = document.createElement('figure')
      secondDiv.appendChild(newFigure)
      // document.body.insertAfter(secondDiv, newFigure)

      const newA = document.createElement('a')
      // document.body.appendChild(newA)
      newA.setAttribute('href', octocats.data[i].link)
      newFigure.appendChild(newA)
      // document.body.insertAfter(newFigure, newA)

      const newImg = document.createElement('img')
      // document.body.appendChild(newImg)
      newImg.setAttribute('src', octocats.data[i].image)
      newA.appendChild(newImg)
      // document.body.insertAfter(newA, newImg)

      // Issue is here
      // const thirdDiv = document.querySelector('.item-footer')
      const thirdDiv = document.createElement('div')
      document.body.appendChild(thirdDiv)
      thirdDiv.setAttribute('class', 'item-footer')
      secondDiv.appendChild(thirdDiv)
      // document.body.insertAfter(newFigure, thirdDiv)

      const fourthDiv = document.createElement('div')
      // document.body.appendChild(fourthDiv)
      fourthDiv.setAttribute('class', 'center-footer-content')
      thirdDiv.appendChild(fourthDiv)
      // document.body.insertAfter(thirdDiv, fourthDiv)

      const newSpan = document.createElement('span')
      // document.body.appendChild(newSpan)
      newSpan.textContent = `#${octocats.data[i].number}: `
      fourthDiv.appendChild(newSpan)
      // document.body.insertAfter(fourthDiv, newSpan)

      const secondA = document.createElement('a')
      // document.body.appendChild(secondA)
      secondA.setAttribute('href', octocats.data[i].link)
      secondA.textContent = octocats.data[i].name
      fourthDiv.appendChild(secondA)
      // document.body.insertAfter(newSpan, secondA)

      // Other Issue is here
      // const fifthDiv = document.querySelector('.author-icon-list')
      const fifthDiv = document.createElement('div')
      // document.body.appendChild(fifthDiv)
      fifthDiv.setAttribute('class', 'author-icon-list')
      thirdDiv.appendChild(fifthDiv)
      // document.body.insertAfter(secondA, fifthDiv)

      for (
        let authorIndex = 0;
        authorIndex < octocats.data[i].authors.length;
        authorIndex++
      ) {
        const authorLink = document.createElement('a')
        authorLink.setAttribute(
          'href',
          octocats.data[i].authors[authorIndex].link
        )
        fifthDiv.appendChild(authorLink)

        const authorImage = document.createElement('img')
        authorImage.setAttribute(
          'src',
          octocats.data[i].authors[authorIndex].image
        )
        authorLink.appendChild(authorImage)
      }
      //
      //

      // Example with Gavin
      // const newLi = document.createElement('li')
      // newLi.textContent = octocats.data[i].name
      // newUl?.appendChild(newLi)

      // Practicing pulling data
      // newLi.document.appendChild(octocats.data[i])
      // document.body.insertAfter(newUl, newLi)
    }

    // console.log(octocats.data[0].authors[0].image)
  })
