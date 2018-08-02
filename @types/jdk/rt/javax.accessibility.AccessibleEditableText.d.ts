declare namespace javax {
    namespace accessibility {
        interface AccessibleEditableText extends javax.accessibility.AccessibleText {
            setTextContents(arg0: java.lang.String | string): void
            insertTextAtIndex(arg0: int, arg1: java.lang.String | string): void
            getTextRange(arg0: int, arg1: int): string
            delete(arg0: int, arg1: int): void
            cut(arg0: int, arg1: int): void
            paste(arg0: int): void
            replaceText(arg0: int, arg1: int, arg2: java.lang.String | string): void
            selectText(arg0: int, arg1: int): void
            setAttributes(arg0: int, arg1: int, arg2: javax.swing.text.AttributeSet): void
        }
    }
}