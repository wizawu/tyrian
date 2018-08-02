declare namespace java {
    namespace awt {
        namespace im {
            namespace spi {
                interface InputMethod {
                    setInputMethodContext(arg0: java.awt.im.spi.InputMethodContext): void
                    setLocale(arg0: java.util.Locale): boolean
                    getLocale(): java.util.Locale
                    setCharacterSubsets(arg0: java.lang.Character$Subset[]): void
                    setCompositionEnabled(arg0: boolean): void
                    isCompositionEnabled(): boolean
                    reconvert(): void
                    dispatchEvent(arg0: java.awt.AWTEvent): void
                    notifyClientWindowChange(arg0: java.awt.Rectangle): void
                    activate(): void
                    deactivate(arg0: boolean): void
                    hideWindows(): void
                    removeNotify(): void
                    endComposition(): void
                    dispose(): void
                    getControlObject(): java.lang.Object
                }
            }
        }
    }
}