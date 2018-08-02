declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class SunPKCS11 extends java.security.AuthProvider {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: java.lang.String | string, arg1: java.io.InputStream)
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public login(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): void
                public logout(): void
                public setCallbackHandler(arg0: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}