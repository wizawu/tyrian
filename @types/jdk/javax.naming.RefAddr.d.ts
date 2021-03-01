declare namespace javax {
  namespace naming {

    abstract class RefAddr implements java.io.Serializable {

      protected addrType: java.lang.String
      protected constructor(arg0: java.lang.String)
      public getType(): java.lang.String
      public abstract getContent(): java.lang.Object
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
    }

  }
}
