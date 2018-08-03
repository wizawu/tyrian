declare namespace javax {
    namespace swing {
        abstract class JComponent$AccessibleJComponent extends java.awt.Container$AccessibleAWTContainer implements javax.accessibility.AccessibleExtendedComponent {
            protected accessibleFocusHandler: java.awt.event.FocusListener
            protected constructor(arg0: javax.swing.JComponent)
            public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
            protected getBorderTitle(arg0: javax.swing.border.Border): string
            public getAccessibleName(): string
            public getAccessibleDescription(): string
            public getAccessibleRole(): javax.accessibility.AccessibleRole
            public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
            public getAccessibleChildrenCount(): int
            public getAccessibleChild(arg0: int): javax.accessibility.Accessible
            public getToolTipText(): string
            public getTitledBorderText(): string
            public getAccessibleKeyBinding(): javax.accessibility.AccessibleKeyBinding
            public getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
            public removeFocusListener(arg0: java.awt.event.FocusListener): void
            public addFocusListener(arg0: java.awt.event.FocusListener): void
            public requestFocus(): void
            public isFocusTraversable(): boolean
            public setSize(arg0: java.awt.Dimension): void
            public getSize(): java.awt.Dimension
            public setBounds(arg0: java.awt.Rectangle): void
            public getBounds(): java.awt.Rectangle
            public setLocation(arg0: java.awt.Point): void
            public getLocation(): java.awt.Point
            public getLocationOnScreen(): java.awt.Point
            public contains(arg0: java.awt.Point): boolean
            public isShowing(): boolean
            public setVisible(arg0: boolean): void
            public isVisible(): boolean
            public setEnabled(arg0: boolean): void
            public isEnabled(): boolean
            public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public setFont(arg0: java.awt.Font): void
            public getFont(): java.awt.Font
            public setCursor(arg0: java.awt.Cursor): void
            public getCursor(): java.awt.Cursor
            public setForeground(arg0: java.awt.Color): void
            public getForeground(): java.awt.Color
            public setBackground(arg0: java.awt.Color): void
            public getBackground(): java.awt.Color
            public getAccessibleComponent(): javax.accessibility.AccessibleComponent
            public getLocale(): java.util.Locale
            public getAccessibleIndexInParent(): int
            public getAccessibleParent(): javax.accessibility.Accessible
            public static class: java.lang.Class<any>
        }
    }
}