declare namespace javax {
  namespace swing {
    namespace text {

      interface StyledDocument extends javax.swing.text.Document {
        addStyle(arg0: java.lang.String | string, arg1: javax.swing.text.Style): javax.swing.text.Style
        removeStyle(arg0: java.lang.String | string): void
        getStyle(arg0: java.lang.String | string): javax.swing.text.Style
        setCharacterAttributes(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: javax.swing.text.AttributeSet, arg3: boolean | java.lang.Boolean): void
        setParagraphAttributes(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: javax.swing.text.AttributeSet, arg3: boolean | java.lang.Boolean): void
        setLogicalStyle(arg0: number | java.lang.Integer, arg1: javax.swing.text.Style): void
        getLogicalStyle(arg0: number | java.lang.Integer): javax.swing.text.Style
        getParagraphElement(arg0: number | java.lang.Integer): javax.swing.text.Element
        getCharacterElement(arg0: number | java.lang.Integer): javax.swing.text.Element
        getForeground(arg0: javax.swing.text.AttributeSet): java.awt.Color
        getBackground(arg0: javax.swing.text.AttributeSet): java.awt.Color
        getFont(arg0: javax.swing.text.AttributeSet): java.awt.Font
      }

    }
  }
}
