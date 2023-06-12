/**
 * @description: "Application UI constructor"
 * @return: "HTML Elements"
 */
class UI {
    header: HTMLElement
    headerIntersect: HTMLElement
    navElement: HTMLElement
    searchElement: HTMLElement
    searchInput: HTMLInputElement
    searchButton: HTMLElement
    navBar: HTMLElement
    navBarToggleButton: HTMLElement
    navBarList: HTMLElement
    navBarListItem: HTMLElement[]
    navBarDropdownListItem: HTMLElement[]
    pageNav: HTMLElement
    pageNavMenu: HTMLElement
    pageNavToggleButton: HTMLElement

    static instance: UI = new UI()

    constructor() {
        this.header = document.querySelector("[js-header]") as HTMLElement
        this.headerIntersect = document.querySelector("[js-observer-intercept]") as HTMLElement
        this.navElement = document.querySelector("[js-nav]") as HTMLElement
        this.searchElement = document.querySelector("[js-search]") as HTMLElement
        this.searchInput = document.querySelector("[js-search-input]") as HTMLInputElement
        this.searchButton = document.querySelector("[js-search-icon]") as HTMLElement
        this.navBar = document.querySelector("[js-nav]") as HTMLElement
        this.navBarToggleButton = document.querySelector("[js-nav-toggle-button]") as HTMLElement
        this.navBarList = document.querySelector(".navBarList") as HTMLElement
        this.navBarListItem = Array.from(document.querySelectorAll(".navBarListItem")) as HTMLElement[]
        this.navBarDropdownListItem = Array.from(document.querySelectorAll(".dropdownListItem")) as HTMLElement[]
        this.pageNav = document.querySelector("[js-page-nav]") as HTMLElement
        this.pageNavMenu = document.querySelector("[js-page-menu]") as HTMLElement
        this.pageNavToggleButton = document.querySelector("[js-page-toggle-button]") as HTMLElement
    }

    scrollWatcher() {
        const scrollableWatcher = document.createElement("div")
        scrollableWatcher.setAttribute('js-observer-intercept', '')
        this.header.before(scrollableWatcher)
        this.headerIntersect = document.querySelector("[js-observer-intercept]") as HTMLElement
    }
}

export default UI