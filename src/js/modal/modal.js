
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

export default modal