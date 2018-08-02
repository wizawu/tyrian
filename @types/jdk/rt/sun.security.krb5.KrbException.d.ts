declare namespace sun {
    namespace security {
        namespace krb5 {
            class KrbException extends java.lang.Exception {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.Throwable)
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: java.lang.String | string)
                public constructor(arg0: sun.security.krb5.internal.KRBError)
                public constructor(arg0: sun.security.krb5.internal.KRBError, arg1: java.lang.String | string)
                public getError(): sun.security.krb5.internal.KRBError
                public returnCode(): int
                public returnCodeSymbol(): string
                public static returnCodeSymbol(arg0: int): string
                public returnCodeMessage(): string
                public static errorMessage(arg0: int): string
                public krbErrorMessage(): string
                public getMessage(): string
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}