export function eProtection() {
    const eProtectionElement = document.querySelector(".eProtection") as HTMLElement;
    eProtectionElement.addEventListener("click", function () {
        const reverseLink = this.innerHTML;
        try {
            const link = reverseLink.split("").reverse().join("");
            this.setAttribute("href", "mailto:" + link);
        } catch (error) {
            console.error(error);
        }
    })
}
