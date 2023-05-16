$(document).ready(function(){
    $('#open').on('click', function(){

        // var property = {
        //     transform: 'translate(0)',
        //     transition: '0.5s',
        //     backgroundColor: 'yellow',
        //     color: black
        // }

        $('#menu').css('transform','translate(0)');
        $(this).css('display', 'none');
        $('#close').css('display', 'block');
    });

    $('#close').on('click', function(){

        // var property = {
        //     transform: 'translate(0)',
        //     transition: '0.5s',
        //     backgroundColor: 'yellow',
        //     color: black
        // }

        $('#menu').css('transform','translate(100px)');
        $(this).css('display', 'none');
        $('#open').css('display', 'block');
    })
})