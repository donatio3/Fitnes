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
export default form;
    
    
    