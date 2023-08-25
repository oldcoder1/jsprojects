let lang = document.querySelector('.text');
let hide = document.querySelector('.text2');
let inp = document.querySelector('.if');
let pt = document.querySelector('.fs');
let link = document.querySelector('.link')
let input = document.querySelector('.ore')
let oar = document.querySelector('.oar')
let clic = document.querySelector('.ikoj')
lang.addEventListener('click', function(){
console.log(77);
if(hide.classList.contains('tex')){
    hide.classList.remove('tex')

}
else(
    hide.classList.add('tex')
)

});
clic.addEventListener('click', function(){
 console.log(777);
   if(clic.classList.contains('change')){
    clic.classList.remove('change');
    input.classList.remove('element');
    pt.classList.remove('el')
    inp.classList.remove('od')
    oar.classList.remove('wow')
}
else{
    clic.classList.add('change');
    inp.classList.add('od')
    input.classList.add('element');
    pt.classList.add('el')
    oar.classList.add('wow')

}
});
