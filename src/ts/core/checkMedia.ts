export function checkMediaQuery() {
    const h1Node = document.createElement('h1')
    h1Node.id = 'mediaQueryCheck'
    const body = document.querySelector("body")
    body?.prepend(h1Node)
    const targetNode = document.getElementById('mediaQueryCheck') as HTMLElement

    const mediaScreen = (size: string, screen: string, deviceType: string) => {
        const media = window.matchMedia(`(${size} : ${screen}px)`)

        const resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                const target = entry.target as HTMLElement
                target.innerText = `${deviceType}: ${screen}px`
            })

        })

        media.addEventListener('change', (e: MediaQueryListEvent) => {
            if (e.matches) {
                resizeObserver.observe(targetNode);
            } else {
                resizeObserver.unobserve(targetNode);
                targetNode.innerText = ""
            }
        })
    }



    mediaScreen('min-width', '320', 'Mobile')
    mediaScreen('min-width', '425', 'Large Mobile')
    mediaScreen('min-width', '768', 'Tablet')
    mediaScreen('min-width', '1024', 'Laptop')
    mediaScreen('min-width', '1440', 'Large Laptop')
    mediaScreen('min-width', '1920', '4k Screens')
}
