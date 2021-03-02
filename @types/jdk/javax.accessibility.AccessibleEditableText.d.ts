declare namespace javax {
  namespace accessibility {

    interface AccessibleEditableText extends javax.accessibility.AccessibleText {
      setTextContents(arg0: java.lang.String): void
      insertTextAtIndex(arg0: int, arg1: java.lang.String): void
      getTextRange(arg0: int, arg1: int): java.lang.String
      delete(arg0: int, arg1: int): void
      cut(arg0: int, arg1: int): void
      paste(arg0: int): void
      replaceText(arg0: int, arg1: int, arg2: java.lang.String): void
      selectText(arg0: int, arg1: int): void
      setAttributes(arg0: int, arg1: int, arg2: javax.swing.text.AttributeSet): void
    }

  }
}
