declare namespace java {
    namespace awt {
        class TextComponent extends java.awt.Component implements javax.accessibility.Accessible {
            protected textListener: java.awt.event.TextListener
            public enableInputMethods(arg0: boolean): void
            public getInputMethodRequests(): java.awt.im.InputMethodRequests
            public addNotify(): void
            public removeNotify(): void
            public setText(arg0: java.lang.String | string): void
            public getText(): string
            public getSelectedText(): string
            public isEditable(): boolean
            public setEditable(arg0: boolean): void
            public getBackground(): java.awt.Color
            public setBackground(arg0: java.awt.Color): void
            public getSelectionStart(): int
            public setSelectionStart(arg0: int): void
            public getSelectionEnd(): int
            public setSelectionEnd(arg0: int): void
            public select(arg0: int, arg1: int): void
            public selectAll(): void
            public setCaretPosition(arg0: int): void
            public getCaretPosition(): int
            public addTextListener(arg0: java.awt.event.TextListener): void
            public removeTextListener(arg0: java.awt.event.TextListener): void
            public getTextListeners(): java.awt.event.TextListener[]
            public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
            protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
            protected processTextEvent<T extends java.util.EventListener>(arg0: java.awt.event.TextEvent): void
            protected paramString<T extends java.util.EventListener>(): string
            public getAccessibleContext<T extends java.util.EventListener>(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
        class TextComponent$$Lambda extends java.awt.Component implements javax.accessibility.Accessible {
            protected textListener: java.awt.event.TextListener
        }
    }
}