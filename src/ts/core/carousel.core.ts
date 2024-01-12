export default class Carousel {
    carouselWrapper: HTMLElement | null
    carousel: HTMLElement
    cardWidth: number
    hasControls: boolean
    startX!: number
    startScrollLeft!: number
    autoPlay: boolean
    timeoutId!: NodeJS.Timeout
    speed: number

    isDragging = false

    constructor(carouselElement: string, {
        hasControls = false,
        autoPlay = false,
        speed = 2500

    } = {}) {
        this.carousel = document.querySelector(carouselElement) as HTMLElement;
        this.carouselWrapper = document.querySelector(".carousel-wrapper")
        this.hasControls = hasControls
        this.autoPlay = autoPlay
        this.speed = speed
        this.cardWidth = 0
        this.carouselSlider()
    }

    private carouselSlider(): void {
        this.preventImageDrag()
        this.addAttributeToCarouselChildren()
        this.cloneCards()
        this.autoPlay && this._autoPlay.bind(this)
        this.hasControls && this.handleArrowButtons()
        this.carousel?.addEventListener("mousedown", this.dragCardStart.bind(this))
        this.carousel?.addEventListener("mousemove", this.dragCard.bind(this))
        document.addEventListener("mouseup", this.dragCardStop.bind(this))
        this.carousel?.addEventListener("scroll", this.inifiniteScroll.bind(this))
        // this.carouselWrapper?.addEventListener("mouseenter", () => clearTimeout(this.timeoutId))
        // this.autoPlay && this.carouselWrapper?.addEventListener("mouseleave", this._autoPlay.bind(this))
    }

    static get controls() {
        return `
         <button id="prev" class="control">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
            </svg>
        </button>
        <button id="next" class="control">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
        </button>
        `
    }

    private get carouselChildren() {
        if (this.carousel) {
            return Array.from(this.carousel.children)
        }
    }


    private addAttributeToCarouselChildren(): void {
        const items = this.carouselChildren

        items && items.forEach(item => {
            item.setAttribute("data-class", "carousel-item")
        })
        const card = this.carousel?.querySelector("[data-class='carousel-item']") as HTMLElement
        this.cardWidth += card?.offsetWidth
    }

    private get cardPerView(): number {
        return Math.round(this.carousel.offsetWidth / this.cardWidth)
    }

    private cloneCards(): void {
        const reversedFirstFewCards = this.carouselChildren?.slice(0, this.cardPerView)
        const reversedLastFewCards = this.carouselChildren?.slice(-this.cardPerView).reverse()

        reversedFirstFewCards?.forEach(card => {
            this.carousel.insertAdjacentHTML("beforeend", card.outerHTML)
        })

        reversedLastFewCards?.forEach(card => {
            this.carousel.insertAdjacentHTML("afterbegin", card.outerHTML)
        })
    }

    private preventImageDrag(): void {
        if (this.carousel) {
            const images = Array.from(this.carousel.querySelectorAll("img") as NodeListOf<HTMLElement>)
            images.forEach(img => {
                img.setAttribute("draggable", 'false')
            })
        }
    }

    private handleArrowButtons(): void {
        this.carousel?.insertAdjacentHTML("beforebegin", Carousel.controls)
        const controls: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".control")
        controls.forEach(btn => {
            btn.addEventListener("click", () => {
                this.carousel.scrollLeft += btn.id === "prev" ? -this.cardWidth : this.cardWidth
            })

        })

    }

    private dragCardStart(e: MouseEvent): void {
        this.isDragging = true
        this.carousel.classList.add("dragging")

        this.startX = e.pageX
        this.startScrollLeft = this.carousel.scrollLeft

    }

    private dragCard(e: MouseEvent): void {
        if (!this.isDragging) return
        this.carousel.scrollLeft = this.startScrollLeft - (e.pageX - this.startX)
    }

    private dragCardStop(): void {
        this.isDragging = false
        this.carousel?.classList.remove("dragging")
    }

    private inifiniteScroll() {
        const scrollLeft = Math.ceil(this.carousel?.scrollLeft)
        const scrollWidth = this.carousel.scrollWidth - this.carousel.offsetWidth
        const viewableArea = scrollLeft === scrollWidth
        if (this.carousel?.scrollLeft === 0) {
            this.carousel.classList.add("no-transition")
            this.carousel.scrollLeft = this.carousel.scrollWidth - (3 * this.carousel.offsetWidth)
            this.carousel.classList.remove("no-transition")
        } else if (viewableArea) {
            this.carousel.classList.add("no-transition")
            this.carousel.scrollLeft = this.carousel.offsetWidth
            this.carousel.classList.remove("no-transition")

        }
        clearTimeout(this.timeoutId)
        if (!this.carouselWrapper?.matches(":hover")) this._autoPlay()
    }

    private _autoPlay() {
        // if (window.innerWidth < 800) return
        this.timeoutId = setTimeout(() => this.carousel.scrollLeft += this.cardWidth, this.speed)
    }
}