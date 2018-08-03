declare namespace javax {
    namespace swing {
        interface Action extends java.awt.event.ActionListener {
            DEFAULT: string
            NAME: string
            SHORT_DESCRIPTION: string
            LONG_DESCRIPTION: string
            SMALL_ICON: string
            ACTION_COMMAND_KEY: string
            ACCELERATOR_KEY: string
            MNEMONIC_KEY: string
            SELECTED_KEY: string
            DISPLAYED_MNEMONIC_INDEX_KEY: string
            LARGE_ICON_KEY: string
            getValue(arg0: java.lang.String | string): java.lang.Object
            putValue(arg0: java.lang.String | string, arg1: java.lang.Object): void
            setEnabled(arg0: boolean): void
            isEnabled(): boolean
            addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
        }
    }
}