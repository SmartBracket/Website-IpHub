$(function(){

   $.each($('.popup__item'), function(){
      
      let popup = $('.popup')
      let popupName = $(this).data('popup')
      let popupWindow =  $(popup).children('[data-popup="' + popupName + '"]')
      let closeButton = $(popupWindow).find('.popup__close')
      
      let active = true

      $(this).click(function(e){
         if(active){
            active = false
            $(popup).addClass('popup_active').animate({opacity: 1}, 300, function(){
               $(popupWindow).addClass('popup__window_active').animate({opacity: 1}, 300)
            })
            bodyOverflowHidden()
         }else{
            e.preventDefault()
         }
         

      })

      $(closeButton).click(function(e){
         if(!active){
             $(popup).animate({opacity: 0}, 300, function(){
               $(this).removeClass('popup_active')
               $(popupWindow).css({opacity: 0}).removeClass('popup__window_active') 
               active = true
               bodyOverflowNormal()
            })
         }else{
            e.preventDefault()
         }
        
         
      })

   })
})