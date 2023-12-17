/**
 * @description: "Application UI constructor"
 * @return: "HTML Elements"
 */
class UI {
    header: HTMLElement
    headerIntersect: HTMLElement


    static instance: UI = new UI()

    constructor() {
        this.header = document.querySelector("[data-header]") as HTMLElement
        this.headerIntersect = document.querySelector("[data-observer-intercept]") as HTMLElement
    }


}

export default UI
