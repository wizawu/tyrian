declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                class MessageToken_v2$MessageTokenHeader {
                    public constructor(arg0: sun.security.jgss.krb5.MessageToken_v2, arg1: int, arg2: boolean)
                    public constructor(arg0: sun.security.jgss.krb5.MessageToken_v2, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp, arg3: int)
                    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public getTokenId(): int
                    public getBytes(): byte[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}