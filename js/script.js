document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
    } );
  
    var thumbnails = new Splide( '#thumbnail-carousel', {
      fixedWidth  : 116,
      fixedHeight : 116,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      isNavigation: true,
      breakpoints : {
        401: {
          fixedWidth : 85,
          fixedHeight: 85,
        },
      },
    } );
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
  } );



  document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel-2', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
    } );
  
    var thumbnails = new Splide( '#thumbnail-carousel-2', {
      fixedWidth  : 116,
      fixedHeight : 116,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      isNavigation: true,
      breakpoints : {
        401: {
          fixedWidth : 85,
          fixedHeight: 85,
        },
      },
    } );
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
  } );





  document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel-3', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
    } );
  
    var thumbnails = new Splide( '#thumbnail-carousel-3', {
      fixedWidth  : 116,
      fixedHeight : 116,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      isNavigation: true,
      breakpoints : {
        401: {
          fixedWidth : 85,
          fixedHeight: 85,
        },
      },
    } );
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
  } );





  document.addEventListener( 'DOMContentLoaded', function () {
    var main = new Splide( '#main-carousel-4', {
      type      : 'fade',
      rewind    : true,
      pagination: false,
      arrows    : false,
    } );
  
    var thumbnails = new Splide( '#thumbnail-carousel-4', {
      fixedWidth  : 116,
      fixedHeight : 116,
      gap         : 10,
      rewind      : true,
      pagination  : false,
      isNavigation: true,
      breakpoints : {
        401: {
          fixedWidth : 85,
          fixedHeight: 85,
        },
      },
    } );
  
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
  } );


  let colorTab = function () {
    let colorTabNav = document.querySelectorAll('.product__color'),
      colorTabContent = document.querySelectorAll('.slider-list'),
      colorTabName;
  
    colorTabNav.forEach(item => {
      item.addEventListener('click', selectColorTabNav);
    });
  
    function selectColorTabNav() {
      colorTabNav.forEach(item => {
        item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      colorTabName = this.getAttribute('data-tab-name');
      selectColorTabContent(colorTabName);
    };
  
    function selectColorTabContent(colorTabName) {
      colorTabContent.forEach(item => {
        item.classList.contains(colorTabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      });
  
      colorTabContent.forEach(item => {
         item.style.animation = 'fadein 1s ease';
      });
    }
  };
  colorTab();
  



  const accordionItems = document.querySelectorAll(".accordion-item");

  for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener("click", function() {
      this.classList.toggle("active");
  
      for (let j = 0; j < accordionItems.length; j++) {
        if (accordionItems[j] !== this) {
          accordionItems[j].classList.remove("active");
        }
      }
    });
  };
  


  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#commemts', {
      type   : 'loop',
      perPage: 3,
      start  : 1,
      padding: 30,
      classes: {
        pagination: 'splide__pagination your-class-pagination',
        page      : 'splide__pagination__page your-class-page',
      },
      breakpoints : {
        1200: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        }
      },

    } );
    splide.mount();
  } );



  let date = new Date('Feb 14 2024 00:00:00');

  function counts(){
    let now = new Date();
    gap = date - now;


    let hours = Math.floor(gap / 1000 / 60 / 60);
    let minutes = Math.floor(gap / 1000 / 60 ) % 60;
    let seconds = Math.floor(gap / 1000 ) % 60;
    

    if(minutes < 10){
      minutes = '0'+ minutes;
    }
    if(seconds < 10){
      seconds = '0'+ seconds;
    }

    if(gap<0){
      document.getElementById('group').innerText = 'ALREADY';
    }else{
      document.getElementById('hours').innerText = hours + ' :';
      document.getElementById('minutes').innerText = minutes + ' :';
      document.getElementById('seconds').innerText = seconds;
    }

  };
  counts()

  setInterval(counts, 1000);
