declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                class MicToken_v2 extends sun.security.jgss.krb5.MessageToken_v2 {
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: byte[], arg2: int, arg3: int, arg4: org.ietf.jgss.MessageProp)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp)
                    public verify(arg0: byte[], arg1: int, arg2: int): void
                    public verify(arg0: java.io.InputStream): void
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: byte[], arg3: int, arg4: int)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: java.io.InputStream)
                    public encode(): byte[]
                    public encode(arg0: byte[], arg1: int): int
                    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}