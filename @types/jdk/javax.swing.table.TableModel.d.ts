declare namespace javax {
  namespace swing {
    namespace table {
      interface TableModel {
        getRowCount(): number
        getColumnCount(): number
        getColumnName(arg0: number | java.lang.Integer): java.lang.String
        getColumnClass(arg0: number | java.lang.Integer): java.lang.Class<unknown>
        isCellEditable(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        getValueAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.Object
        setValueAt(
          arg0: java.lang.Object | any,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        addTableModelListener(
          arg0: javax.swing.event.TableModelListener | javax.swing.event.TableModelListener$$lambda
        ): void
        removeTableModelListener(
          arg0: javax.swing.event.TableModelListener | javax.swing.event.TableModelListener$$lambda
        ): void
      }
    }
  }
}
