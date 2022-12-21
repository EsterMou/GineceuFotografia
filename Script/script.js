// filtro do portifolio

$('.filter-btn').on('click', function(){
    let type = $(this).attr('id')
    let boxes = $('.project-box')

    $('main-btn').remove('active')
    $(this).addClass('active')

    if(type=='ges-btn'){
        eachBoxes('ges', boxes)
    } else if (type==='doc-btn'){
        eachBoxes('doc', boxes)
    } else if(type=='lif-btn'){
        eachBoxes('lif', boxes)
    }else{
        eachBoxes('all', boxes)
    }
})

function eachBoxes(type, boxes){
    if(type=='all'){
        $(boxes).fadeIn()
    }else{
        $(boxes).each(function(){
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow')
            }else{
                $(this).fadeIn()
            }
        })
    }
}