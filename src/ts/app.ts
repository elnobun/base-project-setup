import HeaderObserver from "modules/headerObserver.class";
import Navigation from "modules/navigation.class";

class App {
    private headerObserver = HeaderObserver.instance
    private navigation = Navigation.instance

    constructor() {
        // Call instance methods
        this.headerObserver.onWindowScroll()
        this.headerObserver.setHeaderShadow()

        // Call the init method
        this.initApp()
    }

    /* Register your methods inside the initApp function here */
    private initApp(): void { }

    /* Write your methods here */
}

export const myApp = new App();
