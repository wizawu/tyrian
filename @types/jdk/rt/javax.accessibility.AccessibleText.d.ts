declare namespace javax {
    namespace accessibility {
interface AccessibleText {
    CHARACTER: int
    WORD: int
    SENTENCE: int
    getIndexAtPoint(arg0: java.awt.Point): int
    getCharacterBounds(arg0: int): java.awt.Rectangle
    getCharCount(): int
    getCaretPosition(): int
    getAtIndex(arg0: int, arg1: int): string
    getAfterIndex(arg0: int, arg1: int): string
    getBeforeIndex(arg0: int, arg1: int): string
    getCharacterAttribute(arg0: int): javax.swing.text.AttributeSet
    getSelectionStart(): int
    getSelectionEnd(): int
    getSelectedText(): string
}

    }
}