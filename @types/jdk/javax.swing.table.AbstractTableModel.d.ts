declare namespace javax {
  namespace swing {
    namespace table {
      abstract class AbstractTableModel implements javax.swing.table.TableModel, java.io.Serializable {
        protected listenerList: javax.swing.event.EventListenerList
        public constructor()
        public getColumnName(arg0: number | java.lang.Integer): java.lang.String
        public findColumn(arg0: java.lang.String | string): number
        public getColumnClass(arg0: number | java.lang.Integer): java.lang.Class<unknown>
        public isCellEditable(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        public setValueAt(
          arg0: java.lang.Object | any,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        public addTableModelListener(
          arg0: javax.swing.event.TableModelListener | javax.swing.event.TableModelListener$$lambda
        ): void
        public removeTableModelListener(
          arg0: javax.swing.event.TableModelListener | javax.swing.event.TableModelListener$$lambda
        ): void
        public getTableModelListeners(): javax.swing.event.TableModelListener[]
        public fireTableDataChanged(): void
        public fireTableStructureChanged(): void
        public fireTableRowsInserted(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public fireTableRowsUpdated(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public fireTableRowsDeleted(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public fireTableCellUpdated(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public fireTableChanged(arg0: javax.swing.event.TableModelEvent): void
        public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      }
    }
  }
}
