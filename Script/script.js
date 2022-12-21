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

// scroll navegações

let navBtn = $('.nav-item')

let bannerSection = $('#mainSlider')
let aboutSection = $('#about-area')
let servicesSection = $('#services-area')
let teamSection = $('#team-area')
let portifolioSection = $('#portifolio-area')
let contacSection = $('#contac-area')

let scrolTo = "";

$(navBtn).click(function(){
    let btnId = $(this).attr('id')

    if(btnId=='About-menu'){
        scrolTo = aboutSection
    }else if (btnId == 'services-menu'){
        scrolTo = servicesSection
    }else if (btnId == 'team-menu'){
        scrolTo = teamSection
    }else if (btnId == 'portfolio-menu'){
        scrolTo = portifolioSection
    }else if(btnId == 'contact-menu'){
        scrolTo = contacSection
    }else {
        scrolTo = bannerSection
    }

    $([document.documentElement, document.body]).animate({
        scrolTop: $(scrolTo).offset().top - 70
    }, 1500)
})

