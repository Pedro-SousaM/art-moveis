
document.querySelectorAll('.side-wrapper > a > span').forEach(span => {
    span.setAttribute('data-text', span.textContent);
});

gsap.registerPlugin(ScrollTrigger);

// if there are objects that may get inline styles added (like via tweens) that should get reverted, use ScrollTrigger.saveStyles() initially so that the current inline styles are saved for later reversion. It's not always necessary, but it goes well with ScrollTrigger.matchMedia() so we figured it'd make sense to show it here (it's not needed in this demo)
ScrollTrigger.saveStyles(".mobile, .desktop");

/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({
	
	// desktop
	"(min-width: 1040px)": function() {
	
const sections = gsap.utils.toArray("section");
console.log(sections)
let scroollAnimation = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.wrapper',
        pin: true,
        scrub: 0.5,
        snap: [0, 1 / (sections.length - 1), 1 / (sections.length - 1) * 2, 1 / (sections.length - 1) * 3],
        start: 'top top',
        end: 3000,

    },
})
let logoTL = new TimelineLite()
logoTL.to('.logo', {
    fontSize: '3.3dvh',
    top: '1.3rem',
    y: 0,
    scrollTrigger: {
        trigger: '.logo',
        scrub: 0.5,
        start: 'top top',
        end: 1030
    }
})
gsap.to('.line', {
    height: '14dvh',
    scrollTrigger: {
        trigger: '.line',
        scrub: 0.5,
        start: 'center center',
        end: 2000,
    }
})
document.querySelectorAll('.movel').forEach((movel) => {
    gsap.to(movel.querySelector('.caption'), {
        x: 0,
        y: 0,
        scrollTrigger: {
            containerAnimation: scroollAnimation,
            trigger: movel.querySelector('.caption'),
            start: 'top bottom',
            end: '+=60%',
            scrub: 0.5,
            markers: false
        }
    })
    gsap.to(movel.querySelector('.quote'), {
        y: 0,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scroollAnimation,
            trigger: movel.querySelector('.quote'),
            start: 'top bottom',
            end: '+=20%',
            scrub: 0.5,
            markers: false
        }
    })
    gsap.to(movel.querySelector('.nickname'), {
        y: 0,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scroollAnimation,
            trigger: movel.querySelector('.nickname'),
            start: 'top bottom',
            end: '+=3%',
            scrub: 0.5,
            markers: false
        }
    })
    gsap.to(movel.querySelector('.block'), {
        x: 0,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scroollAnimation,
            trigger: movel.querySelector('.block'),
            start: 'top bottom',
            end: '+=' + window.innerWidth,
            scrub: 0.5,
            markers: false
        }
    })
    gsap.to(movel.querySelector('img'), {
        y: 0,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scroollAnimation,
            trigger: movel.querySelector('img'),
            start: 'top bottom',
            end: '+=50%',
            scrub: 0.5,
            markers: false
        }
    })
    gsap.to(movel.querySelector('.huge-text'), {
        y: 0,
        yPercent:-50,
        ease: 'none',
        scrollTrigger: {
            containerAnimation: scroollAnimation,
            trigger: movel.querySelector('.huge-text'),
            start: 'top bottom',
            end: '+=100%',
            scrub: 0.5,
            markers: false
        }
    })
})
  }, 
  
	// mobile
	"(max-width: 1039px)": function() {
	const sections = gsap.utils.toArray("section");
console.log(sections)
let scroollAnimation = gsap.to(sections, {
    ease: 'none',
    scrollTrigger: {
        trigger: '.wrapper',
        scrub: 0.5,
        snap: 1 / (sections.length),
        start: 'top top',
        end: 'bottom top',

    },
})
let logoTL = new TimelineLite()
logoTL.to('.logo', {
    fontSize: '3.3dvh',
    top: '1.3rem',
    y: 0, 
    scrollTrigger: {
        trigger: '.logo',
        scrub: 0.5,
        start: 'top top',
        end:'+='+window.innerHeight/1.5
    }
})
gsap.to('.line', {
    height: '14dvh',
    scrollTrigger: {
        trigger: '.line',
        scrub: 0.5,
        start: 'center center',
        end: 2000,
    }
})
document.querySelectorAll('.movel').forEach((movel) => { 
    const splitChars = movel.querySelectorAll(".quote")
    splitChars.forEach((char) => {
    const text = new SplitType(char, { types: 'words,chars' })
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: "top bottom",
            end: "+=18%",
            scrub: true, 
            markers:false
        },
        opacity: 0,
        stagger: 0.03,
        y: 40,
        rotationZ: 13
    })
}) 
    gsap.to(movel.querySelector('.nickname'), {
        y: 0, 
        x:0,
        ease: 'none',
        scrollTrigger: {
            trigger: movel.querySelector('.nickname'),
            start: 'top bottom',
            end: '+=3%',
            scrub: 0.5,
            markers: false
        }
    })
    gsap.to(movel.querySelector('.block'), {
        y: 0,  
        x:0,
        ease: 'none',
        scrollTrigger: {
           
            trigger: movel, 
            start: 'top bottom',
            end: '+=' + window.innerHeight,
            scrub: 0.5,
            markers: false
        }
    }) 
    
    gsap.to(movel.querySelector('img'), {
        y: 0, 
        x:0,
        ease: 'none',
        scrollTrigger: {
            trigger: movel,
            start: 'top bottom',
            end: '+=' + window.innerHeight,
            scrub: 0.5,
            markers: false
        }
    })
    gsap.to(movel.querySelector('.huge-text'), {
        y: 0, 
        x:0,
        yPercent:-50,
        ease: 'none',
        scrollTrigger: {
            trigger: movel,
            start: 'top bottom',
            end: '+=100%',
            scrub: 0.5,
            markers: false
        }
    })
})
  }, 
  
	// all 
	"all": function() {
		
	}
  
});

let hbuttons = document.querySelectorAll('.Hbuttons')
let returnColor
function handleHover() {
    returnColor = this.style.color
    console.log(returnColor)
    this.style.color = 'white';
    this.style.textShadow = '3px 0 #f52b2b, -3px 0 #f52b2b, 0 3px #f52b2b, 0 -3px #f52b2b, 2px 0 #f52b2b, -2px 0 #f52b2b, 0 2px #f52b2b, 0 -2px #f52b2b, 1px 1px #f52b2b, -1px -1px #f52b2b, 1px -1px #f52b2b, -1px 1px #f52b2b';
    this.style.transform = 'translate(-164%, -1%)';
}
function handleMouseOut() {
    this.style.color = returnColor;
    this.style.textShadow = '';
    this.style.transform = 'translateX(-163%)';
}
hbuttons.forEach(button => {
    button.addEventListener('mouseover', handleHover);
    button.addEventListener('mouseout', handleMouseOut);
});
let AfterTL = new TimelineLite({
    scrollTrigger: {
        trigger: '.after-scroll',
        start: 'top bottom',
        end: 'top top',
        markers: false,
        scrub: 0.5,

    }
})
AfterTL.to('.absoluter', {
    x: "2.4dvw"
})

let exitLogoTL = new TimelineLite({
    scrollTrigger: {
        trigger: '.after-scroll',
        start: 'top 18%',
        end: 'top -10%',
        markers: false,
        scrub: 0.5,
        directional: false,
        snap: [1]
    }
});
exitLogoTL.add('start')
    .to('.logo', { x: -500 }, 'start')
    .to('.header', { backgroundColor: '#e9e1d3', pin: true }, 'start')

const line1 = document.querySelectorAll('.item-line');
line1.forEach((line) => {
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    line.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        line.style.cursor = "grabbing"
        startX = e.pageX - line.offsetLeft;
        scrollLeft = line.scrollLeft;
    });

    line.addEventListener('mouseleave', () => {
        isMouseDown = false;
        line.style.cursor = "grab"
    });

    line.addEventListener('mouseup', () => {
        isMouseDown = false;
        line.style.cursor = "grab"
    });

    line.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - line.offsetLeft;
        const walk = (x - startX) * 1.3;
        line.scrollLeft = scrollLeft - walk;
    });
})
function goTo(string) {
    gsap.to(window, { duration: 1, scrollTo: { y: "." + string, offsetY: 100, autoKill: true } }) 
    document.querySelector(".wraper > input").checked = false
}



