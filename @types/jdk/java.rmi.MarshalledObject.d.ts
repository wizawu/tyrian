declare namespace java {
  namespace rmi {
    class MarshalledObject<T> implements java.io.Serializable {
      public constructor(arg0: T)
      public get(): T
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
    }
  }
}
