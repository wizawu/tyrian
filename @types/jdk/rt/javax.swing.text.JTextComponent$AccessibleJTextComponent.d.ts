declare namespace javax {
    namespace swing {
        namespace text {
            class JTextComponent$AccessibleJTextComponent extends javax.swing.JComponent$AccessibleJComponent implements javax.accessibility.AccessibleText , javax.swing.event.CaretListener , javax.swing.event.DocumentListener , javax.accessibility.AccessibleAction , javax.accessibility.AccessibleEditableText , javax.accessibility.AccessibleExtendedText {
                public constructor(arg0: javax.swing.text.JTextComponent)
                public caretUpdate(arg0: javax.swing.event.CaretEvent): void
                public insertUpdate(arg0: javax.swing.event.DocumentEvent): void
                public removeUpdate(arg0: javax.swing.event.DocumentEvent): void
                public changedUpdate(arg0: javax.swing.event.DocumentEvent): void
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
                public getAccessibleEditableText(): javax.accessibility.AccessibleEditableText
                public setTextContents(arg0: java.lang.String | string): void
                public insertTextAtIndex(arg0: int, arg1: java.lang.String | string): void
                public getTextRange(arg0: int, arg1: int): string
                public delete(arg0: int, arg1: int): void
                public cut(arg0: int, arg1: int): void
                public paste(arg0: int): void
                public replaceText(arg0: int, arg1: int, arg2: java.lang.String | string): void
                public selectText(arg0: int, arg1: int): void
                public setAttributes(arg0: int, arg1: int, arg2: javax.swing.text.AttributeSet): void
                public getTextSequenceAt(arg0: int, arg1: int): javax.accessibility.AccessibleTextSequence
                public getTextSequenceAfter(arg0: int, arg1: int): javax.accessibility.AccessibleTextSequence
                public getTextSequenceBefore(arg0: int, arg1: int): javax.accessibility.AccessibleTextSequence
                public getTextBounds(arg0: int, arg1: int): java.awt.Rectangle
                public getAccessibleAction(): javax.accessibility.AccessibleAction
                public getAccessibleActionCount(): int
                public getAccessibleActionDescription(arg0: int): string
                public doAccessibleAction(arg0: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}