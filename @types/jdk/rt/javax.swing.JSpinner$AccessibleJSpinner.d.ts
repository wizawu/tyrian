declare namespace javax {
    namespace swing {
class JSpinner$AccessibleJSpinner extends javax.swing.JComponent$AccessibleJComponent implements javax.accessibility.AccessibleValue , javax.accessibility.AccessibleAction , javax.accessibility.AccessibleText , javax.accessibility.AccessibleEditableText , javax.swing.event.ChangeListener {
    protected constructor(arg0: javax.swing.JSpinner | javax.swing.JSpinner$$Lambda)
    public stateChanged(arg0: javax.swing.event.ChangeEvent): void
    public getAccessibleRole(): javax.accessibility.AccessibleRole
    public getAccessibleChildrenCount(): int
    public getAccessibleChild(arg0: int): javax.accessibility.Accessible
    public getAccessibleAction(): javax.accessibility.AccessibleAction
    public getAccessibleText(): javax.accessibility.AccessibleText
    public getAccessibleValue(): javax.accessibility.AccessibleValue
    public getCurrentAccessibleValue(): java.lang.Number
    public setCurrentAccessibleValue(arg0: java.lang.Number): boolean
    public getMinimumAccessibleValue(): java.lang.Number
    public getMaximumAccessibleValue(): java.lang.Number
    public getAccessibleActionCount(): int
    public getAccessibleActionDescription(arg0: int): string
    public doAccessibleAction(arg0: int): boolean
    public getIndexAtPoint(arg0: java.awt.Point): int
    public getCharacterBounds(arg0: int): java.awt.Rectangle
    public getCharCount(): int
    public getCaretPosition(): int
    public getAtIndex(arg0: int, arg1: int): string
    public getAfterIndex(arg0: int, arg1: int): string
    public getBeforeIndex(arg0: int, arg1: int): string
    public getCharacterAttribute(arg0: int): javax.swing.text.AttributeSet
    public getSelectionStart(): int
    public getSelectionEnd(): int
    public getSelectedText(): string
    public setTextContents(arg0: java.lang.String | string): void
    public insertTextAtIndex(arg0: int, arg1: java.lang.String | string): void
    public getTextRange(arg0: int, arg1: int): string
    public delete(arg0: int, arg1: int): void
    public cut(arg0: int, arg1: int): void
    public paste(arg0: int): void
    public replaceText(arg0: int, arg1: int, arg2: java.lang.String | string): void
    public selectText(arg0: int, arg1: int): void
    public setAttributes(arg0: int, arg1: int, arg2: javax.swing.text.AttributeSet): void
    public static class: java.lang.Class<any>
}

    }
}