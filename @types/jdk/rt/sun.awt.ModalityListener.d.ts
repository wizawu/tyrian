declare namespace sun {
    namespace awt {
        interface ModalityListener {
            modalityPushed(arg0: sun.awt.ModalityEvent): void
            modalityPopped(arg0: sun.awt.ModalityEvent): void
        }
    }
}