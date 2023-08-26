const depth1 = $('.depth1');
depth1.hover(
    function () { $('.depth2').css('display', 'block'); $('header').addClass('on'); },
    function () { $('.depth2').css('display', 'none'); $('header').removeClass('on'); }
)

// slide
// = : 할당 연산자 (좌항에 우항의 값을 할당)
const slides = $('.slide_wrap li');
let n = 0;
function slide() { slides.removeClass('on'); slides.eq(n).addClass('on'); n++; if (n >= slides.length) { n = 0 } } // 변수+1
setInterval(() => { slide(); }, 2000);

// tab
const tabBtn = $('.board .buttons li');
const panels = $('.panels>div');
tabBtn.on('click', function (e) {
    e.preventDefault(); let tg = $(this).index();
    tabBtn.removeClass('on');
    tabBtn.eq(tg).addClass('on');
    panels.hide();
    panels.eq(tg).show();
});

// popup
$('.open').on('click', function (e) {
    e.preventDefault();
    $('.popup').show(); $('.overlay').addClass('open');});

$('.close').on('click', function (e) {
    e.preventDefault();
    $('.popup').hide(); $('.overlay').removeClass('open');});