declare namespace javax {
    namespace net {
        namespace ssl {
            abstract class SNIMatcher {
                protected constructor(arg0: int)
                public getType(): int
                public matches(arg0: javax.net.ssl.SNIServerName): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}