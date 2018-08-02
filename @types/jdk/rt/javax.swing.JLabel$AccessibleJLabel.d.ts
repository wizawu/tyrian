declare namespace javax {
    namespace swing {
        class JLabel$AccessibleJLabel extends javax.swing.JComponent$AccessibleJComponent implements javax.accessibility.AccessibleText , javax.accessibility.AccessibleExtendedComponent {
            protected constructor(arg0: javax.swing.JLabel | javax.swing.JLabel$$Lambda)
            public getAccessibleName(): string
            public getAccessibleRole(): javax.accessibility.AccessibleRole
            public getAccessibleIcon(): javax.accessibility.AccessibleIcon[]
            public getAccessibleRelationSet(): javax.accessibility.AccessibleRelationSet
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