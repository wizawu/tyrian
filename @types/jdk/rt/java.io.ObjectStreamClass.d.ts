declare namespace java {
    namespace io {
        class ObjectStreamClass implements java.io.Serializable {
            public static NO_FIELDS: java.io.ObjectStreamField[]
            public static lookup(arg0: java.lang.Class<any>): java.io.ObjectStreamClass
            public static lookupAny(arg0: java.lang.Class<any>): java.io.ObjectStreamClass
            public getName(): string
            public getSerialVersionUID(): long
            public forClass(): java.lang.Class<any>
            public getFields(): java.io.ObjectStreamField[]
            public getField(arg0: java.lang.String | string): java.io.ObjectStreamField
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}