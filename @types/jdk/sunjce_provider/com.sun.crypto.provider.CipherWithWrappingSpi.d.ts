declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
abstract class CipherWithWrappingSpi extends javax.crypto.CipherSpi {
    public constructor()
    protected engineWrap(arg0: java.security.Key): byte[]
    protected engineUnwrap(arg0: byte[], arg1: java.lang.String | string, arg2: int): java.security.Key
    public static class: java.lang.Class<any>
}

            }
        }
    }
}