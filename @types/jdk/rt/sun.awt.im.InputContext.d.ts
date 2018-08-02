declare namespace sun {
    namespace awt {
        namespace im {
            class InputContext extends java.awt.im.InputContext implements java.awt.event.ComponentListener , java.awt.event.WindowListener {
                protected constructor()
                public selectInputMethod(arg0: java.util.Locale): boolean
                public getLocale(): java.util.Locale
                public setCharacterSubsets(arg0: java.lang.Character$Subset[]): void
                public reconvert(): void
                public dispatchEvent(arg0: java.awt.AWTEvent): void
                public removeNotify(arg0: java.awt.Component): void
                public dispose(): void
                public getInputMethodControlObject(): java.lang.Object
                public setCompositionEnabled(arg0: boolean): void
                public isCompositionEnabled(): boolean
                public getInputMethodInfo(): string
                public disableNativeIM(): void
                public endComposition(): void
                public componentResized(arg0: java.awt.event.ComponentEvent): void
                public componentMoved(arg0: java.awt.event.ComponentEvent): void
                public componentShown(arg0: java.awt.event.ComponentEvent): void
                public componentHidden(arg0: java.awt.event.ComponentEvent): void
                public windowOpened(arg0: java.awt.event.WindowEvent): void
                public windowClosing(arg0: java.awt.event.WindowEvent): void
                public windowClosed(arg0: java.awt.event.WindowEvent): void
                public windowIconified(arg0: java.awt.event.WindowEvent): void
                public windowDeiconified(arg0: java.awt.event.WindowEvent): void
                public windowActivated(arg0: java.awt.event.WindowEvent): void
                public windowDeactivated(arg0: java.awt.event.WindowEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}