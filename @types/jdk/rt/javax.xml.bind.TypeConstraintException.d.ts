declare namespace javax {
    namespace xml {
        namespace bind {
            class TypeConstraintException extends java.lang.RuntimeException {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public constructor(arg0: java.lang.Throwable)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
                public getErrorCode(): string
                public getLinkedException(): java.lang.Throwable
                public setLinkedException(arg0: java.lang.Throwable): void
                public toString(): string
                public printStackTrace(arg0: java.io.PrintStream): void
                public printStackTrace(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}