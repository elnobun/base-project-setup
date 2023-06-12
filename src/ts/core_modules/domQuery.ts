// EXAMPLE bespoke ts for this site only.
const getElementId = (selector: string, parent = document) => {
    return parent.getElementById(selector) as HTMLElement;
}

const getElementClass = (selector: string, parent = document) => {
    return parent.getElementsByClassName(selector) as HTMLCollectionOf<HTMLElement>;
}

const getElement = (selector: string, parent = document) => {
    return parent.querySelector(selector) as HTMLElement;
}

const getAllElements = (selector: string, parent = document) => {
    return [...parent.querySelectorAll(selector)];
}

export {
    getElementId,
    getElement,
    getElementClass,
    getAllElements
}