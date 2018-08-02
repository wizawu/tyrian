declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
                class WrapToken extends sun.security.jgss.krb5.MessageToken {
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: byte[], arg2: int, arg3: int, arg4: org.ietf.jgss.MessageProp)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp)
                    public getData(): byte[]
                    public getData(arg0: byte[], arg1: int): int
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: byte[], arg3: int, arg4: int)
                    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public encode(): byte[]
                    public encode(arg0: byte[], arg1: int): int
                    protected getKrb5TokenSize(): int
                    protected getSealAlg(arg0: boolean, arg1: int): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}