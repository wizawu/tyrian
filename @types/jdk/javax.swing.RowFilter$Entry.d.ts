declare namespace javax {
  namespace swing {

    abstract class RowFilter$Entry<M,I> {
      public constructor()
      public abstract getModel(): M
      public abstract getValueCount(): number
      public abstract getValue(arg0: number | java.lang.Integer): java.lang.Object
      public getStringValue(arg0: number | java.lang.Integer): java.lang.String
      public abstract getIdentifier(): I
    }

  }
}
