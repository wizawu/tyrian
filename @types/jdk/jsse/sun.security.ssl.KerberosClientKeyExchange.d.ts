declare namespace sun {
    namespace security {
        namespace ssl {
class KerberosClientKeyExchange extends sun.security.ssl.HandshakeMessage {
    protected constructor()
    public constructor(arg0: java.lang.String | string, arg1: java.security.AccessControlContext, arg2: sun.security.ssl.ProtocolVersion, arg3: java.security.SecureRandom)
    public constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: java.security.AccessControlContext, arg5: java.lang.Object)
    public messageLength(): int
    public send(arg0: sun.security.ssl.HandshakeOutStream): void
    public print(arg0: java.io.PrintStream): void
    public init(arg0: java.lang.String | string, arg1: java.security.AccessControlContext, arg2: sun.security.ssl.ProtocolVersion, arg3: java.security.SecureRandom): void
    public init(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: java.security.AccessControlContext, arg5: java.lang.Object): void
    public getUnencryptedPreMasterSecret(): byte[]
    public getPeerPrincipal(): java.security.Principal
    public getLocalPrincipal(): java.security.Principal
    public static class: java.lang.Class<any>
}

        }
    }
}