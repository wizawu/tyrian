declare namespace javax {
  namespace naming {
    namespace directory {

      class BasicAttribute implements javax.naming.directory.Attribute {
        protected attrID: java.lang.String
        protected values: java.util.Vector<java.lang.Object>
        protected ordered: boolean
        public clone(): java.lang.Object
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.Object)
        public constructor(arg0: java.lang.String, arg1: boolean)
        public constructor(arg0: java.lang.String, arg1: java.lang.Object, arg2: boolean)
        public getAll(): javax.naming.NamingEnumeration<unknown>
        public get(): java.lang.Object
        public size(): int
        public getID(): java.lang.String
        public contains(arg0: java.lang.Object): boolean
        public add(arg0: java.lang.Object): boolean
        public remove(arg0: java.lang.Object): boolean
        public clear(): void
        public isOrdered(): boolean
        public get(arg0: int): java.lang.Object
        public remove(arg0: int): java.lang.Object
        public add(arg0: int, arg1: java.lang.Object): void
        public set(arg0: int, arg1: java.lang.Object): java.lang.Object
        public getAttributeSyntaxDefinition(): javax.naming.directory.DirContext
        public getAttributeDefinition(): javax.naming.directory.DirContext
      }

    }
  }
}
