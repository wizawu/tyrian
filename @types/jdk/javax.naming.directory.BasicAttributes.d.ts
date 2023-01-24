declare namespace javax {
  namespace naming {
    namespace directory {
      class BasicAttributes implements javax.naming.directory.Attributes {
        attrs: java.util.Hashtable<java.lang.String, javax.naming.directory.Attribute>
        public constructor()
        public constructor(arg0: boolean | java.lang.Boolean)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object | any)
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.Object | any,
          arg2: boolean | java.lang.Boolean
        )
        public clone(): java.lang.Object
        public isCaseIgnored(): boolean
        public size(): number
        public get(arg0: java.lang.String | string): javax.naming.directory.Attribute
        public getAll(): javax.naming.NamingEnumeration<javax.naming.directory.Attribute>
        public getIDs(): javax.naming.NamingEnumeration<java.lang.String>
        public put(arg0: java.lang.String | string, arg1: java.lang.Object | any): javax.naming.directory.Attribute
        public put(arg0: javax.naming.directory.Attribute): javax.naming.directory.Attribute
        public remove(arg0: java.lang.String | string): javax.naming.directory.Attribute
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
      }
    }
  }
}
