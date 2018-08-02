declare namespace java {
    namespace awt {
        namespace im {
            class InputContext {
                protected constructor()
                public static getInstance(): java.awt.im.InputContext
                public selectInputMethod(arg0: java.util.Locale): boolean
                public getLocale(): java.util.Locale
                public setCharacterSubsets(arg0: java.lang.Character$Subset[]): void
                public setCompositionEnabled(arg0: boolean): void
                public isCompositionEnabled(): boolean
                public reconvert(): void
                public dispatchEvent(arg0: java.awt.AWTEvent): void
                public removeNotify(arg0: java.awt.Component): void
                public endComposition(): void
                public dispose(): void
                public getInputMethodControlObject(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}