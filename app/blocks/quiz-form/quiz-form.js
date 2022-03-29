$(function(){
   $.each($('.quiz-form'), function(){

      let form = $(this)

      let buttons = form.find('.quiz-form__pagination-button')

      let list = form.children('.quiz-form__block-list')

      let message = $(form).children('.quiz-form__message')

      let title = form.children('.quiz-form__title')
      let titleQuestion = $(title).children('.quiz-form__title-question')
      let titleCurrent = $(title).find('.quiz-form__block-pagination_current')
      let titleTotal = $(title).find('.quiz-form__block-pagination_total')

      let blockCurrent = $(list).children(':first-child')
      let blockCurrentText 

      let numberCurrent = 1    
      let numberTotal = $(list).children().length
   
      $(titleTotal).text(numberTotal)

      changeText()

      $(buttons).click(function(e){

         e.preventDefault()
         
         let direction = $(this).hasClass('button_empty_right') ? 'right' : 'left'

         if( direction == 'right' && numberCurrent < numberTotal && checkActiveItems()){

            numberCurrent++
            slide()
            changeBlock('next')
            changeText()

         }else if (direction == 'left' && numberCurrent > 1){
            
            numberCurrent--
            slide()
            changeBlock('previous')
            changeText()

         }else if (direction == 'right' && numberCurrent == numberTotal && checkActiveItems()){

            $(form).addClass('quiz-form_disable').children('*:not(.quiz-form__message)').css({display: 'none'})
            $(message).addClass('quiz-form__message_active')
            
         }

      })

      function changeText(){

         $(titleCurrent).text(numberCurrent)

         blockCurrentText = $(blockCurrent).children('.quiz-form__question_hidden').html()

         $(titleQuestion).text(blockCurrentText)

      }

      function changeBlock(dir){

         $(blockCurrent).removeClass('quiz-form__block_shown')
         blockCurrent = dir == 'next' ? $(blockCurrent).next() : $(blockCurrent).prev()
         $(blockCurrent).addClass('quiz-form__block_shown')

      }

      function slide(){
         $(list).css({transform: 'translate(-' + (numberCurrent - 1) * 100 + '%)'})
      }

      function checkActiveItems(){
        let activeItems = $(blockCurrent).find('.quiz-form__checkbox:checked')
        if(activeItems.length > 0){
           return true
        }else{
           return false
        }
         
      }
   })

})