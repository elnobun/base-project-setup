import UI from "./UI.class";

export default class Navigation {
    static instance: Navigation = new Navigation()

    private ui = UI.instance

    constructor() {
        this.init()
    }

    private init() {
        this.handleActiveLinkOnPageLoad()
        this.handleNavigationToggle()
        this.handleActiveLinkOnclick()
    }

    /**
     * @function HELPER
     * @returns { string }
     * @description Current page url string
     */
    private getCurrentPage(): string {
        return window.location.pathname;
    }

    /**
     * @function HELPER
     * @param listItem 
     * @param classList
     * @description Adds active state class to list item element 
     */
    private setActiveLink(listItem: Element, classList: string): void {
        if (listItem.querySelector("a")?.getAttribute("href") === this.getCurrentPage()) {
            listItem.classList.add(classList)
            listItem.closest(".navBarListItem") && listItem.closest(".navBarListItem")?.classList.add(classList)
        }
    }

    private handleActiveLinkOnPageLoad(): void {
        this.ui.navBarListItem.forEach(listItem => {
            this.setActiveLink(listItem, "active");
        })

        this.ui.navBarDropdownListItem.forEach(listItem => {
            this.setActiveLink(listItem, "active")
        })
    }

    private handleActiveLinkOnclick(): void {
        this.ui.navBarList?.addEventListener("click", (e) => {
            // store the target value in a variable
            const target = e.target as HTMLAnchorElement;

            // get target attribute for current page
            const currentPage = target.getAttribute("href");

            // show the navbar menu
            target.nextElementSibling?.toggleAttribute("js-dropdown-menu")

            // If link is already active on page load, move on.
            if (target.closest(".navBarListItem")?.classList.contains("active")) return

            // clear the active state if no link is already active on page load
            this.ui.navBarListItem.forEach(listItem => listItem.classList.remove("active"));
            this.ui.navBarDropdownListItem.forEach(listItem => listItem.classList.remove("active"));

            // check the parent element of target value and add active state to the parent when clicked
            // TODO: check if target href attribute matches current page url
            if (target.closest(".navBarListItem") && currentPage === this.getCurrentPage()) {
                target.closest(".navBarListItem")?.classList.add("active")
            }

            if (target.closest(".dropdownListItem") && currentPage === this.getCurrentPage()) {
                target.closest(".dropdownListItem")?.classList.add("active")
            }
        })
    }

    private handleNavigationToggle(): void {
        if (this.ui.navBar) {
            this.ui.navBarToggleButton?.addEventListener("click", (e) => {
                this.ui.navBar?.toggleAttribute("js-menu-open")
                this.ui.navBar?.setAttribute("aria-expanded", "")

                if (this.ui.navBar?.hasAttribute("js-menu-open")) {
                    this.ui.navBar.setAttribute("aria-expanded", "true")
                    this.ui.navBarToggleButton?.setAttribute("aria-expanded", "true")
                } else {
                    this.ui.navBar?.setAttribute("aria-expanded", "false")
                    this.ui.navBarToggleButton?.setAttribute("aria-expanded", "false")
                }
            })
        }

        if (this.ui.pageNavMenu) {
            this.ui.pageNav?.addEventListener("click", () => {
                this.ui.pageNavMenu?.toggleAttribute("js-menu-open")
                this.ui.pageNavMenu?.setAttribute("aria-expanded", "")

                if (this.ui.pageNavMenu?.hasAttribute("js-menu-open")) {
                    this.ui.pageNavMenu.setAttribute("aria-expanded", "true")
                    this.ui.pageNavToggleButton?.setAttribute("aria-expanded", "true")
                    document.body.style.overflow = "hidden"
                } else {
                    this.ui.pageNavMenu?.setAttribute("aria-expanded", "false")
                    this.ui.pageNavToggleButton?.setAttribute("aria-expanded", "false")
                    document.body.removeAttribute('style')
                    document.body.style.overflowX = "hidden"
                }

            })
        }

    }
}