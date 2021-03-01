declare namespace javax {
  namespace naming {

    class Reference implements java.lang.Cloneable, java.io.Serializable {

      protected className: java.lang.String
      protected addrs: java.util.Vector<javax.naming.RefAddr>
      protected classFactory: java.lang.String
      protected classFactoryLocation: java.lang.String
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: javax.naming.RefAddr)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: javax.naming.RefAddr, arg2: java.lang.String, arg3: java.lang.String)
      public getClassName(): java.lang.String
      public getFactoryClassName(): java.lang.String
      public getFactoryClassLocation(): java.lang.String
      public get(arg0: java.lang.String): javax.naming.RefAddr
      public get(arg0: int): javax.naming.RefAddr
      public getAll(): java.util.Enumeration<javax.naming.RefAddr>
      public size(): int
      public add(arg0: javax.naming.RefAddr): void
      public add(arg0: int, arg1: javax.naming.RefAddr): void
      public remove(arg0: int): java.lang.Object
      public clear(): void
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public toString(): java.lang.String
      public clone(): java.lang.Object
    }

  }
}
