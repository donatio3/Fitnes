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


export default subenefits;