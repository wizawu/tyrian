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
                            constructor(...args: any[])
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
                checkClientTrusted<T>(...args: any[]): any
                checkServerTrusted<T>(...args: any[]): any
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
            }
            class AbstractTrustManagerWrapper extends javax.net.ssl.X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                constructor(arg0: javax.net.ssl.X509TrustManager)
                checkClientTrusted<T>(...args: any[]): any
                checkServerTrusted<T>(...args: any[]): any
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
            }
            class RSAClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                preMaster: javax.crypto.SecretKey
                constructor(...args: any[])
                messageType(): int
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class ECDHClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                messageType(): int
                getEncodedPoint(): byte[]
                constructor(...args: any[])
                messageLength(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class ServerHandshaker extends sun.security.ssl.Handshaker {
                preferableSignatureAlgorithm: sun.security.ssl.SignatureAndHashAlgorithm
                constructor(...args: any[])
                setClientAuth(arg0: byte): void
                processMessage(arg0: byte, arg1: int): void
                trySetCipherSuite(arg0: sun.security.ssl.CipherSuite): boolean
                getKickstartMessage(): sun.security.ssl.HandshakeMessage
                handshakeAlert(arg0: byte): void
            }
            class SSLAlgorithmDecomposer extends sun.security.util.AlgorithmDecomposer {
                constructor(...args: any[])
                public decompose(arg0: string): java.util.Set<java.lang.String>
            }
            class ClientHandshaker extends sun.security.ssl.Handshaker {
                constructor(...args: any[])
                processMessage(arg0: byte, arg1: int): void
                getKickstartMessage(): sun.security.ssl.HandshakeMessage
                handshakeAlert(arg0: byte): void
            }
            class X509TrustManagerImpl extends javax.net.ssl.X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                constructor(...args: any[])
                checkClientTrusted<T>(...args: any[]): any
                checkServerTrusted<T>(...args: any[]): any
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                static getRequestedServerNames<T>(...args: any[]): any
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
            class RenegotiationInfoExtension extends sun.security.ssl.HelloExtension {
                constructor(...args: any[])
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                isEmpty(): boolean
                getRenegotiatedConnection(): byte[]
                toString<T>(...args: any[]): any
            }
            class DHCrypt {
                constructor(...args: any[])
                static getDHPublicKeySpec(arg0: java.security.PublicKey): javax.crypto.spec.DHPublicKeySpec
                getModulus(): java.math.BigInteger
                getBase(): java.math.BigInteger
                getPublicKey(): java.math.BigInteger
                getAgreedSecret(arg0: java.math.BigInteger, arg1: boolean): javax.crypto.SecretKey
                checkConstraints(arg0: java.security.AlgorithmConstraints, arg1: java.math.BigInteger): void
            }
            class SupportedEllipticPointFormatsExtension extends sun.security.ssl.HelloExtension {
                static FMT_UNCOMPRESSED: int
                static FMT_ANSIX962_COMPRESSED_PRIME: int
                static FMT_ANSIX962_COMPRESSED_CHAR2: int
                static DEFAULT: sun.security.ssl.HelloExtension
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int)
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                toString<T>(...args: any[]): any
            }
            class SSLServerSocketFactoryImpl extends javax.net.ssl.SSLServerSocketFactory {
                constructor(...args: any[])
                createServerSocket<T>(...args: any[]): any
                public getDefaultCipherSuites(): java.lang.String[]
                public getSupportedCipherSuites(): java.lang.String[]
            }
            class SignatureAlgorithmsExtension extends sun.security.ssl.HelloExtension {
                constructor(...args: any[])
                getSignAlgorithms(): java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                toString<T>(...args: any[]): any
            }
            class CloneableDigest extends java.security.MessageDigest implements java.lang.Cloneable {
                static getDigest(arg0: string, arg1: int): java.security.MessageDigest
                protected engineGetDigestLength(): int
                engineUpdate<T>(...args: any[]): any
                engineDigest<T>(...args: any[]): any
                protected engineReset(): void
                public clone(): java.lang.Object
            }
            class ByteBufferInputStream extends java.io.InputStream {
                bb: java.nio.ByteBuffer
                constructor(arg0: java.nio.ByteBuffer)
                read<T>(...args: any[]): any
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
            class SupportedEllipticCurvesExtension extends sun.security.ssl.HelloExtension {
                static DEFAULT: sun.security.ssl.SupportedEllipticCurvesExtension
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int)
                contains(arg0: int): boolean
                curveIds(): int[]
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                toString<T>(...args: any[]): any
                static isSupported(arg0: int): boolean
                static getCurveIndex(arg0: java.security.spec.ECParameterSpec): int
                static getCurveOid(arg0: int): string
            }
            class RSASignature extends java.security.SignatureSpi {
                public constructor()
                static getInstance(): java.security.Signature
                static getInternalInstance(): java.security.Signature
                static setHashes(arg0: java.security.Signature, arg1: java.security.MessageDigest, arg2: java.security.MessageDigest): void
                protected engineInitVerify(arg0: java.security.PublicKey): void
                engineInitSign<T>(...args: any[]): any
                engineUpdate<T>(...args: any[]): any
                protected engineSign(): byte[]
                engineVerify<T>(...args: any[]): any
                protected engineSetParameter(arg0: string, arg1: java.lang.Object): void
                protected engineGetParameter(arg0: string): java.lang.Object
            }
            abstract class TrustManagerFactoryImpl extends javax.net.ssl.TrustManagerFactorySpi {
                constructor()
                engineInit<T>(...args: any[]): any
                getInstance<T>(...args: any[]): any
                protected engineGetTrustManagers(): javax.net.ssl.TrustManager[]
                static getCacertsKeyStore(arg0: string): java.security.KeyStore
            }
            class Utilities {
                constructor()
                static addToSNIServerNameList(arg0: java.util.List<javax.net.ssl.SNIServerName>, arg1: string): java.util.List<javax.net.ssl.SNIServerName>
            }
            class UnknownExtension extends sun.security.ssl.HelloExtension {
                constructor(arg0: sun.security.ssl.HandshakeInStream, arg1: int, arg2: sun.security.ssl.ExtensionType)
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                toString<T>(...args: any[]): any
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
                static getSSLException<T>(...args: any[]): any
            }
            class SSLSocketFactoryImpl extends javax.net.ssl.SSLSocketFactory {
                constructor(...args: any[])
                createSocket<T>(...args: any[]): any
                public getDefaultCipherSuites(): java.lang.String[]
                public getSupportedCipherSuites(): java.lang.String[]
            }
            class ServerNameExtension extends sun.security.ssl.HelloExtension {
                static NAME_HEADER_LENGTH: int
                constructor(...args: any[])
                getServerNames(): java.util.List<javax.net.ssl.SNIServerName>
                isMatched(arg0: java.util.Collection<javax.net.ssl.SNIMatcher>): boolean
                isIdentical(arg0: java.util.List<javax.net.ssl.SNIServerName>): boolean
                length(): int
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                toString<T>(...args: any[]): any
            }
            abstract class KeyManagerFactoryImpl extends javax.net.ssl.KeyManagerFactorySpi {
                keyManager: javax.net.ssl.X509ExtendedKeyManager
                isInitialized: boolean
                constructor()
                protected engineGetKeyManagers(): javax.net.ssl.KeyManager[]
            }
            class SSLServerSocketImpl extends javax.net.ssl.SSLServerSocket {
                sniMatchers: java.util.Collection<javax.net.ssl.SNIMatcher>
                constructor(...args: any[])
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
                toString<T>(...args: any[]): any
            }
            class SSLAlgorithmConstraints implements java.security.AlgorithmConstraints {
                static DEFAULT: java.security.AlgorithmConstraints
                static DEFAULT_SSL_ONLY: java.security.AlgorithmConstraints
                constructor(...args: any[])
                permits<T>(...args: any[]): any
            }
            class ECDHCrypt {
                constructor(...args: any[])
                getPublicKey(): java.security.PublicKey
                getAgreedSecret<T>(...args: any[]): any
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
                constructor(...args: any[])
                messageType(): int
                public messageLength(): int
                public send(arg0: sun.security.ssl.HandshakeOutStream): void
                public print(arg0: java.io.PrintStream): void
                init<T>(...args: any[]): any
                public getUnencryptedPreMasterSecret(): byte[]
                public getPeerPrincipal(): java.security.Principal
                public getLocalPrincipal(): java.security.Principal
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
                    constructor(...args: any[])
                    getUnencrypted(): byte[]
                    getEncrypted(): byte[]
                }
                class KerberosClientKeyExchangeImpl extends sun.security.ssl.KerberosClientKeyExchange {
                    public constructor()
                    init<T>(...args: any[]): any
                    public messageLength(): int
                    public send(arg0: sun.security.ssl.HandshakeOutStream): void
                    public print(arg0: java.io.PrintStream): void
                    public getUnencryptedPreMasterSecret(): byte[]
                    getPeerPrincipal<T>(...args: any[]): any
                    getLocalPrincipal<T>(...args: any[]): any
                }
                
            }
            class X509KeyManagerImpl extends javax.net.ssl.X509ExtendedKeyManager implements javax.net.ssl.X509KeyManager {
                constructor(...args: any[])
                public getCertificateChain(arg0: string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: string): java.security.PrivateKey
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public chooseServerAlias(arg0: string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineServerAlias(arg0: string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public getClientAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public getServerAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public getAliases(arg0: string, arg1: java.security.Principal[], arg2: any, arg3: java.security.AlgorithmConstraints): java.lang.String[]
                static access$100(): boolean
                static access$200(): sun.security.ssl.Debug
            }
            class DHClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                messageType(): int
                getClientPublicKey(): java.math.BigInteger
                constructor(...args: any[])
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
                constructor(...args: any[])
                length(): int
                getId(): byte[]
                toString<T>(...args: any[]): any
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                checkLength(arg0: sun.security.ssl.ProtocolVersion): void
            }
            class RandomCookie {
                random_bytes: byte[]
                constructor(...args: any[])
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                print(arg0: java.io.PrintStream): void
            }
            class SignatureAndHashAlgorithm {
                static SUPPORTED_ALG_PRIORITY_MAX_NUM: int
                static valueOf<T>(...args: any[]): any
                getHashValue(): int
                getSignatureValue(): int
                getAlgorithmName(): string
                static sizeInRecord(): int
                static getSupportedAlgorithms<T>(...args: any[]): any
                static getAlgorithmNames(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>): java.lang.String[]
                static getHashAlgorithmNames(arg0: java.util.Collection<sun.security.ssl.SignatureAndHashAlgorithm>): java.util.Set<java.lang.String>
                static getHashAlgorithmName(arg0: sun.security.ssl.SignatureAndHashAlgorithm): string
                static getPreferableAlgorithm<T>(...args: any[]): any
            }
            class SSLSessionContextImpl implements javax.net.ssl.SSLSessionContext {
                constructor()
                public getSession(arg0: byte[]): javax.net.ssl.SSLSession
                public getIds(): java.util.Enumeration<byte[]>
                public setSessionTimeout(arg0: int): void
                public getSessionTimeout(): int
                public setSessionCacheSize(arg0: int): void
                public getSessionCacheSize(): int
                get<T>(...args: any[]): any
                put(arg0: sun.security.ssl.SSLSessionImpl): void
                remove(arg0: sun.security.ssl.SessionId): void
                isTimedout(arg0: javax.net.ssl.SSLSession): boolean
            }
            class EphemeralKeyManager {
                constructor()
                getRSAKeyPair(arg0: boolean, arg1: java.security.SecureRandom): java.security.KeyPair
            }
            class EngineArgs {
                netData: java.nio.ByteBuffer
                appData: java.nio.ByteBuffer[]
                static $assertionsDisabled: boolean
                constructor(...args: any[])
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
                write<T>(...args: any[]): any
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
                writeRecord<T>(...args: any[]): any
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
                constructor(...args: any[])
                contains(arg0: sun.security.ssl.ProtocolVersion): boolean
                collection(): java.util.Collection<sun.security.ssl.ProtocolVersion>
                selectProtocolVersion(arg0: sun.security.ssl.ProtocolVersion): sun.security.ssl.ProtocolVersion
                toStringArray(): java.lang.String[]
                toString<T>(...args: any[]): any
            }
            class AppOutputStream extends java.io.OutputStream {
                r: sun.security.ssl.OutputRecord
                constructor(arg0: sun.security.ssl.SSLSocketImpl)
                write<T>(...args: any[]): any
                public close(): void
            }
            class AppInputStream extends java.io.InputStream {
                r: sun.security.ssl.InputRecord
                constructor(arg0: sun.security.ssl.SSLSocketImpl)
                public available(): int
                read<T>(...args: any[]): any
                public skip(arg0: long): long
                public close(): void
            }
            class SSLSessionImpl extends javax.net.ssl.ExtendedSSLSession {
                static nullSession: sun.security.ssl.SSLSessionImpl
                constructor(...args: any[])
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
                toString<T>(...args: any[]): any
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
                keyExchange: any
                resumingSession: boolean
                enableNewSession: boolean
                preferLocalCipherSuites: boolean
                static debug: sun.security.ssl.Debug
                static allowUnsafeRenegotiation: boolean
                static allowLegacyHelloMessages: boolean
                static rejectClientInitiatedRenego: boolean
                invalidated: boolean
                constructor(...args: any[])
                fatalSE<T>(...args: any[]): any
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
                static isNegotiable<T>(...args: any[]): any
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
                sendChangeCipherSpec(arg0: any, arg1: boolean): void
                calculateKeys(arg0: javax.crypto.SecretKey, arg1: sun.security.ssl.ProtocolVersion): void
                calculateConnectionKeys(arg0: javax.crypto.SecretKey): void
                sessionKeysCalculated(): boolean
                static throwSSLException(arg0: string, arg1: java.lang.Throwable): void
                getTask(): any
                taskOutstanding(): boolean
                checkThrown(): void
                static access$002(arg0: sun.security.ssl.Handshaker, arg1: java.lang.Exception): java.lang.Exception
                static access$102(arg0: sun.security.ssl.Handshaker, arg1: any): any
                static access$202(arg0: sun.security.ssl.Handshaker, arg1: boolean): boolean
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
            abstract class SSLContextImpl extends javax.net.ssl.SSLContextSpi {
                constructor()
                protected engineInit(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
                protected engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory
                protected engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                engineCreateSSLEngine<T>(...args: any[]): any
                protected engineGetClientSessionContext(): javax.net.ssl.SSLSessionContext
                protected engineGetServerSessionContext(): javax.net.ssl.SSLSessionContext
                getSecureRandom(): java.security.SecureRandom
                getX509KeyManager(): javax.net.ssl.X509ExtendedKeyManager
                getX509TrustManager(): javax.net.ssl.X509TrustManager
                getEphemeralKeyManager(): sun.security.ssl.EphemeralKeyManager
                getDefaultServerSSLParams(): javax.net.ssl.SSLParameters
                getDefaultClientSSLParams(): javax.net.ssl.SSLParameters
                getSupportedSSLParams(): javax.net.ssl.SSLParameters
                getSuportedProtocolList(): sun.security.ssl.ProtocolList
                getDefaultProtocolList(arg0: boolean): sun.security.ssl.ProtocolList
                getSupportedCipherSuiteList(): sun.security.ssl.CipherSuiteList
                getDefaultCipherSuiteList(arg0: boolean): sun.security.ssl.CipherSuiteList
                isDefaultProtocolList(arg0: sun.security.ssl.ProtocolList): boolean
                static access$100(): sun.security.ssl.Debug
            }
            class CipherSuiteList {
                constructor(...args: any[])
                contains(arg0: sun.security.ssl.CipherSuite): boolean
                containsEC(): boolean
                iterator(): java.util.Iterator<sun.security.ssl.CipherSuite>
                collection(): java.util.Collection<sun.security.ssl.CipherSuite>
                size(): int
                toStringArray(): java.lang.String[]
                toString<T>(...args: any[]): any
                send(arg0: sun.security.ssl.HandshakeOutStream): void
                static clearAvailableCache(): void
            }
            class MAC extends sun.security.ssl.Authenticator {
                static NULL: sun.security.ssl.MAC
                constructor(arg0: any, arg1: sun.security.ssl.ProtocolVersion, arg2: javax.crypto.SecretKey)
                MAClen(): int
                hashBlockLen(): int
                minimalPaddingLen(): int
                compute<T>(...args: any[]): any
            }
            class CipherBox {
                static NULL: sun.security.ssl.CipherBox
                static newCipherBox(arg0: sun.security.ssl.ProtocolVersion, arg1: any, arg2: javax.crypto.SecretKey, arg3: javax.crypto.spec.IvParameterSpec, arg4: java.security.SecureRandom, arg5: boolean): sun.security.ssl.CipherBox
                encrypt<T>(...args: any[]): any
                decrypt<T>(...args: any[]): any
                dispose(): void
                isCBCMode(): boolean
                isAEADMode(): boolean
                isNullCipher(): boolean
                getExplicitNonceSize(): int
                applyExplicitNonce<T>(...args: any[]): any
                createExplicitNonce(arg0: sun.security.ssl.Authenticator, arg1: byte, arg2: int): byte[]
                isAvailable(): java.lang.Boolean
            }
            class CipherSuite implements java.lang.Comparable<sun.security.ssl.CipherSuite> {
                static SUPPORTED_SUITES_PRIORITY: int
                static DEFAULT_SUITES_PRIORITY: int
                static DYNAMIC_AVAILABILITY: boolean
                name: string
                id: int
                priority: int
                keyExchange: any
                cipher: any
                macAlg: any
                prfAlg: any
                exportable: boolean
                allowed: boolean
                obsoleted: int
                supported: int
                static B_NULL: any
                static B_RC4_40: any
                static B_RC2_40: any
                static B_DES_40: any
                static B_RC4_128: any
                static B_DES: any
                static B_3DES: any
                static B_IDEA: any
                static B_AES_128: any
                static B_AES_256: any
                static B_AES_128_GCM: any
                static B_AES_256_GCM: any
                static M_NULL: any
                static M_MD5: any
                static M_SHA: any
                static M_SHA256: any
                static M_SHA384: any
                static C_NULL: sun.security.ssl.CipherSuite
                static C_SCSV: sun.security.ssl.CipherSuite
                isAvailable(): boolean
                isNegotiable(): boolean
                compareTo<T>(...args: any[]): any
                toString<T>(...args: any[]): any
                static valueOf<T>(...args: any[]): any
                static allowedCipherSuites(): java.util.Collection<sun.security.ssl.CipherSuite>
                static access$000(): boolean
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
                static clearEcAvailable(): void
                static isKerberosAvailable(): boolean
                static getCipher(arg0: string): javax.crypto.Cipher
                static getSignature(arg0: string): java.security.Signature
                static getKeyGenerator(arg0: string): javax.crypto.KeyGenerator
                static getKeyPairGenerator(arg0: string): java.security.KeyPairGenerator
                static getKeyAgreement(arg0: string): javax.crypto.KeyAgreement
                static getMac(arg0: string): javax.crypto.Mac
                static getKeyFactory(arg0: string): java.security.KeyFactory
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
            class Authenticator {
                constructor(...args: any[])
                seqNumOverflow(): boolean
                seqNumIsHuge(): boolean
                sequenceNumber(): byte[]
                acquireAuthenticationBytes(arg0: byte, arg1: int): byte[]
            }
            class Debug {
                public constructor()
                public static Help(): void
                static getInstance<T>(...args: any[]): any
                public static isOn(arg0: string): boolean
                static println<T>(...args: any[]): any
                static getBooleanProperty(arg0: string, arg1: boolean): boolean
                static toString<T>(...args: any[]): any
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
                static valueOf<T>(...args: any[]): any
                toString<T>(...args: any[]): any
                compareTo<T>(...args: any[]): any
            }
            class OutputRecord extends java.io.ByteArrayOutputStream implements sun.security.ssl.Record {
                protocolVersion: sun.security.ssl.ProtocolVersion
                static debug: sun.security.ssl.Debug
                static $assertionsDisabled: boolean
                constructor(...args: any[])
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
                constructor(...args: any[])
                getAcc(): java.security.AccessControlContext
                public getHandshakeStatus(): any
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
                fatal<T>(...args: any[]): any
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
                toString<T>(...args: any[]): any
            }
            abstract class BaseSSLSocketImpl extends javax.net.ssl.SSLSocket {
                static requireCloseNotify: boolean
                constructor(...args: any[])
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
                toString<T>(...args: any[]): any
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
                constructor(...args: any[])
                public connect(arg0: java.net.SocketAddress, arg1: int): void
                doneConnect(): void
                getAcc(): java.security.AccessControlContext
                writeRecord<T>(...args: any[]): any
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
                fatal<T>(...args: any[]): any
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
                toString<T>(...args: any[]): any
                public setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
                public getRemoteSocketAddress(): java.net.SocketAddress
                public getLocalSocketAddress(): java.net.SocketAddress
                public bind(arg0: java.net.SocketAddress): void
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
                constructor(...args: any[])
                doHashes(): void
                write<T>(...args: any[]): any
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
                toString<T>(...args: any[]): any
                static get(arg0: int): sun.security.ssl.ExtensionType
            }
            class HandshakeInStream extends java.io.InputStream {
                r: sun.security.ssl.InputRecord
                constructor(arg0: sun.security.ssl.HandshakeHash)
                public available(): int
                read<T>(...args: any[]): any
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
                toString<T>(...args: any[]): any
            }
            class HelloExtensions {
                constructor(...args: any[])
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
                constructor(...args: any[])
                protected finalize(): void
                static access$000(arg0: sun.security.ssl.SunJSSE, arg1: boolean): void
            }
            
        }
        namespace provider {
            class Sun extends java.security.Provider {
                public constructor()
            }
            
        }
        
    }
    
}
