const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Xử lý headerSticky 
const headerNavBar = $('.header__nav-bar');
const headerTopBar = $('.header__top-bar');
window.addEventListener('scroll', scrollHeader);
function scrollHeader() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerNavBar.classList.add('scroll');
        headerTopBar.classList.add('hide');
    }
    else {
        headerNavBar.classList.remove('scroll');
        headerTopBar.classList.remove('hide');
    }
}

// Xử lý khi click vào các item trong nav bar 
const navItems = $$('.header__nav-item');
const showBorder = $('.showBorder');
const border = $('.header__nav-list .border');
console.log(border);

// // Lấy ra thằng đang có border :
// const navBorderActive = $('.header__nav-item.showBorder');
// console.log([navBorderActive]);
// border.style.left = navBorderActive.offsetLeft + 'px';
// border.style.width = navBorderActive.offsetWidth + 'px';

navItems.forEach(function(navItem) {
    navItem.onclick = function() {
        // Có thằng nào có class showBorder thì xóa đi
        $('.header__nav-item.showBorder').classList.remove('showBorder');
       this.classList.add('showBorder');

        // border.style.left = this.offsetLeft + 'px';
        // border.style.width = this.offsetWidth + 'px';    
    }
})


// Xử lý khi click vào nút search 
const btnSearch = $('.nav-search__icon');
const boxSearch = $('.header__nav-search');
const inputSearch = $('.box-search-input');
btnSearch.onclick = function() {
    boxSearch.classList.toggle('active');
    inputSearch.focus();
    inputSearch.onkeydown = function(e) {
        if(e.code == 'Enter') {
            boxSearch.classList.remove('active');
            inputSearch.value = '';
        }
    }
}


// Xử lý khi click vào button bar 
const btnBar = $('#menu__open');
console.log(btnBar);
const navSearch = $('.header__nav-search');
const btnClose = $('.header__bar-close');
const overlay = $('.overlay');
console.log(btnClose);
btnBar.onclick = function() {
    navSearch.classList.add('open');
    
}

overlay.onclick = function() {
    navSearch.classList.remove('open');
}

btnClose.onclick = function() {
    navSearch.classList.remove('open');
}




// Xử lý khi click vào từng item trong bar 
const itemBars = $$('.header__bar-item');
itemBars.forEach(function(itemBar) {
    itemBar.onclick = function() {
        $('.header__bar-item.active').classList.remove('active');
        this.classList.add('active');
    }
})


// Xử lý khi click vào các item trong transport 
const transportItems = $$('.transport__item');
transportItems.forEach(function(item) {
    item.onclick = function() {
        $('.transport__item.active').classList.remove('active');
        this.classList.add('active');
    }
})



// Xử lý form
const form = $('form');
form.onsubmit = function(e) {
    e.preventDefault();
}



// Xử lý scroll Top :

// Xử lý quay lại đầu trang
var scrollOnTop = function() {
    var header = $('.header');
    header.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
}
// Xử lý khi ấn nút arrow up thì quay lại đầu trang
const btnScrollTop = $('.scroll__top');
btnScrollTop.onclick = function() {
    scrollOnTop();
}

// Xử lý ẩn hiện nút arrow up
window.addEventListener('scroll', scrollBtnDisplay);
function scrollBtnDisplay() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnScrollTop.style.display = 'flex';
    }
    else {
        btnScrollTop.style.display = 'none';
    }
}