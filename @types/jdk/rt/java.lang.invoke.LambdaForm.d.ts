declare namespace java {
    namespace lang {
        namespace invoke {
            class LambdaForm {
                public static readonly VOID_RESULT: int
                public static readonly LAST_RESULT: int
                public prepare(): void
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public equals(arg0: java.lang.invoke.LambdaForm): boolean
                public hashCode(): int
                public static basicTypeSignature(arg0: java.lang.invoke.MethodType): string
                public static shortenSignature(arg0: java.lang.String | string): string
                public static class: java.lang.Class<any>
            }
        }
    }
}