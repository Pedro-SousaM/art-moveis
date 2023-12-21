

    const sections = gsap.utils.toArray("section"); 
    console.log(sections) 
    let scroollAnimation = gsap.to(sections,{
        xPercent:-100*(sections.length-1), 
        ease:'none', 
        scrollTrigger:{
            trigger:'.wrapper', 
            pin:true, 
            scrub:0.5, 
            snap:1/(sections.length-1), 
            start:'top top', 
            end:3000, 
            
        },
    
    }) 
    let logoTL = new TimelineLite()
    logoTL.to('.logo',{
        fontSize:'2.2rem', 
        top:'1rem', 
        left:'5rem',
        scrollTrigger:{
            trigger:'.logo', 
            scrub:0.5,  
            start:'top top', 
            end:1030  
        }
    }) 
    gsap.to('.line',{
      
        height:'10rem', 
        scrollTrigger:{
            trigger:'.line', 
            scrub:0.5,  
            start:'center center', 
            end:2000,  
        }
    })
    document.querySelectorAll('.movel').forEach((movel)=>{
        gsap.to(movel.querySelector('.caption'),{
            x:0, 
            y:0, 
            scrollTrigger:{ 
                containerAnimation:scroollAnimation, 
                trigger:movel.querySelector('.caption'), 
                start: 'top bottom' ,
                end:'+=1000' ,
                scrub:0.5, 
                markers:false
            }
        }) 
        gsap.to(movel.querySelector('.quote'),{
            y:0,  
            ease:'none',
            scrollTrigger:{ 
                containerAnimation:scroollAnimation, 
                trigger:movel.querySelector('.quote'), 
                start: 'top bottom' ,
                end:'+=20%' ,
                scrub:0.5, 
                markers:false
            }
        })  
        gsap.to(movel.querySelector('.nickname'),{
            y:0,  
            ease:'none',
            scrollTrigger:{ 
                containerAnimation:scroollAnimation, 
                trigger:movel.querySelector('.nickname'), 
                start: 'top bottom' ,
                end:'+=3%' ,
                scrub:0.5, 
                markers:false
            }
        })  
        gsap.to(movel.querySelector('.block'),{
            x:0,  
            ease:'none',
            scrollTrigger:{ 
                containerAnimation:scroollAnimation, 
                trigger:movel.querySelector('.block'), 
                start: 'top bottom' ,
                end:'+='+window.innerWidth ,
                scrub:0.5, 
                markers:false
            }
        })  
        gsap.to(movel.querySelector('img'),{
            y:0,  
            ease:'none',
            scrollTrigger:{ 
                containerAnimation:scroollAnimation, 
                trigger:movel.querySelector('img'), 
                start: 'top bottom' ,
                end:'+=50%',
                scrub:0.5, 
                markers:false
            }
        })  
        gsap.to(movel.querySelector('.huge-text'),{
            y:0,  
            ease:'none',
            scrollTrigger:{ 
                containerAnimation:scroollAnimation, 
                trigger:movel.querySelector('.huge-text'), 
                start: 'top bottom' ,
                end:'+=100%',
                scrub:0.5, 
                markers:false
            }
        }) 
    }) 
    let AfterTL = new TimelineLite({scrollTrigger:{ 
        trigger:'.after-scroll', 
        start:'top bottom', 
        end:'top top', 
        markers:false, 
        scrub:0.5,  
        snap:1
    }}) 
        AfterTL.to('.Hbuttons',{
            color:'#fff'
        }) 
        .to('.buy-tittle',{
            x:0
        }) 

    let exitLogoTL = new TimelineLite({scrollTrigger:{ 
        trigger:'.buy-tittle', 
        start:'top 19%', 
        end:'bottom 19%', 
        markers:true, 
        scrub:0.5,  
    }})  
    exitLogoTL.to('.logo',{
        x:-500
    }) 
    .to('.header',{
        backgroundColor:'#1e2524' ,
        pin:true
    }) 
    