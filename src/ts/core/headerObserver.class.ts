import UI from "@/custom/UI.class"


class HeaderObserver {

    private ui = new UI

    static instance: HeaderObserver = new HeaderObserver()

    constructor() { }

    onWindowScroll() {
        const scrollableWatcher = document.createElement("div")
        scrollableWatcher.setAttribute('data-observer-intercept', '')
        this.ui.header.before(scrollableWatcher)
        this.ui.headerIntersect = document.querySelector("[data-observer-intercept]") as HTMLElement
    }

    /**
     * @description Function set a box shadow on header when past scroll a certain point.
     */
    private setHeaderShadow(): void {

        /* The callback that will fire on intersection */
        const onIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                this.ui.header.toggleAttribute("data-header-box-shadow", !entry.isIntersecting)
            });
        }

        const observer = new IntersectionObserver(onIntersect)

        observer.observe(this.ui.headerIntersect)
    }
}

export default HeaderObserver
