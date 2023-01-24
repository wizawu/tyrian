declare namespace javax {
  namespace naming {
    interface Name extends java.lang.Cloneable, java.io.Serializable, java.lang.Comparable<java.lang.Object> {
      readonly serialVersionUID: long
      clone(): java.lang.Object
      compareTo(arg0: java.lang.Object | any): number
      size(): number
      isEmpty(): boolean
      getAll(): java.util.Enumeration<java.lang.String>
      get(arg0: number | java.lang.Integer): java.lang.String
      getPrefix(arg0: number | java.lang.Integer): javax.naming.Name
      getSuffix(arg0: number | java.lang.Integer): javax.naming.Name
      startsWith(arg0: javax.naming.Name): boolean
      endsWith(arg0: javax.naming.Name): boolean
      addAll(arg0: javax.naming.Name): javax.naming.Name
      addAll(arg0: number | java.lang.Integer, arg1: javax.naming.Name): javax.naming.Name
      add(arg0: java.lang.String | string): javax.naming.Name
      add(arg0: number | java.lang.Integer, arg1: java.lang.String | string): javax.naming.Name
      remove(arg0: number | java.lang.Integer): java.lang.Object
    }
  }
}
