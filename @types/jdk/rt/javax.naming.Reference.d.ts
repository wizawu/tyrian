declare namespace javax {
    namespace naming {
        class Reference implements java.lang.Cloneable , java.io.Serializable {
            protected className: string
            protected addrs: java.util.Vector<javax.naming.RefAddr>
            protected classFactory: string
            protected classFactoryLocation: string
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: javax.naming.RefAddr)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: javax.naming.RefAddr, arg2: java.lang.String | string, arg3: java.lang.String | string)
            public getClassName(): string
            public getFactoryClassName(): string
            public getFactoryClassLocation(): string
            public get(arg0: java.lang.String | string): javax.naming.RefAddr
            public get(arg0: int): javax.naming.RefAddr
            public getAll(): java.util.Enumeration<javax.naming.RefAddr>
            public size(): int
            public add(arg0: javax.naming.RefAddr): void
            public add(arg0: int, arg1: javax.naming.RefAddr): void
            public remove(arg0: int): java.lang.Object
            public clear(): void
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}