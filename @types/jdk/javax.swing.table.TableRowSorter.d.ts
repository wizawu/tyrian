declare namespace javax {
  namespace swing {
    namespace table {

      class TableRowSorter<M extends javax.swing.table.TableModel> extends javax.swing.DefaultRowSorter<M,java.lang.Integer> {
        public constructor()
        public constructor(arg0: M)
        public setModel(arg0: M): void
        public setStringConverter(arg0: javax.swing.table.TableStringConverter): void
        public getStringConverter(): javax.swing.table.TableStringConverter
        public getComparator(arg0: number | java.lang.Integer): java.util.Comparator<unknown>
        protected useToString(arg0: number | java.lang.Integer): boolean
      }

    }
  }
}
