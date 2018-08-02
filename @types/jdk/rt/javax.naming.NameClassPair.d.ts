declare namespace javax {
    namespace naming {
        class NameClassPair implements java.io.Serializable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean)
            public getClassName(): string
            public getName(): string
            public setName(arg0: java.lang.String | string): void
            public setClassName(arg0: java.lang.String | string): void
            public isRelative(): boolean
            public setRelative(arg0: boolean): void
            public getNameInNamespace(): string
            public setNameInNamespace(arg0: java.lang.String | string): void
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}