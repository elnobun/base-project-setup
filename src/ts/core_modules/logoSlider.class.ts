export default class LogoSlider {
    sliderWrapper: HTMLElement
    sliderList: HTMLElement
    sliderListCloned: HTMLElement


    static instance: LogoSlider = new LogoSlider()

    constructor() {
        this.sliderWrapper = document.querySelector("[js-slider-container]") as HTMLElement
        this.sliderList = document.querySelector("[js-slider-list]") as HTMLElement
        this.sliderListCloned = this.sliderList?.cloneNode(true) as HTMLElement
        this.logoSlider()
    }

    private logoSlider(): void {
        this.sliderList.after(this.sliderListCloned)
    }
}
