// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // untuk dinamis navbar
    dynamicNavbar: true
});

// fungsi untuk memanggil page about
myApp.onPageInit('map', function (page) {
  // preloader
   myApp.showPreloader();
    setTimeout(function () {
        myApp.hidePreloader();
    }, 1000);

  //map
  var lokasi = new google.maps.LatLng(-7.8422462, 111.9461466);

   var mapOptions = {
       center: lokasi,
       zoom: 10,
       gestureHandling: 'cooperative', //untuk gesture mobile
       disableDefaultUI: true, //disable control
       mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   var map = new google.maps.Map(document.getElementById("staticMap"), mapOptions);

   // var img="img/logo.png";
   var marker = new google.maps.Marker ( { //menambahkan marker
      position:lokasi,
      map:map,
      animation: google.maps.Animation.BOUNCE, //animasi
      // icon: img,
      title:"Aku bocah Kediri"
   });

   google.maps.event.addDomListener(marker, 'click', function() { //event
      myApp.alert('Aku bocah Kediri!');
   });
});

// fungsi untuk memanggil page about
myApp.onPageInit('about', function (page) {
  // preloader
   myApp.showPreloader();
    setTimeout(function () {
        myApp.hidePreloader();
    }, 1000);
});

// fungsi untuk memanggil page about
myApp.onPageInit('profil', function (page) {
  // preloader
   myApp.showPreloader();
    setTimeout(function () {
        myApp.hidePreloader();
    }, 1000);

  //untuk tanggal
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

$$('.facebook-date').html(dd +'/' +  mm + '/' +yyyy);
});

//fungsi untuk memanggil halaman math
myApp.onPageInit('math', function (page) {
  //untuk perkalian
  $$('#kali').on('click',function(){
    var angka1=$$('#angka1').val();
    var angka2=$$('#angka2').val();
    myApp.showPreloader();
    setTimeout(function () {
        myApp.hidePreloader();        
        $$('#hasil').val(angka1*angka2);
    }, 500);
  });
  //untuk membersihkan form
  $$('#bersih').on('click',function(){
    $$('#angka1').val('');
    $$('#angka2').val('');
    $$('#hasil').val('');
  });
});

// fungsi untuk memanggil page index
myApp.onPageInit('index', function (page) {
  // preloader
   myApp.showPreloader();
    setTimeout(function () {
        myApp.hidePreloader();
    }, 1000);
});
