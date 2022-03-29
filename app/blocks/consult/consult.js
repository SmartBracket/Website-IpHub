$(function(){

   let inputs = '#consult__name-id,#consult__tel-number-id,#consult__mail-id, #consult__request-id'

   $(inputs).blur(function(){

      let val = $(this).val()
      let id = $(this).attr('id')

      switch(id){

         case 'consult__name-id':

            let rv_name = /^[a-zA-Zа-яА-Я]+$/

            if(val.length > 2 && val != '' && rv_name.test(val)){

               $('#consult__name-id').removeClass('consult__input_invalid').next('.consult__error').html('')

             }else{

               $('#consult__name-id').addClass('consult__input_invalid').next('.consult__error').html('Укажите ваше имя')

             }

         break

         case 'consult__mail-id':
            let rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/
            
            if(val != '' && rv_email.test(val)){
               $('#consult__mail-id').removeClass('consult__input_invalid').next('.consult__error').html('')
            }else{
               $('#consult__mail-id').addClass('consult__input_invalid').next('.consult__error').html('Укажите вашу почту')
            }
         break

         case 'consult__tel-number-id':

            let rv_tel = /^((\+7|7|8)+([0-9]){10})$/

            if(val != '' && rv_tel.test(val)){
               $('#consult__tel-number-id').removeClass('consult__input_invalid').next('.consult__error').html('')
            }else{
                $('#consult__tel-number-id').addClass('consult__input_invalid').next('.consult__error').html('Укажите ваш номер телефона')
            }
         break

         case 'consult__request-id':
            
            if(val != ''){
               $('#consult__request-id').removeClass('consult__input_invalid').next('.consult__error').html('')
            }else{
                $('#consult__request-id').addClass('consult__input_invalid').next('.consult__error').html('Напишите текст заявки ')
            }
         
         break
   
      }   
   })

   $("form").on('submit',function(e){

      $(inputs).blur()

       if(!$('#agree').is(':checked')){
         $('.consult__checkbox-label').addClass('consult__checkbox-label_error')
      }else{
         $('.consult__checkbox-label').removeClass('consult__checkbox-label_error')
      }

      let errors = $(this).find('.consult__input_invalid').length + $(this).find('.consult__checkbox-label_error').length

      if(errors == 0){
            alert('Заявка отправлена!')
      }else{
         e.preventDefault()
      }
     
   })
})
