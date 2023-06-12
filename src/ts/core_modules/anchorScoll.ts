/**
 * Anchor smooth scrolling fix for Safari and Chrome.
 * @param anchorElement 
 * @returns String: HTMLElement
 */
export function anchorScroll(anchorElement:string) {
    // query all instances of the anchor element in the DOM, and listen for a click event
    document.querySelectorAll<HTMLAnchorElement>(anchorElement).forEach(anchor => 
        anchor.addEventListener("click", function (event:Event) {
        event.preventDefault();
        console.log("anchor Scolling")
        if (location.hash) {
            history.pushState("", document.title, window.location.pathname);
        }

        // blocked scope values to check if the header is fixed or not; get vertical position, and calculate
        // anchor scrolling position based on which anchor element is targeted.
        const currentTarget = event.currentTarget as HTMLElement;
        const targetId:string | any = currentTarget.getAttribute("href") === "#" ? "header" : currentTarget.getAttribute("href");
        const fixedHeader = document.querySelector("header") as HTMLElement;
        const fixedHeaderHeight = fixedHeader.getBoundingClientRect().height - 1;
        const verticalPosition = document.querySelector(targetId).offsetTop;
        const targetPosition = fixedHeader ? verticalPosition - fixedHeaderHeight : verticalPosition;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start:number;

        // all browsers except chrome, should use the window.requestAnimationFrame() method.
        if (navigator.userAgent.toLowerCase().indexOf("chrome") < 0) {
            window.requestAnimationFrame(step);
            function step(timestamp:number) {
                if (!start)start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                if (progress < duration) window.requestAnimationFrame(step);
            }
        } else {
            // subscribe to Chrome's smooth scroll method.
            window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }

    }));
}

function easeInOutCubic(t:number, b:number, c:number, d:number) {
    t /= d / 2;
    if (t < 1)
        return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
}
