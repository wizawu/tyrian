declare namespace sun {
    namespace awt {
        abstract class X11InputMethod extends sun.awt.im.InputMethodAdapter {
            protected clientComponentWindow: java.awt.Container
            public constructor()
            protected finalize(): void
            protected abstract openXIM(): boolean
            protected isDisposed(): boolean
            protected abstract setXICFocus(arg0: java.awt.peer.ComponentPeer, arg1: boolean, arg2: boolean): void
            public setInputMethodContext(arg0: java.awt.im.spi.InputMethodContext): void
            public setLocale(arg0: java.util.Locale): boolean
            public getLocale(): java.util.Locale
            public setCharacterSubsets(arg0: java.lang.Character$Subset[]): void
            public dispatchEvent(arg0: java.awt.AWTEvent): void
            protected resetXICifneeded(): void
            public activate(): void
            protected abstract createXIC(): boolean
            public deactivate(arg0: boolean): void
            public disableInputMethod(): void
            public hideWindows(): void
            public static mapInputMethodHighlight(arg0: java.awt.im.InputMethodHighlight): java.util.Map
            protected setAWTFocussedComponent(arg0: java.awt.Component): void
            protected stopListening(): void
            protected abstract getParent(arg0: java.awt.Component): java.awt.Container
            protected abstract getPeer(arg0: java.awt.Component): java.awt.peer.ComponentPeer
            protected abstract awtLock(): void
            protected abstract awtUnlock(): void
            protected disposeImpl(): void
            public dispose(): void
            public getControlObject(): java.lang.Object
            public removeNotify(): void
            public setCompositionEnabled(arg0: boolean): void
            public isCompositionEnabled(): boolean
            public endComposition(): void
            public getNativeInputMethodInfo(): string
            protected resetXIC(): string
            public static class: java.lang.Class<any>
        }
    }
}