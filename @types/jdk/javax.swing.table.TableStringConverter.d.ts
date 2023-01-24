declare namespace javax {
  namespace swing {
    namespace table {
      abstract class TableStringConverter {
        public constructor()
        public abstract toString(
          arg0: javax.swing.table.TableModel,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.lang.String
      }
    }
  }
}
