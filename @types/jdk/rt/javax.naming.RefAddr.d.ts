declare namespace javax {
    namespace naming {
        abstract class RefAddr implements java.io.Serializable {
            protected addrType: string
            protected constructor(arg0: java.lang.String | string)
            public getType(): string
            public abstract getContent(): java.lang.Object
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public static class: java.lang.Class<any>
        }
        interface RefAddr$$Lambda implements java.io.Serializable {
            (): java.lang.Object
        }
    }
}