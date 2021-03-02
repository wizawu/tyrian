declare namespace javax {
  namespace naming {
    namespace directory {

      class BasicAttribute implements javax.naming.directory.Attribute {
        protected attrID: java.lang.String
        protected values: java.util.Vector<java.lang.Object>
        protected ordered: boolean
        public clone(): java.lang.Object
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object | any)
        public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: boolean | java.lang.Boolean)
        public getAll(): javax.naming.NamingEnumeration<unknown>
        public get(): java.lang.Object
        public size(): number
        public getID(): java.lang.String
        public contains(arg0: java.lang.Object | any): boolean
        public add(arg0: java.lang.Object | any): boolean
        public remove(arg0: java.lang.Object | any): boolean
        public clear(): void
        public isOrdered(): boolean
        public get(arg0: number | java.lang.Integer): java.lang.Object
        public remove(arg0: number | java.lang.Integer): java.lang.Object
        public add(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
        public set(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): java.lang.Object
        public getAttributeSyntaxDefinition(): javax.naming.directory.DirContext
        public getAttributeDefinition(): javax.naming.directory.DirContext
      }

    }
  }
}
