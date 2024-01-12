/**
 * @function HELPER
 * @returns { string }
 * @description Current page url string
 */

export default function mediaScreen(size: string, screen: string, callback: Function): void {
    const media = window.matchMedia(`(${size} : ${screen}px)`)

    media.addEventListener('change', (e: MediaQueryListEvent) => {
        callback(e)
    })
}
