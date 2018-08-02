declare namespace sun {
    namespace security {
        namespace ssl {
            namespace krb5 {
class KerberosClientKeyExchangeImpl extends sun.security.ssl.KerberosClientKeyExchange {
    public constructor()
    public init(arg0: java.lang.String | string, arg1: java.security.AccessControlContext, arg2: sun.security.ssl.ProtocolVersion, arg3: java.security.SecureRandom): void
    public init(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: java.security.AccessControlContext, arg5: java.lang.Object): void
    public messageLength(): int
    public send(arg0: sun.security.ssl.HandshakeOutStream): void
    public print(arg0: java.io.PrintStream): void
    public getUnencryptedPreMasterSecret(): byte[]
    public getPeerPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
    public getLocalPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
    public getLocalPrincipal(): java.security.Principal
    public getPeerPrincipal(): java.security.Principal
    public static class: java.lang.Class<any>
}

            }
        }
    }
}