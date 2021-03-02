declare namespace javax {
  namespace naming {

    class CompositeName implements javax.naming.Name {
      protected constructor(arg0: java.util.Enumeration<java.lang.String>)
      public constructor(arg0: java.lang.String | string)
      public constructor()
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public compareTo(arg0: java.lang.Object | any): number
      public clone(): java.lang.Object
      public size(): number
      public isEmpty(): boolean
      public getAll(): java.util.Enumeration<java.lang.String>
      public get(arg0: number | java.lang.Integer): java.lang.String
      public getPrefix(arg0: number | java.lang.Integer): javax.naming.Name
      public getSuffix(arg0: number | java.lang.Integer): javax.naming.Name
      public startsWith(arg0: javax.naming.Name): boolean
      public endsWith(arg0: javax.naming.Name): boolean
      public addAll(arg0: javax.naming.Name): javax.naming.Name
      public addAll(arg0: number | java.lang.Integer, arg1: javax.naming.Name): javax.naming.Name
      public add(arg0: java.lang.String | string): javax.naming.Name
      public add(arg0: number | java.lang.Integer, arg1: java.lang.String | string): javax.naming.Name
      public remove(arg0: number | java.lang.Integer): java.lang.Object
    }

  }
}
