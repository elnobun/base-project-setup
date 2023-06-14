import UI from "./UI.class"

export default class Modal {
    static instance: Modal = new Modal()
    private ui = UI.instance
    constructor() {
        this.init()
    }

    private init() {
        this.handleOpenModal()
        this.handleCloseModal()
    }

    private disableFormSubmitButton(): void { }

    private enableFormSubmitButton(): void {
    }

    private toggleFormButtonDisabledState(): void { }

    private handleOpenModal(): void {
        this.ui.openModal && this.ui.openModal.addEventListener("click", (e) => {
            e.preventDefault()
            this.ui?.modal.showModal()
        })
    }

    private handleCloseModal(): void {
        this.ui.closeModal && this.ui.closeModal.addEventListener("click", () => {
            this.ui?.modal.close()
        })
    }
}
