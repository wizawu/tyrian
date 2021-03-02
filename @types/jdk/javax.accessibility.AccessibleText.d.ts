declare namespace javax {
  namespace accessibility {

    interface AccessibleText {
      public static readonly CHARACTER: int
      public static readonly WORD: int
      public static readonly SENTENCE: int
      getIndexAtPoint(arg0: java.awt.Point): int
      getCharacterBounds(arg0: int): java.awt.Rectangle
      getCharCount(): int
      getCaretPosition(): int
      getAtIndex(arg0: int, arg1: int): java.lang.String
      getAfterIndex(arg0: int, arg1: int): java.lang.String
      getBeforeIndex(arg0: int, arg1: int): java.lang.String
      getCharacterAttribute(arg0: int): javax.swing.text.AttributeSet
      getSelectionStart(): int
      getSelectionEnd(): int
      getSelectedText(): java.lang.String
    }

  }
}
