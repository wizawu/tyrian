declare namespace com {
    namespace sun {
        namespace net {
            namespace ssl {
                namespace internal {
                    namespace ssl {
                        abstract class X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                            protected constructor()
                            public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: string, arg3: string): void
                            public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: string, arg3: string): void
                        }
                        class Provider extends sun.security.ssl.SunJSSE {
                            public constructor()
                            public constructor(arg0: java.security.Provider)
                            public constructor(arg0: string)
                            public static isFIPS(): boolean
                            public static install(): void
                        }
                    }
                }
            }
        }
    }
}
declare namespace sun {
    namespace security {
        namespace rsa {
            class SunRsaSign extends java.security.Provider {
                public constructor()
            }
        }
        namespace ssl {
            class DummyX509KeyManager extends javax.net.ssl.X509ExtendedKeyManager {
                static INSTANCE: javax.net.ssl.X509ExtendedKeyManager
                public getClientAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public getServerAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseServerAlias(arg0: string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineServerAlias(arg0: string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public getCertificateChain(arg0: string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: string): java.security.PrivateKey
            }
            class AbstractKeyManagerWrapper extends javax.net.ssl.X509ExtendedKeyManager {
                constructor(arg0: javax.net.ssl.X509KeyManager)
                public getClientAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public getServerAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseServerAlias(arg0: string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public getCertificateChain(arg0: string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: string): java.security.PrivateKey
            }
            class DummyX509TrustManager extends javax.net.ssl.X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                static INSTANCE: javax.net.ssl.X509TrustManager
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
            }
            class AbstractTrustManagerWrapper extends javax.net.ssl.X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                constructor(arg0: javax.net.ssl.X509TrustManager)
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
            }
            class RSAClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                preMaster: javax.crypto.SecretKey
                constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: java.security.PublicKey)
                constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: int, arg5: java.security.PrivateKey)
                messageType(): int
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class ECDHClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                messageType(): int
                getEncodedPoint(): byte[]
                constructor(arg0: java.security.PublicKey)
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class ServerHandshaker extends sun.security.ssl.Handshaker {
                preferableSignatureAlgorithm: sun.security.ssl.SignatureAndHashAlgorithm
                constructor(arg0: sun.security.ssl.SSLSocketImpl, arg1: sun.security.ssl.SSLContextImpl, arg2: sun.security.ssl.ProtocolList, arg3: byte, arg4: sun.security.ssl.ProtocolVersion, arg5: boolean, arg6: boolean, arg7: byte[], arg8: byte[])
                constructor(arg0: sun.security.ssl.SSLEngineImpl, arg1: sun.security.ssl.SSLContextImpl, arg2: sun.security.ssl.ProtocolList, arg3: byte, arg4: sun.security.ssl.ProtocolVersion, arg5: boolean, arg6: boolean, arg7: byte[], arg8: byte[])
                setClientAuth(arg0: byte): void
                processMessage(arg0: byte, arg1: int): void
                trySetCipherSuite(arg0: sun.security.ssl.CipherSuite): boolean
                getKickstartMessage(): sun.security.ssl.HandshakeMessage
                handshakeAlert(arg0: byte): void
            }
            class ServerHandshaker$3 {
                static $SwitchMap$sun$security$ssl$CipherSuite$KeyExchange: int[]
            }
            class ServerHandshaker$2 implements java.security.PrivilegedExceptionAction<java.lang.Object> {
                val$acc: java.security.AccessControlContext
                this$0: sun.security.ssl.ServerHandshaker
                constructor(arg0: sun.security.ssl.ServerHandshaker, arg1: java.security.AccessControlContext)
                public run(): java.lang.Object
            }
            class ServerHandshaker$1 implements java.security.PrivilegedExceptionAction<javax.security.auth.Subject> {
                this$0: sun.security.ssl.ServerHandshaker
                constructor(arg0: sun.security.ssl.ServerHandshaker)
                public run(): javax.security.auth.Subject
                public run(): java.lang.Object
            }
            class SSLAlgorithmDecomposer extends sun.security.util.AlgorithmDecomposer {
                constructor(arg0: boolean)
                constructor()
                public decompose(arg0: string): java.util.Set<java.lang.String>
            }
            class SSLAlgorithmDecomposer$1 {
                static $SwitchMap$sun$security$ssl$CipherSuite$KeyExchange: int[]
            }
            class ClientHandshaker extends sun.security.ssl.Handshaker {
                constructor(arg0: sun.security.ssl.SSLSocketImpl, arg1: sun.security.ssl.SSLContextImpl, arg2: sun.security.ssl.ProtocolList, arg3: sun.security.ssl.ProtocolVersion, arg4: boolean, arg5: boolean, arg6: byte[], arg7: byte[])
                constructor(arg0: sun.security.ssl.SSLEngineImpl, arg1: sun.security.ssl.SSLContextImpl, arg2: sun.security.ssl.ProtocolList, arg3: sun.security.ssl.ProtocolVersion, arg4: boolean, arg5: boolean, arg6: byte[], arg7: byte[])
                processMessage(arg0: byte, arg1: int): void
                getKickstartMessage(): sun.security.ssl.HandshakeMessage
                handshakeAlert(arg0: byte): void
            }
            class ClientHandshaker$2 {
                static $SwitchMap$sun$security$ssl$CipherSuite$KeyExchange: int[]
            }
            class ClientHandshaker$1 implements java.security.PrivilegedExceptionAction<javax.security.auth.Subject> {
                this$0: sun.security.ssl.ClientHandshaker
                constructor(arg0: sun.security.ssl.ClientHandshaker)
                public run(): javax.security.auth.Subject
                public run(): java.lang.Object
            }
            class X509TrustManagerImpl extends javax.net.ssl.X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                constructor(arg0: string, arg1: java.security.KeyStore)
                constructor(arg0: string, arg1: java.security.cert.PKIXBuilderParameters)
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                static getRequestedServerNames(arg0: java.net.Socket): java.util.List<javax.net.ssl.SNIServerName>
                static getRequestedServerNames(arg0: javax.net.ssl.SSLEngine): java.util.List<javax.net.ssl.SNIServerName>
                static checkIdentity(arg0: string, arg1: java.security.cert.X509Certificate, arg2: string): void
            }
            class Krb5Helper {
                public static isAvailable(): boolean
                public static getClientSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                public static getServerSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                public static getServiceCreds(arg0: java.security.AccessControlContext): java.lang.Object
                public static getServerPrincipalName(arg0: java.lang.Object): string
                public static getPrincipalHostName(arg0: java.security.Principal): string
                public static getServicePermission(arg0: string, arg1: string): java.security.Permission
                public static isRelated(arg0: javax.security.auth.Subject, arg1: java.security.Principal): boolean
            }
            class Krb5Helper$1 implements java.security.PrivilegedAction<sun.security.ssl.Krb5Proxy> {
                constructor()
                public run(): sun.security.ssl.Krb5Proxy
                public run(): java.lang.Object
            }
            class RenegotiationInfoExtension extends sun.security.ssl.HelloExtension {
                constructor(arg0: byte[], arg1: byte[])
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int)
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                isEmpty(): boolean
                getRenegotiatedConnection(): byte[]
                public toString(): string
            }
            class DHCrypt {
                constructor(arg0: int, arg1: java.security.SecureRandom)
                constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.security.SecureRandom)
                static getDHPublicKeySpec(arg0: java.security.PublicKey): javax.crypto.spec.DHPublicKeySpec
                getModulus(): java.math.BigInteger
                getBase(): java.math.BigInteger
                getPublicKey(): java.math.BigInteger
                getAgreedSecret(arg0: java.math.BigInteger, arg1: boolean): javax.crypto.SecretKey
                checkConstraints(arg0: java.security.AlgorithmConstraints, arg1: java.math.BigInteger): void
            }
            class DHCrypt$ParametersHolder {
                static access$000(): java.util.Map
            }
            class DHCrypt$ParametersHolder$1 implements java.security.PrivilegedAction<java.lang.String> {
                constructor()
                public run(): string
                public run(): java.lang.Object
            }
            class SupportedEllipticPointFormatsExtension extends sun.security.ssl.HelloExtension {
                static FMT_UNCOMPRESSED: int
                static FMT_ANSIX962_COMPRESSED_PRIME: int
                static FMT_ANSIX962_COMPRESSED_CHAR2: int
                static DEFAULT: sun.security.ssl.HelloExtension
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int)
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                public toString(): string
            }
            class SSLServerSocketFactoryImpl extends javax.net.ssl.SSLServerSocketFactory {
                public constructor()
                constructor(arg0: sun.security.ssl.SSLContextImpl)
                public createServerSocket(): java.net.ServerSocket
                public createServerSocket(arg0: int): java.net.ServerSocket
                public createServerSocket(arg0: int, arg1: int): java.net.ServerSocket
                public createServerSocket(arg0: int, arg1: int, arg2: java.net.InetAddress): java.net.ServerSocket
                public getDefaultCipherSuites(): java.lang.String[]
                public getSupportedCipherSuites(): java.lang.String[]
            }
            class SignatureAlgorithmsExtension extends sun.security.ssl.HelloExtension {
                constructor(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>)
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int)
                getSignAlgorithms(): java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                public toString(): string
            }
            class CloneableDigest extends java.security.MessageDigest implements java.lang.Cloneable {
                static getDigest(arg0: string, arg1: int): java.security.MessageDigest
                protected engineGetDigestLength(): int
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineDigest(): byte[]
                protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
                protected engineReset(): void
                public clone(): java.lang.Object
            }
            class ByteBufferInputStream extends java.io.InputStream {
                bb: java.nio.ByteBuffer
                constructor(arg0: java.nio.ByteBuffer)
                public read(): int
                public read(arg0: byte[]): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public available(): int
                public close(): void
                public mark(arg0: int): void
                public reset(): void
                public markSupported(): boolean
            }
            class SunX509KeyManagerImpl extends javax.net.ssl.X509ExtendedKeyManager {
                constructor(arg0: java.security.KeyStore, arg1: char[])
                public getCertificateChain(arg0: string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: string): java.security.PrivateKey
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public chooseServerAlias(arg0: string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineServerAlias(arg0: string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public getClientAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public getServerAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
            }
            class SunX509KeyManagerImpl$X509Credentials {
                privateKey: java.security.PrivateKey
                certificates: java.security.cert.X509Certificate[]
                constructor(arg0: java.security.PrivateKey, arg1: java.security.cert.X509Certificate[])
                getIssuerX500Principals(): java.util.Set<javax.security.auth.x500.X500Principal>
            }
            class SupportedEllipticCurvesExtension extends sun.security.ssl.HelloExtension {
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int)
                static getActiveCurves(arg0: java.security.AlgorithmConstraints): int
                static hasActiveCurves(arg0: java.security.AlgorithmConstraints): boolean
                static createExtension(arg0: java.security.AlgorithmConstraints): sun.security.ssl.SupportedEllipticCurvesExtension
                getPreferredCurve(arg0: java.security.AlgorithmConstraints): int
                contains(arg0: int): boolean
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                public toString(): string
                static isSupported(arg0: int): boolean
                static getCurveIndex(arg0: java.security.spec.ECParameterSpec): int
                static getCurveOid(arg0: int): string
                static getECGenParamSpec(arg0: int): java.security.spec.ECGenParameterSpec
                static access$000(): java.util.Map
                static access$100(): java.util.Map
            }
            class RSASignature extends java.security.SignatureSpi {
                public constructor()
                static getInstance(): java.security.Signature
                static getInternalInstance(): java.security.Signature
                static setHashes(arg0: java.security.Signature, arg1: java.security.MessageDigest, arg2: java.security.MessageDigest): void
                protected engineInitVerify(arg0: java.security.PublicKey): void
                protected engineInitSign(arg0: java.security.PrivateKey): void
                protected engineInitSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineSign(): byte[]
                protected engineVerify(arg0: byte[]): boolean
                protected engineVerify(arg0: byte[], arg1: int, arg2: int): boolean
                protected engineSetParameter(arg0: string, arg1: java.lang.Object): void
                protected engineGetParameter(arg0: string): java.lang.Object
            }
            abstract class TrustManagerFactoryImpl extends javax.net.ssl.TrustManagerFactorySpi {
                constructor()
                protected engineInit(arg0: java.security.KeyStore): void
                getInstance(arg0: java.security.KeyStore): javax.net.ssl.X509TrustManager
                getInstance(arg0: javax.net.ssl.ManagerFactoryParameters): javax.net.ssl.X509TrustManager
                protected engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
                protected engineGetTrustManagers(): javax.net.ssl.TrustManager[]
                static getCacertsKeyStore(arg0: string): java.security.KeyStore
            }
            class TrustManagerFactoryImpl$PKIXFactory extends sun.security.ssl.TrustManagerFactoryImpl {
                public constructor()
                getInstance(arg0: java.security.KeyStore): javax.net.ssl.X509TrustManager
                getInstance(arg0: javax.net.ssl.ManagerFactoryParameters): javax.net.ssl.X509TrustManager
            }
            class TrustManagerFactoryImpl$SimpleFactory extends sun.security.ssl.TrustManagerFactoryImpl {
                public constructor()
                getInstance(arg0: java.security.KeyStore): javax.net.ssl.X509TrustManager
                getInstance(arg0: javax.net.ssl.ManagerFactoryParameters): javax.net.ssl.X509TrustManager
            }
            class TrustManagerFactoryImpl$2 implements java.security.PrivilegedExceptionAction<java.lang.Void> {
                val$props: java.util.HashMap
                constructor(arg0: java.util.HashMap)
                public run(): java.lang.Void
                public run(): java.lang.Object
            }
            class TrustManagerFactoryImpl$1 implements java.security.PrivilegedExceptionAction<java.io.FileInputStream> {
                val$file: java.io.File
                constructor(arg0: java.io.File)
                public run(): java.io.FileInputStream
                public run(): java.lang.Object
            }
            class Utilities {
                constructor()
                static addToSNIServerNameList(arg0: java.util.List<javax.net.ssl.SNIServerName>, arg1: string): java.util.List<javax.net.ssl.SNIServerName>
            }
            class UnknownExtension extends sun.security.ssl.HelloExtension {
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int, arg2: sun.security.ssl.ExtensionType)
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                public toString(): string
            }
            class Alerts {
                static alert_warning: byte
                static alert_fatal: byte
                static alert_close_notify: byte
                static alert_unexpected_message: byte
                static alert_bad_record_mac: byte
                static alert_decryption_failed: byte
                static alert_record_overflow: byte
                static alert_decompression_failure: byte
                static alert_handshake_failure: byte
                static alert_no_certificate: byte
                static alert_bad_certificate: byte
                static alert_unsupported_certificate: byte
                static alert_certificate_revoked: byte
                static alert_certificate_expired: byte
                static alert_certificate_unknown: byte
                static alert_illegal_parameter: byte
                static alert_unknown_ca: byte
                static alert_access_denied: byte
                static alert_decode_error: byte
                static alert_decrypt_error: byte
                static alert_export_restriction: byte
                static alert_protocol_version: byte
                static alert_insufficient_security: byte
                static alert_internal_error: byte
                static alert_user_canceled: byte
                static alert_no_renegotiation: byte
                static alert_unsupported_extension: byte
                static alert_certificate_unobtainable: byte
                static alert_unrecognized_name: byte
                static alert_bad_certificate_status_response: byte
                static alert_bad_certificate_hash_value: byte
                constructor()
                static alertDescription(arg0: byte): string
                static getSSLException(arg0: byte, arg1: string): javax.net.ssl.SSLException
                static getSSLException(arg0: byte, arg1: java.lang.Throwable, arg2: string): javax.net.ssl.SSLException
            }
            class SSLSocketFactoryImpl extends javax.net.ssl.SSLSocketFactory {
                public constructor()
                constructor(arg0: sun.security.ssl.SSLContextImpl)
                public createSocket(): java.net.Socket
                public createSocket(arg0: string, arg1: int): java.net.Socket
                public createSocket(arg0: java.net.Socket, arg1: string, arg2: int, arg3: boolean): java.net.Socket
                public createSocket(arg0: java.net.Socket, arg1: java.io.InputStream, arg2: boolean): java.net.Socket
                public createSocket(arg0: java.net.InetAddress, arg1: int): java.net.Socket
                public createSocket(arg0: string, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
                public createSocket(arg0: java.net.InetAddress, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
                public getDefaultCipherSuites(): java.lang.String[]
                public getSupportedCipherSuites(): java.lang.String[]
            }
            class ServerNameExtension extends sun.security.ssl.HelloExtension {
                static NAME_HEADER_LENGTH: int
                constructor()
                constructor(arg0: java.util.List<javax.net.ssl.SNIServerName>)
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int)
                getServerNames(): java.util.List<javax.net.ssl.SNIServerName>
                isMatched(arg0: java.util.Collection<javax.net.ssl.SNIMatcher>): boolean
                isIdentical(arg0: java.util.List<javax.net.ssl.SNIServerName>): boolean
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                public toString(): string
            }
            class ServerNameExtension$UnknownServerName extends javax.net.ssl.SNIServerName {
                constructor(arg0: int, arg1: byte[])
            }
            abstract class KeyManagerFactoryImpl extends javax.net.ssl.KeyManagerFactorySpi {
                keyManager: javax.net.ssl.X509ExtendedKeyManager
                isInitialized: boolean
                constructor()
                protected engineGetKeyManagers(): javax.net.ssl.KeyManager[]
            }
            class KeyManagerFactoryImpl$X509 extends sun.security.ssl.KeyManagerFactoryImpl {
                public constructor()
                protected engineInit(arg0: java.security.KeyStore, arg1: char[]): void
                protected engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
            }
            class KeyManagerFactoryImpl$SunX509 extends sun.security.ssl.KeyManagerFactoryImpl {
                public constructor()
                protected engineInit(arg0: java.security.KeyStore, arg1: char[]): void
                protected engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
            }
            class SSLServerSocketImpl extends javax.net.ssl.SSLServerSocket {
                sniMatchers: java.util.Collection<javax.net.ssl.SNIMatcher>
                constructor(arg0: int, arg1: int, arg2: sun.security.ssl.SSLContextImpl)
                constructor(arg0: int, arg1: int, arg2: java.net.InetAddress, arg3: sun.security.ssl.SSLContextImpl)
                constructor(arg0: sun.security.ssl.SSLContextImpl)
                public getSupportedCipherSuites(): java.lang.String[]
                public getEnabledCipherSuites(): java.lang.String[]
                public setEnabledCipherSuites(arg0: java.lang.String[]): void
                public getSupportedProtocols(): java.lang.String[]
                public setEnabledProtocols(arg0: java.lang.String[]): void
                public getEnabledProtocols(): java.lang.String[]
                public setNeedClientAuth(arg0: boolean): void
                public getNeedClientAuth(): boolean
                public setWantClientAuth(arg0: boolean): void
                public getWantClientAuth(): boolean
                public setUseClientMode(arg0: boolean): void
                public getUseClientMode(): boolean
                public setEnableSessionCreation(arg0: boolean): void
                public getEnableSessionCreation(): boolean
                public getSSLParameters(): javax.net.ssl.SSLParameters
                public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
                public accept(): java.net.Socket
                public toString(): string
            }
            class SSLAlgorithmConstraints implements java.security.AlgorithmConstraints {
                static DEFAULT: java.security.AlgorithmConstraints
                static DEFAULT_SSL_ONLY: java.security.AlgorithmConstraints
                constructor(arg0: java.security.AlgorithmConstraints)
                constructor(arg0: javax.net.ssl.SSLSocket, arg1: boolean)
                constructor(arg0: javax.net.ssl.SSLEngine, arg1: boolean)
                constructor(arg0: javax.net.ssl.SSLSocket, arg1: java.lang.String[], arg2: boolean)
                constructor(arg0: javax.net.ssl.SSLEngine, arg1: java.lang.String[], arg2: boolean)
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: string, arg2: java.security.AlgorithmParameters): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.security.Key): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: string, arg2: java.security.Key, arg3: java.security.AlgorithmParameters): boolean
            }
            class SSLAlgorithmConstraints$SupportedSignatureAlgorithmConstraints implements java.security.AlgorithmConstraints {
                constructor(arg0: java.lang.String[])
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: string, arg2: java.security.AlgorithmParameters): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.security.Key): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: string, arg2: java.security.Key, arg3: java.security.AlgorithmParameters): boolean
            }
            class ECDHCrypt {
                constructor(arg0: java.security.PrivateKey, arg1: java.security.PublicKey)
                constructor(arg0: int, arg1: java.security.SecureRandom)
                constructor(arg0: java.security.spec.ECParameterSpec, arg1: java.security.SecureRandom)
                getPublicKey(): java.security.PublicKey
                getAgreedSecret(arg0: java.security.PublicKey): javax.crypto.SecretKey
                getAgreedSecret(arg0: byte[]): javax.crypto.SecretKey
                checkConstraints(arg0: java.security.AlgorithmConstraints, arg1: byte[]): void
            }
            interface Krb5Proxy {
                getClientSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                getServerSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                getServiceCreds(arg0: java.security.AccessControlContext): java.lang.Object
                getServerPrincipalName(arg0: java.lang.Object): string
                getPrincipalHostName(arg0: java.security.Principal): string
                getServicePermission(arg0: string, arg1: string): java.security.Permission
                isRelated(arg0: javax.security.auth.Subject, arg1: java.security.Principal): boolean
            }
            class KerberosClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                protected constructor()
                public constructor(arg0: string, arg1: java.security.AccessControlContext, arg2: sun.security.ssl.ProtocolVersion, arg3: java.security.SecureRandom)
                public constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: java.security.AccessControlContext, arg5: java.lang.Object)
                messageType(): int
                public messageLength(): int
                public send(arg0: sun.security.ssl.HandshakeOutStream): void
                public print(arg0: java.io.PrintStream): void
                public init(arg0: string, arg1: java.security.AccessControlContext, arg2: sun.security.ssl.ProtocolVersion, arg3: java.security.SecureRandom): void
                public init(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: java.security.AccessControlContext, arg5: java.lang.Object): void
                public getUnencryptedPreMasterSecret(): byte[]
                public getPeerPrincipal(): java.security.Principal
                public getLocalPrincipal(): java.security.Principal
            }
            class KerberosClientKeyExchange$1 implements java.security.PrivilegedAction<java.lang.Class<any>> {
                constructor()
                public run(): java.lang.Class<any>
                public run(): java.lang.Object
            }
            namespace krb5 {
                class Krb5ProxyImpl implements sun.security.ssl.Krb5Proxy {
                    public constructor()
                    public getClientSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                    public getServerSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                    public getServiceCreds(arg0: java.security.AccessControlContext): java.lang.Object
                    public getServerPrincipalName(arg0: java.lang.Object): string
                    public getPrincipalHostName(arg0: java.security.Principal): string
                    public getServicePermission(arg0: string, arg1: string): java.security.Permission
                    public isRelated(arg0: javax.security.auth.Subject, arg1: java.security.Principal): boolean
                }
                class KerberosPreMasterSecret {
                    constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: java.security.SecureRandom, arg2: sun.security.krb5.EncryptionKey)
                    constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: sun.security.krb5.EncryptionKey)
                    constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: java.security.SecureRandom)
                    getUnencrypted(): byte[]
                    getEncrypted(): byte[]
                }
                class KerberosClientKeyExchangeImpl extends sun.security.ssl.KerberosClientKeyExchange {
                    public constructor()
                    public init(arg0: string, arg1: java.security.AccessControlContext, arg2: sun.security.ssl.ProtocolVersion, arg3: java.security.SecureRandom): void
                    public init(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: java.security.AccessControlContext, arg5: java.lang.Object): void
                    public messageLength(): int
                    public send(arg0: sun.security.ssl.HandshakeOutStream): void
                    public print(arg0: java.io.PrintStream): void
                    public getUnencryptedPreMasterSecret(): byte[]
                    public getPeerPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
                    public getLocalPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
                    public getLocalPrincipal(): java.security.Principal
                    public getPeerPrincipal(): java.security.Principal
                }
                class KerberosClientKeyExchangeImpl$3 implements java.security.PrivilegedExceptionAction<javax.security.auth.kerberos.KerberosTicket> {
                    val$clientPrincipal: string
                    val$serverPrincipal: string
                    val$tgsPrincipal: string
                    val$acc: java.security.AccessControlContext
                    constructor(arg0: string, arg1: string, arg2: string, arg3: java.security.AccessControlContext)
                    public run(): javax.security.auth.kerberos.KerberosTicket
                    public run(): java.lang.Object
                }
                class KerberosClientKeyExchangeImpl$2 implements java.security.PrivilegedAction<java.lang.String> {
                    constructor()
                    public run(): string
                    public run(): java.lang.Object
                }
                class KerberosClientKeyExchangeImpl$1 implements java.security.PrivilegedAction<javax.security.auth.kerberos.KerberosKey[]> {
                    val$creds: sun.security.jgss.krb5.ServiceCreds
                    val$princ: javax.security.auth.kerberos.KerberosPrincipal
                    this$0: sun.security.ssl.krb5.KerberosClientKeyExchangeImpl
                    constructor(arg0: sun.security.ssl.krb5.KerberosClientKeyExchangeImpl, arg1: sun.security.jgss.krb5.ServiceCreds, arg2: javax.security.auth.kerberos.KerberosPrincipal)
                    public run(): javax.security.auth.kerberos.KerberosKey[]
                    public run(): java.lang.Object
                }
            }
            class X509KeyManagerImpl extends javax.net.ssl.X509ExtendedKeyManager implements javax.net.ssl.X509KeyManager {
                constructor(arg0: java.security.KeyStore$Builder)
                constructor(arg0: java.util.List<java.security.KeyStore$Builder>)
                public getCertificateChain(arg0: string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: string): java.security.PrivateKey
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public chooseServerAlias(arg0: string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineServerAlias(arg0: string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public getClientAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public getServerAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public getAliases(arg0: string, arg1: java.security.Principal[], arg2: sun.security.ssl.X509KeyManagerImpl$CheckType, arg3: java.security.AlgorithmConstraints): java.lang.String[]
                static access$100(): boolean
                static access$200(): sun.security.ssl.Debug
            }
            class X509KeyManagerImpl$1 {
            }
            class X509KeyManagerImpl$CheckResult extends java.lang.Enum<sun.security.ssl.X509KeyManagerImpl$CheckResult> {
                public static OK: sun.security.ssl.X509KeyManagerImpl$CheckResult
                public static INSENSITIVE: sun.security.ssl.X509KeyManagerImpl$CheckResult
                public static EXPIRED: sun.security.ssl.X509KeyManagerImpl$CheckResult
                public static EXTENSION_MISMATCH: sun.security.ssl.X509KeyManagerImpl$CheckResult
                public static values(): sun.security.ssl.X509KeyManagerImpl$CheckResult[]
                public static valueOf(arg0: string): sun.security.ssl.X509KeyManagerImpl$CheckResult
            }
            class X509KeyManagerImpl$CheckType extends java.lang.Enum<sun.security.ssl.X509KeyManagerImpl$CheckType> {
                public static NONE: sun.security.ssl.X509KeyManagerImpl$CheckType
                public static CLIENT: sun.security.ssl.X509KeyManagerImpl$CheckType
                public static SERVER: sun.security.ssl.X509KeyManagerImpl$CheckType
                validEku: java.util.Set<java.lang.String>
                public static values(): sun.security.ssl.X509KeyManagerImpl$CheckType[]
                public static valueOf(arg0: string): sun.security.ssl.X509KeyManagerImpl$CheckType
                check(arg0: java.security.cert.X509Certificate, arg1: java.util.Date, arg2: java.util.List<javax.net.ssl.SNIServerName>, arg3: string): sun.security.ssl.X509KeyManagerImpl$CheckResult
            }
            class X509KeyManagerImpl$EntryStatus implements java.lang.Comparable<sun.security.ssl.X509KeyManagerImpl$EntryStatus> {
                builderIndex: int
                keyIndex: int
                alias: string
                checkResult: sun.security.ssl.X509KeyManagerImpl$CheckResult
                constructor(arg0: int, arg1: int, arg2: string, arg3: java.security.cert.Certificate[], arg4: sun.security.ssl.X509KeyManagerImpl$CheckResult)
                public compareTo(arg0: sun.security.ssl.X509KeyManagerImpl$EntryStatus): int
                public toString(): string
                public compareTo(arg0: java.lang.Object): int
            }
            class X509KeyManagerImpl$KeyType {
                keyAlgorithm: string
                sigKeyAlgorithm: string
                constructor(arg0: string)
                matches(arg0: java.security.cert.Certificate[]): boolean
            }
            class X509KeyManagerImpl$SizedMap<K, V> extends java.util.LinkedHashMap<K, V> {
                protected removeEldestEntry(arg0: java.util.Map$Entry<K, V>): boolean
                constructor(arg0: sun.security.ssl.X509KeyManagerImpl$1)
            }
            class DHClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                messageType(): int
                getClientPublicKey(): java.math.BigInteger
                constructor(arg0: java.math.BigInteger)
                constructor()
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class SecureKey {
                static getCurrentSecurityContext(): java.lang.Object
                constructor(arg0: java.lang.Object)
                getAppKey(): java.lang.Object
                getSecurityContext(): java.lang.Object
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
            }
            class SessionId {
                static MAX_LENGTH: int
                constructor(arg0: boolean, arg1: java.security.SecureRandom)
                constructor(arg0: byte[])
                length(): int
                getId(): byte[]
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                checkLength(arg0: sun.security.ssl.ProtocolVersion): void
            }
            class RandomCookie {
                random_bytes: byte[]
                constructor(arg0: java.security.SecureRandom)
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class SignatureAndHashAlgorithm {
                static SUPPORTED_ALG_PRIORITY_MAX_NUM: int
                static valueOf(arg0: int, arg1: int, arg2: int): sun.security.ssl.SignatureAndHashAlgorithm
                getHashValue(): int
                getSignatureValue(): int
                getAlgorithmName(): string
                static sizeInRecord(): int
                static getSupportedAlgorithms(arg0: java.security.AlgorithmConstraints): java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>
                static getSupportedAlgorithms(arg0: java.security.AlgorithmConstraints, arg1: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>): java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>
                static getAlgorithmNames(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>): java.lang.String[]
                static getHashAlgorithmNames(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>): java.util.Set<java.lang.String>
                static getHashAlgorithmName(arg0: sun.security.ssl.SignatureAndHashAlgorithm): string
                static getPreferableAlgorithm(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>, arg1: string): sun.security.ssl.SignatureAndHashAlgorithm
                static getPreferableAlgorithm(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>, arg1: string, arg2: java.security.PrivateKey): sun.security.ssl.SignatureAndHashAlgorithm
            }
            class SignatureAndHashAlgorithm$SignatureAlgorithm extends java.lang.Enum<sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm> {
                public static UNDEFINED: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static ANONYMOUS: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static RSA: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static DSA: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static ECDSA: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                name: string
                value: int
                public static values(): sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm[]
                public static valueOf(arg0: string): sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                static valueOf(arg0: int): sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
            }
            class SignatureAndHashAlgorithm$HashAlgorithm extends java.lang.Enum<sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm> {
                public static UNDEFINED: sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                public static NONE: sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                public static MD5: sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                public static SHA1: sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                public static SHA224: sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                public static SHA256: sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                public static SHA384: sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                public static SHA512: sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                name: string
                standardName: string
                value: int
                length: int
                public static values(): sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm[]
                public static valueOf(arg0: string): sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                static valueOf(arg0: int): sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
            }
            class SSLSessionContextImpl implements javax.net.ssl.SSLSessionContext {
                constructor()
                public getSession(arg0: byte[]): javax.net.ssl.SSLSession
                public getIds(): java.util.Enumeration<byte[]>
                public setSessionTimeout(arg0: int): void
                public getSessionTimeout(): int
                public setSessionCacheSize(arg0: int): void
                public getSessionCacheSize(): int
                get(arg0: byte[]): sun.security.ssl.SSLSessionImpl
                get(arg0: string, arg1: int): sun.security.ssl.SSLSessionImpl
                put(arg0: sun.security.ssl.SSLSessionImpl): void
                remove(arg0: sun.security.ssl.SessionId): void
                isTimedout(arg0: javax.net.ssl.SSLSession): boolean
            }
            class SSLSessionContextImpl$SessionCacheVisitor implements sun.security.util.Cache$CacheVisitor<sun.security.ssl.SessionId, sun.security.ssl.SSLSessionImpl> {
                ids: java.util.Vector<byte[]>
                this$0: sun.security.ssl.SSLSessionContextImpl
                constructor(arg0: sun.security.ssl.SSLSessionContextImpl)
                public visit(arg0: java.util.Map<sun.security.ssl.SessionId, sun.security.ssl.SSLSessionImpl>): void
                public getSessionIds(): java.util.Enumeration<byte[]>
            }
            class SSLSessionContextImpl$1 implements java.security.PrivilegedAction<java.lang.String> {
                this$0: sun.security.ssl.SSLSessionContextImpl
                constructor(arg0: sun.security.ssl.SSLSessionContextImpl)
                public run(): string
                public run(): java.lang.Object
            }
            class EphemeralKeyManager {
                constructor()
                getRSAKeyPair(arg0: boolean, arg1: java.security.SecureRandom): java.security.KeyPair
            }
            class EphemeralKeyManager$1 {
            }
            class EphemeralKeyManager$EphemeralKeyPair {
                constructor(arg0: java.security.KeyPair, arg1: sun.security.ssl.EphemeralKeyManager$1)
                static access$100(arg0: sun.security.ssl.EphemeralKeyManager$EphemeralKeyPair): java.security.KeyPair
            }
            class EngineArgs {
                netData: java.nio.ByteBuffer
                appData: java.nio.ByteBuffer[]
                static $assertionsDisabled: boolean
                constructor(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: java.nio.ByteBuffer)
                constructor(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer[], arg2: int, arg3: int)
                gather(arg0: int): void
                scatter(arg0: java.nio.ByteBuffer): void
                getAppRemaining(): int
                deltaNet(): int
                deltaApp(): int
                resetPos(): void
                resetLim(): void
            }
            class EngineOutputRecord extends sun.security.ssl.OutputRecord {
                static $assertionsDisabled: boolean
                constructor(arg0: byte, arg1: sun.security.ssl.SSLEngineImpl)
                setFinishedMsg(): void
                public flush(): void
                isFinishedMsg(): boolean
                writeBuffer(arg0: java.io.OutputStream, arg1: byte[], arg2: int, arg3: int, arg4: int): void
                write(arg0: sun.security.ssl.Authenticator, arg1: sun.security.ssl.CipherBox): void
                write(arg0: sun.security.ssl.EngineArgs, arg1: sun.security.ssl.Authenticator, arg2: sun.security.ssl.CipherBox): void
                write(arg0: sun.security.ssl.EngineArgs, arg1: sun.security.ssl.Authenticator, arg2: sun.security.ssl.CipherBox, arg3: int): void
            }
            class EngineInputRecord extends sun.security.ssl.InputRecord {
                static $assertionsDisabled: boolean
                constructor(arg0: sun.security.ssl.SSLEngineImpl)
                contentType(): byte
                bytesInCompletePacket(arg0: java.nio.ByteBuffer): int
                decrypt(arg0: sun.security.ssl.Authenticator, arg1: sun.security.ssl.CipherBox, arg2: java.nio.ByteBuffer): java.nio.ByteBuffer
                writeBuffer(arg0: java.io.OutputStream, arg1: byte[], arg2: int, arg3: int): void
                read(arg0: java.nio.ByteBuffer): java.nio.ByteBuffer
            }
            class EngineWriter {
                static $assertionsDisabled: boolean
                constructor()
                writeRecord(arg0: sun.security.ssl.EngineOutputRecord, arg1: sun.security.ssl.Authenticator, arg2: sun.security.ssl.CipherBox): void
                writeRecord(arg0: sun.security.ssl.EngineOutputRecord, arg1: sun.security.ssl.EngineArgs, arg2: sun.security.ssl.Authenticator, arg3: sun.security.ssl.CipherBox): javax.net.ssl.SSLEngineResult$HandshakeStatus
                putOutboundData(arg0: java.nio.ByteBuffer): void
                putOutboundDataSync(arg0: java.nio.ByteBuffer): void
                hasOutboundData(): boolean
                isOutboundDone(): boolean
                closeOutbound(): void
            }
            class ProtocolList {
                min: sun.security.ssl.ProtocolVersion
                max: sun.security.ssl.ProtocolVersion
                helloVersion: sun.security.ssl.ProtocolVersion
                constructor(arg0: java.lang.String[])
                constructor(arg0: java.util.ArrayList<sun.security.ssl.ProtocolVersion>)
                contains(arg0: sun.security.ssl.ProtocolVersion): boolean
                collection(): java.util.Collection<sun.security.ssl.ProtocolVersion>
                selectProtocolVersion(arg0: sun.security.ssl.ProtocolVersion): sun.security.ssl.ProtocolVersion
                toStringArray(): java.lang.String[]
                public toString(): string
            }
            class AppOutputStream extends java.io.OutputStream {
                r: sun.security.ssl.OutputRecord
                constructor(arg0: sun.security.ssl.SSLSocketImpl)
                public write(arg0: byte[], arg1: int, arg2: int): void
                public write(arg0: int): void
                public close(): void
            }
            class AppInputStream extends java.io.InputStream {
                r: sun.security.ssl.InputRecord
                constructor(arg0: sun.security.ssl.SSLSocketImpl)
                public available(): int
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public close(): void
            }
            class SSLSessionImpl extends javax.net.ssl.ExtendedSSLSession {
                static nullSession: sun.security.ssl.SSLSessionImpl
                constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.CipherSuite, arg2: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>, arg3: java.security.SecureRandom, arg4: string, arg5: int)
                constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.CipherSuite, arg2: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>, arg3: sun.security.ssl.SessionId, arg4: string, arg5: int)
                setMasterSecret(arg0: javax.crypto.SecretKey): void
                getMasterSecret(): javax.crypto.SecretKey
                setPeerCertificates(arg0: java.security.cert.X509Certificate[]): void
                setLocalCertificates(arg0: java.security.cert.X509Certificate[]): void
                setLocalPrivateKey(arg0: java.security.PrivateKey): void
                setPeerSupportedSignatureAlgorithms(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>): void
                setRequestedServerNames(arg0: java.util.List<javax.net.ssl.SNIServerName>): void
                setPeerPrincipal(arg0: java.security.Principal): void
                setLocalPrincipal(arg0: java.security.Principal): void
                isRejoinable(): boolean
                public isValid(): boolean
                isLocalAuthenticationValid(): boolean
                public getId(): byte[]
                public getSessionContext(): javax.net.ssl.SSLSessionContext
                getSessionId(): sun.security.ssl.SessionId
                getSuite(): sun.security.ssl.CipherSuite
                setSuite(arg0: sun.security.ssl.CipherSuite): void
                isSessionResumption(): boolean
                setAsSessionResumption(arg0: boolean): void
                public getCipherSuite(): string
                getProtocolVersion(): sun.security.ssl.ProtocolVersion
                public getProtocol(): string
                getCompression(): byte
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public getPeerCertificates(): java.security.cert.Certificate[]
                public getLocalCertificates(): java.security.cert.Certificate[]
                public getPeerCertificateChain(): javax.security.cert.X509Certificate[]
                public getCertificateChain(): java.security.cert.X509Certificate[]
                public getPeerPrincipal(): java.security.Principal
                public getLocalPrincipal(): java.security.Principal
                public getCreationTime(): long
                public getLastAccessedTime(): long
                setLastAccessedTime(arg0: long): void
                public getPeerAddress(): java.net.InetAddress
                public getPeerHost(): string
                public getPeerPort(): int
                setContext(arg0: sun.security.ssl.SSLSessionContextImpl): void
                public invalidate(): void
                public putValue(arg0: string, arg1: java.lang.Object): void
                public getValue(arg0: string): java.lang.Object
                public removeValue(arg0: string): void
                public getValueNames(): java.lang.String[]
                protected expandBufferSizes(): void
                public getPacketBufferSize(): int
                public getApplicationBufferSize(): int
                public getLocalSupportedSignatureAlgorithms(): java.lang.String[]
                public getPeerSupportedSignatureAlgorithms(): java.lang.String[]
                public getRequestedServerNames(): java.util.List<javax.net.ssl.SNIServerName>
                public toString(): string
                protected finalize(): void
            }
            abstract class Handshaker {
                protocolVersion: sun.security.ssl.ProtocolVersion
                activeProtocolVersion: sun.security.ssl.ProtocolVersion
                secureRenegotiation: boolean
                clientVerifyData: byte[]
                serverVerifyData: byte[]
                isInitialHandshake: boolean
                identificationProtocol: string
                algorithmConstraints: java.security.AlgorithmConstraints
                peerSupportedSignAlgs: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>
                serverNames: java.util.List<javax.net.ssl.SNIServerName>
                sniMatchers: java.util.Collection<javax.net.ssl.SNIMatcher>
                conn: sun.security.ssl.SSLSocketImpl
                engine: sun.security.ssl.SSLEngineImpl
                handshakeHash: sun.security.ssl.HandshakeHash
                input: sun.security.ssl.HandshakeInStream
                output: sun.security.ssl.HandshakeOutStream
                state: int
                sslContext: sun.security.ssl.SSLContextImpl
                clnt_random: sun.security.ssl.RandomCookie
                svr_random: sun.security.ssl.RandomCookie
                session: sun.security.ssl.SSLSessionImpl
                cipherSuite: sun.security.ssl.CipherSuite
                keyExchange: sun.security.ssl.CipherSuite$KeyExchange
                resumingSession: boolean
                enableNewSession: boolean
                preferLocalCipherSuites: boolean
                static debug: sun.security.ssl.Debug
                static allowUnsafeRenegotiation: boolean
                static allowLegacyHelloMessages: boolean
                static rejectClientInitiatedRenego: boolean
                invalidated: boolean
                constructor(arg0: sun.security.ssl.SSLSocketImpl, arg1: sun.security.ssl.SSLContextImpl, arg2: sun.security.ssl.ProtocolList, arg3: boolean, arg4: boolean, arg5: sun.security.ssl.ProtocolVersion, arg6: boolean, arg7: boolean, arg8: byte[], arg9: byte[])
                constructor(arg0: sun.security.ssl.SSLEngineImpl, arg1: sun.security.ssl.SSLContextImpl, arg2: sun.security.ssl.ProtocolList, arg3: boolean, arg4: boolean, arg5: sun.security.ssl.ProtocolVersion, arg6: boolean, arg7: boolean, arg8: byte[], arg9: byte[])
                fatalSE(arg0: byte, arg1: string): void
                fatalSE(arg0: byte, arg1: java.lang.Throwable): void
                fatalSE(arg0: byte, arg1: string, arg2: java.lang.Throwable): void
                warningSE(arg0: byte): void
                getHostSE(): string
                getHostAddressSE(): string
                getPortSE(): int
                getLocalPortSE(): int
                getAccSE(): java.security.AccessControlContext
                receivedChangeCipherSpec(): boolean
                getEndpointIdentificationAlgorithmSE(): string
                setVersion(arg0: sun.security.ssl.ProtocolVersion): void
                setEnabledProtocols(arg0: sun.security.ssl.ProtocolList): void
                setEnabledCipherSuites(arg0: sun.security.ssl.CipherSuiteList): void
                setAlgorithmConstraints(arg0: java.security.AlgorithmConstraints): void
                getLocalSupportedSignAlgs(): java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>
                setPeerSupportedSignAlgs(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>): void
                getPeerSupportedSignAlgs(): java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>
                setIdentificationProtocol(arg0: string): void
                setSNIServerNames(arg0: java.util.List<javax.net.ssl.SNIServerName>): void
                setSNIMatchers(arg0: java.util.Collection<javax.net.ssl.SNIMatcher>): void
                setUseCipherSuitesOrder(arg0: boolean): void
                activate(arg0: sun.security.ssl.ProtocolVersion): void
                setCipherSuite(arg0: sun.security.ssl.CipherSuite): void
                isNegotiable(arg0: sun.security.ssl.CipherSuite): boolean
                static isNegotiable(arg0: sun.security.ssl.CipherSuiteList, arg1: sun.security.ssl.CipherSuite): boolean
                isNegotiable(arg0: sun.security.ssl.ProtocolVersion): boolean
                selectProtocolVersion(arg0: sun.security.ssl.ProtocolVersion): sun.security.ssl.ProtocolVersion
                getActiveCipherSuites(): sun.security.ssl.CipherSuiteList
                getActiveProtocols(): sun.security.ssl.ProtocolList
                setEnableSessionCreation(arg0: boolean): void
                newReadCipher(): sun.security.ssl.CipherBox
                newWriteCipher(): sun.security.ssl.CipherBox
                newReadAuthenticator(): sun.security.ssl.Authenticator
                newWriteAuthenticator(): sun.security.ssl.Authenticator
                isDone(): boolean
                getSession(): sun.security.ssl.SSLSessionImpl
                setHandshakeSessionSE(arg0: sun.security.ssl.SSLSessionImpl): void
                isSecureRenegotiation(): boolean
                getClientVerifyData(): byte[]
                getServerVerifyData(): byte[]
                process_record(arg0: sun.security.ssl.InputRecord, arg1: boolean): void
                processLoop(): void
                activated(): boolean
                started(): boolean
                kickstart(): void
                getKickstartMessage(): sun.security.ssl.HandshakeMessage
                processMessage(arg0: byte, arg1: int): void
                handshakeAlert(arg0: byte): void
                sendChangeCipherSpec(arg0: sun.security.ssl.HandshakeMessage$Finished, arg1: boolean): void
                calculateKeys(arg0: javax.crypto.SecretKey, arg1: sun.security.ssl.ProtocolVersion): void
                calculateConnectionKeys(arg0: javax.crypto.SecretKey): void
                sessionKeysCalculated(): boolean
                static throwSSLException(arg0: string, arg1: java.lang.Throwable): void
                getTask(): sun.security.ssl.Handshaker$DelegatedTask<any>
                taskOutstanding(): boolean
                checkThrown(): void
                static access$002(arg0: sun.security.ssl.Handshaker, arg1: java.lang.Exception): java.lang.Exception
                static access$102(arg0: sun.security.ssl.Handshaker, arg1: sun.security.ssl.Handshaker$DelegatedTask): sun.security.ssl.Handshaker$DelegatedTask
                static access$202(arg0: sun.security.ssl.Handshaker, arg1: boolean): boolean
            }
            class Handshaker$DelegatedTask<E> implements java.lang.Runnable {
                this$0: sun.security.ssl.Handshaker
                constructor(arg0: java.security.PrivilegedExceptionAction<E> | java.security.PrivilegedExceptionAction$$Lambda<E>)
                public run(): void
            }
            class Handshaker$1 implements java.security.PrivilegedExceptionAction<java.lang.Void> {
                this$0: sun.security.ssl.Handshaker
                constructor(arg0: sun.security.ssl.Handshaker)
                public run(): java.lang.Void
                public run(): java.lang.Object
            }
            abstract class HandshakeMessage {
                static ht_hello_request: byte
                static ht_client_hello: byte
                static ht_server_hello: byte
                static ht_certificate: byte
                static ht_server_key_exchange: byte
                static ht_certificate_request: byte
                static ht_server_hello_done: byte
                static ht_certificate_verify: byte
                static ht_client_key_exchange: byte
                static ht_finished: byte
                public static debug: sun.security.ssl.Debug
                static MD5_pad1: byte[]
                static MD5_pad2: byte[]
                static SHA_pad1: byte[]
                static SHA_pad2: byte[]
                constructor()
                static toByteArray(arg0: java.math.BigInteger): byte[]
                write(arg0: sun.security.ssl.HandshakeOutStream): void
                messageType(): int
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class HandshakeMessage$Finished extends sun.security.ssl.HandshakeMessage {
                static CLIENT: int
                static SERVER: int
                constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.HandshakeHash, arg2: int, arg3: javax.crypto.SecretKey, arg4: sun.security.ssl.CipherSuite)
                constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.HandshakeInStream, arg2: sun.security.ssl.CipherSuite)
                verify(arg0: sun.security.ssl.HandshakeHash, arg1: int, arg2: javax.crypto.SecretKey): boolean
                getVerifyData(): byte[]
                messageType(): int
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class HandshakeMessage$CertificateVerify extends sun.security.ssl.HandshakeMessage {
                protocolVersion: sun.security.ssl.ProtocolVersion
                constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.HandshakeHash, arg2: java.security.PrivateKey, arg3: javax.crypto.SecretKey, arg4: java.security.SecureRandom, arg5: sun.security.ssl.SignatureAndHashAlgorithm)
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>, arg2: sun.security.ssl.ProtocolVersion)
                getPreferableSignatureAlgorithm(): sun.security.ssl.SignatureAndHashAlgorithm
                verify(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.HandshakeHash, arg2: java.security.PublicKey, arg3: javax.crypto.SecretKey): boolean
                messageType(): int
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
                static access$000(arg0: java.security.MessageDigest, arg1: byte[], arg2: byte[], arg3: javax.crypto.SecretKey): void
            }
            class HandshakeMessage$CertificateVerify$1 implements java.security.PrivilegedAction<java.lang.Object> {
                val$o: java.lang.reflect.AccessibleObject
                constructor(arg0: java.lang.reflect.AccessibleObject)
                public run(): java.lang.Object
            }
            class HandshakeMessage$ServerHelloDone extends sun.security.ssl.HandshakeMessage {
                messageType(): int
                constructor()
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class HandshakeMessage$CertificateRequest extends sun.security.ssl.HandshakeMessage {
                static cct_rsa_sign: int
                static cct_dss_sign: int
                static cct_rsa_fixed_dh: int
                static cct_dss_fixed_dh: int
                static cct_rsa_ephemeral_dh: int
                static cct_dss_ephemeral_dh: int
                static cct_ecdsa_sign: int
                static cct_rsa_fixed_ecdh: int
                static cct_ecdsa_fixed_ecdh: int
                types: byte[]
                authorities: sun.security.ssl.HandshakeMessage$DistinguishedName[]
                protocolVersion: sun.security.ssl.ProtocolVersion
                constructor(arg0: java.security.cert.X509Certificate[], arg1: sun.security.ssl.CipherSuite$KeyExchange, arg2: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>, arg3: sun.security.ssl.ProtocolVersion)
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: sun.security.ssl.ProtocolVersion)
                getAuthorities(): javax.security.auth.x500.X500Principal[]
                getSignAlgorithms(): java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>
                messageType(): int
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class HandshakeMessage$DistinguishedName {
                name: byte[]
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                constructor(arg0: javax.security.auth.x500.X500Principal)
                getX500Principal(): javax.security.auth.x500.X500Principal
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class HandshakeMessage$ECDH_ServerKeyExchange extends sun.security.ssl.HandshakeMessage$ServerKeyExchange {
                protocolVersion: sun.security.ssl.ProtocolVersion
                constructor(arg0: sun.security.ssl.ECDHCrypt, arg1: java.security.PrivateKey, arg2: byte[], arg3: byte[], arg4: java.security.SecureRandom, arg5: sun.security.ssl.SignatureAndHashAlgorithm, arg6: sun.security.ssl.ProtocolVersion)
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: java.security.PublicKey, arg2: byte[], arg3: byte[], arg4: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>, arg5: sun.security.ssl.ProtocolVersion)
                getPublicKey(): java.security.interfaces.ECPublicKey
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class HandshakeMessage$DH_ServerKeyExchange extends sun.security.ssl.HandshakeMessage$ServerKeyExchange {
                protocolVersion: sun.security.ssl.ProtocolVersion
                constructor(arg0: sun.security.ssl.DHCrypt, arg1: sun.security.ssl.ProtocolVersion)
                constructor(arg0: sun.security.ssl.DHCrypt, arg1: java.security.PrivateKey, arg2: byte[], arg3: byte[], arg4: java.security.SecureRandom, arg5: sun.security.ssl.SignatureAndHashAlgorithm, arg6: sun.security.ssl.ProtocolVersion)
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: sun.security.ssl.ProtocolVersion)
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: java.security.PublicKey, arg2: byte[], arg3: byte[], arg4: int, arg5: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>, arg6: sun.security.ssl.ProtocolVersion)
                getModulus(): java.math.BigInteger
                getBase(): java.math.BigInteger
                getServerPublicKey(): java.math.BigInteger
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class HandshakeMessage$RSA_ServerKeyExchange extends sun.security.ssl.HandshakeMessage$ServerKeyExchange {
                constructor(arg0: java.security.PublicKey, arg1: java.security.PrivateKey, arg2: sun.security.ssl.RandomCookie, arg3: sun.security.ssl.RandomCookie, arg4: java.security.SecureRandom)
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                getPublicKey(): java.security.PublicKey
                verify(arg0: java.security.PublicKey, arg1: sun.security.ssl.RandomCookie, arg2: sun.security.ssl.RandomCookie): boolean
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            abstract class HandshakeMessage$ServerKeyExchange extends sun.security.ssl.HandshakeMessage {
                constructor()
                messageType(): int
            }
            class HandshakeMessage$CertificateMsg extends sun.security.ssl.HandshakeMessage {
                messageType(): int
                constructor(arg0: java.security.cert.X509Certificate[])
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
                getCertificateChain(): java.security.cert.X509Certificate[]
            }
            class HandshakeMessage$ServerHello extends sun.security.ssl.HandshakeMessage {
                protocolVersion: sun.security.ssl.ProtocolVersion
                svr_random: sun.security.ssl.RandomCookie
                sessionId: sun.security.ssl.SessionId
                cipherSuite: sun.security.ssl.CipherSuite
                compression_method: byte
                extensions: sun.security.ssl.HelloExtensions
                messageType(): int
                constructor()
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int)
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class HandshakeMessage$ClientHello extends sun.security.ssl.HandshakeMessage {
                protocolVersion: sun.security.ssl.ProtocolVersion
                clnt_random: sun.security.ssl.RandomCookie
                sessionId: sun.security.ssl.SessionId
                compression_methods: byte[]
                extensions: sun.security.ssl.HelloExtensions
                constructor(arg0: java.security.SecureRandom, arg1: sun.security.ssl.ProtocolVersion, arg2: sun.security.ssl.SessionId, arg3: sun.security.ssl.CipherSuiteList)
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int)
                getCipherSuites(): sun.security.ssl.CipherSuiteList
                addRenegotiationInfoExtension(arg0: byte[]): void
                addSNIExtension(arg0: java.util.List<javax.net.ssl.SNIServerName>): void
                addSignatureAlgorithmsExtension(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>): void
                messageType(): int
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class HandshakeMessage$HelloRequest extends sun.security.ssl.HandshakeMessage {
                messageType(): int
                constructor()
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            abstract class SSLContextImpl extends javax.net.ssl.SSLContextSpi {
                constructor()
                protected engineInit(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
                protected engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory
                protected engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                createSSLEngineImpl(): javax.net.ssl.SSLEngine
                createSSLEngineImpl(arg0: string, arg1: int): javax.net.ssl.SSLEngine
                protected engineCreateSSLEngine(): javax.net.ssl.SSLEngine
                protected engineCreateSSLEngine(arg0: string, arg1: int): javax.net.ssl.SSLEngine
                protected engineGetClientSessionContext(): javax.net.ssl.SSLSessionContext
                protected engineGetServerSessionContext(): javax.net.ssl.SSLSessionContext
                getSecureRandom(): java.security.SecureRandom
                getX509KeyManager(): javax.net.ssl.X509ExtendedKeyManager
                getX509TrustManager(): javax.net.ssl.X509TrustManager
                getEphemeralKeyManager(): sun.security.ssl.EphemeralKeyManager
                getSuportedProtocolList(): sun.security.ssl.ProtocolList
                getServerDefaultProtocolList(): sun.security.ssl.ProtocolList
                getClientDefaultProtocolList(): sun.security.ssl.ProtocolList
                getSupportedCipherSuiteList(): sun.security.ssl.CipherSuiteList
                getServerDefaultCipherSuiteList(): sun.security.ssl.CipherSuiteList
                getClientDefaultCipherSuiteList(): sun.security.ssl.CipherSuiteList
                getDefaultProtocolList(arg0: boolean): sun.security.ssl.ProtocolList
                getDefaultCipherSuiteList(arg0: boolean): sun.security.ssl.CipherSuiteList
                isDefaultProtocolList(arg0: sun.security.ssl.ProtocolList): boolean
                isDefaultCipherSuiteList(arg0: sun.security.ssl.CipherSuiteList): boolean
                static access$000(arg0: sun.security.ssl.ProtocolVersion[]): java.lang.String[]
                static access$100(arg0: sun.security.ssl.ProtocolList, arg1: boolean): sun.security.ssl.CipherSuiteList
                static access$300(): sun.security.ssl.Debug
            }
            class SSLContextImpl$1 {
            }
            class SSLContextImpl$DefaultSSLContext extends sun.security.ssl.SSLContextImpl$CustomizedTLSContext {
                public constructor()
                protected engineInit(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
                static getDefaultImpl(): sun.security.ssl.SSLContextImpl
            }
            class SSLContextImpl$DefaultSSLContext$2 implements java.security.PrivilegedExceptionAction<java.io.FileInputStream> {
                val$defaultKeyStore: string
                constructor(arg0: string)
                public run(): java.io.FileInputStream
                public run(): java.lang.Object
            }
            class SSLContextImpl$DefaultSSLContext$1 implements java.security.PrivilegedExceptionAction<java.lang.Object> {
                val$props: java.util.Map
                constructor(arg0: java.util.Map)
                public run(): java.lang.Object
            }
            class SSLContextImpl$TLSContext extends sun.security.ssl.SSLContextImpl$CustomizedTLSContext {
                public constructor()
            }
            class SSLContextImpl$CustomizedSSLContext extends sun.security.ssl.SSLContextImpl$AbstractSSLContext {
                protected constructor()
                getDefaultClientSSLParams(): javax.net.ssl.SSLParameters
            }
            class SSLContextImpl$TLS12Context extends sun.security.ssl.SSLContextImpl$AbstractTLSContext {
                public constructor()
                getClientDefaultProtocolList(): sun.security.ssl.ProtocolList
                getClientDefaultCipherSuiteList(): sun.security.ssl.CipherSuiteList
            }
            class SSLContextImpl$TLS11Context extends sun.security.ssl.SSLContextImpl$AbstractTLSContext {
                public constructor()
                getClientDefaultProtocolList(): sun.security.ssl.ProtocolList
                getClientDefaultCipherSuiteList(): sun.security.ssl.CipherSuiteList
            }
            class SSLContextImpl$TLS10Context extends sun.security.ssl.SSLContextImpl$AbstractTLSContext {
                public constructor()
                getClientDefaultProtocolList(): sun.security.ssl.ProtocolList
                getClientDefaultCipherSuiteList(): sun.security.ssl.CipherSuiteList
            }
            abstract class SSLContextImpl$AbstractSSLContext extends sun.security.ssl.SSLContextImpl {
                getDefaultServerSSLParams(): javax.net.ssl.SSLParameters
                getSupportedSSLParams(): javax.net.ssl.SSLParameters
                static getAvailableProtocols(arg0: sun.security.ssl.ProtocolVersion[]): java.util.List<java.lang.String>
                constructor(arg0: sun.security.ssl.SSLContextImpl$1)
            }
            class CipherSuiteList {
                constructor(arg0: java.util.Collection<sun.security.ssl.CipherSuite>)
                constructor(arg0: sun.security.ssl.CipherSuite)
                constructor(arg0: java.lang.String[])
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                contains(arg0: sun.security.ssl.CipherSuite): boolean
                containsEC(): boolean
                iterator(): java.util.Iterator<sun.security.ssl.CipherSuite>
                collection(): java.util.Collection<sun.security.ssl.CipherSuite>
                size(): int
                toStringArray(): java.lang.String[]
                public toString(): string
                send(arg0: sun.security.ssl.HandshakeOutStream): void
            }
            class CipherSuiteList$1 {
                static $SwitchMap$sun$security$ssl$CipherSuite$KeyExchange: int[]
            }
            class MAC extends sun.security.ssl.Authenticator {
                static NULL: sun.security.ssl.MAC
                constructor(arg0: sun.security.ssl.CipherSuite$MacAlg, arg1: sun.security.ssl.ProtocolVersion, arg2: javax.crypto.SecretKey)
                MAClen(): int
                hashBlockLen(): int
                minimalPaddingLen(): int
                compute(arg0: byte, arg1: byte[], arg2: int, arg3: int, arg4: boolean): byte[]
                compute(arg0: byte, arg1: java.nio.ByteBuffer, arg2: boolean): byte[]
            }
            class CipherBox {
                static NULL: sun.security.ssl.CipherBox
                static newCipherBox(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.CipherSuite$BulkCipher, arg2: javax.crypto.SecretKey, arg3: javax.crypto.spec.IvParameterSpec, arg4: java.security.SecureRandom, arg5: boolean): sun.security.ssl.CipherBox
                encrypt(arg0: byte[], arg1: int, arg2: int): int
                encrypt(arg0: java.nio.ByteBuffer, arg1: int): int
                decrypt(arg0: byte[], arg1: int, arg2: int, arg3: int): int
                decrypt(arg0: java.nio.ByteBuffer, arg1: int): int
                dispose(): void
                isCBCMode(): boolean
                isAEADMode(): boolean
                isNullCipher(): boolean
                getExplicitNonceSize(): int
                applyExplicitNonce(arg0: sun.security.ssl.Authenticator, arg1: byte, arg2: java.nio.ByteBuffer): int
                applyExplicitNonce(arg0: sun.security.ssl.Authenticator, arg1: byte, arg2: byte[], arg3: int, arg4: int): int
                createExplicitNonce(arg0: sun.security.ssl.Authenticator, arg1: byte, arg2: int): byte[]
            }
            class CipherBox$1 {
                static $SwitchMap$sun$security$ssl$CipherSuite$CipherType: int[]
            }
            class CipherSuite implements java.lang.Comparable<sun.security.ssl.CipherSuite> {
                static SUPPORTED_SUITES_PRIORITY: int
                static DEFAULT_SUITES_PRIORITY: int
                name: string
                id: int
                priority: int
                keyExchange: sun.security.ssl.CipherSuite$KeyExchange
                cipher: sun.security.ssl.CipherSuite$BulkCipher
                macAlg: sun.security.ssl.CipherSuite$MacAlg
                prfAlg: sun.security.ssl.CipherSuite$PRF
                exportable: boolean
                allowed: boolean
                obsoleted: int
                supported: int
                static B_NULL: sun.security.ssl.CipherSuite$BulkCipher
                static B_RC4_40: sun.security.ssl.CipherSuite$BulkCipher
                static B_RC2_40: sun.security.ssl.CipherSuite$BulkCipher
                static B_DES_40: sun.security.ssl.CipherSuite$BulkCipher
                static B_RC4_128: sun.security.ssl.CipherSuite$BulkCipher
                static B_DES: sun.security.ssl.CipherSuite$BulkCipher
                static B_3DES: sun.security.ssl.CipherSuite$BulkCipher
                static B_IDEA: sun.security.ssl.CipherSuite$BulkCipher
                static B_AES_128: sun.security.ssl.CipherSuite$BulkCipher
                static B_AES_256: sun.security.ssl.CipherSuite$BulkCipher
                static B_AES_128_GCM: sun.security.ssl.CipherSuite$BulkCipher
                static B_AES_256_GCM: sun.security.ssl.CipherSuite$BulkCipher
                static M_NULL: sun.security.ssl.CipherSuite$MacAlg
                static M_MD5: sun.security.ssl.CipherSuite$MacAlg
                static M_SHA: sun.security.ssl.CipherSuite$MacAlg
                static M_SHA256: sun.security.ssl.CipherSuite$MacAlg
                static M_SHA384: sun.security.ssl.CipherSuite$MacAlg
                static C_NULL: sun.security.ssl.CipherSuite
                static C_SCSV: sun.security.ssl.CipherSuite
                isAvailable(): boolean
                isNegotiable(): boolean
                public compareTo(arg0: sun.security.ssl.CipherSuite): int
                public toString(): string
                static valueOf(arg0: string): sun.security.ssl.CipherSuite
                static valueOf(arg0: int, arg1: int): sun.security.ssl.CipherSuite
                static allowedCipherSuites(): java.util.Collection<sun.security.ssl.CipherSuite>
                public compareTo(arg0: java.lang.Object): int
                static access$000(): boolean
            }
            class CipherSuite$PRF extends java.lang.Enum<sun.security.ssl.CipherSuite$PRF> {
                public static P_NONE: sun.security.ssl.CipherSuite$PRF
                public static P_SHA256: sun.security.ssl.CipherSuite$PRF
                public static P_SHA384: sun.security.ssl.CipherSuite$PRF
                public static P_SHA512: sun.security.ssl.CipherSuite$PRF
                public static values(): sun.security.ssl.CipherSuite$PRF[]
                public static valueOf(arg0: string): sun.security.ssl.CipherSuite$PRF
                getPRFHashAlg(): string
                getPRFHashLength(): int
                getPRFBlockSize(): int
            }
            class CipherSuite$MacAlg {
                name: string
                size: int
                hashBlockSize: int
                minimalPaddingSize: int
                constructor(arg0: string, arg1: int, arg2: int, arg3: int)
                newMac(arg0: sun.security.ssl.ProtocolVersion, arg1: javax.crypto.SecretKey): sun.security.ssl.MAC
                public toString(): string
            }
            class CipherSuite$BulkCipher {
                description: string
                transformation: string
                algorithm: string
                allowed: boolean
                keySize: int
                expandedKeySize: int
                ivSize: int
                fixedIvSize: int
                exportable: boolean
                cipherType: sun.security.ssl.CipherSuite$CipherType
                tagSize: int
                constructor(arg0: string, arg1: sun.security.ssl.CipherSuite$CipherType, arg2: int, arg3: int, arg4: int, arg5: int, arg6: boolean)
                constructor(arg0: string, arg1: sun.security.ssl.CipherSuite$CipherType, arg2: int, arg3: int, arg4: int, arg5: boolean)
                newCipher(arg0: sun.security.ssl.ProtocolVersion, arg1: javax.crypto.SecretKey, arg2: javax.crypto.spec.IvParameterSpec, arg3: java.security.SecureRandom, arg4: boolean): sun.security.ssl.CipherBox
                isAvailable(): boolean
                public toString(): string
            }
            class CipherSuite$CipherType extends java.lang.Enum<sun.security.ssl.CipherSuite$CipherType> {
                public static STREAM_CIPHER: sun.security.ssl.CipherSuite$CipherType
                public static BLOCK_CIPHER: sun.security.ssl.CipherSuite$CipherType
                public static AEAD_CIPHER: sun.security.ssl.CipherSuite$CipherType
                public static values(): sun.security.ssl.CipherSuite$CipherType[]
                public static valueOf(arg0: string): sun.security.ssl.CipherSuite$CipherType
            }
            class CipherSuite$KeyExchange extends java.lang.Enum<sun.security.ssl.CipherSuite$KeyExchange> {
                public static K_NULL: sun.security.ssl.CipherSuite$KeyExchange
                public static K_RSA: sun.security.ssl.CipherSuite$KeyExchange
                public static K_RSA_EXPORT: sun.security.ssl.CipherSuite$KeyExchange
                public static K_DH_RSA: sun.security.ssl.CipherSuite$KeyExchange
                public static K_DH_DSS: sun.security.ssl.CipherSuite$KeyExchange
                public static K_DHE_DSS: sun.security.ssl.CipherSuite$KeyExchange
                public static K_DHE_RSA: sun.security.ssl.CipherSuite$KeyExchange
                public static K_DH_ANON: sun.security.ssl.CipherSuite$KeyExchange
                public static K_ECDH_ECDSA: sun.security.ssl.CipherSuite$KeyExchange
                public static K_ECDH_RSA: sun.security.ssl.CipherSuite$KeyExchange
                public static K_ECDHE_ECDSA: sun.security.ssl.CipherSuite$KeyExchange
                public static K_ECDHE_RSA: sun.security.ssl.CipherSuite$KeyExchange
                public static K_ECDH_ANON: sun.security.ssl.CipherSuite$KeyExchange
                public static K_KRB5: sun.security.ssl.CipherSuite$KeyExchange
                public static K_KRB5_EXPORT: sun.security.ssl.CipherSuite$KeyExchange
                public static K_SCSV: sun.security.ssl.CipherSuite$KeyExchange
                name: string
                allowed: boolean
                isEC: boolean
                public static values(): sun.security.ssl.CipherSuite$KeyExchange[]
                public static valueOf(arg0: string): sun.security.ssl.CipherSuite$KeyExchange
                isAvailable(): boolean
                public toString(): string
            }
            class JsseJce {
                static CIPHER_RSA_PKCS1: string
                static CIPHER_RC4: string
                static CIPHER_DES: string
                static CIPHER_3DES: string
                static CIPHER_AES: string
                static CIPHER_AES_GCM: string
                static SIGNATURE_DSA: string
                static SIGNATURE_ECDSA: string
                static SIGNATURE_RAWDSA: string
                static SIGNATURE_RAWECDSA: string
                static SIGNATURE_RAWRSA: string
                static SIGNATURE_SSLRSA: string
                static isEcAvailable(): boolean
                static isKerberosAvailable(): boolean
                static getCipher(arg0: string): javax.crypto.Cipher
                static getSignature(arg0: string): java.security.Signature
                static getKeyGenerator(arg0: string): javax.crypto.KeyGenerator
                static getKeyPairGenerator(arg0: string): java.security.KeyPairGenerator
                static getKeyAgreement(arg0: string): javax.crypto.KeyAgreement
                static getMac(arg0: string): javax.crypto.Mac
                static getKeyFactory(arg0: string): java.security.KeyFactory
                static getAlgorithmParameters(arg0: string): java.security.AlgorithmParameters
                static getSecureRandom(): java.security.SecureRandom
                static getMD5(): java.security.MessageDigest
                static getSHA(): java.security.MessageDigest
                static getMessageDigest(arg0: string): java.security.MessageDigest
                static getRSAKeyLength(arg0: java.security.PublicKey): int
                static getRSAPublicKeySpec(arg0: java.security.PublicKey): java.security.spec.RSAPublicKeySpec
                static getECParameterSpec(arg0: string): java.security.spec.ECParameterSpec
                static getNamedCurveOid(arg0: java.security.spec.ECParameterSpec): string
                static decodePoint(arg0: byte[], arg1: java.security.spec.EllipticCurve): java.security.spec.ECPoint
                static encodePoint(arg0: java.security.spec.ECPoint, arg1: java.security.spec.EllipticCurve): byte[]
                static beginFipsProvider(): java.lang.Object
                static endFipsProvider(arg0: java.lang.Object): void
            }
            class JsseJce$SunCertificates extends java.security.Provider {
                constructor(arg0: java.security.Provider)
            }
            class JsseJce$SunCertificates$1 implements java.security.PrivilegedAction<java.lang.Object> {
                val$p: java.security.Provider
                this$0: sun.security.ssl.JsseJce$SunCertificates
                constructor(arg0: sun.security.ssl.JsseJce$SunCertificates, arg1: java.security.Provider)
                public run(): java.lang.Object
            }
            class JsseJce$1 implements java.security.PrivilegedExceptionAction<java.lang.Void> {
                constructor()
                public run(): java.lang.Void
                public run(): java.lang.Object
            }
            class Authenticator {
                constructor()
                constructor(arg0: sun.security.ssl.ProtocolVersion)
                seqNumOverflow(): boolean
                seqNumIsHuge(): boolean
                sequenceNumber(): byte[]
                acquireAuthenticationBytes(arg0: byte, arg1: int): byte[]
            }
            class Debug {
                public constructor()
                public static Help(): void
                public static getInstance(arg0: string): sun.security.ssl.Debug
                public static getInstance(arg0: string, arg1: string): sun.security.ssl.Debug
                public static isOn(arg0: string): boolean
                public println(arg0: string): void
                public println(): void
                public static println(arg0: string, arg1: string): void
                public static println(arg0: java.io.PrintStream, arg1: string, arg2: byte[]): void
                static getBooleanProperty(arg0: string, arg1: boolean): boolean
                static toString(arg0: byte[]): string
            }
            class ProtocolVersion implements java.lang.Comparable<sun.security.ssl.ProtocolVersion> {
                static LIMIT_MAX_VALUE: int
                static LIMIT_MIN_VALUE: int
                static NONE: sun.security.ssl.ProtocolVersion
                static SSL20Hello: sun.security.ssl.ProtocolVersion
                static SSL30: sun.security.ssl.ProtocolVersion
                static TLS10: sun.security.ssl.ProtocolVersion
                static TLS11: sun.security.ssl.ProtocolVersion
                static TLS12: sun.security.ssl.ProtocolVersion
                static MIN: sun.security.ssl.ProtocolVersion
                static MAX: sun.security.ssl.ProtocolVersion
                static DEFAULT: sun.security.ssl.ProtocolVersion
                static DEFAULT_HELLO: sun.security.ssl.ProtocolVersion
                static availableProtocols: java.util.Set<sun.security.ssl.ProtocolVersion>
                public v: int
                public major: byte
                public minor: byte
                name: string
                public static valueOf(arg0: int, arg1: int): sun.security.ssl.ProtocolVersion
                static valueOf(arg0: string): sun.security.ssl.ProtocolVersion
                public toString(): string
                public compareTo(arg0: sun.security.ssl.ProtocolVersion): int
                public compareTo(arg0: java.lang.Object): int
            }
            class OutputRecord extends java.io.ByteArrayOutputStream implements sun.security.ssl.Record {
                protocolVersion: sun.security.ssl.ProtocolVersion
                static debug: sun.security.ssl.Debug
                static $assertionsDisabled: boolean
                constructor(arg0: byte, arg1: int)
                constructor(arg0: byte)
                setVersion(arg0: sun.security.ssl.ProtocolVersion): void
                setHelloVersion(arg0: sun.security.ssl.ProtocolVersion): void
                public reset(): void
                setHandshakeHash(arg0: sun.security.ssl.HandshakeHash): void
                doHashes(): void
                isEmpty(): boolean
                isAlert(arg0: byte): boolean
                encrypt(arg0: sun.security.ssl.Authenticator, arg1: sun.security.ssl.CipherBox): void
                availableDataBytes(): int
                contentType(): byte
                write(arg0: java.io.OutputStream, arg1: boolean, arg2: java.io.ByteArrayOutputStream): void
                writeBuffer(arg0: java.io.OutputStream, arg1: byte[], arg2: int, arg3: int, arg4: int): void
            }
            class SSLEngineImpl extends javax.net.ssl.SSLEngine {
                writer: sun.security.ssl.EngineWriter
                static clauth_none: byte
                static clauth_requested: byte
                static clauth_required: byte
                inputRecord: sun.security.ssl.EngineInputRecord
                outputRecord: sun.security.ssl.EngineOutputRecord
                serverNames: java.util.List<javax.net.ssl.SNIServerName>
                sniMatchers: java.util.Collection<javax.net.ssl.SNIMatcher>
                writeLock: java.lang.Object
                static $assertionsDisabled: boolean
                constructor(arg0: sun.security.ssl.SSLContextImpl)
                constructor(arg0: sun.security.ssl.SSLContextImpl, arg1: string, arg2: int)
                getAcc(): java.security.AccessControlContext
                public getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
                changeWriteCiphers(): void
                setVersion(arg0: sun.security.ssl.ProtocolVersion): void
                public beginHandshake(): void
                public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer[], arg2: int, arg3: int): javax.net.ssl.SSLEngineResult
                public wrap(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
                needToSplitPayload(arg0: sun.security.ssl.CipherBox, arg1: sun.security.ssl.ProtocolVersion): boolean
                writeRecord(arg0: sun.security.ssl.EngineOutputRecord): void
                public closeOutbound(): void
                public isOutboundDone(): boolean
                public closeInbound(): void
                public isInboundDone(): boolean
                public getSession(): javax.net.ssl.SSLSession
                public getHandshakeSession(): javax.net.ssl.SSLSession
                setHandshakeSession(arg0: sun.security.ssl.SSLSessionImpl): void
                public getDelegatedTask(): java.lang.Runnable
                warning(arg0: byte): void
                fatal(arg0: byte, arg1: string): void
                fatal(arg0: byte, arg1: java.lang.Throwable): void
                fatal(arg0: byte, arg1: string, arg2: java.lang.Throwable): void
                public setEnableSessionCreation(arg0: boolean): void
                public getEnableSessionCreation(): boolean
                public setNeedClientAuth(arg0: boolean): void
                public getNeedClientAuth(): boolean
                public setWantClientAuth(arg0: boolean): void
                public getWantClientAuth(): boolean
                public setUseClientMode(arg0: boolean): void
                public getUseClientMode(): boolean
                public getSupportedCipherSuites(): java.lang.String[]
                public setEnabledCipherSuites(arg0: java.lang.String[]): void
                public getEnabledCipherSuites(): java.lang.String[]
                public getSupportedProtocols(): java.lang.String[]
                public setEnabledProtocols(arg0: java.lang.String[]): void
                public getEnabledProtocols(): java.lang.String[]
                public getSSLParameters(): javax.net.ssl.SSLParameters
                public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
                receivedChangeCipherSpec(): boolean
                public toString(): string
            }
            abstract class BaseSSLSocketImpl extends javax.net.ssl.SSLSocket {
                static requireCloseNotify: boolean
                constructor()
                constructor(arg0: java.net.Socket)
                constructor(arg0: java.net.Socket, arg1: java.io.InputStream)
                public getChannel(): java.nio.channels.SocketChannel
                public bind(arg0: java.net.SocketAddress): void
                public getLocalSocketAddress(): java.net.SocketAddress
                public getRemoteSocketAddress(): java.net.SocketAddress
                public connect(arg0: java.net.SocketAddress): void
                public isConnected(): boolean
                public isBound(): boolean
                public shutdownInput(): void
                public shutdownOutput(): void
                public isInputShutdown(): boolean
                public isOutputShutdown(): boolean
                protected finalize(): void
                public getInetAddress(): java.net.InetAddress
                public getLocalAddress(): java.net.InetAddress
                public getPort(): int
                public getLocalPort(): int
                public setTcpNoDelay(arg0: boolean): void
                public getTcpNoDelay(): boolean
                public setSoLinger(arg0: boolean, arg1: int): void
                public getSoLinger(): int
                public sendUrgentData(arg0: int): void
                public setOOBInline(arg0: boolean): void
                public getOOBInline(): boolean
                public getSoTimeout(): int
                public setSendBufferSize(arg0: int): void
                public getSendBufferSize(): int
                public setReceiveBufferSize(arg0: int): void
                public getReceiveBufferSize(): int
                public setKeepAlive(arg0: boolean): void
                public getKeepAlive(): boolean
                public setTrafficClass(arg0: int): void
                public getTrafficClass(): int
                public setReuseAddress(arg0: boolean): void
                public getReuseAddress(): boolean
                public setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
                public toString(): string
                public getInputStream(): java.io.InputStream
                public getOutputStream(): java.io.OutputStream
                public close(): void
                public setSoTimeout(arg0: int): void
                isLayered(): boolean
            }
            class SSLSocketImpl extends sun.security.ssl.BaseSSLSocketImpl {
                serverNames: java.util.List<javax.net.ssl.SNIServerName>
                sniMatchers: java.util.Collection<javax.net.ssl.SNIMatcher>
                writeLock: java.util.concurrent.locks.ReentrantLock
                static trustNameService: boolean
                static $assertionsDisabled: boolean
                constructor(arg0: sun.security.ssl.SSLContextImpl, arg1: string, arg2: int)
                constructor(arg0: sun.security.ssl.SSLContextImpl, arg1: java.net.InetAddress, arg2: int)
                constructor(arg0: sun.security.ssl.SSLContextImpl, arg1: string, arg2: int, arg3: java.net.InetAddress, arg4: int)
                constructor(arg0: sun.security.ssl.SSLContextImpl, arg1: java.net.InetAddress, arg2: int, arg3: java.net.InetAddress, arg4: int)
                constructor(arg0: sun.security.ssl.SSLContextImpl, arg1: boolean, arg2: sun.security.ssl.CipherSuiteList, arg3: byte, arg4: boolean, arg5: sun.security.ssl.ProtocolList, arg6: string, arg7: java.security.AlgorithmConstraints, arg8: java.util.Collection<javax.net.ssl.SNIMatcher>, arg9: boolean)
                constructor(arg0: sun.security.ssl.SSLContextImpl)
                constructor(arg0: sun.security.ssl.SSLContextImpl, arg1: java.net.Socket, arg2: string, arg3: int, arg4: boolean)
                constructor(arg0: sun.security.ssl.SSLContextImpl, arg1: java.net.Socket, arg2: java.io.InputStream, arg3: boolean)
                public connect(arg0: java.net.SocketAddress, arg1: int): void
                doneConnect(): void
                getAcc(): java.security.AccessControlContext
                writeRecord(arg0: sun.security.ssl.OutputRecord): void
                writeRecord(arg0: sun.security.ssl.OutputRecord, arg1: boolean): void
                needToSplitPayload(): boolean
                readDataRecord(arg0: sun.security.ssl.InputRecord): void
                getAppInputStream(): sun.security.ssl.AppInputStream
                getAppOutputStream(): sun.security.ssl.AppOutputStream
                public startHandshake(): void
                public isClosed(): boolean
                checkEOF(): boolean
                checkWrite(): void
                protected closeSocket(): void
                public close(): void
                waitForClose(arg0: boolean): void
                handleException(arg0: java.lang.Exception): void
                warning(arg0: byte): void
                fatal(arg0: byte, arg1: string): void
                fatal(arg0: byte, arg1: java.lang.Throwable): void
                fatal(arg0: byte, arg1: string, arg2: java.lang.Throwable): void
                changeWriteCiphers(): void
                setVersion(arg0: sun.security.ssl.ProtocolVersion): void
                getHost(): string
                public setHost(arg0: string): void
                public getInputStream(): java.io.InputStream
                public getOutputStream(): java.io.OutputStream
                public getSession(): javax.net.ssl.SSLSession
                public getHandshakeSession(): javax.net.ssl.SSLSession
                setHandshakeSession(arg0: sun.security.ssl.SSLSessionImpl): void
                public setEnableSessionCreation(arg0: boolean): void
                public getEnableSessionCreation(): boolean
                public setNeedClientAuth(arg0: boolean): void
                public getNeedClientAuth(): boolean
                public setWantClientAuth(arg0: boolean): void
                public getWantClientAuth(): boolean
                public setUseClientMode(arg0: boolean): void
                public getUseClientMode(): boolean
                public getSupportedCipherSuites(): java.lang.String[]
                public setEnabledCipherSuites(arg0: java.lang.String[]): void
                public getEnabledCipherSuites(): java.lang.String[]
                public getSupportedProtocols(): java.lang.String[]
                public setEnabledProtocols(arg0: java.lang.String[]): void
                public getEnabledProtocols(): java.lang.String[]
                public setSoTimeout(arg0: int): void
                public addHandshakeCompletedListener(arg0: javax.net.ssl.HandshakeCompletedListener): void
                public removeHandshakeCompletedListener(arg0: javax.net.ssl.HandshakeCompletedListener): void
                public getSSLParameters(): javax.net.ssl.SSLParameters
                public setSSLParameters(arg0: javax.net.ssl.SSLParameters): void
                receivedChangeCipherSpec(): boolean
                public toString(): string
                public setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
                public getRemoteSocketAddress(): java.net.SocketAddress
                public getLocalSocketAddress(): java.net.SocketAddress
                public bind(arg0: java.net.SocketAddress): void
            }
            class SSLSocketImpl$NotifyHandshakeThread extends java.lang.Thread {
                constructor(arg0: java.util.Set<java.util.Map$Entry<javax.net.ssl.HandshakeCompletedListener, java.security.AccessControlContext>>, arg1: javax.net.ssl.HandshakeCompletedEvent)
                public run(): void
                static access$000(arg0: sun.security.ssl.SSLSocketImpl$NotifyHandshakeThread): javax.net.ssl.HandshakeCompletedEvent
            }
            class SSLSocketImpl$NotifyHandshakeThread$1 implements java.security.PrivilegedAction<java.lang.Void> {
                val$l: javax.net.ssl.HandshakeCompletedListener
                this$0: sun.security.ssl.SSLSocketImpl$NotifyHandshakeThread
                constructor(arg0: sun.security.ssl.SSLSocketImpl$NotifyHandshakeThread, arg1: javax.net.ssl.HandshakeCompletedListener)
                public run(): java.lang.Void
                public run(): java.lang.Object
            }
            class HandshakeHash {
                constructor(arg0: boolean)
                update(arg0: byte[], arg1: int, arg2: int): void
                reset(): void
                protocolDetermined(arg0: sun.security.ssl.ProtocolVersion): void
                getMD5Clone(): java.security.MessageDigest
                getSHAClone(): java.security.MessageDigest
                setFinishedAlg(arg0: string): void
                getAllHandshakeMessages(): byte[]
                getFinishedHash(): byte[]
            }
            interface Record {
                ct_change_cipher_spec: byte
                ct_alert: byte
                ct_handshake: byte
                ct_application_data: byte
                headerSize: int
                maxExpansion: int
                trailerSize: int
                maxDataSize: int
                maxPadding: int
                maxIVLength: int
                headerPlusMaxIVSize: int
                maxRecordSize: int
                enableCBCProtection: boolean
                maxDataSizeMinusOneByteRecord: int
                maxLargeRecordSize: int
                maxAlertRecordSize: int
                OVERFLOW_OF_INT08: int
                OVERFLOW_OF_INT16: int
                OVERFLOW_OF_INT24: int
            }
            class InputRecord extends java.io.ByteArrayInputStream implements sun.security.ssl.Record {
                formatVerified: boolean
                static debug: sun.security.ssl.Debug
                constructor()
                setHelloVersion(arg0: sun.security.ssl.ProtocolVersion): void
                getHelloVersion(): sun.security.ssl.ProtocolVersion
                enableFormatChecks(): void
                isAppDataValid(): boolean
                setAppDataValid(arg0: boolean): void
                contentType(): byte
                setHandshakeHash(arg0: sun.security.ssl.HandshakeHash): void
                getHandshakeHash(): sun.security.ssl.HandshakeHash
                decrypt(arg0: sun.security.ssl.Authenticator, arg1: sun.security.ssl.CipherBox): void
                static checkMacTags(arg0: byte, arg1: byte[], arg2: int, arg3: int, arg4: sun.security.ssl.MAC, arg5: boolean): boolean
                static calculateRemainingLen(arg0: sun.security.ssl.MAC, arg1: int, arg2: int): int
                ignore(arg0: int): void
                doHashes(): void
                queueHandshake(arg0: sun.security.ssl.InputRecord): void
                public close(): void
                read(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
                static checkRecordVersion(arg0: sun.security.ssl.ProtocolVersion, arg1: boolean): void
                writeBuffer(arg0: java.io.OutputStream, arg1: byte[], arg2: int, arg3: int): void
                static contentName(arg0: int): string
            }
            class HandshakeOutStream extends java.io.OutputStream {
                r: sun.security.ssl.OutputRecord
                static $assertionsDisabled: boolean
                constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: sun.security.ssl.HandshakeHash, arg3: sun.security.ssl.SSLSocketImpl)
                constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: sun.security.ssl.HandshakeHash, arg3: sun.security.ssl.SSLEngineImpl)
                doHashes(): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public write(arg0: int): void
                public flush(): void
                setFinishedMsg(): void
                putInt8(arg0: int): void
                putInt16(arg0: int): void
                putInt24(arg0: int): void
                putInt32(arg0: int): void
                putBytes8(arg0: byte[]): void
                public putBytes16(arg0: byte[]): void
                putBytes24(arg0: byte[]): void
            }
            class ExtensionType {
                id: int
                name: string
                static knownExtensions: java.util.List<sun.security.ssl.ExtensionType>
                static EXT_SERVER_NAME: sun.security.ssl.ExtensionType
                static EXT_MAX_FRAGMENT_LENGTH: sun.security.ssl.ExtensionType
                static EXT_CLIENT_CERTIFICATE_URL: sun.security.ssl.ExtensionType
                static EXT_TRUSTED_CA_KEYS: sun.security.ssl.ExtensionType
                static EXT_TRUNCATED_HMAC: sun.security.ssl.ExtensionType
                static EXT_STATUS_REQUEST: sun.security.ssl.ExtensionType
                static EXT_USER_MAPPING: sun.security.ssl.ExtensionType
                static EXT_CERT_TYPE: sun.security.ssl.ExtensionType
                static EXT_ELLIPTIC_CURVES: sun.security.ssl.ExtensionType
                static EXT_EC_POINT_FORMATS: sun.security.ssl.ExtensionType
                static EXT_SRP: sun.security.ssl.ExtensionType
                static EXT_SIGNATURE_ALGORITHMS: sun.security.ssl.ExtensionType
                static EXT_RENEGOTIATION_INFO: sun.security.ssl.ExtensionType
                public toString(): string
                static get(arg0: int): sun.security.ssl.ExtensionType
            }
            class HandshakeInStream extends java.io.InputStream {
                r: sun.security.ssl.InputRecord
                constructor(arg0: sun.security.ssl.HandshakeHash)
                public available(): int
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public mark(arg0: int): void
                public reset(): void
                public markSupported(): boolean
                incomingRecord(arg0: sun.security.ssl.InputRecord): void
                digestNow(): void
                ignore(arg0: int): void
                getInt8(): int
                getInt16(): int
                getInt24(): int
                getInt32(): int
                getBytes8(): byte[]
                public getBytes16(): byte[]
                getBytes24(): byte[]
            }
            abstract class HelloExtension {
                type: sun.security.ssl.ExtensionType
                constructor(arg0: sun.security.ssl.ExtensionType)
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                public toString(): string
            }
            class HelloExtensions {
                constructor()
                constructor(arg0: sun.security.ssl.HandshakeInStream)
                list(): java.util.List<sun.security.ssl.HelloExtension>
                add(arg0: sun.security.ssl.HelloExtension): void
                get(arg0: sun.security.ssl.ExtensionType): sun.security.ssl.HelloExtension
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            abstract class SunJSSE extends java.security.Provider {
                static cryptoProvider: java.security.Provider
                protected static isFIPS(): boolean
                protected constructor()
                protected constructor(arg0: java.security.Provider)
                protected constructor(arg0: string)
                protected finalize(): void
                static access$000(arg0: sun.security.ssl.SunJSSE, arg1: boolean): void
            }
            class SunJSSE$1 implements java.security.PrivilegedAction<java.lang.Object> {
                val$isfips: boolean
                this$0: sun.security.ssl.SunJSSE
                constructor(arg0: sun.security.ssl.SunJSSE, arg1: boolean)
                public run(): java.lang.Object
            }
        }
        namespace provider {
            class Sun extends java.security.Provider {
                public constructor()
            }
        }
    }
}
