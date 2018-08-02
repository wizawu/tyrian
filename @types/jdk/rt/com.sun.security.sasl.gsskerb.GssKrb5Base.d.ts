declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace gsskerb {
abstract class GssKrb5Base extends com.sun.security.sasl.util.AbstractSaslImpl {
    protected static KRB5_OID: org.ietf.jgss.Oid
    protected static EMPTY: byte[]
    protected secCtx: org.ietf.jgss.GSSContext
    protected static JGSS_QOP: int
    protected constructor(arg0: java.util.Map<java.lang.String, any>, arg1: java.lang.String | string)
    public getMechanismName(): string
    public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
    public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
    public dispose(): void
    protected finalize(): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}