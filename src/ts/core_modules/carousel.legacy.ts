export default class Carousel {
    private cardWrapper = document.querySelector('.card-wrapper') as HTMLElement
    private cardImageAndLink = this.cardWrapper.querySelectorAll('img, a') as NodeListOf<HTMLElement>
    private cardWrapperChildren = Array.from(this.cardWrapper.children)
    private widthToScroll = this.cardWrapper.children[0] as HTMLElement
    private arrowPrev = document.querySelector('.arrow.prev') as HTMLElement
    private arrowNext = document.querySelector('.arrow.next') as HTMLElement

    constructor({ } = {}) {

    }
}




const carousel = {
    slider() {
        const cardWrapper = document.querySelector('.card-wrapper') as HTMLElement
        const cardImageAndLink = cardWrapper?.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>
        const widthToScroll = cardWrapper?.children[0] as HTMLElement
        // const arrowPrev = getElement('.arrow.prev')
        // const arrowNext = getElement('.arrow.next')

        const cardBouncing = cardWrapper?.getBoundingClientRect()

        const column = Math.floor(cardWrapper && cardWrapper.offsetWidth / (widthToScroll.offsetWidth))
        let currentScroll = 0
        let initPos = 0
        let clicked = false

        cardWrapper && Array.from(cardWrapper.children).slice(-column).reverse().forEach((child) => {
            cardWrapper.insertAdjacentHTML('afterbegin', child.outerHTML)
        })

        cardWrapper && Array.from(cardWrapper.children).slice(0, column).forEach((child) => {
            cardWrapper.insertAdjacentHTML('beforeend', child.outerHTML)
        })

        cardImageAndLink && cardImageAndLink.forEach(item => item.setAttribute('draggable', 'false'))

        if (cardWrapper) {
            cardWrapper?.classList.add("noSmooth")
            cardWrapper.scrollLeft = cardWrapper?.offsetWidth
            cardWrapper?.classList.remove("noSmooth")
        }

        // arrowPrev.addEventListener('click', () => {
        // 	cardWrapper.scrollLeft += widthToScroll.offsetWidth
        // })

        // arrowNext.addEventListener('click', () => {
        // 	cardWrapper.scrollLeft -= widthToScroll.offsetWidth
        // })


        cardWrapper?.addEventListener('mousedown', (e) => {
            cardWrapper?.classList.add("grab")
            initPos = e.clientX - cardBouncing?.left
            currentScroll = cardWrapper.scrollLeft
            clicked = true
        })

        cardWrapper?.addEventListener('mousemove', (e) => {
            if (clicked) {
                const xPos = e.clientX - cardBouncing?.left
                cardWrapper.scrollLeft = currentScroll + -(xPos - initPos)
            }

        })

        const mouseUpAndLeave = () => {
            cardWrapper?.classList.remove('grab')
            clicked = false;
        }



        cardWrapper?.addEventListener('mouseup', mouseUpAndLeave)
        cardWrapper?.addEventListener('mouseleave', mouseUpAndLeave)

        let autoscroll: NodeJS.Timeout

        cardWrapper && cardWrapper.addEventListener('scroll', () => {

            if (cardWrapper.scrollLeft === 0) {
                cardWrapper.classList.add("noSmooth")
                cardWrapper.scrollLeft = cardWrapper.scrollWidth - (3 * cardWrapper.offsetWidth)
                cardWrapper?.classList.remove("noSmooth")
            } else if (cardWrapper.scrollLeft === cardWrapper.scrollWidth - cardWrapper.offsetWidth) {
                cardWrapper?.classList.add("noSmooth")
                cardWrapper.scrollLeft = cardWrapper.offsetWidth
                cardWrapper?.classList.remove("noSmooth")
            }

            if (autoscroll) {
                clearTimeout(autoscroll)
            }

            autoscroll = setTimeout(() => {
                cardWrapper.scrollLeft += widthToScroll.offsetWidth
            }, 4000)

        })

    }
}
