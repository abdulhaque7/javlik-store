burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});


const apiKey = 'S3rqHyHsXLJpyT_919c1svA_N0ztYF3DndxGraPSCTI';

const platform = new H.service.Platform({
        'apikey': apiKey
    });

    const defaultLayers = platform.createDefaultLayers();

    const map = new H.Map(
        document.getElementById('map'),
        defaultLayers.vector.normal.map,
    { 
        center: { lat: 28.50130619436116, lng: 77.29248051439512 },
    zoom: 20,
    pixelRatio: window.devicePixelRatio || 1
}
);

const marker = new H.map.Marker({ lat: 28.50130619436116, lng: 77.29248051439512 });
map.addObject(marker);

const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

const ui = H.ui.UI.createDefault(map, defaultLayers);


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*
function initMap() {
    var shopLocation = {lat:28.50130619436116, lng:77.29248051439512};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: shopLocation,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        map: map,
        position: shopLocation,
        title: 'Javlik Store'
    });
}*/
/*
var map = L.map('map').setView([28.50130619436116, 77.29248051439512], 13); // Set initial coordinates and zoom level
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);*/


/*
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});*/
