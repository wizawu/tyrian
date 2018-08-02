declare namespace sun {
    namespace security {
        namespace ssl {
            class SSLSessionContextImpl implements javax.net.ssl.SSLSessionContext {
                public getSession(arg0: byte[]): javax.net.ssl.SSLSession
                public getIds(): java.util.Enumeration<byte[]>
                public setSessionTimeout(arg0: int): void
                public getSessionTimeout(): int
                public setSessionCacheSize(arg0: int): void
                public getSessionCacheSize(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}