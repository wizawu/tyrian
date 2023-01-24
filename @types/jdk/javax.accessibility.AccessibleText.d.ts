declare namespace javax {
  namespace accessibility {
    interface AccessibleText {
      readonly CHARACTER: int
      readonly WORD: int
      readonly SENTENCE: int
      getIndexAtPoint(arg0: java.awt.Point): number
      getCharacterBounds(arg0: number | java.lang.Integer): java.awt.Rectangle
      getCharCount(): number
      getCaretPosition(): number
      getAtIndex(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      getAfterIndex(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      getBeforeIndex(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      getCharacterAttribute(arg0: number | java.lang.Integer): javax.swing.text.AttributeSet
      getSelectionStart(): number
      getSelectionEnd(): number
      getSelectedText(): java.lang.String
    }
  }
}
