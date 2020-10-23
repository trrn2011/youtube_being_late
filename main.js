iwake_formal = ['a', 'b', 'c']
iwake_private = ['c', 'd']

$(function(){
    $('.formal').on('click', function () {
        input_text = iwake_formal[Math.floor(Math.random() * iwake_formal.length)]
        $('.textarea').val(input_text)
    });
    
    $('.private').on('click', function () {
        input_text = iwake_private[Math.floor(Math.random() * iwake_private.length)]
        $('.textarea').val(input_text)
    });
});
