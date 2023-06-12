export default class ImageZoom {
    imageId: string;
    resultId: string;
    lens: HTMLElement;
    img: HTMLImageElement
    imgShowcase: HTMLElement
    result: HTMLDivElement
    hgroup: HTMLElement
    isDesktop: MediaQueryList
    screenSize: number | string

    cx: number;
    cy: number;

    constructor(imageId: string, resultId: string, screenSize: number) {
        this.imageId = imageId;
        this.resultId = resultId;
        this.screenSize = screenSize
        this.img = document.getElementById(imageId) as HTMLImageElement;
        this.result = document.getElementById(resultId) as HTMLDivElement;
        this.lens = document.querySelector(".img-zoom-lens") as HTMLElement;
        this.imgShowcase = document.querySelector("[data-image-showcase]") as HTMLElement
        this.hgroup = document.querySelector(".product-content > hgroup") as HTMLElement
        this.isDesktop = window.matchMedia(`(min-width: ${this.screenSize}px)`);

        this.cx = 0
        this.cy = 0
        this.init()
    }


    private init() {
        this.createLens()
        this.calculateRatio()
        this.changeProductDetailImage()
        this.showMagnifier()
    }

    private createLens(): void {
        this.lens = document.createElement('div');
        this.lens?.setAttribute("class", "product-lens")
        this.img?.parentElement?.insertBefore(this.lens, this.img)
    }

    private calculateRatio(): void {
        this.cx = this.result?.offsetWidth / this.lens?.offsetWidth
        this.cy = this.result?.offsetHeight / this.lens?.offsetHeight
    }


    private setResultBackground(x: number, y: number): void {
        this.result.classList.add('active')
        this.hgroup.style.backgroundColor = 'transparent'
        this.result.style.backgroundImage = `url(${this.img.src})`
        this.result.style.backgroundSize = `${this.img.width * this.cx}px ${this.img.height * this.cy}px`
        this.result.style.backgroundPosition = `-${x * this.cx}px -${y * this.cy}px`
    }

    private getCursorPosition(evt: MouseEvent) {
        let e = evt as MouseEvent
        let imgRect
        let x = 0
        let y = 0

        e = e || window.event
        imgRect = this.img.getBoundingClientRect() as DOMRect
        x = e.pageX - imgRect.left
        y = e.pageY - imgRect.top

        x = x - window.pageXOffset
        y = y - window.pageYOffset

        return { x, y }
    }

    private moveLens(evt: MouseEvent) {
        const event = evt as MouseEvent
        let pos
        let x
        let y
        event.preventDefault()

        pos = this.getCursorPosition(event)

        x = pos.x - (this.lens.offsetWidth / 2)
        y = pos.y - (this.lens.offsetHeight / 2)

        // Prevent lens from being positioned outside window
        if (x > this.img.width - this.lens.offsetWidth) {
            x = this.img.width - this.lens.offsetWidth
        }

        if (x < 0) {
            x = 0
        }

        if (y > this.img.height - this.lens.offsetWidth) {
            y = this.img.height - this.lens.offsetHeight
        }

        if (y < 0) {
            y = 0
        }

        // Set lens position
        this.lens.style.left = `${x}px`
        this.lens.style.top = `${y}px`

        // display lens visuasl


        this.setResultBackground(x, y)

    }

    private hideLens() {
        this.result.classList.remove('active')
        this.hgroup.style.backgroundColor = 'var(--bs-off-white)'
    }

    private showMagnifier(): void {
        const handleResize = (evt: MediaQueryList | MediaQueryListEvent) => {
            if (evt.matches) {
                this.lens?.addEventListener("mousemove", this.moveLens.bind(this))
                this.img?.addEventListener("mousemove", this.moveLens.bind(this))
                this.lens?.addEventListener("mouseout", this.hideLens.bind(this))
            }
        };

        this.isDesktop.addEventListener('change', evt => handleResize(evt));

        handleResize(this.isDesktop)
    }

    private changeProductDetailImage(): void {
        this.imgShowcase && Array.from(this.imgShowcase.children).forEach((image, index, list) => {
            image.addEventListener("click", () => {
                const newSrc = image.querySelector('img')?.src as string;
                this.img.src = newSrc;
                this.result.style.backgroundImage = `url(${this.img.src})`

                list.forEach(product => product.removeAttribute('class'));
                image.classList.add('active');
            })
        })
    }

}