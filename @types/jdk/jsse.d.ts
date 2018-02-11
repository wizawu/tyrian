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
                            public static class: java.lang.Class<any>
                        }
                        class Provider extends sun.security.ssl.SunJSSE {
                            public constructor()
                            public constructor(arg0: java.security.Provider)
                            public constructor(arg0: string)
                            public static isFIPS(): boolean
                            public static install(): void
                            public static class: java.lang.Class<any>
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
                public static class: java.lang.Class<any>
            }
        }
        namespace ssl {
            class SSLContextImpl$DefaultManagersHolder$2 implements java.security.PrivilegedExceptionAction<java.io.FileInputStream> {
                public run(): java.io.FileInputStream
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class X509KeyManagerImpl$CheckType extends java.lang.Enum<sun.security.ssl.X509KeyManagerImpl$CheckType> {
                public static NONE: sun.security.ssl.X509KeyManagerImpl$CheckType
                public static CLIENT: sun.security.ssl.X509KeyManagerImpl$CheckType
                public static SERVER: sun.security.ssl.X509KeyManagerImpl$CheckType
                public static values(): sun.security.ssl.X509KeyManagerImpl$CheckType[]
                public static valueOf(arg0: string): sun.security.ssl.X509KeyManagerImpl$CheckType
                public getValidator(): string
                public static class: java.lang.Class<any>
            }
            class SignatureAndHashAlgorithm {
                public static class: java.lang.Class<any>
            }
            class KeyManagerFactoryImpl$X509 extends sun.security.ssl.KeyManagerFactoryImpl {
                public constructor()
                protected engineInit(arg0: java.security.KeyStore, arg1: char[]): void
                protected engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
                public static class: java.lang.Class<any>
            }
            class TrustManagerFactoryImpl$1 implements java.security.PrivilegedExceptionAction<java.io.FileInputStream> {
                public run(): java.io.FileInputStream
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class CloneableDigest extends java.security.MessageDigest implements java.lang.Cloneable {
                protected engineGetDigestLength(): int
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineDigest(): byte[]
                protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
                protected engineReset(): void
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class ByteBufferInputStream extends java.io.InputStream {
                public read(): int
                public read(arg0: byte[]): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public available(): int
                public close(): void
                public mark(arg0: int): void
                public reset(): void
                public markSupported(): boolean
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$DistinguishedName {
                public static class: java.lang.Class<any>
            }
            class DummyX509KeyManager extends javax.net.ssl.X509ExtendedKeyManager {
                public getClientAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public getServerAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseServerAlias(arg0: string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineServerAlias(arg0: string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public getCertificateChain(arg0: string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: string): java.security.PrivateKey
                public static class: java.lang.Class<any>
            }
            class Krb5Helper$1 implements java.security.PrivilegedAction<sun.security.ssl.Krb5Proxy> {
                public run(): sun.security.ssl.Krb5Proxy
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class RandomCookie {
                public static class: java.lang.Class<any>
            }
            abstract class Handshaker {
                public static class: java.lang.Class<any>
            }
            abstract class HandshakeMessage {
                public static debug: sun.security.ssl.Debug
                public static class: java.lang.Class<any>
            }
            class UnknownExtension extends sun.security.ssl.HelloExtension {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$TLS12Context extends sun.security.ssl.SSLContextImpl$AbstractTLSContext {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class SSLSocketImpl$NotifyHandshakeThread$1 implements java.security.PrivilegedAction<java.lang.Void> {
                public run(): java.lang.Void
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            abstract class SunJSSE extends java.security.Provider {
                protected static isFIPS(): boolean
                protected constructor()
                protected constructor(arg0: java.security.Provider)
                protected constructor(arg0: string)
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$1 {
                public static class: java.lang.Class<any>
            }
            namespace krb5 {
                class KerberosClientKeyExchangeImpl$2 implements java.security.PrivilegedAction<java.lang.String> {
                    public run(): string
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class Krb5ProxyImpl implements sun.security.ssl.Krb5Proxy {
                    public constructor()
                    public getClientSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                    public getServerSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                    public getServiceCreds(arg0: java.security.AccessControlContext): java.lang.Object
                    public getServerPrincipalName(arg0: java.lang.Object): string
                    public getPrincipalHostName(arg0: java.security.Principal): string
                    public getServicePermission(arg0: string, arg1: string): java.security.Permission
                    public isRelated(arg0: javax.security.auth.Subject, arg1: java.security.Principal): boolean
                    public static class: java.lang.Class<any>
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
                    public static class: java.lang.Class<any>
                }
                class KerberosClientKeyExchangeImpl$1 implements java.security.PrivilegedAction<javax.security.auth.kerberos.KerberosKey[]> {
                    public run(): javax.security.auth.kerberos.KerberosKey[]
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class KerberosClientKeyExchangeImpl$3 implements java.security.PrivilegedExceptionAction<javax.security.auth.kerberos.KerberosTicket> {
                    public run(): javax.security.auth.kerberos.KerberosTicket
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class KerberosPreMasterSecret {
                    public static class: java.lang.Class<any>
                }
            }
            class SSLContextImpl$CustomizedTLSContext extends sun.security.ssl.SSLContextImpl$AbstractTLSContext {
                protected constructor()
                public static class: java.lang.Class<any>
            }
            class HelloExtensions {
                public static class: java.lang.Class<any>
            }
            class SecureKey {
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
            class SSLSocketImpl extends sun.security.ssl.BaseSSLSocketImpl {
                public connect(arg0: java.net.SocketAddress, arg1: int): void
                public startHandshake(): void
                public isClosed(): boolean
                protected closeSocket(): void
                public close(): void
                public setHost(arg0: string): void
                public getInputStream(): java.io.InputStream
                public getOutputStream(): java.io.OutputStream
                public getSession(): javax.net.ssl.SSLSession
                public getHandshakeSession(): javax.net.ssl.SSLSession
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
                public toString(): string
                public setPerformancePreferences(arg0: int, arg1: int, arg2: int): void
                public getRemoteSocketAddress(): java.net.SocketAddress
                public getLocalSocketAddress(): java.net.SocketAddress
                public bind(arg0: java.net.SocketAddress): void
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$RSA_ServerKeyExchange extends sun.security.ssl.HandshakeMessage$ServerKeyExchange {
                public static class: java.lang.Class<any>
            }
            class EphemeralKeyManager {
                public static class: java.lang.Class<any>
            }
            class SignatureAndHashAlgorithm$SignatureAlgorithm extends java.lang.Enum<sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm> {
                public static UNDEFINED: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static ANONYMOUS: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static RSA: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static DSA: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static ECDSA: sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static values(): sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm[]
                public static valueOf(arg0: string): sun.security.ssl.SignatureAndHashAlgorithm$SignatureAlgorithm
                public static class: java.lang.Class<any>
            }
            class InputRecord extends java.io.ByteArrayInputStream implements sun.security.ssl.Record {
                public close(): void
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$DefaultManagersHolder$1 implements java.security.PrivilegedExceptionAction<java.lang.Object> {
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class AbstractTrustManagerWrapper extends javax.net.ssl.X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                public static class: java.lang.Class<any>
            }
            class SSLSocketImpl$NotifyHandshakeThread extends java.lang.Thread {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class SSLEngineImpl extends javax.net.ssl.SSLEngine {
                public getHandshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus
                public beginHandshake(): void
                public unwrap(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer[], arg2: int, arg3: int): javax.net.ssl.SSLEngineResult
                public wrap(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int, arg3: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult
                public closeOutbound(): void
                public isOutboundDone(): boolean
                public closeInbound(): void
                public isInboundDone(): boolean
                public getSession(): javax.net.ssl.SSLSession
                public getHandshakeSession(): javax.net.ssl.SSLSession
                public getDelegatedTask(): java.lang.Runnable
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
                public toString(): string
                public static class: java.lang.Class<any>
            }
            abstract class SSLContextImpl extends javax.net.ssl.SSLContextSpi {
                protected engineInit(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
                protected engineGetSocketFactory(): javax.net.ssl.SSLSocketFactory
                protected engineGetServerSocketFactory(): javax.net.ssl.SSLServerSocketFactory
                protected engineCreateSSLEngine(): javax.net.ssl.SSLEngine
                protected engineCreateSSLEngine(arg0: string, arg1: int): javax.net.ssl.SSLEngine
                protected engineGetClientSessionContext(): javax.net.ssl.SSLSessionContext
                protected engineGetServerSessionContext(): javax.net.ssl.SSLSessionContext
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$CertificateVerify extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class EphemeralKeyManager$1 {
                public static class: java.lang.Class<any>
            }
            class SessionId {
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
            class KerberosClientKeyExchange$1 implements java.security.PrivilegedAction<java.lang.Class<any>> {
                public run(): java.lang.Class<any>
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class CipherSuite implements java.lang.Comparable<sun.security.ssl.CipherSuite> {
                public compareTo(arg0: sun.security.ssl.CipherSuite): int
                public toString(): string
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
            class AbstractKeyManagerWrapper extends javax.net.ssl.X509ExtendedKeyManager {
                public getClientAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public getServerAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public chooseServerAlias(arg0: string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public getCertificateChain(arg0: string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: string): java.security.PrivateKey
                public static class: java.lang.Class<any>
            }
            class CipherSuiteList {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class SSLServerSocketImpl extends javax.net.ssl.SSLServerSocket {
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
                public static class: java.lang.Class<any>
            }
            class ECDHClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class HandshakeHash {
                public static class: java.lang.Class<any>
            }
            class DHClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class X509KeyManagerImpl$SizedMap<K, V> extends java.util.LinkedHashMap<K, V> {
                protected removeEldestEntry(arg0: java.util.Map$Entry<K, V>): boolean
                public static class: java.lang.Class<any>
            }
            class ClientHandshaker extends sun.security.ssl.Handshaker {
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$TLSContext extends sun.security.ssl.SSLContextImpl$CustomizedTLSContext {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class ServerHandshaker$2 implements java.security.PrivilegedExceptionAction<java.lang.Object> {
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$TLS10Context extends sun.security.ssl.SSLContextImpl$AbstractTLSContext {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class HandshakeInStream extends java.io.InputStream {
                public available(): int
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public mark(arg0: int): void
                public reset(): void
                public markSupported(): boolean
                public getBytes16(): byte[]
                public static class: java.lang.Class<any>
            }
            class SunX509KeyManagerImpl$X509Credentials {
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$ServerHelloDone extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            abstract class HelloExtension {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class EngineArgs {
                public static class: java.lang.Class<any>
            }
            class KerberosClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                protected constructor()
                public constructor(arg0: string, arg1: java.security.AccessControlContext, arg2: sun.security.ssl.ProtocolVersion, arg3: java.security.SecureRandom)
                public constructor(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: java.security.AccessControlContext, arg5: java.lang.Object)
                public messageLength(): int
                public send(arg0: sun.security.ssl.HandshakeOutStream): void
                public print(arg0: java.io.PrintStream): void
                public init(arg0: string, arg1: java.security.AccessControlContext, arg2: sun.security.ssl.ProtocolVersion, arg3: java.security.SecureRandom): void
                public init(arg0: sun.security.ssl.ProtocolVersion, arg1: sun.security.ssl.ProtocolVersion, arg2: java.security.SecureRandom, arg3: sun.security.ssl.HandshakeInStream, arg4: java.security.AccessControlContext, arg5: java.lang.Object): void
                public getUnencryptedPreMasterSecret(): byte[]
                public getPeerPrincipal(): java.security.Principal
                public getLocalPrincipal(): java.security.Principal
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$CustomizedSSLProtocols {
                public static class: java.lang.Class<any>
            }
            class Alerts {
                public static class: java.lang.Class<any>
            }
            class ProtocolList {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class CipherSuite$BulkCipher {
                public toString(): string
                public static class: java.lang.Class<any>
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
                public static class: java.lang.Class<any>
            }
            class X509KeyManagerImpl extends javax.net.ssl.X509ExtendedKeyManager implements javax.net.ssl.X509KeyManager {
                public getCertificateChain(arg0: string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: string): java.security.PrivateKey
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public chooseServerAlias(arg0: string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineServerAlias(arg0: string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public getClientAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public getServerAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public getAliases(arg0: string, arg1: java.security.Principal[], arg2: sun.security.ssl.X509KeyManagerImpl$CheckType, arg3: java.security.AlgorithmConstraints): java.lang.String[]
                public static class: java.lang.Class<any>
            }
            class AppInputStream extends java.io.InputStream {
                public available(): int
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public close(): void
                public static class: java.lang.Class<any>
            }
            class CipherBox {
                public static class: java.lang.Class<any>
            }
            class ProtocolVersion implements java.lang.Comparable<sun.security.ssl.ProtocolVersion> {
                public v: int
                public major: byte
                public minor: byte
                public static valueOf(arg0: int, arg1: int): sun.security.ssl.ProtocolVersion
                public toString(): string
                public compareTo(arg0: sun.security.ssl.ProtocolVersion): int
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
            class SupportedEllipticCurvesExtension extends sun.security.ssl.HelloExtension {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class SSLSessionContextImpl$SessionCacheVisitor implements sun.security.util.Cache$CacheVisitor<sun.security.ssl.SessionId, sun.security.ssl.SSLSessionImpl> {
                public visit(arg0: java.util.Map<sun.security.ssl.SessionId, sun.security.ssl.SSLSessionImpl>): void
                public getSessionIds(): java.util.Enumeration<byte[]>
                public static class: java.lang.Class<any>
            }
            class SSLServerSocketFactoryImpl extends javax.net.ssl.SSLServerSocketFactory {
                public constructor()
                public createServerSocket(): java.net.ServerSocket
                public createServerSocket(arg0: int): java.net.ServerSocket
                public createServerSocket(arg0: int, arg1: int): java.net.ServerSocket
                public createServerSocket(arg0: int, arg1: int, arg2: java.net.InetAddress): java.net.ServerSocket
                public getDefaultCipherSuites(): java.lang.String[]
                public getSupportedCipherSuites(): java.lang.String[]
                public static class: java.lang.Class<any>
            }
            class SunX509KeyManagerImpl extends javax.net.ssl.X509ExtendedKeyManager {
                public getCertificateChain(arg0: string): java.security.cert.X509Certificate[]
                public getPrivateKey(arg0: string): java.security.PrivateKey
                public chooseClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineClientAlias(arg0: java.lang.String[], arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public chooseServerAlias(arg0: string, arg1: java.security.Principal[], arg2: java.net.Socket): string
                public chooseEngineServerAlias(arg0: string, arg1: java.security.Principal[], arg2: javax.net.ssl.SSLEngine): string
                public getClientAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public getServerAliases(arg0: string, arg1: java.security.Principal[]): java.lang.String[]
                public static class: java.lang.Class<any>
            }
            class EngineOutputRecord extends sun.security.ssl.OutputRecord {
                public flush(): void
                public static class: java.lang.Class<any>
            }
            class ECDHCrypt {
                public static class: java.lang.Class<any>
            }
            class DHCrypt {
                public static class: java.lang.Class<any>
            }
            class X509KeyManagerImpl$1 {
                public static class: java.lang.Class<any>
            }
            class KeyManagerFactoryImpl$SunX509 extends sun.security.ssl.KeyManagerFactoryImpl {
                public constructor()
                protected engineInit(arg0: java.security.KeyStore, arg1: char[]): void
                protected engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
                public static class: java.lang.Class<any>
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
                public static values(): sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm[]
                public static valueOf(arg0: string): sun.security.ssl.SignatureAndHashAlgorithm$HashAlgorithm
                public static class: java.lang.Class<any>
            }
            class X509KeyManagerImpl$EntryStatus implements java.lang.Comparable<sun.security.ssl.X509KeyManagerImpl$EntryStatus> {
                public compareTo(arg0: sun.security.ssl.X509KeyManagerImpl$EntryStatus): int
                public toString(): string
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
            class SunJSSE$1 implements java.security.PrivilegedAction<java.lang.Object> {
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$DefaultSSLContextHolder {
                public static class: java.lang.Class<any>
            }
            class TrustManagerFactoryImpl$2 implements java.security.PrivilegedExceptionAction<java.lang.Void> {
                public run(): java.lang.Void
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class JsseJce$SunCertificates extends java.security.Provider {
                public static class: java.lang.Class<any>
            }
            class ServerNameExtension extends sun.security.ssl.HelloExtension {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$HelloRequest extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$ECDH_ServerKeyExchange extends sun.security.ssl.HandshakeMessage$ServerKeyExchange {
                public static class: java.lang.Class<any>
            }
            class ServerHandshaker$3 {
                public static class: java.lang.Class<any>
            }
            class ServerNameExtension$UnknownServerName extends javax.net.ssl.SNIServerName {
                public static class: java.lang.Class<any>
            }
            abstract class KeyManagerFactoryImpl extends javax.net.ssl.KeyManagerFactorySpi {
                protected engineGetKeyManagers(): javax.net.ssl.KeyManager[]
                public static class: java.lang.Class<any>
            }
            class CipherBox$1 {
                public static class: java.lang.Class<any>
            }
            abstract class BaseSSLSocketImpl extends javax.net.ssl.SSLSocket {
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
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$DefaultManagersHolder {
                public static class: java.lang.Class<any>
            }
            class EngineInputRecord extends sun.security.ssl.InputRecord {
                public static class: java.lang.Class<any>
            }
            class SSLAlgorithmConstraints$SupportedSignatureAlgorithmConstraints implements java.security.AlgorithmConstraints {
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: string, arg2: java.security.AlgorithmParameters): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.security.Key): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: string, arg2: java.security.Key, arg3: java.security.AlgorithmParameters): boolean
                public static class: java.lang.Class<any>
            }
            class ServerHandshaker$1 implements java.security.PrivilegedExceptionAction<javax.security.auth.Subject> {
                public run(): javax.security.auth.Subject
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            abstract class SSLContextImpl$AbstractTLSContext extends sun.security.ssl.SSLContextImpl {
                public static class: java.lang.Class<any>
            }
            class RSASignature extends java.security.SignatureSpi {
                public constructor()
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
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$DH_ServerKeyExchange extends sun.security.ssl.HandshakeMessage$ServerKeyExchange {
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$ClientHello extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class RSAClientKeyExchange extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class X509TrustManagerImpl extends javax.net.ssl.X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                public static class: java.lang.Class<any>
            }
            class ExtensionType {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class SSLAlgorithmDecomposer extends sun.security.util.AlgorithmDecomposer {
                public decompose(arg0: string): java.util.Set<java.lang.String>
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$ServerHello extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class DHCrypt$ParametersHolder$1 implements java.security.PrivilegedAction<java.lang.String> {
                public run(): string
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$Finished extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class Handshaker$DelegatedTask<E> implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class SSLSessionImpl extends javax.net.ssl.ExtendedSSLSession {
                public isValid(): boolean
                public getId(): byte[]
                public getSessionContext(): javax.net.ssl.SSLSessionContext
                public getCipherSuite(): string
                public getProtocol(): string
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
                public getPeerAddress(): java.net.InetAddress
                public getPeerHost(): string
                public getPeerPort(): int
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
                public static class: java.lang.Class<any>
            }
            class ClientHandshaker$2 {
                public static class: java.lang.Class<any>
            }
            abstract class TrustManagerFactoryImpl extends javax.net.ssl.TrustManagerFactorySpi {
                protected engineInit(arg0: java.security.KeyStore): void
                protected engineInit(arg0: javax.net.ssl.ManagerFactoryParameters): void
                protected engineGetTrustManagers(): javax.net.ssl.TrustManager[]
                public static class: java.lang.Class<any>
            }
            class MAC extends sun.security.ssl.Authenticator {
                public static class: java.lang.Class<any>
            }
            class CipherSuite$PRF extends java.lang.Enum<sun.security.ssl.CipherSuite$PRF> {
                public static P_NONE: sun.security.ssl.CipherSuite$PRF
                public static P_SHA256: sun.security.ssl.CipherSuite$PRF
                public static P_SHA384: sun.security.ssl.CipherSuite$PRF
                public static P_SHA512: sun.security.ssl.CipherSuite$PRF
                public static values(): sun.security.ssl.CipherSuite$PRF[]
                public static valueOf(arg0: string): sun.security.ssl.CipherSuite$PRF
                public static class: java.lang.Class<any>
            }
            class SSLSessionContextImpl implements javax.net.ssl.SSLSessionContext {
                public getSession(arg0: byte[]): javax.net.ssl.SSLSession
                public getIds(): java.util.Enumeration<byte[]>
                public setSessionTimeout(arg0: int): void
                public getSessionTimeout(): int
                public setSessionCacheSize(arg0: int): void
                public getSessionCacheSize(): int
                public static class: java.lang.Class<any>
            }
            class ClientHandshaker$1 implements java.security.PrivilegedExceptionAction<javax.security.auth.Subject> {
                public run(): javax.security.auth.Subject
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class SSLAlgorithmDecomposer$1 {
                public static class: java.lang.Class<any>
            }
            class AppOutputStream extends java.io.OutputStream {
                public write(arg0: byte[], arg1: int, arg2: int): void
                public write(arg0: int): void
                public close(): void
                public static class: java.lang.Class<any>
            }
            abstract class HandshakeMessage$ServerKeyExchange extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class EphemeralKeyManager$EphemeralKeyPair {
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$CertificateMsg extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
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
            class HandshakeOutStream extends java.io.OutputStream {
                public write(arg0: byte[], arg1: int, arg2: int): void
                public write(arg0: int): void
                public flush(): void
                public putBytes16(arg0: byte[]): void
                public static class: java.lang.Class<any>
            }
            class ServerHandshaker extends sun.security.ssl.Handshaker {
                public static class: java.lang.Class<any>
            }
            class SupportedEllipticPointFormatsExtension extends sun.security.ssl.HelloExtension {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class JsseJce$1 implements java.security.PrivilegedExceptionAction<java.lang.Void> {
                public run(): java.lang.Void
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class JsseJce$SunCertificates$1 implements java.security.PrivilegedAction<java.lang.Object> {
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class Authenticator {
                public static class: java.lang.Class<any>
            }
            class DHCrypt$ParametersHolder {
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$CertificateRequest extends sun.security.ssl.HandshakeMessage {
                public static class: java.lang.Class<any>
            }
            class Handshaker$1 implements java.security.PrivilegedExceptionAction<java.lang.Void> {
                public run(): java.lang.Void
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class DummyX509TrustManager extends javax.net.ssl.X509ExtendedTrustManager implements javax.net.ssl.X509TrustManager {
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string): void
                public getAcceptedIssuers(): java.security.cert.X509Certificate[]
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: java.net.Socket): void
                public checkClientTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                public checkServerTrusted(arg0: java.security.cert.X509Certificate[], arg1: string, arg2: javax.net.ssl.SSLEngine): void
                public static class: java.lang.Class<any>
            }
            class JsseJce {
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$DefaultSSLContext extends sun.security.ssl.SSLContextImpl$CustomizedTLSContext {
                public constructor()
                protected engineInit(arg0: javax.net.ssl.KeyManager[], arg1: javax.net.ssl.TrustManager[], arg2: java.security.SecureRandom): void
                public static class: java.lang.Class<any>
            }
            class SupportedEllipticCurvesExtension$NamedEllipticCurve extends java.lang.Enum<sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve> {
                public static T163_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T163_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T163_R2: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T193_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T193_R2: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T233_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T233_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T239_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T283_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T283_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T409_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T409_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T571_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static T571_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P160_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P160_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P160_R2: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P192_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P192_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P224_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P224_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P256_K1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P256_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P384_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static P521_R1: sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static values(): sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve[]
                public static valueOf(arg0: string): sun.security.ssl.SupportedEllipticCurvesExtension$NamedEllipticCurve
                public static class: java.lang.Class<any>
            }
            class Utilities {
                public static class: java.lang.Class<any>
            }
            class OutputRecord extends java.io.ByteArrayOutputStream implements sun.security.ssl.Record {
                public reset(): void
                public static class: java.lang.Class<any>
            }
            class JsseJce$EcAvailability {
                public static class: java.lang.Class<any>
            }
            class RenegotiationInfoExtension extends sun.security.ssl.HelloExtension {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class TrustManagerFactoryImpl$SimpleFactory extends sun.security.ssl.TrustManagerFactoryImpl {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class CipherSuite$MacAlg {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class SSLAlgorithmConstraints implements java.security.AlgorithmConstraints {
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: string, arg2: java.security.AlgorithmParameters): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: java.security.Key): boolean
                public permits(arg0: java.util.Set<java.security.CryptoPrimitive>, arg1: string, arg2: java.security.Key, arg3: java.security.AlgorithmParameters): boolean
                public static class: java.lang.Class<any>
            }
            class SSLContextImpl$TLS11Context extends sun.security.ssl.SSLContextImpl$AbstractTLSContext {
                public constructor()
                public static class: java.lang.Class<any>
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
            class SignatureAlgorithmsExtension extends sun.security.ssl.HelloExtension {
                public toString(): string
                public static class: java.lang.Class<any>
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
                public static class: java.lang.Class<any>
            }
            class X509KeyManagerImpl$KeyType {
                public static class: java.lang.Class<any>
            }
            class SSLSessionContextImpl$1 implements java.security.PrivilegedAction<java.lang.String> {
                public run(): string
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
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
                public static values(): sun.security.ssl.CipherSuite$KeyExchange[]
                public static valueOf(arg0: string): sun.security.ssl.CipherSuite$KeyExchange
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class SSLSocketFactoryImpl extends javax.net.ssl.SSLSocketFactory {
                public constructor()
                public createSocket(): java.net.Socket
                public createSocket(arg0: string, arg1: int): java.net.Socket
                public createSocket(arg0: java.net.Socket, arg1: string, arg2: int, arg3: boolean): java.net.Socket
                public createSocket(arg0: java.net.Socket, arg1: java.io.InputStream, arg2: boolean): java.net.Socket
                public createSocket(arg0: java.net.InetAddress, arg1: int): java.net.Socket
                public createSocket(arg0: string, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
                public createSocket(arg0: java.net.InetAddress, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
                public getDefaultCipherSuites(): java.lang.String[]
                public getSupportedCipherSuites(): java.lang.String[]
                public static class: java.lang.Class<any>
            }
            class TrustManagerFactoryImpl$PKIXFactory extends sun.security.ssl.TrustManagerFactoryImpl {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class X509KeyManagerImpl$CheckResult extends java.lang.Enum<sun.security.ssl.X509KeyManagerImpl$CheckResult> {
                public static OK: sun.security.ssl.X509KeyManagerImpl$CheckResult
                public static INSENSITIVE: sun.security.ssl.X509KeyManagerImpl$CheckResult
                public static EXPIRED: sun.security.ssl.X509KeyManagerImpl$CheckResult
                public static EXTENSION_MISMATCH: sun.security.ssl.X509KeyManagerImpl$CheckResult
                public static values(): sun.security.ssl.X509KeyManagerImpl$CheckResult[]
                public static valueOf(arg0: string): sun.security.ssl.X509KeyManagerImpl$CheckResult
                public static class: java.lang.Class<any>
            }
            class EngineWriter {
                public static class: java.lang.Class<any>
            }
            class HandshakeMessage$CertificateVerify$1 implements java.security.PrivilegedAction<java.lang.Object> {
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class CipherSuite$CipherType extends java.lang.Enum<sun.security.ssl.CipherSuite$CipherType> {
                public static STREAM_CIPHER: sun.security.ssl.CipherSuite$CipherType
                public static BLOCK_CIPHER: sun.security.ssl.CipherSuite$CipherType
                public static AEAD_CIPHER: sun.security.ssl.CipherSuite$CipherType
                public static values(): sun.security.ssl.CipherSuite$CipherType[]
                public static valueOf(arg0: string): sun.security.ssl.CipherSuite$CipherType
                public static class: java.lang.Class<any>
            }
        }
        namespace provider {
            class Sun extends java.security.Provider {
                public constructor()
                public static class: java.lang.Class<any>
            }
        }
    }
}
