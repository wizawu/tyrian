declare namespace javax {
    namespace swing {
        class JTree$AccessibleJTree$AccessibleJTreeNode extends javax.accessibility.AccessibleContext implements javax.accessibility.Accessible , javax.accessibility.AccessibleComponent , javax.accessibility.AccessibleSelection , javax.accessibility.AccessibleAction {
            public constructor(arg0: javax.swing.JTree$AccessibleJTree, arg1: javax.swing.JTree, arg2: javax.swing.tree.TreePath, arg3: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda)
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public getAccessibleName(): string
            public setAccessibleName(arg0: java.lang.String | string): void
            public getAccessibleDescription(): string
            public setAccessibleDescription(arg0: java.lang.String | string): void
            public getAccessibleRole(): javax.accessibility.AccessibleRole
            public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
            public getAccessibleParent(): javax.accessibility.Accessible
            public getAccessibleIndexInParent(): int
            public getAccessibleChildrenCount(): int
            public getAccessibleChild(arg0: int): javax.accessibility.Accessible
            public getLocale(): java.util.Locale
            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            public getAccessibleAction(): javax.accessibility.AccessibleAction
            public getAccessibleComponent(): javax.accessibility.AccessibleComponent
            public getAccessibleSelection(): javax.accessibility.AccessibleSelection
            public getAccessibleText(): javax.accessibility.AccessibleText
            public getAccessibleValue(): javax.accessibility.AccessibleValue
            public getBackground(): java.awt.Color
            public setBackground(arg0: java.awt.Color): void
            public getForeground(): java.awt.Color
            public setForeground(arg0: java.awt.Color): void
            public getCursor(): java.awt.Cursor
            public setCursor(arg0: java.awt.Cursor): void
            public getFont(): java.awt.Font
            public setFont(arg0: java.awt.Font): void
            public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public isEnabled(): boolean
            public setEnabled(arg0: boolean): void
            public isVisible(): boolean
            public setVisible(arg0: boolean): void
            public isShowing(): boolean
            public contains(arg0: java.awt.Point): boolean
            public getLocationOnScreen(): java.awt.Point
            protected getLocationInJTree(): java.awt.Point
            public getLocation(): java.awt.Point
            public setLocation(arg0: java.awt.Point): void
            public getBounds(): java.awt.Rectangle
            public setBounds(arg0: java.awt.Rectangle): void
            public getSize(): java.awt.Dimension
            public setSize(arg0: java.awt.Dimension): void
            public getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
            public isFocusTraversable(): boolean
            public requestFocus(): void
            public addFocusListener(arg0: java.awt.event.FocusListener): void
            public removeFocusListener(arg0: java.awt.event.FocusListener): void
            public getAccessibleSelectionCount(): int
            public getAccessibleSelection(arg0: int): javax.accessibility.Accessible
            public isAccessibleChildSelected(arg0: int): boolean
            public addAccessibleSelection(arg0: int): void
            public removeAccessibleSelection(arg0: int): void
            public clearAccessibleSelection(): void
            public selectAllAccessibleSelection(): void
            public getAccessibleActionCount(): int
            public getAccessibleActionDescription(arg0: int): string
            public doAccessibleAction(arg0: int): boolean
            public static class: java.lang.Class<any>
        }
    }
}