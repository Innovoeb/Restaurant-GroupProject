$(document).ready(function(){
    // home button shows on page-load
    $('.home').addClass('show');

    $(".navbar").on('click', 'button', function(){
        $('.bodyContent').removeClass('show')
        if ($(this).hasClass('homeButton')) {
            $('.home').addClass('show');
        } else if ($(this).hasClass('menuButton')) {
            $('.menu').addClass('show');
        } else if ($(this).hasClass('reservationsButton')) {
            $('.reservations').addClass('show');
        } else {
            $('.location').addClass('show');
        }
    })

    $.get('https://obscure-tundra-54269.herokuapp.com/bar-food').done(function(data) {
        let appetizersStr = data.appetizers.map(a => {
            var description;
            if (a.description.length > 40) {
              description = a.description.substring(0, 40) + '...'
            }else {
              description = a.description
            }

            var spicy = '';
            var glutenfree = '';
            var vegetarian = '';

            if (a.extra.spicy === true) {
              spicy = `<p class="spicy"><i class="fas fa-pepper-hot"></i> spicy</p>`
            }
            if (a.extra.glutenfree === true) {
              glutenfree = `<div class="glutenfree"><p><i class="fas fa-ban"></i>Gluten</p></div>`
            }
            if (a.extra.vegetarian === true) {
              vegetarian = `<p class="vegetarian"><i class="fas fa-leaf"></i> vegetarian</p>`
            }

          return `
          <div class="menu-items">
            <img src ="http://placehold.it/200/200">
            <p class="dish-name">${a.name}</p>
            <p class="description"><abbr title="${a.description}">${description}</abbr></p>
            <p class="price">$${a.price}</p>
            <div class="extra">
              ${spicy}
              ${glutenfree}
              ${vegetarian}
            </div>
          </div>
            `
          }).join("")

          $('#appetize').html(appetizersStr)

          let entreesStr = data.entrees.map(a => {
            var description;
            if (a.description.length > 40) {
              description = a.description.substring(0, 40) + '...'
            }else {
              description = a.description
            }

            var spicy = '';
            var glutenfree = '';
            var vegetarian = '';

            if (a.extra.spicy === true) {
              spicy = `<p class="spicy"><i class="fas fa-pepper-hot"></i></p>`
            }
            if (a.extra.glutenfree === true) {
              glutenfree = `<div class="glutenfree"><p><i class="fas fa-ban"></i>Gluten</p></div>`
            }
            if (a.extra.vegetarian === true) {
              vegetarian = `<p class="vegetarian"><i class="fas fa-leaf"></i></p>`
            }

          return `
          <div class="menu-items">
            <img src ="http://placehold.it/200/200">
            <p class="dish-name">${a.name}</p>
            <p class="description"><abbr title="${a.description}">${description}</abbr></p>
            <p class="price">$${a.price}</p>
            <div class="extra">
              ${spicy}
              ${glutenfree}
              ${vegetarian}
            </div>
          </div>
            `
          }).join("")

          $('#entrees').html(entreesStr)

          let dessertsStr = data.desserts.map(a => {
            var description;
            if (a.description.length > 40) {
              description = a.description.substring(0, 40) + '...'
            }else {
              description = a.description
            }

            var spicy = '';
            var glutenfree = '';
            var vegetarian = '';

            if (a.extra.spicy === true) {
              spicy = `<p class="spicy"><i class="fas fa-pepper-hot"></i></p>`
            }
            if (a.extra.glutenfree === true) {
              glutenfree = `<div class="glutenfree"><p><i class="fas fa-ban"></i>Gluten</p></div>`
            }
            if (a.extra.vegetarian === true) {
              vegetarian = `<p class="vegetarian"><i class="fas fa-leaf"></i></p>`
            }

          return `
          <div class="menu-items">
            <img src ="http://placehold.it/200/200">
            <p class="dish-name">${a.name}</p>
            <p class="description"><abbr title="${a.description}">${description}</abbr></p>
            <p class="price">$${a.price}</p>
            <div class="extra">
              ${spicy}
              ${glutenfree}
              ${vegetarian}
            </div>
          </div>
            `
          }).join("")

          $('#desserts').html(dessertsStr)
    })

})
