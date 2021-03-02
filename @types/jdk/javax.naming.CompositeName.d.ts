declare namespace javax {
  namespace naming {

    class CompositeName implements javax.naming.Name {
      protected constructor(arg0: java.util.Enumeration<java.lang.String>)
      public constructor(arg0: java.lang.String)
      public constructor()
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public compareTo(arg0: java.lang.Object): int
      public clone(): java.lang.Object
      public size(): int
      public isEmpty(): boolean
      public getAll(): java.util.Enumeration<java.lang.String>
      public get(arg0: int): java.lang.String
      public getPrefix(arg0: int): javax.naming.Name
      public getSuffix(arg0: int): javax.naming.Name
      public startsWith(arg0: javax.naming.Name): boolean
      public endsWith(arg0: javax.naming.Name): boolean
      public addAll(arg0: javax.naming.Name): javax.naming.Name
      public addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
      public add(arg0: java.lang.String): javax.naming.Name
      public add(arg0: int, arg1: java.lang.String): javax.naming.Name
      public remove(arg0: int): java.lang.Object
    }

  }
}
