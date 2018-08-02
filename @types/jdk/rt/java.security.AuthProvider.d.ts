declare namespace java {
    namespace security {
        abstract class AuthProvider extends java.security.Provider {
            protected constructor(arg0: java.lang.String | string, arg1: double, arg2: java.lang.String | string)
            public login(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): void
            public logout(): void
            public setCallbackHandler(arg0: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): void
            public static class: java.lang.Class<any>
        }
    }
}