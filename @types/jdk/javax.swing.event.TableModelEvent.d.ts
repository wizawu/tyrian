declare namespace javax {
  namespace swing {
    namespace event {

      class TableModelEvent extends java.util.EventObject {
        public static readonly INSERT: int
        public static readonly UPDATE: int
        public static readonly DELETE: int
        public static readonly HEADER_ROW: int
        public static readonly ALL_COLUMNS: int
        protected type: int
        protected firstRow: int
        protected lastRow: int
        protected column: int
        public constructor(arg0: javax.swing.table.TableModel)
        public constructor(arg0: javax.swing.table.TableModel, arg1: number | java.lang.Integer)
        public constructor(arg0: javax.swing.table.TableModel, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public constructor(arg0: javax.swing.table.TableModel, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        public constructor(arg0: javax.swing.table.TableModel, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
        public getFirstRow(): number
        public getLastRow(): number
        public getColumn(): number
        public getType(): number
      }

    }
  }
}
