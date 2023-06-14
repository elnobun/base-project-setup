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

    // MODAL
    modal: HTMLDialogElement
    openModal: HTMLDialogElement
    closeModal: HTMLDialogElement

    static instance: UI = new UI()

    constructor() {
        this.header = document.querySelector("[data-js-header]") as HTMLElement
        this.headerIntersect = document.querySelector("[data-js-observer-intercept]") as HTMLElement
        this.navElement = document.querySelector("[data-js-nav]") as HTMLElement
        this.searchElement = document.querySelector("[data-js-search]") as HTMLElement
        this.searchInput = document.querySelector("[data-js-search-input]") as HTMLInputElement
        this.searchButton = document.querySelector("[data-js-search-icon]") as HTMLElement
        this.navBar = document.querySelector("[data-js-nav]") as HTMLElement
        this.navBarToggleButton = document.querySelector("[data-js-nav-toggle-button]") as HTMLElement
        this.navBarList = document.querySelector(".navBarList") as HTMLElement
        this.navBarListItem = Array.from(document.querySelectorAll(".navBarListItem")) as HTMLElement[]
        this.navBarDropdownListItem = Array.from(document.querySelectorAll(".dropdownListItem")) as HTMLElement[]
        this.pageNav = document.querySelector("[data-js-page-nav]") as HTMLElement
        this.pageNavMenu = document.querySelector("[data-js-page-menu]") as HTMLElement
        this.pageNavToggleButton = document.querySelector("[data-js-page-toggle-button]") as HTMLElement
        // Modal UI - DO NOT EDIT
        this.modal = document.querySelector("[data-modal]") as HTMLDialogElement
        this.openModal = document.querySelector("[data-open-modal]") as HTMLDialogElement
        this.closeModal = document.querySelector("[data-close-modal]") as HTMLDialogElement
    }

    scrollWatcher() {
        const scrollableWatcher = document.createElement("div")
        scrollableWatcher.setAttribute('data-js-observer-intercept', '')
        this.header.before(scrollableWatcher)
        this.headerIntersect = document.querySelector("[data-js-observer-intercept]") as HTMLElement
    }
}

export default UI
