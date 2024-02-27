$('#burger').on("click", function(){
    now = $('#navSide').css('display')
    if(now == 'flex'){
        $('#navSide').css('display', 'none');
    }

    else{
        $('#navSide').css('display', 'flex');
    }
})

// $('img').on("click", function()){

// }