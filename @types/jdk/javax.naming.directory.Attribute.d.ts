declare namespace javax {
  namespace naming {
    namespace directory {
      interface Attribute extends java.lang.Cloneable, java.io.Serializable {
        readonly serialVersionUID: long
        getAll(): javax.naming.NamingEnumeration<unknown>
        get(): java.lang.Object
        size(): number
        getID(): java.lang.String
        contains(arg0: java.lang.Object | any): boolean
        add(arg0: java.lang.Object | any): boolean
        remove(arg0: java.lang.Object | any): boolean
        clear(): void
        getAttributeSyntaxDefinition(): javax.naming.directory.DirContext
        getAttributeDefinition(): javax.naming.directory.DirContext
        clone(): java.lang.Object
        isOrdered(): boolean
        get(arg0: number | java.lang.Integer): java.lang.Object
        remove(arg0: number | java.lang.Integer): java.lang.Object
        add(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
        set(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): java.lang.Object
      }
    }
  }
}
