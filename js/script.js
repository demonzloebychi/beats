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
  

  

