/**
 * This module uses Intersection Observer API to lazyload images.
 * @argument: use `data-src` to the image tag to store original image.
 * @param image 
 */
export default function lazyLoad(image: string) {
    const lazyImages = Array.from(document.querySelectorAll(image))

    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            const imageTarget = entry.target as HTMLImageElement
            if (!entry.isIntersecting) {
                imageTarget.removeAttribute("src")
            } else {
                imageTarget.src = imageTarget.dataset.src as string
                // lazyImageObserver.unobserve(imageTarget)
            }
        })
    })

    lazyImages.forEach(image => {
        lazyImageObserver.observe(image)
    })

}