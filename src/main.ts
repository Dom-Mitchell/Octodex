import './style.css'
// import React from 'react'

fetch('https://sdg-octodex.herokuapp.com/')
  .then((response) => {
    return response.json()
  })
  .then((octocats) => {
    console.log(octocats)

    const newUl = document.querySelector('ul')

    for (let i = 0; i < octocats.data.length; i++) {
      const newLi = document.createElement('li')
      newLi.textContent = octocats.data[i].name

      newUl?.appendChild(newLi)

      // newLi.document.appendChild(octocats.data[i])
      // document.body.insertAfter(newUl, newLi)
    }

    // console.log(octocats.data[0].authors[0].image)
  })

// let author = document.getElementsByClassName('number')[0]

// console.log(author)
