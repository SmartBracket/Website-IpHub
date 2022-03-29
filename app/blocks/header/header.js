$(function(){
   $('.header__burger').on('click',()=>{
      $('.header__menu-wrap').toggleClass('header__menu-wrap_active')
      $('.header__burger_normal').toggleClass('header__burger_hiden')
      $('body').toggleClass('body__overflow_hidden')
   })

})