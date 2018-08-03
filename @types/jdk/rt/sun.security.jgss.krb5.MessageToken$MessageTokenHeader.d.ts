declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                class MessageToken$MessageTokenHeader {
                    public constructor(arg0: sun.security.jgss.krb5.MessageToken, arg1: int, arg2: boolean, arg3: int)
                    public constructor(arg0: sun.security.jgss.krb5.MessageToken, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp)
                    public encode(arg0: java.io.OutputStream): void
                    public getTokenId(): int
                    public getSignAlg(): int
                    public getSealAlg(): int
                    public getBytes(): byte[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}