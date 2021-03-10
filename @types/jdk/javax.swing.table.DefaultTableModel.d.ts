declare namespace javax {
  namespace swing {
    namespace table {

      class DefaultTableModel extends javax.swing.table.AbstractTableModel implements java.io.Serializable {
        protected dataVector: java.util.Vector<java.util.Vector>
        protected columnIdentifiers: java.util.Vector
        public constructor()
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public constructor(arg0: java.util.Vector<unknown>, arg1: number | java.lang.Integer)
        public constructor(arg0: java.lang.Object[] | any[], arg1: number | java.lang.Integer)
        public constructor(arg0: java.util.Vector<java.util.Vector>, arg1: java.util.Vector<unknown>)
        public constructor(arg0: java.lang.Object[][] | any[][], arg1: java.lang.Object[] | any[])
        public getDataVector(): java.util.Vector<java.util.Vector>
        public setDataVector(arg0: java.util.Vector<java.util.Vector>, arg1: java.util.Vector<unknown>): void
        public setDataVector(arg0: java.lang.Object[][] | any[][], arg1: java.lang.Object[] | any[]): void
        public newDataAvailable(arg0: javax.swing.event.TableModelEvent): void
        public newRowsAdded(arg0: javax.swing.event.TableModelEvent): void
        public rowsRemoved(arg0: javax.swing.event.TableModelEvent): void
        public setNumRows(arg0: number | java.lang.Integer): void
        public setRowCount(arg0: number | java.lang.Integer): void
        public addRow(arg0: java.util.Vector<unknown>): void
        public addRow(arg0: java.lang.Object[] | any[]): void
        public insertRow(arg0: number | java.lang.Integer, arg1: java.util.Vector<unknown>): void
        public insertRow(arg0: number | java.lang.Integer, arg1: java.lang.Object[] | any[]): void
        public moveRow(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public removeRow(arg0: number | java.lang.Integer): void
        public setColumnIdentifiers(arg0: java.util.Vector<unknown>): void
        public setColumnIdentifiers(arg0: java.lang.Object[] | any[]): void
        public setColumnCount(arg0: number | java.lang.Integer): void
        public addColumn(arg0: java.lang.Object | any): void
        public addColumn(arg0: java.lang.Object | any, arg1: java.util.Vector<unknown>): void
        public addColumn(arg0: java.lang.Object | any, arg1: java.lang.Object[] | any[]): void
        public getRowCount(): number
        public getColumnCount(): number
        public getColumnName(arg0: number | java.lang.Integer): java.lang.String
        public isCellEditable(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        public getValueAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.Object
        public setValueAt(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        protected static convertToVector(arg0: java.lang.Object[] | any[]): java.util.Vector<java.lang.Object>
        protected static convertToVector(arg0: java.lang.Object[][] | any[][]): java.util.Vector<java.util.Vector<java.lang.Object>>
      }

    }
  }
}
