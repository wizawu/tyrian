declare namespace java {
    namespace awt {
        namespace im {
            namespace spi {
interface InputMethodDescriptor {
    getAvailableLocales(): java.util.Locale[]
    hasDynamicLocaleList(): boolean
    getInputMethodDisplayName(arg0: java.util.Locale, arg1: java.util.Locale): string
    getInputMethodIcon(arg0: java.util.Locale): java.awt.Image
    createInputMethod(): java.awt.im.spi.InputMethod
}

            }
        }
    }
}