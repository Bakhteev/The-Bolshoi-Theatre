let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let nomination1 = document.getElementById('nomination1');
let nomination2 = document.getElementById('nomination2');
let nomination3 = document.getElementById('nomination3');
let nomination4 = document.getElementById('nomination4');
let date1 = document.getElementById('date1');
let date2 = document.getElementById('date2');
let date3 = document.getElementById('date3');
let date4 = document.getElementById('date4');
let search1 = document.getElementById('search1');
let search2 = document.getElementById('search2');
let search3 = document.getElementById('search3');
let search4 = document.getElementById('search4');

let Items = [item1, item2, item3, item4];
let nominations = [nomination1, nomination2, nomination3, nomination4];
let dates = [date1, date2, date3, date4];
let searchs = [search1, search2, search3, search4];

Items.forEach((items, i) => items.addEventListener('mouseenter', () => {
    items.classList.add('active');
    nominations[i].classList.add('opacity0');
    dates[i].classList.add('opacity0');
    searchs[i].classList.add('opacity');
}));
Items.forEach((items, i) => items.addEventListener('mouseleave', () => {
    items.classList.remove('active');
    nominations[i].classList.remove('opacity0');
    dates[i].classList.remove('opacity0');
    searchs[i].classList.remove('opacity');
}))


