declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
class AuthContext {
    public remoteAddress: sun.security.krb5.internal.HostAddress
    public remotePort: int
    public localAddress: sun.security.krb5.internal.HostAddress
    public localPort: int
    public keyBlock: sun.security.krb5.EncryptionKey
    public localSubkey: sun.security.krb5.EncryptionKey
    public remoteSubkey: sun.security.krb5.EncryptionKey
    public authContextFlags: java.util.BitSet
    public remoteSeqNumber: int
    public localSeqNumber: int
    public authenticator: sun.security.krb5.internal.Authenticator
    public reqCksumType: int
    public safeCksumType: int
    public initializationVector: byte[]
    public constructor()
    public static class: java.lang.Class<any>
}

            }
        }
    }
}