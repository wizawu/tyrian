declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class AccessibleHTML$TableElementInfo extends javax.swing.text.html.AccessibleHTML$ElementInfo implements javax.accessibility.Accessible {
                    protected caption: javax.swing.text.html.AccessibleHTML$ElementInfo
                    public getCaptionInfo(): javax.swing.text.html.AccessibleHTML$ElementInfo
                    protected validate(): void
                    protected loadChildren(arg0: javax.swing.text.Element): void
                    public getRow(arg0: int): javax.swing.text.html.AccessibleHTML$TableElementInfo$TableRowElementInfo
                    public getCell(arg0: int, arg1: int): javax.swing.text.html.AccessibleHTML$TableElementInfo$TableCellElementInfo
                    public getRowExtentAt(arg0: int, arg1: int): int
                    public getColumnExtentAt(arg0: int, arg1: int): int
                    public getRowCount(): int
                    public getColumnCount(): int
                    public getAccessibleContext(): javax.accessibility.AccessibleContext
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}