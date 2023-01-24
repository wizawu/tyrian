declare namespace javax {
  namespace naming {
    abstract class RefAddr implements java.io.Serializable {
      protected addrType: java.lang.String
      protected constructor(arg0: java.lang.String | string)
      public getType(): java.lang.String
      public abstract getContent(): java.lang.Object
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
    }
  }
}
