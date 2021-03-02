declare namespace javax {
  namespace naming {
    namespace directory {

      interface Attributes extends java.lang.Cloneable, java.io.Serializable {
        isCaseIgnored(): boolean
        size(): int
        get(arg0: java.lang.String): javax.naming.directory.Attribute
        getAll(): javax.naming.NamingEnumeration<javax.naming.directory.Attribute>
        getIDs(): javax.naming.NamingEnumeration<java.lang.String>
        put(arg0: java.lang.String, arg1: java.lang.Object): javax.naming.directory.Attribute
        put(arg0: javax.naming.directory.Attribute): javax.naming.directory.Attribute
        remove(arg0: java.lang.String): javax.naming.directory.Attribute
        clone(): java.lang.Object
      }

    }
  }
}
