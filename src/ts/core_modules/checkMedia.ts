import { getElement } from "./domQuery"

export function getMediaQuery() {
    const checkMedia = (screenSize: string, query: string) => {
         const targetNode = getElement(".h1")
         const media = window.matchMedia(`(${screenSize}: ${query}px)`)
         media.matches && (targetNode.innerText = `Screen matches ${query}px`)
    }

    window.addEventListener('resize', () => {
        checkMedia('max-width',  '640')
        checkMedia('min-width',  '640')
        checkMedia('min-width',  '1024')
        checkMedia('min-width',  '1280')
    });
}