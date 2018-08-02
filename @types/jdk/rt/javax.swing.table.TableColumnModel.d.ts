declare namespace javax {
    namespace swing {
        namespace table {
            interface TableColumnModel {
                addColumn(arg0: javax.swing.table.TableColumn): void
                removeColumn(arg0: javax.swing.table.TableColumn): void
                moveColumn(arg0: int, arg1: int): void
                setColumnMargin(arg0: int): void
                getColumnCount(): int
                getColumns(): java.util.Enumeration<javax.swing.table.TableColumn>
                getColumnIndex(arg0: java.lang.Object): int
                getColumn(arg0: int): javax.swing.table.TableColumn
                getColumnMargin(): int
                getColumnIndexAtX(arg0: int): int
                getTotalColumnWidth(): int
                setColumnSelectionAllowed(arg0: boolean): void
                getColumnSelectionAllowed(): boolean
                getSelectedColumns(): int[]
                getSelectedColumnCount(): int
                setSelectionModel(arg0: javax.swing.ListSelectionModel): void
                getSelectionModel(): javax.swing.ListSelectionModel
                addColumnModelListener(arg0: javax.swing.event.TableColumnModelListener): void
                removeColumnModelListener(arg0: javax.swing.event.TableColumnModelListener): void
            }
        }
    }
}