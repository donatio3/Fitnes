function cards() {

    
    

        
      const logo =  document.querySelectorAll('.cards .tab__items .tab__item-card .logo'),
      line = document.querySelectorAll('.cards .tab__items .tab__item-card .line__dark'),
      nameCardAbonement = document.querySelectorAll('.cards .tab__items .tab__item-card .name__card'),
      cardsTab = document.querySelectorAll('.tab__item-card'),
      slides = document.querySelectorAll('.tab__item'),
      next = document.querySelector('.next'),
      prev = document.querySelector('.prev'),
      inputForm = document.querySelectorAll('.modal__input')

  
      const modal = document.querySelector('.modal')
      const cardForModal = document.createElement('div')
      let slideIndex = 1
      
      
      function plusSlides(n) {
          showSlides(slideIndex += n)
      }
  
      prev.addEventListener('click', () => {
          plusSlides(-1)
          document.querySelector(`[slider-card="${slideIndex}"]`).click()
      })
  
      next.addEventListener('click', (e) => {
          plusSlides(1)    
          document.querySelector(`[slider-card="${slideIndex}"]`).click()
      })
  
      showSlides(slideIndex)
  
      function showSlides(n) {
          if (n > slides.length) {
              slideIndex = 1
          }
  
          if (n <= 0) {
              slideIndex = slides.length
          }
  
          cardsTab.forEach(slides => {
              slides.classList.remove('active')
          })
  
          cardsTab[slideIndex - 1].classList.add('active')
  
          const cardsTabOne = cardsTab[slideIndex - 1]
      
          removeActiveClass(cardsTabOne)
          addActiveClass(cardsTabOne)
  
          
      }
  
      
  
  function ifContainsClassesAdd(nameSelector) {
  
      if (cardsTab[0].classList.contains(nameSelector)) {
          logo[0].style.color = 'rgba(19,25,37,.9)'
          nameCardAbonement[0].style.color = 'rgba(19,25,37,.9)'
          line[0].style.cssText = `
              border-top:2px solid rgba(19,25,37,.9) ;
              border-bottom:2px solid rgba(19,25,37,.9) ;
          `
      } else if (cardsTab[1].classList.contains(nameSelector)) {
          logo[1].style.color = 'rgba(19,25,37,.9)'
          nameCardAbonement[1].style.color = 'rgba(19,25,37,.9)'
          line[1].style.cssText = `
              border-top:2px solid rgba(19,25,37,.9) ;
              border-bottom:2px solid rgba(19,25,37,.9) ;
          `
      } else {
          logo[2].style.color = 'rgba(19,25,37,.9)'
          nameCardAbonement[2].style.color = 'rgba(19,25,37,.9)'
          line[2].style.cssText = `
              border-top:2px solid rgba(19,25,37,.9) ;
              border-bottom:2px solid rgba(19,25,37,.9) ;
          `
      }
  }
      
  function removeActiveClass(item) {
      cardsTab.forEach(card => card.classList.remove('active'))
      item.classList.add('active')
  
      logo.forEach(log => log.style.color = '')
      line.forEach(lines => lines.style.cssText = `border-top: 2px solid #43d29e; border-bottom: 2px solid #43d29e;`)
      nameCardAbonement.forEach(card => card.style.color = '#43d29e')
  
      ifContainsClassesAdd('active')
  
      
          
          cardForModal.classList = `${cardsTab[0].className}`
          cardForModal.innerHTML = item.innerHTML
          cardForModal.setAttribute('cardInModal', true)
          cardForModal.style.cssText = `
          background-color: #43d29e;
          box-shadow: 0 0 40px 0 rgba(67,210,158,.34);
          position: relative;
          height: 130px;
          width: 200px;
          display: block;
          border-radius: 12%;
          border: #43d29e 5px solid;
          transition: all .6s;
          margin: 15px auto;
          `
          cardForModal.setAttribute('disabled', true)
          inputForm[1].insertAdjacentElement('afterend', cardForModal)
          
          const lineCardModal = document.querySelector('[cardInModal] .line__dark'),
                logoCardModal = document.querySelector('[cardInModal] .logo'),
                nameCardModal = document.querySelector('[cardInModal] .name__card')
  
          lineCardModal.style.cssText = `
              border-top: 2px solid rgba(19, 25, 37, 0.9);
              border-bottom: 2px solid rgba(19, 25, 37, 0.9);
              height: 15px;
              margin-top: 20px;
          `
  
          logoCardModal.style.cssText = `
              font-size: 19px;
              font-weight: 700;
              margin: 5px;
              margin-top: 5px;
              color: rgba(19, 25, 37, 0.9);
  
          `
          nameCardModal.style.cssText = `
              font-size: 15px;
              font-weight: 600;
              color: rgba(19, 25, 37, 0.9);
              text-align: center;
              margin-top: 25px;
          `
  
     
  }
    
    function addActiveClass(item) {
    cardsTab.forEach(cards => cards.classList.remove('hover'))
    item.classList.add('hover') 
    
    ifContainsClassesAdd('hover')
    }
    
    cardsTab.forEach(cards => {
    cards.addEventListener('click', (e) => {
        if (cards === e.target || logo || nameCard) {
            console.log('CLICKED CARD')
            if (cards.getAttribute('cardInModal')) {
                console.log('getasdasda ')
            } else {
                removeActiveClass(cards)
            }
            
            
        }
        
        
    })
    })
    
    cardsTab.forEach(cards => {
    cards.addEventListener('mouseover', (e) => {
        if (cards === e.target || logo || nameCard) {
            addActiveClass(cards)
        }
    })
  })
    
    cardsTab.forEach(cards => {
    cards.addEventListener('mouseleave', (e) => {
        if (!cards.classList.contains('active') && cards.getAttribute('data-card') === '#first') {
            logo[0].style.color = '#43d29e'
            nameCardAbonement[0].style.color = '#43d29e'
            line[0].style.cssText = `
                border-top:2px solid #43d29e ;
                border-bottom:2px solid #43d29e ;
            `  
        } else if (!cards.classList.contains('active') && cards.getAttribute('data-card') === '#second') {
            logo[1].style.color = '#43d29e'
            nameCardAbonement[1].style.color = '#43d29e'
            line[1].style.cssText = `
                border-top:2px solid #43d29e ;
                border-bottom:2px solid #43d29e ;
            `  
        } else if (!cards.classList.contains('active') && cards.getAttribute('data-card') === '#third') {
            console.log('okay')
            logo[2].style.color = '#43d29e'
            nameCardAbonement[2].style.color = '#43d29e'
            line[2].style.cssText = `
                border-top:2px solid #43d29e ;
                border-bottom:2px solid #43d29e ;
            `   
        }
    
            
            
        
        })
    })

    
    const tabcontent = document.querySelectorAll('.cards .tabcontent .tabcontent__info'),
    tabs = document.querySelectorAll('.tab__item-card')

    tabs.forEach(tabsOn)

    function tabsOn(item) {
        item.addEventListener('click', () => {
            const currentBtn = item, // data-card
            btnId = currentBtn.getAttribute('data-card'),
            currentTab = document.querySelector(btnId)

            const slider = currentBtn.getAttribute('slider-card') // изменяем значение slideIndex для работы слайдера
            slideIndex = +slider
            

            tabs.forEach(tab => {
                tab.classList.add('hide')
                tab.classList.remove('okay')
                console.log('addd')
            })

            tabcontent.forEach(tab => {
                tab.classList.add('hide')
                tab.classList.remove('okay')
            })

            currentTab.classList.add('okay')
            currentTab.classList.remove('hide')
        })
    }
    document.querySelector('.tab__item-card').click()

}

export default cards;