import { checkMediaQuery } from "./core/checkMedia";

class App {
    constructor() {
        // Call the init method
        this.initApp()
    }

    /* Register your methods inside the initApp function here */
    private initApp(): void {
        checkMediaQuery()
        console.log("SCRIPT WORKS");
    }

    /* Write your methods here */
}

export const myApp = new App();
