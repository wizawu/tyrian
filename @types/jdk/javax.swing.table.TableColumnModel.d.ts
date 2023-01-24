declare namespace javax {
  namespace swing {
    namespace table {
      interface TableColumnModel {
        addColumn(arg0: javax.swing.table.TableColumn): void
        removeColumn(arg0: javax.swing.table.TableColumn): void
        moveColumn(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        setColumnMargin(arg0: number | java.lang.Integer): void
        getColumnCount(): number
        getColumns(): java.util.Enumeration<javax.swing.table.TableColumn>
        getColumnIndex(arg0: java.lang.Object | any): number
        getColumn(arg0: number | java.lang.Integer): javax.swing.table.TableColumn
        getColumnMargin(): number
        getColumnIndexAtX(arg0: number | java.lang.Integer): number
        getTotalColumnWidth(): number
        setColumnSelectionAllowed(arg0: boolean | java.lang.Boolean): void
        getColumnSelectionAllowed(): boolean
        getSelectedColumns(): number[]
        getSelectedColumnCount(): number
        setSelectionModel(arg0: javax.swing.ListSelectionModel): void
        getSelectionModel(): javax.swing.ListSelectionModel
        addColumnModelListener(arg0: javax.swing.event.TableColumnModelListener): void
        removeColumnModelListener(arg0: javax.swing.event.TableColumnModelListener): void
      }
    }
  }
}
