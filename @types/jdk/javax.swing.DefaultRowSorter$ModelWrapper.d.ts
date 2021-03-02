declare namespace javax {
  namespace swing {

    abstract class DefaultRowSorter$ModelWrapper<M,I> {
      protected constructor()
      public abstract getModel(): M
      public abstract getColumnCount(): number
      public abstract getRowCount(): number
      public abstract getValueAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.Object
      public getStringValueAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      public abstract getIdentifier(arg0: number | java.lang.Integer): I
    }

  }
}
