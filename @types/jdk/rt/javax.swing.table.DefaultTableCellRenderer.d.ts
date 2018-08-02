declare namespace javax {
    namespace swing {
        namespace table {
class DefaultTableCellRenderer extends javax.swing.JLabel implements javax.swing.table.TableCellRenderer , java.io.Serializable {
    protected static noFocusBorder: javax.swing.border.Border
    public constructor()
    public setForeground(arg0: java.awt.Color): void
    public setBackground(arg0: java.awt.Color): void
    public updateUI(): void
    public getTableCellRendererComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: boolean, arg4: int, arg5: int): java.awt.Component
    public isOpaque(): boolean
    public invalidate(): void
    public validate(): void
    public revalidate(): void
    public repaint(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int): void
    public repaint(arg0: java.awt.Rectangle): void
    public repaint(): void
    protected firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
    public firePropertyChange(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
    protected setValue(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

        }
    }
}