declare namespace javax {
    namespace accessibility {
interface AccessibleAction {
    TOGGLE_EXPAND: string
    INCREMENT: string
    DECREMENT: string
    CLICK: string
    TOGGLE_POPUP: string
    getAccessibleActionCount(): int
    getAccessibleActionDescription(arg0: int): string
    doAccessibleAction(arg0: int): boolean
}

    }
}