declare namespace javax {
    namespace swing {
        namespace text {
            class DefaultStyledDocument extends javax.swing.text.AbstractDocument implements javax.swing.text.StyledDocument {
                public static readonly BUFFER_SIZE_DEFAULT: int
                protected buffer: javax.swing.text.DefaultStyledDocument$ElementBuffer
                public constructor(arg0: javax.swing.text.AbstractDocument$Content, arg1: javax.swing.text.StyleContext)
                public constructor(arg0: javax.swing.text.StyleContext)
                public constructor()
                public getDefaultRootElement(): javax.swing.text.Element
                protected create(arg0: javax.swing.text.DefaultStyledDocument$ElementSpec[]): void
                protected insert(arg0: int, arg1: javax.swing.text.DefaultStyledDocument$ElementSpec[]): void
                public removeElement(arg0: javax.swing.text.Element): void
                public addStyle(arg0: java.lang.String | string, arg1: javax.swing.text.Style): javax.swing.text.Style
                public removeStyle(arg0: java.lang.String | string): void
                public getStyle(arg0: java.lang.String | string): javax.swing.text.Style
                public getStyleNames(): java.util.Enumeration<any>
                public setLogicalStyle(arg0: int, arg1: javax.swing.text.Style): void
                public getLogicalStyle(arg0: int): javax.swing.text.Style
                public setCharacterAttributes(arg0: int, arg1: int, arg2: javax.swing.text.AttributeSet, arg3: boolean): void
                public setParagraphAttributes(arg0: int, arg1: int, arg2: javax.swing.text.AttributeSet, arg3: boolean): void
                public getParagraphElement(arg0: int): javax.swing.text.Element
                public getCharacterElement(arg0: int): javax.swing.text.Element
                protected insertUpdate(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent, arg1: javax.swing.text.AttributeSet): void
                protected removeUpdate(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
                protected createDefaultRoot(): javax.swing.text.AbstractDocument$AbstractElement
                public getForeground(arg0: javax.swing.text.AttributeSet): java.awt.Color
                public getBackground(arg0: javax.swing.text.AttributeSet): java.awt.Color
                public getFont(arg0: javax.swing.text.AttributeSet): java.awt.Font
                protected styleChanged(arg0: javax.swing.text.Style): void
                public addDocumentListener(arg0: javax.swing.event.DocumentListener): void
                public removeDocumentListener(arg0: javax.swing.event.DocumentListener): void
                public static class: java.lang.Class<any>
            }
        }
    }
}