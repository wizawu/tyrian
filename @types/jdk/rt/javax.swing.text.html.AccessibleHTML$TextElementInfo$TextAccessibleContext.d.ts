declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class AccessibleHTML$TextElementInfo$TextAccessibleContext extends javax.swing.text.html.AccessibleHTML$HTMLAccessibleContext implements javax.accessibility.AccessibleText {
                    public constructor(arg0: javax.swing.text.html.AccessibleHTML$TextElementInfo, arg1: javax.swing.text.html.AccessibleHTML$ElementInfo)
                    public getAccessibleText(): javax.accessibility.AccessibleText
                    public getAccessibleName(): string
                    public getAccessibleDescription(): string
                    public getAccessibleRole(): javax.accessibility.AccessibleRole
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
                    public removeFocusListener(arg0: java.awt.event.FocusListener): void
                    public addFocusListener(arg0: java.awt.event.FocusListener): void
                    public requestFocus(): void
                    public isFocusTraversable(): boolean
                    public getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
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
                    public getAccessibleChild(arg0: int): javax.accessibility.Accessible
                    public getAccessibleChildrenCount(): int
                    public getAccessibleIndexInParent(): int
                    public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                    public getAccessibleContext(): javax.accessibility.AccessibleContext
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}