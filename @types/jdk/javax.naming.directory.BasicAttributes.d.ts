declare namespace javax {
  namespace naming {
    namespace directory {

      class BasicAttributes implements javax.naming.directory.Attributes {
        attrs: java.util.Hashtable<java.lang.String,javax.naming.directory.Attribute>
        public constructor()
        public constructor(arg0: boolean)
        public constructor(arg0: java.lang.String, arg1: java.lang.Object)
        public constructor(arg0: java.lang.String, arg1: java.lang.Object, arg2: boolean)
        public clone(): java.lang.Object
        public isCaseIgnored(): boolean
        public size(): int
        public get(arg0: java.lang.String): javax.naming.directory.Attribute
        public getAll(): javax.naming.NamingEnumeration<javax.naming.directory.Attribute>
        public getIDs(): javax.naming.NamingEnumeration<java.lang.String>
        public put(arg0: java.lang.String, arg1: java.lang.Object): javax.naming.directory.Attribute
        public put(arg0: javax.naming.directory.Attribute): javax.naming.directory.Attribute
        public remove(arg0: java.lang.String): javax.naming.directory.Attribute
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
      }

    }
  }
}
