declare namespace sun {
    namespace security {
        namespace ec {
class ECDSASignature$Raw extends sun.security.ec.ECDSASignature {
    public constructor()
    protected engineUpdate(arg0: byte): void
    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
    protected engineUpdate(arg0: java.nio.ByteBuffer): void
    protected resetDigest(): void
    protected getDigestValue(): byte[]
    public static class: java.lang.Class<any>
}

        }
    }
}