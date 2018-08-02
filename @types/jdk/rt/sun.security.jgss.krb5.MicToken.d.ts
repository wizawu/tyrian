declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
class MicToken extends sun.security.jgss.krb5.MessageToken {
    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: byte[], arg2: int, arg3: int, arg4: org.ietf.jgss.MessageProp)
    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp)
    public verify(arg0: byte[], arg1: int, arg2: int): void
    public verify(arg0: java.io.InputStream): void
    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: byte[], arg3: int, arg4: int)
    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: java.io.InputStream)
    protected getSealAlg(arg0: boolean, arg1: int): int
    public encode(arg0: byte[], arg1: int): int
    public encode(): byte[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}