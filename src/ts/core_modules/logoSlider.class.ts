export default class LogoSlider {
    sliderWrapper: HTMLElement
    sliderList: HTMLElement
    sliderListCloned: HTMLElement
    sliderItems: NodeListOf<HTMLImageElement>
    speed: number
    x: number
    x2: number
    slideA: NodeJS.Timeout
    slideB: NodeJS.Timeout

    static instance: LogoSlider = new LogoSlider()

    constructor({ speed = 0.5 } = {}) {
        this.sliderWrapper = document.querySelector("[js-slider-container]") as HTMLElement
        this.sliderList = document.querySelector("[js-slider-list]") as HTMLElement
        this.sliderListCloned = this.sliderList?.cloneNode(true) as HTMLElement
        this.sliderItems = document.querySelectorAll("[js-slider-item]") as NodeListOf<HTMLImageElement>
        this.speed = speed
        this.x = 0
        this.x2 = this.slideWidth as number
        this.slideA = setInterval(this.moveFirstSlide.bind(this), 10)
        this.slideB = setInterval(this.moveSecondSlide.bind(this), 10)
        this.logoSlider()
    }


    private logoSlider(): void {
        this.cloneSliderList()
        this.sliderWrapper.addEventListener('mouseenter', this.onMouseEnter.bind(this))
        this.sliderWrapper.addEventListener('mouseleave', this.onMouseLeave.bind(this))
    }

    set _speed(newSpeed: number) {

        this.speed = newSpeed
    }

    private get slideWidth() {
        return this.sliderList?.offsetWidth
    }

    private cloneSliderList(): void {
        this.sliderWrapper?.appendChild(this.sliderListCloned)
        if (this.sliderListCloned) {
            this.sliderListCloned.style.left = `${this.slideWidth}px`
            this.sliderListCloned.style.marginInlineStart = '3rem'
        }

    }

    private moveFirstSlide(): void {
        this.x -= this.speed

        if (this.slideWidth >= Math.abs(this.x)) {
            this.sliderList.style.left = `${this.x}px`
            this.sliderList.style.marginInlineEnd = `3rem`

        } else {
            this.x = this.slideWidth
        }

    }

    private moveSecondSlide(): void {
        this.x2 -= this.speed

        if (this.sliderListCloned?.offsetWidth >= Math.abs(this.x2)) {
            this.sliderListCloned.style.left = `${this.x2}px`
        } else {
            this.x2 = this.slideWidth
        }
    }

    private onMouseEnter() {
        clearInterval(this.slideA)
        clearInterval(this.slideB)
    }

    private onMouseLeave() {
        this.slideA = setInterval(this.moveFirstSlide.bind(this), 10)
        this.slideB = setInterval(this.moveSecondSlide.bind(this), 10)
    }

}