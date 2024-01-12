/**
 * @description: "Application UI constructor"
 * @return: "HTML Elements"
 */
class UI {
    header: HTMLElement
    headerIntersect: HTMLElement
    navBar: HTMLElement
    navBarLists: HTMLElement
    navBarList: HTMLElement[]
    navBarToggle: HTMLElement

    static instance: UI = new UI()

    constructor() {
        this.header = document.querySelector("[data-header]") as HTMLElement
        this.headerIntersect = document.querySelector("[data-observer-intercept]") as HTMLElement
        this.navBar = document.querySelector("[data-navbar]") as HTMLElement
        this.navBarLists = document.querySelector("[data-nav-items]") as HTMLElement
        this.navBarList = Array.from(document.querySelectorAll('[data-nav-item]')) as HTMLElement[]
        this.navBarToggle = document.querySelector("[data-toggle]") as HTMLElement
    }
}

export default UI
