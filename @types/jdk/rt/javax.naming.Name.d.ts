declare namespace javax {
    namespace naming {
        interface Name extends java.lang.Cloneable , java.io.Serializable , java.lang.Comparable<java.lang.Object> {
            serialVersionUID: long
            clone(): java.lang.Object
            compareTo(arg0: java.lang.Object): int
            size(): int
            isEmpty(): boolean
            getAll(): java.util.Enumeration<java.lang.String>
            get(arg0: int): string
            getPrefix(arg0: int): javax.naming.Name
            getSuffix(arg0: int): javax.naming.Name
            startsWith(arg0: javax.naming.Name): boolean
            endsWith(arg0: javax.naming.Name): boolean
            addAll(arg0: javax.naming.Name): javax.naming.Name
            addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
            add(arg0: java.lang.String | string): javax.naming.Name
            add(arg0: int, arg1: java.lang.String | string): javax.naming.Name
            remove(arg0: int): java.lang.Object
        }
    }
}