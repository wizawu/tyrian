declare namespace java {
    namespace awt {
class TextComponent$AccessibleAWTTextComponent extends java.awt.Component$AccessibleAWTComponent implements javax.accessibility.AccessibleText , java.awt.event.TextListener {
    public constructor(arg0: java.awt.TextComponent | java.awt.TextComponent$$Lambda)
    public textValueChanged(arg0: java.awt.event.TextEvent): void
    public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
    public getAccessibleRole(): javax.accessibility.AccessibleRole
    public getAccessibleText(): javax.accessibility.AccessibleText
    public getIndexAtPoint(arg0: java.awt.Point): int
    public getCharacterBounds(arg0: int): java.awt.Rectangle
    public getCharCount(): int
    public getCaretPosition(): int
    public getCharacterAttribute(arg0: int): javax.swing.text.AttributeSet
    public getSelectionStart(): int
    public getSelectionEnd(): int
    public getSelectedText(): string
    public getAtIndex(arg0: int, arg1: int): string
    public getAfterIndex(arg0: int, arg1: int): string
    public getBeforeIndex(arg0: int, arg1: int): string
    public static class: java.lang.Class<any>
}

    }
}