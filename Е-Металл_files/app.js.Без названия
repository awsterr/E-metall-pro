window.addEventListener('DOMContentLoaded', () => {


$(".hamburger").on("click", function() {
  $('body').toggleClass("active__mob-menu");
});  

  $("body").on('click','.modal__login .check__inno', function(e) {
    $(".modal__login .check__inno .toggler").toggleClass('active');
    $(this).closest(".login__reg").toggleClass('ru');
  });

  $("body").on('click','.page__mail-not', function(e) {
    ym(57208507,'reachGoal','NOT_FOUND_MAIL');
  });
  $("body").on('click','.app__req-email', function(e) {
    ym(57208507,'reachGoal','MAIL_DOSKA');
  });
  
  

  if ($(window).width() > 768) {
    $(window).scroll(function() {
    
        if ($(this).scrollTop() > 700) { 
            $('.filters-top-menu').css('transform', 'translateY(0)');
        } else {
            $('.filters-top-menu').css('transform', 'translateY(-60px)');
        }
    });
    $(".filters-top-menu a.change-filters").on("click", function () {
        let href = $(this).attr("href");
    
        $("html, body").animate({
            scrollTop: $(href).offset().top - 70
        }, {
            duration: 370,   
            easing: "linear" 
        });
    
        return false;
    });
    
}




$("form").append('<input type="hidden" name="aktotut" value="gkz;gfycbjyfnf">');

$('.catalogFilters__form .filter-dropdown datalist option').on('click',function(e) {
  setTimeout(function(waiting) {
    let formData = new FormData($('#catalogFilters__form')[0]);
    formData.append("url", window.location.href);
    formData.append("action", 'getCount');

    // $.ajax({
    //   url: window.location.href,
    //   type: 'POST',
    //   data: formData,
    //   processData: false,
    //   contentType: false,
    //   success: function(data) {
    //     setCount(data);
    //   }
    // });

    // $.ajax({
    //   url: '/tools/page.php',
    //   type: 'POST',
    //   data: formData,
    //   processData: false,
    //   contentType: false,
    //   success: function(data) {
    //     setUrl(data);
    //   }
    // });
 
 

  }, 500);
  var input = $(this).closest(".filter-dropdown").find(".form__input");
  updateQueryStringParam(input.attr('name'), input.val());

});





var updateQueryStringParam = function (key, value) {
  if (typeof value !== 'undefined' && value !== null) {
    value = String(value).replace("+", "%2B");
} else {
    console.error('Value не определено или равно null:', value);
    // Можно задать значение по умолчанию, если нужно
    value = ''; 
}
  var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
      urlQueryString = document.location.search,
      newParam = key + '=' + value,
      params = '?' + newParam;
  if (urlQueryString) {
      updateRegex = new RegExp('([\?&])' + key + '[^&]*');
      removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');
      if( typeof value == 'undefined' || value == null || value == '' ) {
          params = urlQueryString.replace(removeRegex, "$1");
          params = params.replace( /[&;]$/, "" );
      } else if (urlQueryString.match(updateRegex) !== null) {
          params = urlQueryString.replace(updateRegex, "$1" + newParam);
      } else {
          params = urlQueryString + '&' + newParam;
      }
  }
  window.history.replaceState({}, "", baseUrl + params);
};


$('#catalogFilters__form').on('change', 'input', function() {
  setTimeout(function(waiting) {
    let formData = new FormData($('#catalogFilters__form')[0]);
    formData.append("url", window.location.href);
    formData.append("action", 'getCount');
    // $.ajax({
    //   url: window.location.href,
    //   type: 'POST',
    //   data: formData,
    //   processData: false,
    //   contentType: false,
    //   success: function(data) {
    //     setCount(data);
    //   }
    // });
    // $.ajax({
    //   url: '/tools/page.php',
    //   type: 'POST',
    //   data: formData,
    //   processData: false,
    //   contentType: false,
    //   success: function(data) {
    //     setUrl(data);
    //   }
    // });
  }, 500)
  });
  $('.catalogFilters__form  .form__input').on('input', function() {
    setTimeout(function(waiting) {
    let formData = new FormData($('#catalogFilters__form')[0]);
    formData.append("url", window.location.href);
    formData.append("action", 'getCount');
    // $.ajax({
    //   url: window.location.href,
    //   type: 'POST',
    //   data: formData,
    //   processData: false,
    //   contentType: false,
    //   success: function(data) {
    //     setCount(data);
    //   }
    // });
    // $.ajax({
    //   url: '/tools/page.php',
    //   type: 'POST',
    //   data: formData,
    //   processData: false,
    //   contentType: false,
    //   success: function(data) {
    //     setUrl(data);
    //   }
    // });
  }, 500)
  });

  function setCount(data) {
    $('#catalogFilters__form .btn__go').text('Показать '+data+' предложений');
    $('#catalogFilters__form button[type="submit"]').text('Показать '+data+' предложений');
  }
  function setUrl(data) {
    if(data) {
      $('#catalogFilters__form .desktop.btn__go').attr('href',data);
      $('#catalogFilters__form button[type="submit"].desktop').hide();
      $('#catalogFilters__form .desktop.btn__go').show();
      
    } else {
      $('#catalogFilters__form .desktop.btn__go').hide();
      $('#catalogFilters__form button[type="submit"].desktop').show();
    }
    
  }


  $('.save__search').on('click', function(e) {
    e.preventDefault();
    let formData = new FormData($('#catalogFilters__form')[0]);
    formData.append("url", window.location.href);
    formData.append("action", 'save_search');
    $.ajax({
      url: '/api/actions.php',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log(data);
      }
    });
    $(this).html('<img src="/img/check_black.svg" alt="save search"> Сохранено');
    $(this).removeClass('save__search').addClass('textColor');
  });
  

  $(".deteteSearch").on('click', function(e) {
    e.preventDefault();
    var search_id = $(this).data('id');

    $.ajax({
      url: '/api/actions.php',
      type: 'POST',
      data: {search_id:search_id,action:'delete_search'},
      dataType: 'JSON',
      success: function(data) {
        $('#search'+search_id).fadeOut("slow"); 
      }
    });
  });

  $(".toggler__subscribe").on('click', function(e) {

    var search_id = $(this).data('id');
    console.log(search_id);
    $.ajax({
      url: '/api/actions.php',
      type: 'POST',
      data: {search_id:search_id,action:'subscribe_search'},
      dataType: 'JSON',
      success: function(data) {
        console.log(data.result);
        if(data.result === 'subscribe') {
          $('#search'+search_id).find('.subscribe__text').text('Отписаться');
        } else {
          $('#search'+search_id).find('.subscribe__text').text('Подписаться');
        }
    
      }
    });
  });


  
  $(".catalogFilters #chapter").on('change', function(event) {
    var url = $(this).val();
    console.log(url);
    if(url) {
      window.location.href = url;
    }

});

$(".chapter2__select #chapter2").on('change', function(event) {
  var url = $(this).val();
  console.log(url);
  if(url) {
    window.location.href = url;
  }

});








  $(".choise #chapter").on('change', function(event) {
      var base = $(this).val();

      if(base) {
        $.ajax({
          url: '/api/actions.php',
          type: 'POST',
          data: {base:base,action:'getChildren'},
          dataType: 'JSON',
          success: function(data) {
            
            $(".choise__btn").attr('href', data.url);
            if(data.subs) {
              $(".chapter2__wrap").show();
              $("#chapter2").empty();
              $('body').find('.chapter2__wrap .new-select__list').empty();
              $.each(data.subs, function( key, value ) {
                  $("#chapter2").append('<option value="'+value+'">'+key+'</option>');
                  $('body').find('.chapter2__wrap .new-select__list').append('<div class="new-select__item" data-value="'+value+'"><span>'+key+'</span></div>');
              });
              $('body').find('.chapter2__wrap .new-select').text('');
              let select = $('select');
          
            } else {
              $(".chapter2__wrap").hide();
            }
      
            
        
        
          }
        });
      }
  });


  $("body").on('click','.chapter2__wrap .new-select__item', function(event) {
    var url = $(this).data('value');
    var text = $(this).text();
    console.log(url);
    $(".choise__btn").attr('href', url);
    $('body').find('.chapter2__wrap .new-select').removeClass('on');
    $('body').find('.chapter2__wrap .new-select').text(text);
   
});

  jQuery(function($){
 
    // определяем в переменные кнопку, текущую страницу и максимальное кол-во страниц
    var button = $( '.btn_show-more--blog' ),
        paged = button.data( 'paged' ),
        maxPages = button.data( 'max_pages' ),
        tag_id = button.data( 'tag_id');
    button.click( function( event ) {
   
      event.preventDefault(); // предотвращаем клик по ссылке
   
      $.ajax({
        type : 'POST',
        url : '/wp-admin/admin-ajax.php', // получаем из wp_localize_script()
        data : {
          paged : paged, // номер текущей страниц
          action : 'loadmore', // экшен для wp_ajax_ и wp_ajax_nopriv_
          tag_id: tag_id
        },
        beforeSend : function( xhr ) {
          button.text( 'Загружаем...' );
        },
        success : function( data ){
   
          paged++; // инкремент номера страницы
          $(".blog__articles").append( data );
          button.text( 'Загрузить ещё' );
   
           // если последняя страница, то удаляем кнопку
          if( paged == maxPages ) {
            button.remove();
          }
   
        }
   
      });
   
    } );
  });



  jQuery(function($){
 
    // определяем в переменные кнопку, текущую страницу и максимальное кол-во страниц
    var button = $( '.btn_show-more--post' ),
        paged = button.data( 'paged' ),
        maxPages = button.data( 'max_pages' );
        
   
    button.click( function( event ) {
   
      event.preventDefault(); // предотвращаем клик по ссылке
   
      $.ajax({
        type : 'POST',
        url : '/wp-admin/admin-ajax.php', // получаем из wp_localize_script()
        data : {
          paged : paged, // номер текущей страниц
          action : 'loadmore_post', // экшен для wp_ajax_ и wp_ajax_nopriv_
        
        },
        beforeSend : function( xhr ) {
          button.text( 'Загружаем...' );
        },
        success : function( data ){
   
          paged++; // инкремент номера страницы
          $(".flexWrap").append( data );
          button.text( 'Загрузить ещё' );
   
           // если последняя страница, то удаляем кнопку
          if( paged == maxPages ) {
            button.remove();
          }
   
        }
   
      });
   
    } );
  });


  $("body").on('mousedown',".btn__about-js", function(e){
      var meta = $(this).data('meta');
      
      $.ajax({
        url: '/api/actions.php',
        type: 'POST',
        data: {meta:meta,action:'click_base'},
        dataType: 'JSON',
        success: function(data) {
          
        }
      });

  });

  $("body").on('mousedown','.btn__buy-js', function(e){

  
    var meta = $(this).data('meta');
    
    $.ajax({
      url: '/api/actions.php',
      type: 'POST',
      data: {meta:meta,action:'click_base_buy'},
      dataType: 'JSON',
      success: function(data) {
        
      }
    });
    console.log(e.which);

    
    // if (e.which == 2) {
    //   $.ajax({
    //     url: '/api/actions.php',
    //     type: 'POST',
    //     data: {meta:meta,action:'click_base_buy'},
    //     dataType: 'JSON',
    //     success: function(data) {
          
    //     }
    //   });
    // }




});



  // jQuery(function($){
  //   $(window).scroll(function(){
  //     var bottomOffset = 2000,  // отступ от нижней границы сайта, до которого должен доскроллить пользователь, чтобы подгрузились новые посты
  //         button = $( '.btn_show-more--blog' ),
  //         paged = button.data( 'paged' ),
  //         maxPages = button.data( 'max_pages' );
   
  //     if( $(document).scrollTop() > ($(document).height() - bottomOffset) && !$('body').hasClass('loading')){
  //       $.ajax({
  //         type : 'POST',
  //         url : '/wp-admin/admin-ajax.php', // получаем из wp_localize_script()
  //         data : {
  //           paged : paged,
  //           action : 'loadmore' 
  //         },
  //         beforeSend: function( xhr){
  //           $('body').addClass('loading');
  //         },
  //         success:function(data){
  //           if( data ) {
  //             paged++;
  //             $(".blog__articles").append( data );
  //             $('body').removeClass('loading');
  //           }
  //         }
  //       });
  //     }
  //   });
  // });





  $(document).ready(function () {


    const $bannerList = $('.banner__list-body1');
    const $banners = $('.banner__item-body1');
    let currentIndex = 0;

    function rotateBanners() {
      currentIndex = (currentIndex + 1) % $banners.length;
      $banners.removeClass('showed');
      $banners.eq(currentIndex).addClass('showed');
    }

    setInterval(rotateBanners, 5000);


    
    const $bannerListBody2 = $('.banner__list-body2');
    const $bannersBody2 = $('.banner__item-body2');
    let currentIndexBody2 = 0;

    function rotateBannersBody2() {
      currentIndexBody2 = (currentIndexBody2 + 1) % $bannersBody2.length;
      $bannersBody2.removeClass('showed');
      $bannersBody2.eq(currentIndexBody2).addClass('showed');
    }

    setInterval(rotateBannersBody2, 5000);


    const $bannerListBody3 = $('.banner__list-body3');
    const $bannersBody3 = $('.banner__item-body3');
    let currentIndexBody3 = 0;

    function rotateBannersBody3() {
      currentIndexBody3 = (currentIndexBody3 + 1) % $bannersBody3.length;
      $bannersBody3.removeClass('showed');
      $bannersBody3.eq(currentIndexBody3).addClass('showed');
    }

    setInterval(rotateBannersBody3, 5000);



    const $bannerList1 = $('.banner__wrap-first');
    const $banners1 = $bannerList1.find('.catalogFilters__banner');
    let currentIndex1 = 0;

    function rotateBanners1() {
      currentIndex1 = (currentIndex1 + 1) % $banners1.length;
      $banners1.removeClass('showed');
      $banners1.eq(currentIndex1).addClass('showed');
    }

    setInterval(rotateBanners1, 5000);


    const $bannerList2 = $('.banner__wrap-second');
    const $banners2 = $bannerList2.find('.catalogFilters__banner');
    let currentIndex2 = 0;

    function rotateBanners2() {
      currentIndex2 = (currentIndex2 + 1) % $banners2.length;
      $banners2.removeClass('showed');
      $banners2.eq(currentIndex2).addClass('showed');
    }

    setInterval(rotateBanners2, 5000);

    
    const $bannerList3 = $('.banner__wrap-third');
    const $banners3 = $bannerList3.find('.catalogFilters__banner');
    let currentIndex3 = 0;

    function rotateBanners3() {
      currentIndex3 = (currentIndex3 + 1) % $banners3.length;
      $banners3.removeClass('showed');
      $banners3.eq(currentIndex3).addClass('showed');
    }

    setInterval(rotateBanners3, 5000);





  });



  



$('.radio__mark').on('click', function () {
var value = $(this).text();
  // Функция для добавления нулей перед однозначными числами
  function pad(number) {
    return number < 10 ? '0' + number : number;
  }

  // Функция для форматирования даты
  function formatDate(date) {
    var months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    var day = pad(date.getDate());
    var monthAbbrev = months[date.getMonth()];
    var year = (date.getFullYear() % 100).toString().padStart(2, '0'); // Получаем последние две цифры года

    return day + ' ' + monthAbbrev + ' ' + year;
  }

  // Получаем текущую дату
  var today = new Date();

  var yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  // Определяем первый день текущей недели (понедельник)
  var firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1));

  // Определяем последний день текущей недели (воскресенье)
  var lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

  // Определяем первый день текущего месяца
  var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  
  // Определяем номер квартала (1, 2, 3 или 4)
  var quarter = Math.floor((today.getMonth() + 3) / 3);

  // Определяем начало текущего квартала
  var firstDayOfQuarter = new Date(today.getFullYear(), (quarter - 1) * 3, 1);

  // Определяем начало текущего года
  var firstDayOfYear = new Date(today.getFullYear(), 0, 1);

  // Форматируем даты
  var formattedToday = formatDate(today);
  var formattedFirstDayOfWeek = formatDate(firstDayOfWeek);
  var formattedLastDayOfWeek = formatDate(lastDayOfWeek);
  var formattedYesterday = formatDate(yesterday);
  var formattedFirstDayOfMonth = formatDate(firstDayOfMonth);
  var formattedFirstDayOfQuarter = formatDate(firstDayOfQuarter);
  var formattedFirstDayOfYear = formatDate(firstDayOfYear);

  if(value == 'Неделя') {
    $("#calend").val(formattedFirstDayOfWeek+' - '+formattedLastDayOfWeek);
  } else if(value == 'Сегодня') {
    $("#calend").val(formattedToday);
  } else if(value == 'Вчера') {
    $("#calend").val(formattedYesterday);
  } else if(value == 'Месяц') {
    $("#calend").val(formattedFirstDayOfMonth+' - '+formattedToday);
  } else if(value == 'Квартал') {
    $("#calend").val(formattedFirstDayOfQuarter+' - '+formattedToday);
  } else if(value == 'Год') {
    $("#calend").val(formattedFirstDayOfYear+' - '+formattedToday);
  }


});





// страница каталог фильтры, Страница Поставщики фильтры

//show catalogFilters
$('.showFilters').on('click', function() {
  $('.catalogFilters__form').fadeIn();
  $('.catalogFilters__header').fadeIn();
  $('.overlay').fadeIn();
  $('.showFilters').fadeOut();
});
$('.catalogFilters__close').on('click', function() {
  $('.catalogFilters__form').fadeOut();
  $('.catalogFilters__header').fadeOut();
  $('.overlay').fadeOut();
  $('.showFilters').fadeIn();
});

//фильтры в кастомном дропдауне на странице каталог фильтры

$('.custom-drop').on('click', function(){
  $('.form__input__dropdown').css('height', 'auto');
});
//фильтр
$('.form__input__dropdown__filter-count-from, .form__input__dropdown__filter-count-to').on('input', function(){
  var from = parseInt($('.form__input__dropdown__filter-count-from').val());
  var to = parseInt($('.form__input__dropdown__filter-count-to').val());
  $('.form__input__dropdown__label').each(function(){
    var price = parseInt($(this).find('.fs_15').text());
    if(price >= from && price <= to){
      $(this).show();
    }else{
      $(this).hide();
    }
  });

  
});
//отображаются все значения, если не заполнен фильтр
$('.form__input__dropdown__filter-count').on('input', function(){
if($(this).val() == '') {
  $('.form__input__dropdown__label').show();
}
});
//значения выбранных чекбоксов подставляется в значение инпута
$('.catalogFilters-sizecheck').change(function() {
var checkedLabels = $('.catalogFilters-sizecheck:checked').map(function() {
  return $('label[for="' + $(this).attr('id') + '"]').text().trim();
}).get().join(', ');
$('#catalogFilters-size').val(checkedLabels.trim());
});
//скрыть дропдаун при клике на окно
$(document).mouseup( function(e){ // событие клика по веб-документу
  var div = $( ".form__input__search" ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.form__input__dropdown').hide(); // скрываем его
      

  } else {
      $('.form__input__dropdown').show();
      
  }

   
   });

// стили datalist на странице каталог-фильтры
$('.filter-dropdown').each(function(){
  let filter = $(this),
      filterInput = filter.find('input'),
      filterList = filter.find('datalist');
     
      filterInput.on('focus', function () {
        filterList.css('display', 'block');
        
      });
      filterList.find('option').on('click', function () {
        filterInput.val($(this).val());
        filterList.css('display', 'none');
          
    });
      
    filterInput.on('input', function() {
      currentFocus = -1;
      var text = filterInput.val().toUpperCase();
      for (let option of filterList.find('option')) {
        if(option.value.toUpperCase().indexOf(text) > -1){
          $(option).css('display', 'block');
      }else{
        $(option).css('display', 'none');
        }
      };
     
    });
      var currentFocus = -1;
      filterInput.onkeydown = function(e) {
        if(e.keyCode == 40){
          currentFocus++
         addActive(filterList.options);
        }
        else if(e.keyCode == 38){
          currentFocus--
         addActive(filterList.options);
        }
        else if(e.keyCode == 13){
          e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (filterList.options) filterList.options[currentFocus].click();
              }
        }
      }
      
      function addActive(x) {
          if (!x) return false;
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          x[currentFocus].classList.add("active");
        }
        function removeActive(x) {
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("active");
          }
        }

        
});



//select 
function newSelect() {
$('.select_main').each(function() {
  const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 350; // длительность анимации 

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $('<div>', {
      class: 'new-select',
      text: _this.children('option:selected').text()
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');
  $('<div>', {
      class: 'new-select__list'
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');
  for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
          class: 'new-select__item',
          html: $('<span>', {
              text: selectOption.eq(i).text()
          })
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);
  selectHead.on('click', function() {
      if ( !$(this).hasClass('on') ) {
          $(this).addClass('on');
          selectList.slideDown(duration);

          selectItem.on('click', function() {
              let chooseItem = $(this).data('value');

              $('select').val(chooseItem).attr('selected', 'selected');
              selectHead.text( $(this).find('span').text() );

              // selectList.slideUp(duration);
              // selectHead.removeClass('on');
              let select = $('select');
              $(select).trigger('change');
          });

      } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
      }
  });
});
$(document).mouseup( function(e){ // событие клика по веб-документу
  var div = $( "new-select" ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
      $('.new-select__list').hide(); // скрываем его
  }


  
  });
}
// newSelect();



$('body').on('submit','.providerSite__filter', (event) => {
 event.preventDefault();

  
  var city = $('[name="city"]').val();
  var base = $('[name="base"]').val();
  $.ajax({
    type : 'POST',
    url : '/wp-admin/admin-ajax.php', 
    data : {
      city : city, 
      base : base,
      action : 'filter__left'
    },
    beforeSend : function( xhr ) {
    
    },
    success : function( data ){
      $(".flexWrap").empty();
      $(".flexWrap").append( data );

    }

  });
  console.log(city);
  if(city == ''){
    $(".btn_show-more--post").show();
  } else {
    $(".btn_show-more--post").hide();
  }
 


});

 
$("body").on("click",".select__wrap:not(.select__wrap-single) .select__item-value", function(e){
  var host = window.location.host;

  var value = $(this).data('value') || $(this).text();
  console.log('valuedata ' + value);


    
    var parent = $(this).closest(".select__wrap");
    var input = parent.find(".select__wrap-input");
    var arrayValues = [];
      var total = [];
    if(value == "Любой" || value == "Любая" || value == "Любое" || value == "Herhangi" || value == "Any") {
      parent.find(".select__item-value").removeClass('checked');
      input.attr('placeholder','');
      input.val('');2
      arrayValues = '';
    } else {
      $(this).toggleClass("checked");
      
      parent.find( ".select__item-value.checked" ).each(function() {
        if(host == 'e-metall.com') {
          arrayValues.push($(this).data('value')); //tk value
        } else {
          arrayValues.push($(this).text()); //tk value
        }
       
        console.log($(this).text())
      });

      parent.find('.select__item-value').removeClass("hidden");

        input.attr('placeholder',arrayValues.join('|'));
        input.val('');
        
      
      
    }

    updateQueryStringParam(input.attr('name'), input.attr('placeholder'));
    // let formData = new FormData($('#catalogFilters__form')[0]);
    // formData.append("url", window.location.href);
    // formData.append("action", 'getCount');
    // $.ajax({
    //   url: '/tools/page.php',
    //   type: 'POST',
    //   data: formData,
    //   processData: false,
    //   contentType: false,
    //   success: function(data) {
    //     setUrl(data);
    //   }
    // });
    $(this).addClass('order__top');

});
$("body").on("click",".select__item-value.clear__checked", function(e){
  var value = $(this).text();
  var parent = $(this).closest(".select__wrap");
  var input = parent.find(".select__wrap-input");
  input.attr('placeholder',$(this).text());


});



$(".select__list-input").on('keyup', function(e){
  
  var parent = $(this).closest(".select__wrap");
  var input = parent.find(".select__wrap-input");
  var inputRange = parent.find(".select__wrap-input--range");
  var inputStart = parent.find(".select__list-input--start");
  var inputEnd = parent.find(".select__list-input--end");
  var rangeValues = "";
  if(inputStart.value == '' && inputEnd.value == '') {
    parent.find(".select__list-range--wrap").removeClass('active');
    input.attr('placeholder','');
    inputRange.val('');
    parent.removeClass("input__range");
    parent.find(".select__list").show();
  } else {
    parent.find(".select__list-range--wrap").addClass('active');
    if($(this).hasClass( "select__list-input--start" )) {
      var start = $(this).val();
      if(inputEnd.val()) {
        input.attr('placeholder',inputStart.val() + ' - ' + inputEnd.val());
        inputRange.val(inputStart.val() + ' - ' + inputEnd.val());
      } else {
        input.attr('placeholder',start);
        inputRange.val(start);
      }
      
    }
    if($(this).hasClass( "select__list-input--end" )) {
      
      var end = $(this).val();
      // if(inputEnd.val() < inputStart.val() || inputEnd.val() == inputStart.val()) {
      //   inputEnd.val('');
      // }
      if(end == '') {
        input.attr('placeholder',inputStart.val());
        inputRange.val(inputStart.val());
      } else {
        input.attr('placeholder',inputStart.val() + ' - ' + inputEnd.val());
        inputRange.val(inputStart.val() + ' - ' + inputEnd.val());
      }
   
    }
    parent.addClass("input__range");
    parent.find(".select__list").hide();
  }
  if(inputStart.val() == '' && inputEnd.val() == '') {
    input.attr('placeholder','');
    inputRange.val('');
    parent.removeClass("input__range");
    parent.find(".select__list").show();


    var arrayValues = [];
    var total = [];
    parent.find( ".select__item-value.checked" ).each(function() {
      arrayValues.push($(this).text());

    });

    input.attr('placeholder',arrayValues.join('|'));
   

  }

  updateQueryStringParam(input.attr('name'), input.attr('placeholder'));
  
});



$(".catalogFilters__form").bind("keypress", function (e) {  
  if (e.keyCode == 13) {  
  return false;  
  }  
  });



  // $(".select__wrap-input").on("keypress", function(e){
  //   var parent = $(this).closest(".select__wrap");
  //   var input = parent.find(".select__wrap-input");
    

  //   if (e.keyCode == 13) {  
  //     var filterValue = $(this).val().toLowerCase();
  //     parent.find('.select__item-value').each(function () {
  //         var text = $(this).text().toLowerCase();
  //         if(filterValue == text) {
  //           $(this).addClass('order_top');
  //           $( this ).click();
  //           $(".select__wrap").removeClass('opened'); 

  //           $(".select__wrap" ).each(function() {
  //             var placeholder = $(this).find(".select__wrap-input").attr('placeholder'); 
  //             if(placeholder == '') {
  //               placeholder = $(this).val();
  //             }
  //             if(placeholder != 'Любой' && placeholder != 'Любая' && placeholder != 'Любое') {
  //               $(this).find(".select__wrap-input").val(placeholder);
  //             }
  //           });

  //         } else {
  //           $(this).removeClass('order_top');
  //         }
        
          
  //     });
  //     if(parent.next().find(".select__wrap-input").length > 0) {
       
  //       parent.next().find(".select__wrap-input").focus();
  //     } else {
  //       $('.catalogFilters__form [type="submit"]').click();
  //     }
    
  //     }  


  // });

  let steel_analogues = ["3сп", "1", "01-02пс", "1пс", "1сп", "2", "02", "2п", "2пс", "02пс", "2пс-5", "2пс5", "2сп", "02сп", "3", "3гсп", "3кп", "3пс", "3пс5", "3пссп", "3сп", "3сп2", "3сп5"];
  $(".select__wrap-input").on("keypress", function(e){
    var parent = $(this).closest(".select__wrap");
    var input = parent.find(".select__wrap-input");
    var name = $(this).data('name');
    var name2 = $(this).attr('name');
    


    if (e.keyCode == 13) { 
      var filterValue = $(this).val().toLowerCase();
      if(steel_analogues.includes(filterValue)  && name2 == 'item_steel_mark') {  // Проверяем значение в списке аналогов // Только для сталей  
        let $el = parent.find('.select__list').find(`[data-value='1-3']`);
        $el.addClass("order_top");
        $el.click();
        $(".filters__inner-wrap").find("button").click();
        // document.querySelectorAll(".filters__inner-wrap")
      } else {
        parent.find('.select__item-value').each(function () {
          var text = $(this).text().toLowerCase();
          if(filterValue == text) {
            debugger;
            $(this).addClass('order_top');
            $(this).click();
          } else {
            
          }
      });
      }
      
   
      }  


  });




$(".select__wrap-input").on("keyup", function(e){
  
  var parent = $(this).closest(".select__wrap");
  var input = parent.find(".select__wrap-input");
  var inputRange = parent.find(".select__wrap-input--range");
  var inputStart = parent.find(".select__list-input--start");
  var inputEnd = parent.find(".select__list-input--end");



  // if (e.keyCode==8) {
  //   arrayValues = [];
  //   parent.find(".select__item-value").removeClass('checked');
  // } else {

  // }
});


$(document).mouseup( function(e){ // событие клика по веб-документу
  var div = $( ".select__wrap" ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
    $(".select__wrap").removeClass('opened'); 
    $(".new-select").removeClass('on'); 

    $(".select__wrap" ).each(function() {
      var placeholder = $(this).find(".select__wrap-input").attr('placeholder'); 
      if(placeholder == '') {
        placeholder = $(this).val();
      }
      if(placeholder != 'Любой' && placeholder != 'Любая' && placeholder != 'Любое' && placeholder != 'Все города' && placeholder != "Herhangi") {
        $(this).find(".select__wrap-input").val(placeholder);
      }
    });


  }
});

$(".select__wrap-input").on('focus', function(e) { 
  $(".select__wrap").removeClass('opened');
  var parent = $(this).closest(".select__wrap");

        parent.find('.select__item-value').each(function () {
         
          if ($(this).hasClass("checked")) {
              $(this).addClass('order__top');
          } else {
             
          }
        });



  parent.addClass('opened'); 
  if($(this).val()){
  $(this).attr('placeholder',$(this).val());
  $(this).val('');
}

});



$(document).ready(function() {
  $('.select__wrap-input').on('input', function () {
    var name2 = $(this).attr('name');

    let unic = false; // Проверяем ввёл ли пользователь одну из альтернатив стали 1-3

    // this.value.indexOf(this.defaultValue) && (this.value = this.defaultValue);
      var parent = $(this).closest(".select__wrap");
      parent.find('.select__list').scrollTop(0,0);
      var filterValue = $(this).val().toLowerCase();
      
      if(steel_analogues.includes(filterValue)  && name2 == 'item_steel_mark') {
        unic = true;
      }

      parent.find('.select__item-value').each(function () {
          var text = $(this).text().toLowerCase();
          if (text.includes(filterValue) || filterValue === '') {
              $(this).removeClass('hidden');
          } else {
              $(this).addClass('hidden');
          }
          if(filterValue == text) {
            if(!unic) {
              $(this).addClass('order_top');
            }
          } else {
            $(this).removeClass('order_top');
          }
      });

      if(steel_analogues.includes(filterValue)  && name2 == 'item_steel_mark') {
        unic = true;
        parent.find('.select__list').find(`[data-value='1-3']`).addClass('order_top').removeClass('hidden');;
        // parent.find('.select__list').prepend('<span class="select__item-value order__top" data-value="1-3">1-3</span>');
      }
      
    
      var n = parent.find('.select__item-value:not(.hidden)').length;
     

      
     
      if(n == 0 || n == 1) {
        var filterValue = $(this).val().toLowerCase();
        
        if(filterValue.includes("-")) {
          filterValue = filterValue.replace("-"+filterValue.split("-").pop(), "");
          console.log("new vasl: ", filterValue);
        } else if(filterValue.includes("х")) {
          let vals = filterValue.split("х");
          filterValue = vals.reverse().join("х");
          console.log("new vasl: ", filterValue);
        }
        
        parent.find('.select__item-value').each(function () { 
          $(this).addClass('hidden');
          if(!unic) {
            $(this).removeClass('order_top');
          }
          
         });

        parent.find('.select__item-value').each(function () {
          var text = $(this).text().toLowerCase();
          if (text.includes(filterValue) || filterValue === '') {
              $(this).removeClass('hidden');
          } else {
              $(this).addClass('hidden');
          }
          if(filterValue == text) {
            if(!unic) {
              $(this).addClass('order_top');
            }
          } else {
            $(this).removeClass('order_top');
          }
      });

      var n = parent.find('.select__item-value:not(.hidden)').length;
     
      if(n == 0) {
        parent.find('.select__list').append('<span class="select__item-value" data-value="'+$(this).val()+'">'+$(this).val()+'</span>');
      }
      }

      

      let founds = parent.find('.select__item-value:not(.hidden)').length;
      

  });
});

$(".clear__range").on('click', function (e) {
  var parent = $(this).closest(".select__wrap");
  var input = parent.find(".select__wrap-input");
  var inputRange = parent.find(".select__wrap-input--range");
  var inputStart = parent.find(".select__list-input--start");
  var inputEnd = parent.find(".select__list-input--end");
  parent.find(".select__list").show();
  parent.find(".select__list-range--wrap").removeClass('active');
  input.attr('placeholder','');
  parent.removeClass("input__range");
  arrayValues = [];
  parent.find( ".select__item-value.checked" ).each(function() {
        
    arrayValues.push($(this).text());
    console.log($(this).text())
  });

  parent.find('.select__item-value').removeClass("hidden");

    input.attr('placeholder',arrayValues.join('|'));
    input.val('');
    inputRange.val('');
    inputEnd.val('');
    inputStart.val('');


    updateQueryStringParam(input.attr('name'), '');
});



$("body").on("click",".select__wrap-single .select__item-value", function(e){
  console.log($(this).data('value'));
  if($(this).data('value')) {
    var value = $(this).data('value');
  } else {
    var value = $(this).text();
  }
  var parent = $(this).closest(".select__wrap");
  var input = parent.find(".select__wrap-input");
  input.val(value);
  parent.removeClass("opened");

  if(value == "Любой" || value == "Любая" || value == "Любое" && value == "Herhangi") {
    input.val('');
  } else {

  }

  updateQueryStringParam(input.attr('name'), input.val());
  $(this).removeClass('order__top');
});





function setCookie(cookieName, cookieValue, expireDays) {
  var d = new Date();
  d.setTime(d.getTime() + (expireDays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";domain=.e-metall.ru;path=/";
}
function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for(var i = 0; i <cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
          return cookie.substring(name.length, cookie.length);
      }
  }
  return "";
}


function checkClicks() {
  var clicks = getCookie("clicks");
  if (clicks == "") {
      clicks = 0;
  }
  clicks++;
  setCookie("clicks", clicks, 365);

  if (clicks > 20) {
      setCookie("access", "block", 365);
  }
}



$('.catalogFilters__form:not(.providerSite__filter)').on('submit', (event) => {
  event.preventDefault();
  var filters = {
    "post_id": true,
    "category": true
};




var formData2 = $(".catalogFilters__form")
    .find(":input").not('[value=""]')
    .filter(function (i, item) {
        return !filters[item.name];
    })
    .serialize();


 
    if ( document.body.classList.contains( 'logged-in' ) ) {
     
    } else {
      checkClicks();
    }


    if(getUrlParameter('ajax') == 1) {
        $.ajax({
            url: window.location.href+'&get_table=1',
            type: 'GET',
            processData: false,
            contentType: false,
            success: function(data) {
              $(".table").html(data); 
            }
          });
    } else {
      updateQueryStringParam('scroll', '1');
      window.location.href = window.location.href;
    }
    





});
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
  return false;
};


function moveCursorToEnd(e) {
  setTimeout(function(){
      const input = document.querySelector('.geo__sort-input--wrap .form__input');
      input.selectionStart = input.selectionEnd = input.value.length;
      input.focus();
  }, 0)
}


 $(".geo__sort").on("click", function(e){
  e.preventDefault();
$(this).hide();
$(".geo__sort-input--wrap").show();


$('.geo__sort-input--wrap .form__input').focus();
moveCursorToEnd();


 });




$(document).on('click', '#location option', function(){
  var options = $('#location')[0].options;
  var val = $(this).val();
  updateQueryStringParam('sort','');
  updateQueryStringParam('city', val);
  updateQueryStringParam('scroll', 1);
  window.location.href = window.location.href;
});




if(getUrlParameter('scroll') == 1) {
  $('html, body').animate({
    scrollTop: $('#tableContainer').offset().top - 200
}, {
    duration: 370,   // по умолчанию «400» 
    easing: "linear" // по умолчанию «swing» 
});
updateQueryStringParam('scroll', '');
}


(function($) {

  $.extend({
  
    debounce : function(fn, timeout, invokeAsap, ctx) {
  
      if(arguments.length == 3 && typeof invokeAsap != 'boolean') {
        ctx = invokeAsap;
        invokeAsap = false;
      }
  
      var timer;
  
      return function() {
  
        var args = arguments;
              ctx = ctx || this;
  
        invokeAsap && !timer && fn.apply(ctx, args);
  
        clearTimeout(timer);
  
        timer = setTimeout(function() {
          !invokeAsap && fn.apply(ctx, args);
          timer = null;
        }, timeout);
  
      };
  
    },
  
    throttle : function(fn, timeout, ctx) {
  
      var timer, args, needInvoke;
  
      return function() {
  
        args = arguments;
        needInvoke = true;
        ctx = ctx || this;
  
        if(!timer) {
          (function() {
            if(needInvoke) {
              fn.apply(ctx, args);
              needInvoke = false;
              timer = setTimeout(arguments.callee, timeout);
            }
            else {
              timer = null;
            }
          })();
        }
  
      };
  
    }
  
  });
  
  })(jQuery);
  

$('.catalogFilters__form button[type="submit"]').on('click', function(e) {
$(this).addClass('loader__btn');

});



  $("body").on('click',".select__item-value, .catalogFilters__radio", function(e) {
    var button = $( '.catalogFilters__form button[type="submit"]' );
    
    button.addClass( 'loader__btn' );
    
    setTimeout(function(){
      button.removeClass( 'loader__btn' );
    }, 300 );
  });
  


$('.providerSite .catalog__search__input').on('input', $.debounce(function(e){


  $.ajax({
    type : 'POST',
    url : '/wp-admin/admin-ajax.php', 
    data : {
      name : $(this).val() , 
      action : 'search_post'
    },
    beforeSend : function( xhr ) {
    
    },
    success : function( data ){
      $(".flexWrap").empty();
      $(".flexWrap").append( data );

    }

  });
  $(".btn_show-more--post").hide();

 

if($('.catalog__search__input').val() == '') {

  $(".btn_show-more--post").show();
}


}, 500));


$('.modal__login .login__form').on('submit', (event) => {
  event.preventDefault();
  let form = $(event.target),
    formData = form.serialize(),
    formArray = form.serializeArray(),
    buttonSMS = $(event.target).find('.send__sms'),
    buttonReg = $(event.target).find('.reg__btn'),
    smsBlock = $(event.target).find('.sms__block'),
    error = $(event.target).find('.login__error-wrap'),
    errorText = $(event.target).find('.login__error'),
    sms = $(event.target).find('[name="sms"]');
     
    $.ajax({
			type: "post",
			url: "/tools/reg.php",
			data: `${formData}&from=${window.location.href}`,
      beforeSend : function( xhr ) {
       
      },
			success(data) {
        console.log(data);
        if(data.status == 'sms_send') {
          sms.attr('type','text');
          sms.attr('required','required');
          buttonSMS.text( 'Отправили СМС с кодом' );
          buttonSMS.attr('disabled', 'disabled');
          smsBlock.show();
          buttonReg.show();
          error.hide();
        } else if(data.status == 'error') {
          error.show();
          errorText.text(data.message);
        } else if(data.status == 'ok') {
          window.location.href = data.url;
          window.location.reload();
        }
	
			}
		})

});


$('.modal__login-reg-user .login__form, .pro-form .block__russia .login__form').on('submit', (event) => {
  event.preventDefault();
  let form = $(event.target),
    formData = form.serialize(),
    formArray = form.serializeArray(),
    buttonSMS = $(event.target).find('.send__sms'),
    buttonReg = $(event.target).find('.reg__btn'),
    smsBlock = $(event.target).find('.sms__block'),
    error = $(event.target).find('.login__error-wrap'),
    errorText = $(event.target).find('.login__error'),
    sms = $(event.target).find('[name="sms"]');
     
    $.ajax({
			type: "post",
			url: "/tools/auth.php",
			data: `${formData}&from=${window.location.href}`,
      beforeSend : function( xhr ) {
       
      },
			success(data) {
        console.log(data);
        if(data.status == 'sms_send') {
          sms.attr('type','text');
          sms.attr('required','required');
          buttonSMS.text( 'Отправили СМС с кодом' );
          buttonSMS.attr('disabled', 'disabled');
          smsBlock.show();
          buttonReg.show();
          error.hide();
        } else if(data.status == 'error') {
          error.show();
          errorText.text(data.message);
        } else if(data.status == 'ok') {
          window.location.href = data.url;
          window.location.reload();
        }
	
			}
		})

});


$('.modal__login-provider .login__form,.modal__login-reg-user-in .login__form, .pro-form .block__world .login__form').on('submit', (event) => {




  event.preventDefault();
  let form = $(event.target),
    formData = form.serialize(),
    formArray = form.serializeArray(),
    error = $(event.target).find('.login__error-wrap'),
    errorText = $(event.target).find('.login__error');

     

    $.ajax({
      type: "post",
      url: "/login.php",
      data: `${formData}&from=${window.location.href}`,
      success(data) {
          if (data.status == "ok") {
              window.location.href = data.url;
              window.location.reload();
          } else {
            error.show();
            errorText.html(data.message);
          }
      }
  })



});


if (window.location.search.includes('?reg=1')) {
  $('.overlay, .modal__login').fadeIn();
}



$('body').on('click','.btn__signin,.guest__cart', function() {
  $('.overlay, .modal').fadeOut();
  $('.overlay, .modal__login-reg-user').fadeIn();
  
});


$('body').on('click','.modal__login-reg-user-in .check__inno', function() {
  $('.overlay, .modal').fadeOut();
  $('.overlay, .modal__login-reg-user').fadeIn();
});


$('body').on('click','.modal__login-reg-user .check__inno', function() {
  $('.overlay, .modal').fadeOut();
  $('.overlay, .modal__login-reg-user-in').fadeIn();
});


$('body').on('click','.btn__provider', function() {
  $('.overlay, .modal').fadeOut();
  $('.overlay, .modal__login-provider').fadeIn();
  
});

$(".show__more-choise").on('click', function() {
  $(".choise__item").show();
  $(this).hide();
});


$(".catalogShowMore, .catalogHide").on('click', function(e) {
  e.preventDefault();
  $(this).closest('.catalog__list__item').find('.catalog__list__wrap').toggleClass('heightAuto');
  $(this).closest('.catalog__list__item').find('.catalogShowMore').toggleClass('hide');
  $(this).closest('.catalog__list__item').find('.catalogHide').toggleClass('hide');
});



$('.anketa__form').on('submit', (event) => {
  event.preventDefault();
  let form = $(event.target),
      formData = form.serialize();

  $.ajax({
      type: "post",
      url: "/updateMeta.php",
      data: `${formData}&from=${window.location.href}`,
      success(msg) {
          if (msg == "success") {
              
            window.location.href = window.location.href;
          } else {
              // $(".error-msg").html('');
              // $(msg).appendTo('.error-msg');
          }
      }
  })

});







// $('body').on('submit','.calc-body-xplanet', (event) => {
//   event.preventDefault();
//   let form = $(event.target),
//       formData = form.serialize();
//   $(".wait").show();
//   $(".error-calc").hide();
//   $.ajax({
//       type: "post",
//       url: "/ajax/xplanet.php",
//       data: `${formData}&from=${window.location.href}`,
//       success: function( respond, status, jqXHR ){
//           console.log(respond);
//           var obj = jQuery.parseJSON( respond );
//           var price = obj.total;
//           if(price) {
//               $(".result__text").removeClass("result-error");
//               $(".result__text").html("Стоимость доставки: <b>"+price.toLocaleString()+" ₽</b>");
//               $(".form_xplanet").hide();
//           } else {
//               $(".result__text").addClass("result-error");
//               $(".result__text").html(`Не удалось рассчитать стоимость перевозки по заданным параметрам. <br>

//               Заполните форму ниже, мы рассчитаем стоимость в ручном режиме и свяжемся с вами.<br>`);
//               $(".form_xplanet").show();
//           }
//       }
//   })
// });
// $('body').on('click','.btn-send-xplanet', (event) => {
//   event.preventDefault();
//   let form = $(".calc-body-xplanet"),
//       formData = form.serialize();
//   $.ajax({
//       type: "post",
//       url: "/ajax/xplanet.php",
//       data: `${formData}&from=${window.location.href}&type=send`,
//       success: function( respond, status, jqXHR ){
//           console.log(respond);
//           var obj = jQuery.parseJSON( respond );
//           var price = obj.total;
      
//               $(".result__text").addClass("result-error");
//               $(".result__text").html(`Ваша заявка принята. Мы свяжемся с вами в ближайшее время.`);
//               $(".form_xplanet").hide();
//       }
//   })

// });




$('input[type="radio"]').change(function() {
	var valSelected = $(this).val();
	console.log(valSelected)
  if(valSelected == 'all') {
    updateQueryStringParam($(this).attr('name'), '');
  } else {
    updateQueryStringParam($(this).attr('name'), valSelected);
  }


});


$('.form__send-action').on('submit', (event) => {

  event.preventDefault();
  let form = $(event.target),
      formData = form.serialize();

  $.ajax({
      type: "post",
      url: "/api/actions.php",
      data: `${formData}&from=${window.location.href}`,
      success(data) {
          if (data.result == "success") {
            $('.overlay, .modal').fadeOut();
            $('.overlay, .modal__thanks').fadeIn();
          } else {
              // $(".error-msg").html('');
              // $(msg).appendTo('.error-msg');
          }
      }
  })




});






$('body').on('click','.btn__add_cart', function(event) { 
  var product_id = $(this).data('product_id'); 
  var cat_id = $(this).data('cat_id');
  var category = $(this).data('category');
  $(this).addClass('in-cart');
  $(this).text('В корзине');



  if($(this).data('priceitem')) {
    $(".cart__item-price").text($(this).data('priceitem'));
  }
  console.log(product_id); 

  event.preventDefault();
  $(".cart-modal__position").text("");
  $.ajax({
      type: "post",
      url: "/api/checkout-api/",
      data: {
          product_id: product_id,
          cat_id: cat_id,
          category: category,
          action: 'add_cart_item',
          from: window.location.href
      },
      success(data) {
          console.log(data);
          $(".cart-modal__position").text(data.message);
          $(".cart__item-name").text(data.message);
          
      }
  });
});

$('.btn__set_vip').on('click', function(event) { 
  var product_id = $(this).data('product_id'); 
  var vip = $(this).data('vip');
  var category = $(this).data('category');


  console.log(product_id); 

  event.preventDefault();

  $.ajax({
      type: "post",
      url: "/api/checkout-api/",
      data: {
          product_id: product_id,
          vip: vip,
          category: category,
          action: 'toggle_vip',
          from: window.location.href
      },
      success(data) {
          window.location.reload();
          console.log(data);
      }
  });
});






$('.cart__quantity__count .plus').on('click', function(event) { 
  var parent = $(this).closest(".cart__item");
  var cart_item_id = $(parent).data('id'); 
  var cart_id = $(parent).data('cartid');
  var quantity = $(parent).find(".quantity").val();

 

  event.preventDefault();

  $.ajax({
      type: "post",
      url: "/api/checkout-api/",
      data: {
        cart_item_id: cart_item_id,
        cart_id: cart_id,
        quantity: quantity,
          action: 'update_cart_item',
          from: window.location.href
      },
      success(data) {
          console.log(data);
      }
  });
  var priceItem = $(parent).find(".cart__price__prod span").text();
  var totalItemPrice = priceItem*quantity;
  $(parent).find(".cart__price__summ span").text(totalItemPrice.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }));
});


$('.cart__quantity__count .minus').on('click', function(event) { 
  var parent = $(this).closest(".cart__item");
  var cart_item_id = $(parent).data('id'); 
  var cart_id = $(parent).data('cartid');
  var quantity = $(parent).find(".quantity").val();

 

  event.preventDefault();

  $.ajax({
      type: "post",
      url: "/api/checkout-api/",
      data: {
        cart_item_id: cart_item_id,
        cart_id: cart_id,
        quantity: quantity,
          action: 'update_cart_item',
          from: window.location.href
      },
      success(data) {
          console.log(data);
      }
  });
  var priceItem = $(parent).find(".cart__price__prod span").text();
  var totalItemPrice = priceItem*quantity;
  $(parent).find(".cart__price__summ span").text(totalItemPrice.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }));
});



$('.cart__quantity__count .quantity').on('change', function(event) { 
  var parent = $(this).closest(".cart__item");
  var cart_item_id = $(parent).data('id'); 
  var cart_id = $(parent).data('cartid');
  var quantity = $(this).val();

 

  event.preventDefault();

  $.ajax({
      type: "post",
      url: "/api/checkout-api/",
      data: {
        cart_item_id: cart_item_id,
        cart_id: cart_id,
        quantity: quantity,
          action: 'update_cart_item',
          from: window.location.href
      },
      success(data) {
          console.log(data);
      }
  });
  var priceItem = $(parent).find(".cart__price__prod span").text();
  var totalItemPrice = priceItem*quantity;
  $(parent).find(".cart__price__summ span").text(totalItemPrice.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }));
});


$(document).ready(function() {
  // Функция для обновления счетчика отмеченных элементов
  function updateCheckedCount() {
      const checkedCount = $('.cart__name__input[type="checkbox"]:checked').length;
   if(checkedCount === 0) {
    $('.cart__count').text(" ");
   } else {
    $('.cart__count').html("&nbsp;("+checkedCount+")");
   }
    
    
  }

  // Обработчик для отдельных чекбоксов
  $('.cart__name__input[type="checkbox"]').on('change', function() {
      updateCheckedCount();
  });

  // Обработчик для "выбрать все"
  $('.cart__wrap__input#all').on('change', function() {
      $('.cart__name__input[type="checkbox"]').prop('checked', this.checked);
      updateCheckedCount();
  });

  // Обработчик удаления
  $('.cart__wrap.delete').on('click', function() {
      const checkedItems = $('.cart__item').has('.cart__name__input[type="checkbox"]:checked');
      const cartItemIds = checkedItems.map(function() {
          return $(this).attr('data-id');
      }).get();
      
      const cartId = checkedItems.length > 0 ? checkedItems.first().attr('data-cartid') : null;
      
      if (cartItemIds.length === 0) {
          console.log('Нет выбранных элементов');
          return;
      }
      
      $.ajax({
          type: "POST",
          url: "/api/checkout-api/",
          data: {
              cart_item_id: cartItemIds,
              cart_id: cartId,
              quantity: checkedItems.length,
              action: 'delete_cart_item',
              from: window.location.href
          },
          success: function(data) {
              console.log(data);
              checkedItems.fadeOut(300, function() {
                  $(this).remove();
                  
                  // Обновляем оба счетчика
                  const remainingItems = $('.cart__item').length;
                  let positionsText = remainingItems === 1 ? '1 позиция' : 
                                    remainingItems <= 4 ? `${remainingItems} позиции` : 
                                    `${remainingItems} позиций`;
                  $('.cart__subtitle').text(positionsText);
                  
                  updateCheckedCount();
              });
          },
          error: function(xhr, status, error) {
              console.error('Ошибка:', error);
          }
      });
  });

  // // Инициализация счетчиков при загрузке
  // updateCheckedCount();
});




$('.cart__order__wrap .order_btn').on('click', function(event) { 
  event.preventDefault(); // Предотвращаем действие по умолчанию
  
  // Проверяем, есть ли класс disable__btn
  if ($(this).hasClass('disable__btn')) {
      console.log('Кнопка отключена, действие не выполняется');
      return; // Прерываем выполнение, если кнопка отключена
  }

  var cart_id = $(this).data('cart_id'); 

  $.ajax({
      type: "post",
      url: "/api/checkout-api/",
      data: {
          cart_id: cart_id,
          action: 'create_order',
          from: window.location.href
      },
      success(data) {
        $('.overlay, .modal__order').fadeIn();
      },
      error(xhr, status, error) {
          console.error('Ошибка AJAX:', status, error);
      }
  });
});



  
$('.modal__problem form').on('submit', (event) => {

  event.preventDefault();
  let form = $(event.target),
      formData = form.serialize();

  $.ajax({
      type: "post",
      url: "/company/complaints.php",
      data: `${formData}&from=${window.location.href}`,
      success(data) {
          if (data.result == "success") {
            $('.overlay, .modal').fadeOut();
            $('.overlay, .modal__thanks').fadeIn();
            $(".modal__thanks .fs_14.lh_150.mb_20").text("Мы проведем дополнительную проверку и актуализируем информацию.")
          } else {
              // $(".error-msg").html('');
              // $(msg).appendTo('.error-msg');
          }
      }
  })




});

$('.form__send-action-request').on('submit', (event) => {

  event.preventDefault();
  let form = $(event.target),
      formData = form.serialize();

  $.ajax({
      type: "post",
      url: "/ajax/request.php",
      data: `${formData}&from=${window.location.href}`,
      success(data) {
          if (data.result == "success") {
            $('.overlay, .modal').fadeOut();
            $('.overlay, .modal__thanks').fadeIn();
          } else {
              // $(".error-msg").html('');
              // $(msg).appendTo('.error-msg');
          }
      }
  })




});


$(".modal-prod,.modal__prod-t").on('click', (event) => {
event.preventDefault();
$('.overlay, .modal__prod').fadeIn();
});


$('body').on('click', '.company-site', function(e){
  var companyID = $(this).data('companyid');
  
  var url = $(this).attr('href');
      $.ajax({
          type: "post",
          url: "/analytics.php",
          dataType: "json",
          data: `&companyid=${companyID}&from=${window.location.href}&action=site_click`,
          success(msg) {
                  
          }
      });
  });
  
  $('body').on('click', '.em-analytic', function(e){
      e.preventDefault();
      var companyID = $(this).data('companyid');


          $.ajax({
              type: "post",
              url: "/analytics.php",
              dataType: "json",
              data: `&companyid=${companyID}&from=${window.location.href}&action=open_email`,
              success(msg) {
                      
              }
          });
      });
      $('body').on('click', '.tel-analytic', function(e){
        e.preventDefault();
        var companyID = $(this).data('companyid');
  
  
            $.ajax({
                type: "post",
                url: "/analytics.php",
                dataType: "json",
                data: `&companyid=${companyID}&from=${window.location.href}&action=open_tel`,
                success(msg) {
                        
                }
            });
        });

      



      
  
  $(document).ready(function(){
      $(".tel__copy").bind({
          copy : function(){
              var companyID = $(this).data('companyid');
                  $.ajax({
                      type: "post",
                      url: "/analytics.php",
                      dataType: "json",
                      data: `&companyid=${companyID}&from=${window.location.href}&action=tel_copy`,
                      success(msg) {
                              
                      }
                  });
          }
  
      });
      $(".email__copy").bind({
          copy : function(){
              var companyID = $(this).data('companyid');
                  $.ajax({
                      type: "post",
                      url: "/analytics.php",
                      dataType: "json",
                      data: `&companyid=${companyID}&from=${window.location.href}&action=email_copy`,
                      success(msg) {
                              
                      }
                  });
          }
  
      });
  });
  


  $(".btn__buy").on("click", function (e) {
    e.preventDefault();

    if($(this).hasClass('btn__buy-iframe')){
      $(".iframe__block").show();
      $(".iframe__block iframe").attr('src', $(this).data('frame') );
    } else {
      var url = $(this).data('href'); 
      window.open(url, '_blank');
    }



  });




//сообщить о несоответсвии
$('body').on('click','.catalogFilters__warning', function(){
  $('.overlay, .modal__problem').fadeIn();
  var product_id = $(this).data('product_id');
  var cat_id = $(this).data('cat_id');
  var category = $(this).data('category');
  $('input[name="product_id"]').val(product_id);
  $('input[name="cat_id"]').val(cat_id);
  $('input[name="category"]').val(category);

});




  $("body").on('click',".select__item-value, .catalogFilters__radio", function(e) {

    var formDataPlaceholders = {};
  
    $("#catalogFilters__form").find( "input" ).each(function() {
        
      formDataPlaceholders[$(this).attr('name')] = $(this).attr('placeholder');
     
    });
    formDataPlaceholders['post_id'] = $('input[name="post_id"]').val();
    formDataPlaceholders['post_id_parent'] = $('input[name="post_id_parent"]').val();
    formDataPlaceholders['category'] = $('input[name="category"]').val();
    console.log(formDataPlaceholders);

  //     $.ajax({
  //   url: '/tools/page.php',
  //   type: 'POST',
 
  //   data: {array: JSON.stringify(formDataPlaceholders)},

  //   success: function(data) {
  //     // setUrl(data);
  //   }
  // });

  });










});


