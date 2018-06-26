declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                class ClientFactoryImpl implements javax.security.sasl.SaslClientFactory {
                    public constructor()
                    public createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
                    public getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
                    public static class: java.lang.Class<any>
                }
                abstract class CramMD5Base {
                    protected completed: boolean
                    protected aborted: boolean
                    protected pw: byte[]
                    protected static logger: java.util.logging.Logger
                    protected constructor()
                    public getMechanismName(): string
                    public isComplete(): boolean
                    public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                    public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                    public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                    public dispose(): void
                    protected clearPassword(): void
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
                class CramMD5Client extends com.sun.security.sasl.CramMD5Base implements javax.security.sasl.SaslClient {
                    public hasInitialResponse(): boolean
                    public evaluateChallenge(arg0: byte[]): byte[]
                    public static class: java.lang.Class<any>
                }
                class CramMD5Server extends com.sun.security.sasl.CramMD5Base implements javax.security.sasl.SaslServer {
                    public evaluateResponse(arg0: byte[]): byte[]
                    public getAuthorizationID(): string
                    public static class: java.lang.Class<any>
                }
                class ExternalClient implements javax.security.sasl.SaslClient {
                    public getMechanismName(): string
                    public hasInitialResponse(): boolean
                    public dispose(): void
                    public evaluateChallenge(arg0: byte[]): byte[]
                    public isComplete(): boolean
                    public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                    public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                    public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PlainClient implements javax.security.sasl.SaslClient {
                    public getMechanismName(): string
                    public hasInitialResponse(): boolean
                    public dispose(): void
                    public evaluateChallenge(arg0: byte[]): byte[]
                    public isComplete(): boolean
                    public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                    public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                    public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
                class Provider extends java.security.Provider {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class ServerFactoryImpl implements javax.security.sasl.SaslServerFactory {
                    public constructor()
                    public createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
                    public getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
                    public static class: java.lang.Class<any>
                }
                namespace digest {
                    abstract class DigestMD5Base extends com.sun.security.sasl.util.AbstractSaslImpl {
                        protected static MAX_CHALLENGE_LENGTH: int
                        protected static MAX_RESPONSE_LENGTH: int
                        protected static DEFAULT_MAXBUF: int
                        protected static DES3: int
                        protected static RC4: int
                        protected static DES: int
                        protected static RC4_56: int
                        protected static RC4_40: int
                        protected static CIPHER_TOKENS: java.lang.String[]
                        protected static DES_3_STRENGTH: byte
                        protected static RC4_STRENGTH: byte
                        protected static DES_STRENGTH: byte
                        protected static RC4_56_STRENGTH: byte
                        protected static RC4_40_STRENGTH: byte
                        protected static UNSET: byte
                        protected static CIPHER_MASKS: byte[]
                        protected static EMPTY_BYTE_ARRAY: byte[]
                        protected step: int
                        protected cbh: javax.security.auth.callback.CallbackHandler
                        protected secCtx: com.sun.security.sasl.digest.SecurityCtx
                        protected H_A1: byte[]
                        protected nonce: byte[]
                        protected negotiatedStrength: string
                        protected negotiatedCipher: string
                        protected negotiatedQop: string
                        protected negotiatedRealm: string
                        protected useUTF8: boolean
                        protected encoding: string
                        protected digestUri: string
                        protected authzid: string
                        protected constructor(arg0: java.util.Map<java.lang.String, any>, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda)
                        public getMechanismName(): string
                        public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public dispose(): void
                        public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                        protected static generateNonce(): byte[]
                        protected static writeQuotedStringValue(arg0: java.io.ByteArrayOutputStream, arg1: byte[]): void
                        protected static quotedStringValue(arg0: java.lang.String | string): string
                        protected binaryToHex(arg0: byte[]): byte[]
                        protected stringToByte_8859_1(arg0: java.lang.String | string): byte[]
                        protected static getPlatformCiphers(): byte[]
                        protected generateResponseValue(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: char[], arg6: byte[], arg7: byte[], arg8: int, arg9: byte[]): byte[]
                        protected static nonceCountToHex(arg0: int): string
                        protected static parseDirectives(arg0: byte[], arg1: java.lang.String[], arg2: java.util.List<byte[]>, arg3: int): byte[][]
                        public static class: java.lang.Class<any>
                    }
                    class DigestMD5Client extends com.sun.security.sasl.digest.DigestMD5Base implements javax.security.sasl.SaslClient {
                        public hasInitialResponse(): boolean
                        public evaluateChallenge(arg0: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class DigestMD5Server extends com.sun.security.sasl.digest.DigestMD5Base implements javax.security.sasl.SaslServer {
                        public evaluateResponse(arg0: byte[]): byte[]
                        public getAuthorizationID(): string
                        public static class: java.lang.Class<any>
                    }
                    class FactoryImpl implements javax.security.sasl.SaslClientFactory , javax.security.sasl.SaslServerFactory {
                        public constructor()
                        public createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
                        public createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
                        public getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
                        public static class: java.lang.Class<any>
                    }
                    interface SecurityCtx {
                        wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                    }
                }
                namespace ntlm {
                    class FactoryImpl implements javax.security.sasl.SaslClientFactory , javax.security.sasl.SaslServerFactory {
                        public constructor()
                        public createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
                        public createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
                        public getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
                        public static class: java.lang.Class<any>
                    }
                    class NTLMClient implements javax.security.sasl.SaslClient {
                        public getMechanismName(): string
                        public isComplete(): boolean
                        public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                        public dispose(): void
                        public hasInitialResponse(): boolean
                        public evaluateChallenge(arg0: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class NTLMServer implements javax.security.sasl.SaslServer {
                        public getMechanismName(): string
                        public evaluateResponse(arg0: byte[]): byte[]
                        public isComplete(): boolean
                        public getAuthorizationID(): string
                        public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                        public dispose(): void
                        public static class: java.lang.Class<any>
                    }
                }
                namespace util {
                    abstract class AbstractSaslImpl {
                        protected completed: boolean
                        protected privacy: boolean
                        protected integrity: boolean
                        protected qop: byte[]
                        protected allQop: byte
                        protected strength: byte[]
                        protected sendMaxBufSize: int
                        protected recvMaxBufSize: int
                        protected rawSendSize: int
                        protected myClassName: string
                        protected static MAX_SEND_BUF: string
                        protected static logger: java.util.logging.Logger
                        protected static NO_PROTECTION: byte
                        protected static INTEGRITY_ONLY_PROTECTION: byte
                        protected static PRIVACY_PROTECTION: byte
                        protected static LOW_STRENGTH: byte
                        protected static MEDIUM_STRENGTH: byte
                        protected static HIGH_STRENGTH: byte
                        protected constructor(arg0: java.util.Map<java.lang.String, any>, arg1: java.lang.String | string)
                        public isComplete(): boolean
                        public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                        protected static combineMasks(arg0: byte[]): byte
                        protected static findPreferredMask(arg0: byte, arg1: byte[]): byte
                        protected static parseQop(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: boolean): byte[]
                        protected static traceOutput(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: byte[]): void
                        protected static traceOutput(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: byte[], arg4: int, arg5: int): void
                        protected static networkByteOrderToInt(arg0: byte[], arg1: int, arg2: int): int
                        protected static intToNetworkByteOrder(arg0: int, arg1: byte[], arg2: int, arg3: int): void
                        public static class: java.lang.Class<any>
                    }
                    class PolicyUtils {
                        public static NOPLAINTEXT: int
                        public static NOACTIVE: int
                        public static NODICTIONARY: int
                        public static FORWARD_SECRECY: int
                        public static NOANONYMOUS: int
                        public static PASS_CREDENTIALS: int
                        public static checkPolicy(arg0: int, arg1: java.util.Map<java.lang.String, any>): boolean
                        public static filterMechs(arg0: java.lang.String[], arg1: int[], arg2: java.util.Map<java.lang.String, any>): java.lang.String[]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
declare namespace javax {
    namespace security {
        namespace sasl {
            class AuthenticationException extends javax.security.sasl.SaslException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public static class: java.lang.Class<any>
            }
            class AuthorizeCallback implements javax.security.auth.callback.Callback , java.io.Serializable {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public getAuthenticationID(): string
                public getAuthorizationID(): string
                public isAuthorized(): boolean
                public setAuthorized(arg0: boolean): void
                public getAuthorizedID(): string
                public setAuthorizedID(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
            class RealmCallback extends javax.security.auth.callback.TextInputCallback {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class RealmChoiceCallback extends javax.security.auth.callback.ChoiceCallback {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: int, arg3: boolean)
                public static class: java.lang.Class<any>
            }
            class Sasl {
                public static QOP: string
                public static STRENGTH: string
                public static SERVER_AUTH: string
                public static BOUND_SERVER_NAME: string
                public static MAX_BUFFER: string
                public static RAW_SEND_SIZE: string
                public static REUSE: string
                public static POLICY_NOPLAINTEXT: string
                public static POLICY_NOACTIVE: string
                public static POLICY_NODICTIONARY: string
                public static POLICY_NOANONYMOUS: string
                public static POLICY_FORWARD_SECRECY: string
                public static POLICY_PASS_CREDENTIALS: string
                public static CREDENTIALS: string
                public static createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
                public static createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
                public static getSaslClientFactories(): java.util.Enumeration<javax.security.sasl.SaslClientFactory>
                public static getSaslServerFactories(): java.util.Enumeration<javax.security.sasl.SaslServerFactory>
                public static class: java.lang.Class<any>
            }
            interface SaslClient {
                getMechanismName(): string
                hasInitialResponse(): boolean
                evaluateChallenge(arg0: byte[]): byte[]
                isComplete(): boolean
                unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                dispose(): void
            }
            interface SaslClientFactory {
                createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
                getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
            }
            class SaslException extends java.io.IOException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public getCause(): java.lang.Throwable
                public initCause(arg0: java.lang.Throwable): java.lang.Throwable
                public toString(): string
                public static class: java.lang.Class<any>
            }
            interface SaslServer {
                getMechanismName(): string
                evaluateResponse(arg0: byte[]): byte[]
                isComplete(): boolean
                getAuthorizationID(): string
                unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                dispose(): void
            }
            interface SaslServerFactory {
                createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
                getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
            }
        }
    }
}
