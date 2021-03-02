declare namespace javax {
  namespace swing {

    abstract class RowFilter$Entry<M,I> {
      public constructor()
      public abstract getModel(): M
      public abstract getValueCount(): int
      public abstract getValue(arg0: int): java.lang.Object
      public getStringValue(arg0: int): java.lang.String
      public abstract getIdentifier(): I
    }

  }
}
