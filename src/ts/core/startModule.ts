const startModule = (callback:Function) => {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
           callback();
        });
    } else {
        callback();
    }
}

export default startModule;