declare namespace javax {
    namespace swing {
        namespace text {
interface StyledDocument extends javax.swing.text.Document {
    addStyle(arg0: java.lang.String | string, arg1: javax.swing.text.Style): javax.swing.text.Style
    removeStyle(arg0: java.lang.String | string): void
    getStyle(arg0: java.lang.String | string): javax.swing.text.Style
    setCharacterAttributes(arg0: int, arg1: int, arg2: javax.swing.text.AttributeSet, arg3: boolean): void
    setParagraphAttributes(arg0: int, arg1: int, arg2: javax.swing.text.AttributeSet, arg3: boolean): void
    setLogicalStyle(arg0: int, arg1: javax.swing.text.Style): void
    getLogicalStyle(arg0: int): javax.swing.text.Style
    getParagraphElement(arg0: int): javax.swing.text.Element
    getCharacterElement(arg0: int): javax.swing.text.Element
    getForeground(arg0: javax.swing.text.AttributeSet): java.awt.Color
    getBackground(arg0: javax.swing.text.AttributeSet): java.awt.Color
    getFont(arg0: javax.swing.text.AttributeSet): java.awt.Font
}

        }
    }
}