declare namespace javax {
  namespace naming {

    class Reference implements java.lang.Cloneable, java.io.Serializable {
      protected className: java.lang.String
      protected addrs: java.util.Vector<javax.naming.RefAddr>
      protected classFactory: java.lang.String
      protected classFactoryLocation: java.lang.String
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: javax.naming.RefAddr)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: javax.naming.RefAddr, arg2: java.lang.String | string, arg3: java.lang.String | string)
      public getClassName(): java.lang.String
      public getFactoryClassName(): java.lang.String
      public getFactoryClassLocation(): java.lang.String
      public get(arg0: java.lang.String | string): javax.naming.RefAddr
      public get(arg0: number | java.lang.Integer): javax.naming.RefAddr
      public getAll(): java.util.Enumeration<javax.naming.RefAddr>
      public size(): number
      public add(arg0: javax.naming.RefAddr): void
      public add(arg0: number | java.lang.Integer, arg1: javax.naming.RefAddr): void
      public remove(arg0: number | java.lang.Integer): java.lang.Object
      public clear(): void
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public toString(): java.lang.String
      public clone(): java.lang.Object
    }

  }
}
