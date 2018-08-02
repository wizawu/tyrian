declare namespace sun {
    namespace awt {
        namespace im {
            class InputMethodContext extends sun.awt.im.InputContext implements java.awt.im.spi.InputMethodContext {
                public constructor()
                public dispatchInputMethodEvent(arg0: int, arg1: java.text.AttributedCharacterIterator, arg2: int, arg3: java.awt.font.TextHitInfo, arg4: java.awt.font.TextHitInfo): void
                public dispatchEvent(arg0: java.awt.AWTEvent): void
                public getTextLocation(arg0: java.awt.font.TextHitInfo): java.awt.Rectangle
                public getLocationOffset(arg0: int, arg1: int): java.awt.font.TextHitInfo
                public getInsertPositionOffset(): int
                public getCommittedText(arg0: int, arg1: int, arg2: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
                public getCommittedTextLength(): int
                public cancelLatestCommittedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
                public getSelectedText(arg0: java.text.AttributedCharacterIterator$Attribute[]): java.text.AttributedCharacterIterator
                public createInputMethodWindow(arg0: java.lang.String | string, arg1: boolean): java.awt.Window
                public createInputMethodJFrame(arg0: java.lang.String | string, arg1: boolean): javax.swing.JFrame
                public enableClientWindowNotification(arg0: java.awt.im.spi.InputMethod, arg1: boolean): void
                public static class: java.lang.Class<any>
            }
        }
    }
}