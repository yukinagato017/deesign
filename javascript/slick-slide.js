$(document).on('ready', function () {
$('.center').slick({
centerMode: false,
dots: true,
infinite: false,
autoplay: true,
centerPadding: '60px',
slidesToShow: 3,
arrows: true,
autoplaySpeed: 2000,
responsive: [
{
breakpoint: 768,
settings: {
arrows: false,
centerMode: false,
centerPadding: '40px',
slidesToShow: 1
}
},
{
breakpoint: 768,
settings: {
arrows: false,
centerMode: false,
centerPadding: '40px',
slidesToShow: 1
}
}
]
});
});