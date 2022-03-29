$(function(){

   $.each($('.slider'),function(){

      let slider = $(this)
      let sliderList = $(slider).find('.slider__list')
      let sliderItems = $(sliderList).children()
      let sliderLength = $(sliderItems).length
      let sliderButtons = $(slider).find('.slider__pagination').children()

      let step = 0

      let itemsGap = removePixels($(sliderList).css('columnGap'))
      let itemsWidth
      let itemsVisible

      getItemsSizes()

      $(window).resize(function() {

         getItemsSizes()
         
         if(step != 0){
            step = 0
            slide()
            show(sliderItems)
         }

      })

      $(sliderButtons).click(function(){

         let button = $(this)
         
         let direction = $(button).find(':first-child').attr('class') == 'button__slide-arrow_left' ? 'left' : 'right';


         if( direction == 'left' && step > 0 ){

            show($(sliderList).children(':nth-of-type(' + step +')'))
            step -= 1
            slide()


         }else if(direction == 'right' && itemsVisible + step < sliderLength){

            step += 1
            slide()
            hide($(sliderList).children(':nth-of-type(' + step + ')'))

         }
      })

      function getItemsSizes(){
         itemsWidth = $(sliderList).children(':first-child').width() + itemsGap  
         itemsVisible = window.innerWidth > 1000 ? Math.round(window.innerWidth / itemsWidth) - 1 : Math.round(window.innerWidth / itemsWidth)
      }
      
      function slide(){
         $(sliderList).css('transform',  'translate(-' + itemsWidth * step + 'px)')
      }

      function hide(element){

         $(element).addClass('slider__item_hidden')

      }

      function show(element){
         $(element).removeClass('slider__item_hidden')
      }
      
   })
})