declare namespace java {
    namespace lang {
        class StackTraceElement implements java.io.Serializable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int)
            public getFileName(): string
            public getLineNumber(): int
            public getClassName(): string
            public getMethodName(): string
            public isNativeMethod(): boolean
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
    }
}