declare namespace javax {
    namespace swing {
        namespace table {
            interface TableModel {
                getRowCount(): int
                getColumnCount(): int
                getColumnName(arg0: int): string
                getColumnClass(arg0: int): java.lang.Class<any>
                isCellEditable(arg0: int, arg1: int): boolean
                getValueAt(arg0: int, arg1: int): java.lang.Object
                setValueAt(arg0: java.lang.Object, arg1: int, arg2: int): void
                addTableModelListener(arg0: javax.swing.event.TableModelListener): void
                removeTableModelListener(arg0: javax.swing.event.TableModelListener): void
            }
        }
    }
}