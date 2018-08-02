declare namespace javax {
    namespace naming {
        namespace directory {
            interface Attribute extends java.lang.Cloneable , java.io.Serializable {
                serialVersionUID: long
                getAll(): javax.naming.NamingEnumeration<any>
                get(): java.lang.Object
                size(): int
                getID(): string
                contains(arg0: java.lang.Object): boolean
                add(arg0: java.lang.Object): boolean
                remove(arg0: java.lang.Object): boolean
                clear(): void
                getAttributeSyntaxDefinition(): javax.naming.directory.DirContext
                getAttributeDefinition(): javax.naming.directory.DirContext
                clone(): java.lang.Object
                isOrdered(): boolean
                get(arg0: int): java.lang.Object
                remove(arg0: int): java.lang.Object
                add(arg0: int, arg1: java.lang.Object): void
                set(arg0: int, arg1: java.lang.Object): java.lang.Object
            }
        }
    }
}