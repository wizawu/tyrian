declare namespace javax {
    namespace swing {
abstract class AbstractButton$AccessibleAbstractButton extends javax.swing.JComponent$AccessibleJComponent implements javax.accessibility.AccessibleAction , javax.accessibility.AccessibleValue , javax.accessibility.AccessibleText , javax.accessibility.AccessibleExtendedComponent {
    protected constructor(arg0: javax.swing.AbstractButton)
    public getAccessibleName(): string
    public getAccessibleIcon(): javax.accessibility.AccessibleIcon[]
    public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
    public getAccessibleRelationSet(): javax.accessibility.AccessibleRelationSet
    public getAccessibleAction(): javax.accessibility.AccessibleAction
    public getAccessibleValue(): javax.accessibility.AccessibleValue
    public getAccessibleActionCount(): int
    public getAccessibleActionDescription(arg0: int): string
    public doAccessibleAction(arg0: int): boolean
    public getCurrentAccessibleValue(): java.lang.Number
    public setCurrentAccessibleValue(arg0: java.lang.Number): boolean
    public getMinimumAccessibleValue(): java.lang.Number
    public getMaximumAccessibleValue(): java.lang.Number
    public getAccessibleText(): javax.accessibility.AccessibleText
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
    public getToolTipText(): string
    public getTitledBorderText(): string
    public getAccessibleKeyBinding(): javax.accessibility.AccessibleKeyBinding
    public static class: java.lang.Class<any>
}

    }
}