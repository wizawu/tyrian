declare namespace sun {
    namespace awt {
        interface InputMethodSupport {
            getInputMethodAdapterDescriptor(): java.awt.im.spi.InputMethodDescriptor
            createInputMethodWindow(arg0: java.lang.String | string, arg1: sun.awt.im.InputContext): java.awt.Window
            enableInputMethodsForTextComponent(): boolean
            getDefaultKeyboardLocale(): java.util.Locale
        }
    }
}