declare namespace javax {
  namespace accessibility {

    interface AccessibleEditableText extends javax.accessibility.AccessibleText {
      setTextContents(arg0: java.lang.String | string): void
      insertTextAtIndex(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      getTextRange(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      delete(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      cut(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      paste(arg0: number | java.lang.Integer): void
      replaceText(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
      selectText(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setAttributes(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: javax.swing.text.AttributeSet): void
    }

  }
}
