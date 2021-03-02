declare namespace javax {
  namespace swing {
    namespace event {

      class TableColumnModelEvent extends java.util.EventObject {
        protected fromIndex: int
        protected toIndex: int
        public constructor(arg0: javax.swing.table.TableColumnModel, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public getFromIndex(): number
        public getToIndex(): number
      }

    }
  }
}
