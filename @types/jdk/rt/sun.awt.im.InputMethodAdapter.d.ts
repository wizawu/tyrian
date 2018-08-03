declare namespace sun {
    namespace awt {
        namespace im {
            abstract class InputMethodAdapter implements java.awt.im.spi.InputMethod {
                public constructor()
                protected getClientComponent(): java.awt.Component
                protected haveActiveClient(): boolean
                protected setAWTFocussedComponent(arg0: java.awt.Component): void
                protected supportsBelowTheSpot(): boolean
                protected stopListening(): void
                public notifyClientWindowChange(arg0: java.awt.Rectangle): void
                public reconvert(): void
                public abstract disableInputMethod(): void
                public abstract getNativeInputMethodInfo(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}