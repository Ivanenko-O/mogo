
//slick

$(document).ready(function(){

	$('.single-item').slick({
		infinite: true,
		arrows: true,
		// centerMode: true,
		// variableWidth: true,
		slidesToShow: 1
	});

	var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });
});

function initMap() {
      var myLatLng = {lat: -25.363, lng: 131.044};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: myLatLng
    });

      var img =  'img/marker.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: -25.363, lng: 132.274},
          map: map,
          title: 'to see more'
    });

        $('.maps').on('click scroll', openCart);

        function openCart() {
            console.log('d');
            $('.maps').toggleClass('maps_sm');
        }
  };


