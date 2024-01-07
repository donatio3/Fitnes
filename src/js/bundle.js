/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calculating/calc.js":
/*!************************************!*\
  !*** ./src/js/calculating/calc.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    let sex, ratio, height, weight, age;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex')
    } else {
        sex = 'female'
        localStorage.setItem(sex,'female')
    }


    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio')
    } else {
        ratio = 1.375
        localStorage.setItem('ratio', 1.375)
    }
    
    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    const result = document.querySelector('.calculating__result span')

    function calcTotal() {
        if (!sex || !ratio || !height || !weight || !age) {
            result.textContent = "___"
            return
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
        
    }
    calcTotal()

    function getStaticInformation(parentSelector, activeClass) {
        const buttons = document.querySelectorAll(`${parentSelector} div`)

        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                buttons.forEach(btn => btn.classList.remove(activeClass))
                e.target.classList.add(activeClass)
                calcTotal()
            }) 
        })
    }

    getStaticInformation('#gender', 'calculating__choose-item_active')
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active')

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector)
        input.addEventListener('input', () => {
            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break; 
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value
                    break;
            }
            calcTotal()
        })
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}    


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/cards/cards.js":
/*!*******************************!*\
  !*** ./src/js/cards/cards.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./src/js/form/form.js":
/*!*****************************!*\
  !*** ./src/js/form/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function form(formSelector, btnFormSelector, inputFormSelector) {

    const message = {
        loading: 'icons/spinner.svg',
        succes: 'Succes, We`ll call you later!',
        failure: 'Unknown Error'
    }

const forms = document.querySelectorAll('form'),
      btnForm = document.querySelectorAll('.modal .tabcontent__btn'),
      btnFormHeader = document.querySelector('.btn__form'),
      inputForm = document.querySelectorAll('.modal__input')


    forms.forEach(forms => bindPostData(forms))

    const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    })

    return await res.json()
    }

    function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        if (!btnForm.forEach(btn => {btn.style.disabled = true})) {
            inputForm.forEach(input => {
                input.removeAttribute('required')
            })
        } 

        let statusMessage = document.createElement('img')
        statusMessage.style.cssText = `
            display:block;
            margin:0 auto;        
        `
        statusMessage.src = message.loading
        inputForm[1].insertAdjacentElement('afterend', statusMessage)
        


        const formData = new FormData(form)
        const json = JSON.stringify(Object.fromEntries(formData.entries()))

        

        const dataRequest = {
            'nameCard': document.querySelector('[cardInModal] .name__card').textContent,
            json   
        }

           

        const  jsonResult = JSON.stringify(dataRequest)


        postData('http://localhost:3000/requests', jsonResult)
            .then(data => {
                console.log(data)
                showLoadingTab(message.succes)
                
            })
            .catch(() => {
                showLoadingTab(message.failure) 
            })
            .finally(() => {
                form.reset()
                statusMessage.remove()
                setTimeout(() => {
                    inputForm.forEach(input => {
                        input.setAttribute('required', true)
                    })
                }, 400000);
            })
    });
    }

    function showLoadingTab(message) {
            
        console.log('THANKMESSAGE GO')
        const thanksMessage = document.createElement('div')
        thanksMessage.innerHTML = message
        thanksMessage.classList.add('thanks__modal-text')


        function addThanksModal(item) {
            item.insertAdjacentElement('afterend', thanksMessage)
            item.textContent = 'Ожидайте Звонка'
            item.setAttribute('disabled', true)
                    setTimeout(() => {
                thanksMessage.remove()
                item.textContent = 'Перезвоните мне'
                item.removeAttribute('disabled')
            }, 400000);
        }
        btnForm.forEach(btn => addThanksModal(btn))
        addThanksModal(btnFormHeader)

    }      

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);
    
    
    

/***/ }),

/***/ "./src/js/modal/modal.js":
/*!*******************************!*\
  !*** ./src/js/modal/modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function modal() {

    const tabBtn = document.querySelector('.cards .tabcontent__btn'),
    modal = document.querySelector('.modal'),
    closeTrigger = document.querySelector('.modal__close'),
    inputFormModal = document.querySelectorAll('.modal__input')


    function openModal() {
        modal.classList.remove('hide')
        modal.classList.add('show')
        modal.style.display = 'block'
        
        const chooseCard = document.createElement('div')
        chooseCard.innerHTML = `` 
        modal.append(chooseCard)
        

    }

    function closeModal() {
        if (modal.classList.contains('show')) {
            modal.classList.add('hide')
            modal.classList.remove('show')
            modal.style.display = 'none'
        }
    }

    tabBtn.addEventListener('click', openModal)
    closeTrigger.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal()
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal()
        }
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/js/subenefits/subenefits.js":
/*!*****************************************!*\
  !*** ./src/js/subenefits/subenefits.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function subenefits() {

    const changeElementNumber = document.querySelectorAll('.subenefits__wrapper .number'),
    step = 10,
    time = 1500,
    firstNubmerInFunction = changeElementNumber[0].textContent,
    secondNumberInFunction = changeElementNumber[1].textContent,
    thirdNumberInFunction = changeElementNumber[2].textContent


    function animationNumbers(number, element) {
        window.removeEventListener("scroll", loadAnimationNubers)
        let n = 0
        const t = Math.round(time / (number / step))
        const intervalId = setInterval(() => {
            n += step
            
            if (n == number) {
                clearInterval(intervalId)
            }

            element.textContent = n
        }, t);
    }


    function animationNumbersOn() {
        console.log('yessssss')
        animationNumbers(firstNubmerInFunction, changeElementNumber[0])
        animationNumbers(secondNumberInFunction, changeElementNumber[1])
        animationNumbers(thirdNumberInFunction, changeElementNumber[2])
    }
    
    function loadAnimationNubers() {
        if (window.scrollY >= 2400) {
            animationNumbersOn()
        }
    }

    window.addEventListener("scroll", loadAnimationNubers)
 
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subenefits);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form/form */ "./src/js/form/form.js");
/* harmony import */ var _calculating_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculating/calc */ "./src/js/calculating/calc.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal */ "./src/js/modal/modal.js");
/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards/cards */ "./src/js/cards/cards.js");
/* harmony import */ var _subenefits_subenefits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subenefits/subenefits */ "./src/js/subenefits/subenefits.js");





// import advantages from "./advantages/advantages";



(0,_form_form__WEBPACK_IMPORTED_MODULE_0__["default"])(); // 'form', '.btn__form', '.form__number input'
(0,_calculating_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modal_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_subenefits_subenefits__WEBPACK_IMPORTED_MODULE_4__["default"])();
(0,_cards_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();

// advantages();




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map