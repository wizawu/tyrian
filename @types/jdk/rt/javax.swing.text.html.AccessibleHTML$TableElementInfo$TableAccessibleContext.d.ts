declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class AccessibleHTML$TableElementInfo$TableAccessibleContext extends javax.swing.text.html.AccessibleHTML$HTMLAccessibleContext implements javax.accessibility.AccessibleTable {
                    public constructor(arg0: javax.swing.text.html.AccessibleHTML$TableElementInfo, arg1: javax.swing.text.html.AccessibleHTML$ElementInfo)
                    public getAccessibleName(): string
                    public getAccessibleDescription(): string
                    public getAccessibleRole(): javax.accessibility.AccessibleRole
                    public getAccessibleIndexInParent(): int
                    public getAccessibleChildrenCount(): int
                    public getAccessibleChild(arg0: int): javax.accessibility.Accessible
                    public getAccessibleTable(): javax.accessibility.AccessibleTable
                    public getAccessibleCaption(): javax.accessibility.Accessible
                    public setAccessibleCaption(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                    public getAccessibleSummary(): javax.accessibility.Accessible
                    public setAccessibleSummary(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                    public getAccessibleRowCount(): int
                    public getAccessibleColumnCount(): int
                    public getAccessibleAt(arg0: int, arg1: int): javax.accessibility.Accessible
                    public getAccessibleRowExtentAt(arg0: int, arg1: int): int
                    public getAccessibleColumnExtentAt(arg0: int, arg1: int): int
                    public getAccessibleRowHeader(): javax.accessibility.AccessibleTable
                    public setAccessibleRowHeader(arg0: javax.accessibility.AccessibleTable): void
                    public getAccessibleColumnHeader(): javax.accessibility.AccessibleTable
                    public setAccessibleColumnHeader(arg0: javax.accessibility.AccessibleTable): void
                    public getAccessibleRowDescription(arg0: int): javax.accessibility.Accessible
                    public setAccessibleRowDescription(arg0: int, arg1: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                    public getAccessibleColumnDescription(arg0: int): javax.accessibility.Accessible
                    public setAccessibleColumnDescription(arg0: int, arg1: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
                    public isAccessibleSelected(arg0: int, arg1: int): boolean
                    public isAccessibleRowSelected(arg0: int): boolean
                    public isAccessibleColumnSelected(arg0: int): boolean
                    public getSelectedAccessibleRows(): int[]
                    public getSelectedAccessibleColumns(): int[]
                    public getAccessibleRow(arg0: int): int
                    public getAccessibleColumn(arg0: int): int
                    public getAccessibleIndex(arg0: int, arg1: int): int
                    public getAccessibleRowHeader(arg0: int): string
                    public getAccessibleColumnHeader(arg0: int): string
                    public addRowHeader(arg0: javax.swing.text.html.AccessibleHTML$TableElementInfo$TableCellElementInfo, arg1: int): void
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
                    public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
                    public getAccessibleContext(): javax.accessibility.AccessibleContext
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}