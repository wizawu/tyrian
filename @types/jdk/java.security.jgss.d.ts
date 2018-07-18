declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
                class DelegationPermission extends java.security.BasicPermission implements java.io.Serializable {
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                    public implies(arg0: java.security.Permission): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public newPermissionCollection(): java.security.PermissionCollection
                    public static class: java.lang.Class<any>
                }
                class JavaxSecurityAuthKerberosAccessImpl implements sun.security.krb5.JavaxSecurityAuthKerberosAccess {
                    public keyTabTakeSnapshot(arg0: javax.security.auth.kerberos.KeyTab): sun.security.krb5.internal.ktab.KeyTab
                    public static class: java.lang.Class<any>
                }
                class JavaxSecurityAuthKerberosAccessImpl$$Lambda implements sun.security.krb5.JavaxSecurityAuthKerberosAccess {
                    public (arg0: javax.security.auth.kerberos.KeyTab): sun.security.krb5.internal.ktab.KeyTab
                }
                class KerberosKey implements javax.crypto.SecretKey , javax.security.auth.Destroyable {
                    public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: byte[], arg2: int, arg3: int)
                    public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: char[], arg2: java.lang.String | string)
                    public getPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
                    public getVersionNumber(): int
                    public getKeyType(): int
                    public getAlgorithm(): string
                    public getFormat(): string
                    public getEncoded(): byte[]
                    public destroy(): void
                    public isDestroyed(): boolean
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class KerberosPrincipal implements java.security.Principal , java.io.Serializable {
                    public static KRB_NT_UNKNOWN: int
                    public static KRB_NT_PRINCIPAL: int
                    public static KRB_NT_SRV_INST: int
                    public static KRB_NT_SRV_HST: int
                    public static KRB_NT_SRV_XHST: int
                    public static KRB_NT_UID: int
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: int)
                    public getRealm(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public getName(): string
                    public getNameType(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class KerberosTicket implements javax.security.auth.Destroyable , javax.security.auth.Refreshable , java.io.Serializable {
                    public constructor(arg0: byte[], arg1: javax.security.auth.kerberos.KerberosPrincipal, arg2: javax.security.auth.kerberos.KerberosPrincipal, arg3: byte[], arg4: int, arg5: boolean[], arg6: java.util.Date, arg7: java.util.Date, arg8: java.util.Date, arg9: java.util.Date, arg10: java.net.InetAddress[])
                    public getClient(): javax.security.auth.kerberos.KerberosPrincipal
                    public getServer(): javax.security.auth.kerberos.KerberosPrincipal
                    public getSessionKey(): javax.crypto.SecretKey
                    public getSessionKeyType(): int
                    public isForwardable(): boolean
                    public isForwarded(): boolean
                    public isProxiable(): boolean
                    public isProxy(): boolean
                    public isPostdated(): boolean
                    public isRenewable(): boolean
                    public isInitial(): boolean
                    public getFlags(): boolean[]
                    public getAuthTime(): java.util.Date
                    public getStartTime(): java.util.Date
                    public getEndTime(): java.util.Date
                    public getRenewTill(): java.util.Date
                    public getClientAddresses(): java.net.InetAddress[]
                    public getEncoded(): byte[]
                    public isCurrent(): boolean
                    public refresh(): void
                    public destroy(): void
                    public isDestroyed(): boolean
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class KeyImpl implements javax.crypto.SecretKey , javax.security.auth.Destroyable , java.io.Serializable {
                    public constructor(arg0: byte[], arg1: int)
                    public constructor(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: char[], arg2: java.lang.String | string)
                    public getKeyType(): int
                    public getAlgorithm(): string
                    public getFormat(): string
                    public getEncoded(): byte[]
                    public destroy(): void
                    public isDestroyed(): boolean
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                class KeyTab {
                    public static getInstance(arg0: java.io.File): javax.security.auth.kerberos.KeyTab
                    public static getUnboundInstance(arg0: java.io.File): javax.security.auth.kerberos.KeyTab
                    public static getInstance(arg0: javax.security.auth.kerberos.KerberosPrincipal, arg1: java.io.File): javax.security.auth.kerberos.KeyTab
                    public static getInstance(): javax.security.auth.kerberos.KeyTab
                    public static getUnboundInstance(): javax.security.auth.kerberos.KeyTab
                    public static getInstance(arg0: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KeyTab
                    public getKeys(arg0: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KerberosKey[]
                    public exists(): boolean
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public getPrincipal(): javax.security.auth.kerberos.KerberosPrincipal
                    public isBound(): boolean
                    public static class: java.lang.Class<any>
                }
                class ServicePermission extends java.security.Permission implements java.io.Serializable {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                    public implies(arg0: java.security.Permission): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getActions(): string
                    public newPermissionCollection(): java.security.PermissionCollection
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
declare namespace org {
    namespace ietf {
        namespace jgss {
            class ChannelBinding {
                public constructor(arg0: java.net.InetAddress, arg1: java.net.InetAddress, arg2: byte[])
                public constructor(arg0: byte[])
                public getInitiatorAddress(): java.net.InetAddress
                public getAcceptorAddress(): java.net.InetAddress
                public getApplicationData(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            interface GSSContext {
                DEFAULT_LIFETIME: int
                INDEFINITE_LIFETIME: int
                initSecContext(arg0: byte[], arg1: int, arg2: int): byte[]
                initSecContext(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): int
                acceptSecContext(arg0: byte[], arg1: int, arg2: int): byte[]
                acceptSecContext(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                isEstablished(): boolean
                dispose(): void
                getWrapSizeLimit(arg0: int, arg1: boolean, arg2: int): int
                wrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                wrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                unwrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                unwrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                getMIC(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                getMIC(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                verifyMIC(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: org.ietf.jgss.MessageProp): void
                verifyMIC(arg0: java.io.InputStream, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp): void
                export(): byte[]
                requestMutualAuth(arg0: boolean): void
                requestReplayDet(arg0: boolean): void
                requestSequenceDet(arg0: boolean): void
                requestCredDeleg(arg0: boolean): void
                requestAnonymity(arg0: boolean): void
                requestConf(arg0: boolean): void
                requestInteg(arg0: boolean): void
                requestLifetime(arg0: int): void
                setChannelBinding(arg0: org.ietf.jgss.ChannelBinding): void
                getCredDelegState(): boolean
                getMutualAuthState(): boolean
                getReplayDetState(): boolean
                getSequenceDetState(): boolean
                getAnonymityState(): boolean
                isTransferable(): boolean
                isProtReady(): boolean
                getConfState(): boolean
                getIntegState(): boolean
                getLifetime(): int
                getSrcName(): org.ietf.jgss.GSSName
                getTargName(): org.ietf.jgss.GSSName
                getMech(): org.ietf.jgss.Oid
                getDelegCred(): org.ietf.jgss.GSSCredential
                isInitiator(): boolean
            }
            interface GSSCredential extends java.lang.Cloneable {
                INITIATE_AND_ACCEPT: int
                INITIATE_ONLY: int
                ACCEPT_ONLY: int
                DEFAULT_LIFETIME: int
                INDEFINITE_LIFETIME: int
                dispose(): void
                getName(): org.ietf.jgss.GSSName
                getName(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                getRemainingLifetime(): int
                getRemainingInitLifetime(arg0: org.ietf.jgss.Oid): int
                getRemainingAcceptLifetime(arg0: org.ietf.jgss.Oid): int
                getUsage(): int
                getUsage(arg0: org.ietf.jgss.Oid): int
                getMechs(): org.ietf.jgss.Oid[]
                add(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: int, arg3: org.ietf.jgss.Oid, arg4: int): void
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
            }
            class GSSException extends java.lang.Exception {
                public static BAD_BINDINGS: int
                public static BAD_MECH: int
                public static BAD_NAME: int
                public static BAD_NAMETYPE: int
                public static BAD_STATUS: int
                public static BAD_MIC: int
                public static CONTEXT_EXPIRED: int
                public static CREDENTIALS_EXPIRED: int
                public static DEFECTIVE_CREDENTIAL: int
                public static DEFECTIVE_TOKEN: int
                public static FAILURE: int
                public static NO_CONTEXT: int
                public static NO_CRED: int
                public static BAD_QOP: int
                public static UNAUTHORIZED: int
                public static UNAVAILABLE: int
                public static DUPLICATE_ELEMENT: int
                public static NAME_NOT_MN: int
                public static DUPLICATE_TOKEN: int
                public static OLD_TOKEN: int
                public static UNSEQ_TOKEN: int
                public static GAP_TOKEN: int
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: int, arg2: java.lang.String | string)
                public getMajor(): int
                public getMinor(): int
                public getMajorString(): string
                public getMinorString(): string
                public setMinor(arg0: int, arg1: java.lang.String | string): void
                public toString(): string
                public getMessage(): string
                public static class: java.lang.Class<any>
            }
            abstract class GSSManager {
                public constructor()
                public static getInstance(): org.ietf.jgss.GSSManager
                public getMechs(): org.ietf.jgss.Oid[]
                public getNamesForMech(arg0: org.ietf.jgss.Oid): org.ietf.jgss.Oid[]
                public getMechsForName(arg0: org.ietf.jgss.Oid): org.ietf.jgss.Oid[]
                public createName(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public createName(arg0: byte[], arg1: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public createName(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public createName(arg0: byte[], arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public createCredential(arg0: int): org.ietf.jgss.GSSCredential
                public createCredential(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: org.ietf.jgss.Oid, arg3: int): org.ietf.jgss.GSSCredential
                public createCredential(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: org.ietf.jgss.Oid[], arg3: int): org.ietf.jgss.GSSCredential
                public createContext(arg0: org.ietf.jgss.GSSName, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.GSSCredential, arg3: int): org.ietf.jgss.GSSContext
                public createContext(arg0: org.ietf.jgss.GSSCredential): org.ietf.jgss.GSSContext
                public createContext(arg0: byte[]): org.ietf.jgss.GSSContext
                public addProviderAtFront(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
                public addProviderAtEnd(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
                public static class: java.lang.Class<any>
            }
            interface GSSName {
                NT_HOSTBASED_SERVICE: org.ietf.jgss.Oid
                NT_USER_NAME: org.ietf.jgss.Oid
                NT_MACHINE_UID_NAME: org.ietf.jgss.Oid
                NT_STRING_UID_NAME: org.ietf.jgss.Oid
                NT_ANONYMOUS: org.ietf.jgss.Oid
                NT_EXPORT_NAME: org.ietf.jgss.Oid
                equals(arg0: org.ietf.jgss.GSSName): boolean
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
                canonicalize(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                export(): byte[]
                toString(): string
                getStringNameType(): org.ietf.jgss.Oid
                isAnonymous(): boolean
                isMN(): boolean
            }
            class MessageProp {
                public constructor(arg0: boolean)
                public constructor(arg0: int, arg1: boolean)
                public getQOP(): int
                public getPrivacy(): boolean
                public setQOP(arg0: int): void
                public setPrivacy(arg0: boolean): void
                public isDuplicateToken(): boolean
                public isOldToken(): boolean
                public isUnseqToken(): boolean
                public isGapToken(): boolean
                public getMinorStatus(): int
                public getMinorString(): string
                public setSupplementaryStates(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: int, arg5: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
            class Oid {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: byte[])
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public getDER(): byte[]
                public containedIn(arg0: org.ietf.jgss.Oid[]): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace sun {
    namespace net {
        namespace www {
            namespace protocol {
                namespace http {
                    namespace spnego {
                        class NegotiateCallbackHandler implements javax.security.auth.callback.CallbackHandler {
                            public constructor(arg0: sun.net.www.protocol.http.HttpCallerInfo)
                            public handle(arg0: javax.security.auth.callback.Callback[]): void
                            public static class: java.lang.Class<any>
                        }
                        class NegotiateCallbackHandler$$Lambda implements javax.security.auth.callback.CallbackHandler {
                            public constructor(arg0: sun.net.www.protocol.http.HttpCallerInfo)
                        }
                        class NegotiatorImpl extends sun.net.www.protocol.http.Negotiator {
                            public constructor(arg0: sun.net.www.protocol.http.HttpCallerInfo)
                            public firstToken(): byte[]
                            public nextToken(arg0: byte[]): byte[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
    namespace security {
        namespace jgss {
            namespace krb5 {
                class AcceptSecContextToken extends sun.security.jgss.krb5.InitialToken {
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: sun.security.krb5.KrbApReq)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: sun.security.krb5.Credentials, arg2: sun.security.krb5.KrbApReq, arg3: java.io.InputStream)
                    public encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class CipherHelper {
                    public static class: java.lang.Class<any>
                }
                class InitSecContextToken extends sun.security.jgss.krb5.InitialToken {
                    public getKrbApReq(): sun.security.krb5.KrbApReq
                    public encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                abstract class InitialToken extends sun.security.jgss.krb5.Krb5Token {
                    public encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class Krb5AcceptCredential implements sun.security.jgss.krb5.Krb5CredElement {
                    public getName(): sun.security.jgss.spi.GSSNameSpi
                    public getInitLifetime(): int
                    public getAcceptLifetime(): int
                    public isInitiatorCredential(): boolean
                    public isAcceptorCredential(): boolean
                    public getMechanism(): org.ietf.jgss.Oid
                    public getProvider(): java.security.Provider
                    public getKrb5EncryptionKeys(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[]
                    public dispose(): void
                    public destroy(): void
                    public impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
                    public static class: java.lang.Class<any>
                }
                class Krb5Context implements sun.security.jgss.spi.GSSContextSpi {
                    public static SESSION_KEY: int
                    public static INITIATOR_SUBKEY: int
                    public static ACCEPTOR_SUBKEY: int
                    public constructor(arg0: sun.security.jgss.GSSCaller, arg1: byte[])
                    public isTransferable(): boolean
                    public getLifetime(): int
                    public requestLifetime(arg0: int): void
                    public requestConf(arg0: boolean): void
                    public getConfState(): boolean
                    public requestInteg(arg0: boolean): void
                    public getIntegState(): boolean
                    public requestCredDeleg(arg0: boolean): void
                    public getCredDelegState(): boolean
                    public requestMutualAuth(arg0: boolean): void
                    public getMutualAuthState(): boolean
                    public requestReplayDet(arg0: boolean): void
                    public getReplayDetState(): boolean
                    public requestSequenceDet(arg0: boolean): void
                    public getSequenceDetState(): boolean
                    public requestDelegPolicy(arg0: boolean): void
                    public getDelegPolicyState(): boolean
                    public requestAnonymity(arg0: boolean): void
                    public getAnonymityState(): boolean
                    public getKeySrc(): int
                    public setChannelBinding(arg0: org.ietf.jgss.ChannelBinding): void
                    public getMech(): org.ietf.jgss.Oid
                    public getSrcName(): sun.security.jgss.spi.GSSNameSpi
                    public getTargName(): sun.security.jgss.spi.GSSNameSpi
                    public getDelegCred(): sun.security.jgss.spi.GSSCredentialSpi
                    public isInitiator(): boolean
                    public isProtReady(): boolean
                    public initSecContext(arg0: java.io.InputStream, arg1: int): byte[]
                    public isEstablished(): boolean
                    public acceptSecContext(arg0: java.io.InputStream, arg1: int): byte[]
                    public getWrapSizeLimit(arg0: int, arg1: boolean, arg2: int): int
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: org.ietf.jgss.MessageProp): int
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: java.io.OutputStream | java.io.OutputStream$$Lambda, arg4: org.ietf.jgss.MessageProp): void
                    public wrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public unwrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public unwrap(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: org.ietf.jgss.MessageProp): int
                    public unwrap(arg0: java.io.InputStream, arg1: byte[], arg2: int, arg3: org.ietf.jgss.MessageProp): int
                    public unwrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public getMIC(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public getMIC(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public verifyMIC(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: org.ietf.jgss.MessageProp): void
                    public verifyMIC(arg0: java.io.InputStream, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp): void
                    public export(): byte[]
                    public dispose(): void
                    public getProvider(): java.security.Provider
                    public inquireSecContext(arg0: com.sun.security.jgss.InquireType): java.lang.Object
                    public setTktFlags(arg0: boolean[]): void
                    public setAuthTime(arg0: java.lang.String | string): void
                    public setAuthzData(arg0: com.sun.security.jgss.AuthorizationDataEntry[]): void
                    public static class: java.lang.Class<any>
                }
                interface Krb5CredElement extends sun.security.jgss.spi.GSSCredentialSpi {
                }
                class Krb5InitCredential extends javax.security.auth.kerberos.KerberosTicket implements sun.security.jgss.krb5.Krb5CredElement {
                    public getName(): sun.security.jgss.spi.GSSNameSpi
                    public getInitLifetime(): int
                    public getAcceptLifetime(): int
                    public isInitiatorCredential(): boolean
                    public isAcceptorCredential(): boolean
                    public getMechanism(): org.ietf.jgss.Oid
                    public getProvider(): java.security.Provider
                    public dispose(): void
                    public impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
                    public static class: java.lang.Class<any>
                }
                class Krb5MechFactory implements sun.security.jgss.spi.MechanismFactory {
                    public constructor(arg0: sun.security.jgss.GSSCaller)
                    public getNameElement(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    public getNameElement(arg0: byte[], arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    public getCredentialElement(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: int, arg2: int, arg3: int): sun.security.jgss.spi.GSSCredentialSpi
                    public static checkInitCredPermission(arg0: sun.security.jgss.krb5.Krb5NameElement): void
                    public static checkAcceptCredPermission(arg0: sun.security.jgss.krb5.Krb5NameElement, arg1: sun.security.jgss.spi.GSSNameSpi): void
                    public getMechanismContext(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: sun.security.jgss.spi.GSSCredentialSpi, arg2: int): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismContext(arg0: sun.security.jgss.spi.GSSCredentialSpi): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismContext(arg0: byte[]): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismOid(): org.ietf.jgss.Oid
                    public getProvider(): java.security.Provider
                    public getNameTypes(): org.ietf.jgss.Oid[]
                    public static class: java.lang.Class<any>
                }
                class Krb5NameElement implements sun.security.jgss.spi.GSSNameSpi {
                    public getKrb5PrincipalName(): sun.security.krb5.PrincipalName
                    public equals(arg0: sun.security.jgss.spi.GSSNameSpi): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public export(): byte[]
                    public getMechanism(): org.ietf.jgss.Oid
                    public toString(): string
                    public getGSSNameType(): org.ietf.jgss.Oid
                    public getStringNameType(): org.ietf.jgss.Oid
                    public isAnonymousName(): boolean
                    public getProvider(): java.security.Provider
                    public static class: java.lang.Class<any>
                }
                class Krb5ProxyCredential implements sun.security.jgss.krb5.Krb5CredElement {
                    public self: sun.security.jgss.krb5.Krb5InitCredential
                    public tkt: sun.security.krb5.internal.Ticket
                    public getName(): sun.security.jgss.krb5.Krb5NameElement
                    public getInitLifetime(): int
                    public getAcceptLifetime(): int
                    public isInitiatorCredential(): boolean
                    public isAcceptorCredential(): boolean
                    public getMechanism(): org.ietf.jgss.Oid
                    public getProvider(): java.security.Provider
                    public dispose(): void
                    public impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
                    public getName(): sun.security.jgss.spi.GSSNameSpi
                    public static class: java.lang.Class<any>
                }
                abstract class Krb5Token extends sun.security.jgss.GSSToken {
                    public static AP_REQ_ID: int
                    public static AP_REP_ID: int
                    public static ERR_ID: int
                    public static MIC_ID: int
                    public static WRAP_ID: int
                    public static MIC_ID_v2: int
                    public static WRAP_ID_v2: int
                    public static OID: sun.security.util.ObjectIdentifier
                    public static getTokenName(arg0: int): string
                    public static class: java.lang.Class<any>
                }
                class Krb5Util {
                    public static getTicketFromSubjectAndTgs(arg0: sun.security.jgss.GSSCaller, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.security.AccessControlContext): javax.security.auth.kerberos.KerberosTicket
                    public static getSubject(arg0: sun.security.jgss.GSSCaller, arg1: java.security.AccessControlContext): javax.security.auth.Subject
                    public static getServiceCreds(arg0: sun.security.jgss.GSSCaller, arg1: java.lang.String | string, arg2: java.security.AccessControlContext): sun.security.jgss.krb5.ServiceCreds
                    public static credsToTicket(arg0: sun.security.krb5.Credentials): javax.security.auth.kerberos.KerberosTicket
                    public static ticketToCreds(arg0: javax.security.auth.kerberos.KerberosTicket): sun.security.krb5.Credentials
                    public static snapshotFromJavaxKeyTab(arg0: javax.security.auth.kerberos.KeyTab): sun.security.krb5.internal.ktab.KeyTab
                    public static keysFromJavaxKeyTab(arg0: javax.security.auth.kerberos.KeyTab, arg1: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[]
                    public static class: java.lang.Class<any>
                }
                abstract class MessageToken extends sun.security.jgss.krb5.Krb5Token {
                    public getGSSHeader(): sun.security.jgss.GSSHeader
                    public getTokenId(): int
                    public getEncSeqNumber(): byte[]
                    public getChecksum(): byte[]
                    public getConfState(): boolean
                    public genSignAndSeqNumber(arg0: org.ietf.jgss.MessageProp, arg1: byte[], arg2: byte[], arg3: int, arg4: int, arg5: byte[]): void
                    public verifySignAndSeqNumber(arg0: byte[], arg1: byte[], arg2: int, arg3: int, arg4: byte[]): boolean
                    public getSequenceNumber(): int
                    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    protected getKrb5TokenSize(): int
                    protected getTokenSize(): int
                    protected static getTokenSize(arg0: sun.security.jgss.krb5.CipherHelper): int
                    protected getSealAlg(arg0: boolean, arg1: int): int
                    protected getSgnAlg(arg0: int): int
                    public static class: java.lang.Class<any>
                }
                abstract class MessageToken_v2 extends sun.security.jgss.krb5.Krb5Token {
                    protected static TOKEN_HEADER_SIZE: int
                    protected static CONFOUNDER_SIZE: int
                    protected tokenData: byte[]
                    protected tokenDataLen: int
                    public getTokenId(): int
                    public getKeyUsage(): int
                    public getConfState(): boolean
                    public genSignAndSeqNumber(arg0: org.ietf.jgss.MessageProp, arg1: byte[], arg2: int, arg3: int): void
                    public verifySign(arg0: byte[], arg1: int, arg2: int): boolean
                    public getSequenceNumber(): int
                    protected encodeHeader(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    protected getTokenHeader(): byte[]
                    public static class: java.lang.Class<any>
                }
                class MicToken extends sun.security.jgss.krb5.MessageToken {
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: byte[], arg2: int, arg3: int, arg4: org.ietf.jgss.MessageProp)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp)
                    public verify(arg0: byte[], arg1: int, arg2: int): void
                    public verify(arg0: java.io.InputStream): void
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: byte[], arg3: int, arg4: int)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: java.io.InputStream)
                    protected getSealAlg(arg0: boolean, arg1: int): int
                    public encode(arg0: byte[], arg1: int): int
                    public encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class MicToken_v2 extends sun.security.jgss.krb5.MessageToken_v2 {
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: byte[], arg2: int, arg3: int, arg4: org.ietf.jgss.MessageProp)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp)
                    public verify(arg0: byte[], arg1: int, arg2: int): void
                    public verify(arg0: java.io.InputStream): void
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: byte[], arg3: int, arg4: int)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: java.io.InputStream)
                    public encode(): byte[]
                    public encode(arg0: byte[], arg1: int): int
                    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public static class: java.lang.Class<any>
                }
                class ServiceCreds {
                    public static getInstance(arg0: javax.security.auth.Subject, arg1: java.lang.String | string): sun.security.jgss.krb5.ServiceCreds
                    public getName(): string
                    public getKKeys(): javax.security.auth.kerberos.KerberosKey[]
                    public getKKeys(arg0: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KerberosKey[]
                    public getEKeys(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[]
                    public getInitCred(): sun.security.krb5.Credentials
                    public destroy(): void
                    public static class: java.lang.Class<any>
                }
                class SubjectComber {
                    public static class: java.lang.Class<any>
                }
                class WrapToken extends sun.security.jgss.krb5.MessageToken {
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: byte[], arg2: int, arg3: int, arg4: org.ietf.jgss.MessageProp)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp)
                    public getData(): byte[]
                    public getData(arg0: byte[], arg1: int): int
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: byte[], arg3: int, arg4: int)
                    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public encode(): byte[]
                    public encode(arg0: byte[], arg1: int): int
                    protected getKrb5TokenSize(): int
                    protected getSealAlg(arg0: boolean, arg1: int): int
                    public static class: java.lang.Class<any>
                }
                class WrapToken_v2 extends sun.security.jgss.krb5.MessageToken_v2 {
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: byte[], arg2: int, arg3: int, arg4: org.ietf.jgss.MessageProp)
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp)
                    public getData(): byte[]
                    public getData(arg0: byte[], arg1: int): int
                    public constructor(arg0: sun.security.jgss.krb5.Krb5Context, arg1: org.ietf.jgss.MessageProp, arg2: byte[], arg3: int, arg4: int)
                    public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public encode(): byte[]
                    public encode(arg0: byte[], arg1: int): int
                    public static class: java.lang.Class<any>
                }
            }
            namespace spi {
                interface GSSContextSpi {
                    getProvider(): java.security.Provider
                    requestLifetime(arg0: int): void
                    requestMutualAuth(arg0: boolean): void
                    requestReplayDet(arg0: boolean): void
                    requestSequenceDet(arg0: boolean): void
                    requestCredDeleg(arg0: boolean): void
                    requestAnonymity(arg0: boolean): void
                    requestConf(arg0: boolean): void
                    requestInteg(arg0: boolean): void
                    requestDelegPolicy(arg0: boolean): void
                    setChannelBinding(arg0: org.ietf.jgss.ChannelBinding): void
                    getCredDelegState(): boolean
                    getMutualAuthState(): boolean
                    getReplayDetState(): boolean
                    getSequenceDetState(): boolean
                    getAnonymityState(): boolean
                    getDelegPolicyState(): boolean
                    isTransferable(): boolean
                    isProtReady(): boolean
                    isInitiator(): boolean
                    getConfState(): boolean
                    getIntegState(): boolean
                    getLifetime(): int
                    isEstablished(): boolean
                    getSrcName(): sun.security.jgss.spi.GSSNameSpi
                    getTargName(): sun.security.jgss.spi.GSSNameSpi
                    getMech(): org.ietf.jgss.Oid
                    getDelegCred(): sun.security.jgss.spi.GSSCredentialSpi
                    initSecContext(arg0: java.io.InputStream, arg1: int): byte[]
                    acceptSecContext(arg0: java.io.InputStream, arg1: int): byte[]
                    getWrapSizeLimit(arg0: int, arg1: boolean, arg2: int): int
                    wrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    wrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    unwrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    unwrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    getMIC(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    getMIC(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    verifyMIC(arg0: java.io.InputStream, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp): void
                    verifyMIC(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: org.ietf.jgss.MessageProp): void
                    export(): byte[]
                    dispose(): void
                    inquireSecContext(arg0: com.sun.security.jgss.InquireType): java.lang.Object
                }
                interface GSSCredentialSpi {
                    getProvider(): java.security.Provider
                    dispose(): void
                    getName(): sun.security.jgss.spi.GSSNameSpi
                    getInitLifetime(): int
                    getAcceptLifetime(): int
                    isInitiatorCredential(): boolean
                    isAcceptorCredential(): boolean
                    getMechanism(): org.ietf.jgss.Oid
                    impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
                }
                interface GSSNameSpi {
                    getProvider(): java.security.Provider
                    equals(arg0: sun.security.jgss.spi.GSSNameSpi): boolean
                    equals(arg0: java.lang.Object): boolean
                    hashCode(): int
                    export(): byte[]
                    getMechanism(): org.ietf.jgss.Oid
                    toString(): string
                    getStringNameType(): org.ietf.jgss.Oid
                    isAnonymousName(): boolean
                }
                interface MechanismFactory {
                    getMechanismOid(): org.ietf.jgss.Oid
                    getProvider(): java.security.Provider
                    getNameTypes(): org.ietf.jgss.Oid[]
                    getCredentialElement(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: int, arg2: int, arg3: int): sun.security.jgss.spi.GSSCredentialSpi
                    getNameElement(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    getNameElement(arg0: byte[], arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    getMechanismContext(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: sun.security.jgss.spi.GSSCredentialSpi, arg2: int): sun.security.jgss.spi.GSSContextSpi
                    getMechanismContext(arg0: sun.security.jgss.spi.GSSCredentialSpi): sun.security.jgss.spi.GSSContextSpi
                    getMechanismContext(arg0: byte[]): sun.security.jgss.spi.GSSContextSpi
                }
            }
            namespace spnego {
                class NegTokenInit extends sun.security.jgss.spnego.SpNegoToken {
                    public constructor(arg0: byte[])
                    public getMechTypeList(): org.ietf.jgss.Oid[]
                    public getMechToken(): byte[]
                    public static class: java.lang.Class<any>
                }
                class NegTokenTarg extends sun.security.jgss.spnego.SpNegoToken {
                    public constructor(arg0: byte[])
                    public getSupportedMech(): org.ietf.jgss.Oid
                    public static class: java.lang.Class<any>
                }
                class SpNegoContext implements sun.security.jgss.spi.GSSContextSpi {
                    public constructor(arg0: sun.security.jgss.spnego.SpNegoMechFactory, arg1: sun.security.jgss.spi.GSSNameSpi, arg2: sun.security.jgss.spi.GSSCredentialSpi, arg3: int)
                    public constructor(arg0: sun.security.jgss.spnego.SpNegoMechFactory, arg1: sun.security.jgss.spi.GSSCredentialSpi)
                    public constructor(arg0: sun.security.jgss.spnego.SpNegoMechFactory, arg1: byte[])
                    public requestConf(arg0: boolean): void
                    public getConfState(): boolean
                    public requestInteg(arg0: boolean): void
                    public requestDelegPolicy(arg0: boolean): void
                    public getIntegState(): boolean
                    public getDelegPolicyState(): boolean
                    public requestCredDeleg(arg0: boolean): void
                    public getCredDelegState(): boolean
                    public requestMutualAuth(arg0: boolean): void
                    public getMutualAuthState(): boolean
                    public getMech(): org.ietf.jgss.Oid
                    public getNegotiatedMech(): org.ietf.jgss.Oid
                    public getProvider(): java.security.Provider
                    public dispose(): void
                    public isInitiator(): boolean
                    public isProtReady(): boolean
                    public initSecContext(arg0: java.io.InputStream, arg1: int): byte[]
                    public acceptSecContext(arg0: java.io.InputStream, arg1: int): byte[]
                    public isEstablished(): boolean
                    public isMechContextEstablished(): boolean
                    public export(): byte[]
                    public setChannelBinding(arg0: org.ietf.jgss.ChannelBinding): void
                    public requestAnonymity(arg0: boolean): void
                    public getAnonymityState(): boolean
                    public requestLifetime(arg0: int): void
                    public getLifetime(): int
                    public isTransferable(): boolean
                    public requestSequenceDet(arg0: boolean): void
                    public getSequenceDetState(): boolean
                    public requestReplayDet(arg0: boolean): void
                    public getReplayDetState(): boolean
                    public getTargName(): sun.security.jgss.spi.GSSNameSpi
                    public getSrcName(): sun.security.jgss.spi.GSSNameSpi
                    public getDelegCred(): sun.security.jgss.spi.GSSCredentialSpi
                    public getWrapSizeLimit(arg0: int, arg1: boolean, arg2: int): int
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public wrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public unwrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public unwrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public getMIC(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public getMIC(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public verifyMIC(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: org.ietf.jgss.MessageProp): void
                    public verifyMIC(arg0: java.io.InputStream, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp): void
                    public inquireSecContext(arg0: com.sun.security.jgss.InquireType): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SpNegoCredElement implements sun.security.jgss.spi.GSSCredentialSpi {
                    public constructor(arg0: sun.security.jgss.spi.GSSCredentialSpi)
                    public getInternalCred(): sun.security.jgss.spi.GSSCredentialSpi
                    public getProvider(): java.security.Provider
                    public dispose(): void
                    public getName(): sun.security.jgss.spi.GSSNameSpi
                    public getInitLifetime(): int
                    public getAcceptLifetime(): int
                    public isInitiatorCredential(): boolean
                    public isAcceptorCredential(): boolean
                    public getMechanism(): org.ietf.jgss.Oid
                    public impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
                    public static class: java.lang.Class<any>
                }
                class SpNegoMechFactory implements sun.security.jgss.spi.MechanismFactory {
                    public constructor(arg0: sun.security.jgss.GSSCaller)
                    public getNameElement(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    public getNameElement(arg0: byte[], arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    public getCredentialElement(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: int, arg2: int, arg3: int): sun.security.jgss.spi.GSSCredentialSpi
                    public getMechanismContext(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: sun.security.jgss.spi.GSSCredentialSpi, arg2: int): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismContext(arg0: sun.security.jgss.spi.GSSCredentialSpi): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismContext(arg0: byte[]): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismOid(): org.ietf.jgss.Oid
                    public getProvider(): java.security.Provider
                    public getNameTypes(): org.ietf.jgss.Oid[]
                    public static class: java.lang.Class<any>
                }
                abstract class SpNegoToken extends sun.security.jgss.GSSToken {
                    public static OID: sun.security.util.ObjectIdentifier
                    protected constructor(arg0: int)
                    public static class: java.lang.Class<any>
                }
            }
            namespace wrapper {
                class GSSCredElement implements sun.security.jgss.spi.GSSCredentialSpi {
                    public getProvider(): java.security.Provider
                    public dispose(): void
                    public getName(): sun.security.jgss.wrapper.GSSNameElement
                    public getInitLifetime(): int
                    public getAcceptLifetime(): int
                    public isInitiatorCredential(): boolean
                    public isAcceptorCredential(): boolean
                    public getMechanism(): org.ietf.jgss.Oid
                    public toString(): string
                    protected finalize(): void
                    public impersonate(arg0: sun.security.jgss.spi.GSSNameSpi): sun.security.jgss.spi.GSSCredentialSpi
                    public getName(): sun.security.jgss.spi.GSSNameSpi
                    public static class: java.lang.Class<any>
                }
                class GSSLibStub {
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class GSSNameElement implements sun.security.jgss.spi.GSSNameSpi {
                    public getKrbName(): string
                    public getProvider(): java.security.Provider
                    public equals(arg0: sun.security.jgss.spi.GSSNameSpi): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public export(): byte[]
                    public getMechanism(): org.ietf.jgss.Oid
                    public toString(): string
                    public getStringNameType(): org.ietf.jgss.Oid
                    public isAnonymousName(): boolean
                    public dispose(): void
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
                class Krb5Util {
                    public static class: java.lang.Class<any>
                }
                class NativeGSSContext implements sun.security.jgss.spi.GSSContextSpi {
                    public getProvider(): java.security.Provider
                    public initSecContext(arg0: java.io.InputStream, arg1: int): byte[]
                    public acceptSecContext(arg0: java.io.InputStream, arg1: int): byte[]
                    public isEstablished(): boolean
                    public dispose(): void
                    public getWrapSizeLimit(arg0: int, arg1: boolean, arg2: int): int
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: java.io.OutputStream | java.io.OutputStream$$Lambda, arg4: org.ietf.jgss.MessageProp): void
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: org.ietf.jgss.MessageProp): int
                    public wrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public unwrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public unwrap(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: org.ietf.jgss.MessageProp): int
                    public unwrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public unwrap(arg0: java.io.InputStream, arg1: byte[], arg2: int, arg3: org.ietf.jgss.MessageProp): int
                    public getMIC(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public getMIC(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public verifyMIC(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: org.ietf.jgss.MessageProp): void
                    public verifyMIC(arg0: java.io.InputStream, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp): void
                    public export(): byte[]
                    public requestMutualAuth(arg0: boolean): void
                    public requestReplayDet(arg0: boolean): void
                    public requestSequenceDet(arg0: boolean): void
                    public requestCredDeleg(arg0: boolean): void
                    public requestAnonymity(arg0: boolean): void
                    public requestConf(arg0: boolean): void
                    public requestInteg(arg0: boolean): void
                    public requestDelegPolicy(arg0: boolean): void
                    public requestLifetime(arg0: int): void
                    public setChannelBinding(arg0: org.ietf.jgss.ChannelBinding): void
                    public getCredDelegState(): boolean
                    public getMutualAuthState(): boolean
                    public getReplayDetState(): boolean
                    public getSequenceDetState(): boolean
                    public getAnonymityState(): boolean
                    public isTransferable(): boolean
                    public isProtReady(): boolean
                    public getConfState(): boolean
                    public getIntegState(): boolean
                    public getDelegPolicyState(): boolean
                    public getLifetime(): int
                    public getSrcName(): sun.security.jgss.spi.GSSNameSpi
                    public getTargName(): sun.security.jgss.spi.GSSNameSpi
                    public getMech(): org.ietf.jgss.Oid
                    public getDelegCred(): sun.security.jgss.spi.GSSCredentialSpi
                    public isInitiator(): boolean
                    protected finalize(): void
                    public inquireSecContext(arg0: com.sun.security.jgss.InquireType): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class NativeGSSFactory implements sun.security.jgss.spi.MechanismFactory {
                    public constructor(arg0: sun.security.jgss.GSSCaller)
                    public setMech(arg0: org.ietf.jgss.Oid): void
                    public getNameElement(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    public getNameElement(arg0: byte[], arg1: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                    public getCredentialElement(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: int, arg2: int, arg3: int): sun.security.jgss.spi.GSSCredentialSpi
                    public getMechanismContext(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: sun.security.jgss.spi.GSSCredentialSpi, arg2: int): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismContext(arg0: sun.security.jgss.spi.GSSCredentialSpi): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismContext(arg0: byte[]): sun.security.jgss.spi.GSSContextSpi
                    public getMechanismOid(): org.ietf.jgss.Oid
                    public getProvider(): java.security.Provider
                    public getNameTypes(): org.ietf.jgss.Oid[]
                    public static class: java.lang.Class<any>
                }
                class SunNativeProvider extends java.security.Provider {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
            }
            class GSSCaller {
                public static CALLER_UNKNOWN: sun.security.jgss.GSSCaller
                public static CALLER_INITIATE: sun.security.jgss.GSSCaller
                public static CALLER_ACCEPT: sun.security.jgss.GSSCaller
                public static CALLER_SSL_CLIENT: sun.security.jgss.GSSCaller
                public static CALLER_SSL_SERVER: sun.security.jgss.GSSCaller
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class GSSContextImpl implements com.sun.security.jgss.ExtendedGSSContext {
                public constructor(arg0: sun.security.jgss.GSSManagerImpl, arg1: org.ietf.jgss.GSSName, arg2: org.ietf.jgss.Oid, arg3: org.ietf.jgss.GSSCredential, arg4: int)
                public constructor(arg0: sun.security.jgss.GSSManagerImpl, arg1: org.ietf.jgss.GSSCredential)
                public constructor(arg0: sun.security.jgss.GSSManagerImpl, arg1: byte[])
                public initSecContext(arg0: byte[], arg1: int, arg2: int): byte[]
                public initSecContext(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): int
                public acceptSecContext(arg0: byte[], arg1: int, arg2: int): byte[]
                public acceptSecContext(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public isEstablished(): boolean
                public getWrapSizeLimit(arg0: int, arg1: boolean, arg2: int): int
                public wrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                public wrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                public unwrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                public unwrap(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                public getMIC(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                public getMIC(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                public verifyMIC(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: org.ietf.jgss.MessageProp): void
                public verifyMIC(arg0: java.io.InputStream, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp): void
                public export(): byte[]
                public requestMutualAuth(arg0: boolean): void
                public requestReplayDet(arg0: boolean): void
                public requestSequenceDet(arg0: boolean): void
                public requestCredDeleg(arg0: boolean): void
                public requestAnonymity(arg0: boolean): void
                public requestConf(arg0: boolean): void
                public requestInteg(arg0: boolean): void
                public requestLifetime(arg0: int): void
                public setChannelBinding(arg0: org.ietf.jgss.ChannelBinding): void
                public getCredDelegState(): boolean
                public getMutualAuthState(): boolean
                public getReplayDetState(): boolean
                public getSequenceDetState(): boolean
                public getAnonymityState(): boolean
                public isTransferable(): boolean
                public isProtReady(): boolean
                public getConfState(): boolean
                public getIntegState(): boolean
                public getLifetime(): int
                public getSrcName(): org.ietf.jgss.GSSName
                public getTargName(): org.ietf.jgss.GSSName
                public getMech(): org.ietf.jgss.Oid
                public getDelegCred(): org.ietf.jgss.GSSCredential
                public isInitiator(): boolean
                public dispose(): void
                public inquireSecContext(arg0: com.sun.security.jgss.InquireType): java.lang.Object
                public requestDelegPolicy(arg0: boolean): void
                public getDelegPolicyState(): boolean
                public static class: java.lang.Class<any>
            }
            class GSSCredentialImpl implements com.sun.security.jgss.ExtendedGSSCredential {
                public constructor(arg0: sun.security.jgss.GSSManagerImpl, arg1: sun.security.jgss.spi.GSSCredentialSpi)
                public dispose(): void
                public impersonate(arg0: org.ietf.jgss.GSSName): org.ietf.jgss.GSSCredential
                public getName(): org.ietf.jgss.GSSName
                public getName(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public getRemainingLifetime(): int
                public getRemainingInitLifetime(arg0: org.ietf.jgss.Oid): int
                public getRemainingAcceptLifetime(arg0: org.ietf.jgss.Oid): int
                public getUsage(): int
                public getUsage(arg0: org.ietf.jgss.Oid): int
                public getMechs(): org.ietf.jgss.Oid[]
                public add(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: int, arg3: org.ietf.jgss.Oid, arg4: int): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public getElement(arg0: org.ietf.jgss.Oid, arg1: boolean): sun.security.jgss.spi.GSSCredentialSpi
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class GSSExceptionImpl extends org.ietf.jgss.GSSException {
                public constructor(arg0: int, arg1: java.lang.String | string)
                public constructor(arg0: int, arg1: java.lang.Exception)
                public constructor(arg0: int, arg1: java.lang.String | string, arg2: java.lang.Exception)
                public getMessage(): string
                public static class: java.lang.Class<any>
            }
            class GSSHeader {
                public static TOKEN_ID: int
                public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: int)
                public constructor(arg0: java.io.InputStream)
                public getOid(): sun.security.util.ObjectIdentifier
                public getMechTokenLength(): int
                public getLength(): int
                public static getMaxMechTokenSize(arg0: sun.security.util.ObjectIdentifier, arg1: int): int
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): int
                public static class: java.lang.Class<any>
            }
            class GSSManagerImpl extends org.ietf.jgss.GSSManager {
                public constructor(arg0: sun.security.jgss.GSSCaller, arg1: boolean)
                public constructor(arg0: sun.security.jgss.GSSCaller)
                public constructor()
                public getMechs(): org.ietf.jgss.Oid[]
                public getNamesForMech(arg0: org.ietf.jgss.Oid): org.ietf.jgss.Oid[]
                public getMechsForName(arg0: org.ietf.jgss.Oid): org.ietf.jgss.Oid[]
                public createName(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public createName(arg0: byte[], arg1: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public createName(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public createName(arg0: byte[], arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public createCredential(arg0: int): org.ietf.jgss.GSSCredential
                public createCredential(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: org.ietf.jgss.Oid, arg3: int): org.ietf.jgss.GSSCredential
                public createCredential(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: org.ietf.jgss.Oid[], arg3: int): org.ietf.jgss.GSSCredential
                public createContext(arg0: org.ietf.jgss.GSSName, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.GSSCredential, arg3: int): org.ietf.jgss.GSSContext
                public createContext(arg0: org.ietf.jgss.GSSCredential): org.ietf.jgss.GSSContext
                public createContext(arg0: byte[]): org.ietf.jgss.GSSContext
                public addProviderAtFront(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
                public addProviderAtEnd(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
                public getCredentialElement(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: int, arg2: int, arg3: org.ietf.jgss.Oid, arg4: int): sun.security.jgss.spi.GSSCredentialSpi
                public getNameElement(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                public getNameElement(arg0: byte[], arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                public static class: java.lang.Class<any>
            }
            class GSSNameImpl implements org.ietf.jgss.GSSName {
                public canonicalize(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                public equals(arg0: org.ietf.jgss.GSSName): boolean
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public export(): byte[]
                public toString(): string
                public getStringNameType(): org.ietf.jgss.Oid
                public isAnonymous(): boolean
                public isMN(): boolean
                public getElement(arg0: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
                public static class: java.lang.Class<any>
            }
            abstract class GSSToken {
                public constructor()
                public static writeLittleEndian(arg0: int, arg1: byte[]): void
                public static writeLittleEndian(arg0: int, arg1: byte[], arg2: int): void
                public static writeBigEndian(arg0: int, arg1: byte[]): void
                public static writeBigEndian(arg0: int, arg1: byte[], arg2: int): void
                public static readLittleEndian(arg0: byte[], arg1: int, arg2: int): int
                public static readBigEndian(arg0: byte[], arg1: int, arg2: int): int
                public static writeInt(arg0: int, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static writeInt(arg0: int, arg1: byte[], arg2: int): int
                public static readInt(arg0: java.io.InputStream): int
                public static readInt(arg0: byte[], arg1: int): int
                public static readFully(arg0: java.io.InputStream, arg1: byte[]): void
                public static readFully(arg0: java.io.InputStream, arg1: byte[], arg2: int, arg3: int): void
                public static debug(arg0: java.lang.String | string): void
                public static getHexBytes(arg0: byte[]): string
                public static getHexBytes(arg0: byte[], arg1: int): string
                public static getHexBytes(arg0: byte[], arg1: int, arg2: int): string
                public static class: java.lang.Class<any>
            }
            class GSSUtil {
                public static GSS_KRB5_MECH_OID: org.ietf.jgss.Oid
                public static GSS_KRB5_MECH_OID2: org.ietf.jgss.Oid
                public static GSS_KRB5_MECH_OID_MS: org.ietf.jgss.Oid
                public static GSS_SPNEGO_MECH_OID: org.ietf.jgss.Oid
                public static NT_GSS_KRB5_PRINCIPAL: org.ietf.jgss.Oid
                public constructor()
                public static createOid(arg0: java.lang.String | string): org.ietf.jgss.Oid
                public static isSpNegoMech(arg0: org.ietf.jgss.Oid): boolean
                public static isKerberosMech(arg0: org.ietf.jgss.Oid): boolean
                public static getMechStr(arg0: org.ietf.jgss.Oid): string
                public static getSubject(arg0: org.ietf.jgss.GSSName, arg1: org.ietf.jgss.GSSCredential): javax.security.auth.Subject
                public static login(arg0: sun.security.jgss.GSSCaller, arg1: org.ietf.jgss.Oid): javax.security.auth.Subject
                public static useSubjectCredsOnly(arg0: sun.security.jgss.GSSCaller): boolean
                public static useMSInterop(): boolean
                public static searchSubject<T extends sun.security.jgss.spi.GSSCredentialSpi>(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: org.ietf.jgss.Oid, arg2: boolean, arg3: java.lang.Class<T>): java.util.Vector<T>
                public static class: java.lang.Class<any>
            }
            class HttpCaller extends sun.security.jgss.GSSCaller {
                public constructor(arg0: sun.net.www.protocol.http.HttpCallerInfo)
                public info(): sun.net.www.protocol.http.HttpCallerInfo
                public static class: java.lang.Class<any>
            }
            class LoginConfigImpl extends javax.security.auth.login.Configuration {
                public static HTTP_USE_GLOBAL_CREDS: boolean
                public constructor(arg0: sun.security.jgss.GSSCaller, arg1: org.ietf.jgss.Oid)
                public getAppConfigurationEntry(arg0: java.lang.String | string): javax.security.auth.login.AppConfigurationEntry[]
                public static class: java.lang.Class<any>
            }
            class ProviderList {
                public static DEFAULT_MECH_OID: org.ietf.jgss.Oid
                public constructor(arg0: sun.security.jgss.GSSCaller, arg1: boolean)
                public getMechFactory(arg0: org.ietf.jgss.Oid): sun.security.jgss.spi.MechanismFactory
                public getMechFactory(arg0: org.ietf.jgss.Oid, arg1: java.security.Provider): sun.security.jgss.spi.MechanismFactory
                public getMechs(): org.ietf.jgss.Oid[]
                public addProviderAtFront(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
                public addProviderAtEnd(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
                public static class: java.lang.Class<any>
            }
            class SunProvider extends java.security.Provider {
                public static INSTANCE: sun.security.jgss.SunProvider
                public constructor()
                public static class: java.lang.Class<any>
            }
            class TokenTracker {
                public constructor(arg0: int)
                public getProps(arg0: int, arg1: org.ietf.jgss.MessageProp): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
        namespace krb5 {
            namespace internal {
                namespace ccache {
                    class CCacheInputStream extends sun.security.krb5.internal.util.KrbDataInputStream implements sun.security.krb5.internal.ccache.FileCCacheConstants {
                        public constructor(arg0: java.io.InputStream)
                        public readTag(): sun.security.krb5.internal.ccache.Tag
                        public readPrincipal(arg0: int): sun.security.krb5.PrincipalName
                        public static class: java.lang.Class<any>
                    }
                    class CCacheOutputStream extends sun.security.krb5.internal.util.KrbDataOutputStream implements sun.security.krb5.internal.ccache.FileCCacheConstants {
                        public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
                        public writeHeader(arg0: sun.security.krb5.PrincipalName, arg1: int): void
                        public addCreds(arg0: sun.security.krb5.internal.ccache.Credentials): void
                        public static class: java.lang.Class<any>
                    }
                    class Credentials {
                        public isEncInSKey: boolean
                        public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.EncryptionKey, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.KerberosTime, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: boolean, arg8: sun.security.krb5.internal.TicketFlags, arg9: sun.security.krb5.internal.HostAddresses, arg10: sun.security.krb5.internal.AuthorizationData, arg11: sun.security.krb5.internal.Ticket, arg12: sun.security.krb5.internal.Ticket)
                        public constructor(arg0: sun.security.krb5.internal.KDCRep, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.internal.AuthorizationData, arg3: boolean)
                        public constructor(arg0: sun.security.krb5.internal.KDCRep)
                        public constructor(arg0: sun.security.krb5.internal.KDCRep, arg1: sun.security.krb5.internal.Ticket)
                        public isValid(): boolean
                        public getServicePrincipal(): sun.security.krb5.PrincipalName
                        public setKrbCreds(): sun.security.krb5.Credentials
                        public getStartTime(): sun.security.krb5.internal.KerberosTime
                        public getAuthTime(): sun.security.krb5.internal.KerberosTime
                        public getEndTime(): sun.security.krb5.internal.KerberosTime
                        public getRenewTill(): sun.security.krb5.internal.KerberosTime
                        public getTicketFlags(): sun.security.krb5.internal.TicketFlags
                        public getEType(): int
                        public getTktEType(): int
                        public static class: java.lang.Class<any>
                    }
                    abstract class CredentialsCache {
                        public constructor()
                        public static getInstance(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.CredentialsCache
                        public static getInstance(arg0: java.lang.String | string): sun.security.krb5.internal.ccache.CredentialsCache
                        public static getInstance(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.internal.ccache.CredentialsCache
                        public static getInstance(): sun.security.krb5.internal.ccache.CredentialsCache
                        public static create(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.internal.ccache.CredentialsCache
                        public static create(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.CredentialsCache
                        public static cacheName(): string
                        public getPrimaryPrincipal(): sun.security.krb5.PrincipalName
                        public update(arg0: sun.security.krb5.internal.ccache.Credentials): void
                        public save(): void
                        public getCredsList(): sun.security.krb5.internal.ccache.Credentials[]
                        public getDefaultCreds(): sun.security.krb5.internal.ccache.Credentials
                        public getCreds(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public getCreds(arg0: sun.security.krb5.internal.LoginOptions, arg1: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public static class: java.lang.Class<any>
                    }
                    interface FileCCacheConstants {
                        KRB5_FCC_FVNO_1: int
                        KRB5_FCC_FVNO_2: int
                        KRB5_FCC_FVNO_3: int
                        KRB5_FCC_FVNO_4: int
                        FCC_TAG_DELTATIME: int
                        KRB5_NT_UNKNOWN: int
                        TKT_FLG_FORWARDABLE: int
                        TKT_FLG_FORWARDED: int
                        TKT_FLG_PROXIABLE: int
                        TKT_FLG_PROXY: int
                        TKT_FLG_MAY_POSTDATE: int
                        TKT_FLG_POSTDATED: int
                        TKT_FLG_INVALID: int
                        TKT_FLG_RENEWABLE: int
                        TKT_FLG_INITIAL: int
                        TKT_FLG_PRE_AUTH: int
                        TKT_FLG_HW_AUTH: int
                    }
                    class FileCredentialsCache extends sun.security.krb5.internal.ccache.CredentialsCache implements sun.security.krb5.internal.ccache.FileCCacheConstants {
                        public version: int
                        public tag: sun.security.krb5.internal.ccache.Tag
                        public primaryPrincipal: sun.security.krb5.PrincipalName
                        public static acquireInstance(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.internal.ccache.FileCredentialsCache
                        public static acquireInstance(): sun.security.krb5.internal.ccache.FileCredentialsCache
                        public update(arg0: sun.security.krb5.internal.ccache.Credentials): void
                        public getPrimaryPrincipal(): sun.security.krb5.PrincipalName
                        public save(): void
                        public getCredsList(): sun.security.krb5.internal.ccache.Credentials[]
                        public getCreds(arg0: sun.security.krb5.internal.LoginOptions, arg1: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public getCreds(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public getDefaultCreds(): sun.security.krb5.internal.ccache.Credentials
                        public static getDefaultCacheName(): string
                        public static checkValidation(arg0: java.lang.String | string): string
                        public static class: java.lang.Class<any>
                    }
                    abstract class MemoryCredentialsCache extends sun.security.krb5.internal.ccache.CredentialsCache {
                        public constructor()
                        public exists(arg0: java.lang.String | string): boolean
                        public update(arg0: sun.security.krb5.internal.ccache.Credentials): void
                        public save(): void
                        public getCredsList(): sun.security.krb5.internal.ccache.Credentials[]
                        public getCreds(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.internal.ccache.Credentials
                        public getPrimaryPrincipal(): sun.security.krb5.PrincipalName
                        public static class: java.lang.Class<any>
                    }
                    class Tag {
                        public constructor(arg0: int, arg1: int, arg2: java.lang.Integer, arg3: java.lang.Integer)
                        public constructor(arg0: int)
                        public toByteArray(): byte[]
                        public static class: java.lang.Class<any>
                    }
                }
                namespace crypto {
                    namespace dk {
                        class AesDkCrypto extends sun.security.krb5.internal.crypto.dk.DkCrypto {
                            public constructor(arg0: int)
                            protected getKeySeedLength(): int
                            public stringToKey(arg0: char[], arg1: java.lang.String | string, arg2: byte[]): byte[]
                            protected randomToKey(arg0: byte[]): byte[]
                            protected getCipher(arg0: byte[], arg1: byte[], arg2: int): javax.crypto.Cipher
                            public getChecksumLength(): int
                            protected getHmac(arg0: byte[], arg1: byte[]): byte[]
                            public calculateChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int): byte[]
                            public encrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: byte[], arg5: int, arg6: int): byte[]
                            public encryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public static readBigEndian(arg0: byte[], arg1: int, arg2: int): int
                            public static class: java.lang.Class<any>
                        }
                        class ArcFourCrypto extends sun.security.krb5.internal.crypto.dk.DkCrypto {
                            public constructor(arg0: int)
                            protected getKeySeedLength(): int
                            protected randomToKey(arg0: byte[]): byte[]
                            public stringToKey(arg0: char[]): byte[]
                            protected getCipher(arg0: byte[], arg1: byte[], arg2: int): javax.crypto.Cipher
                            public getChecksumLength(): int
                            protected getHmac(arg0: byte[], arg1: byte[]): byte[]
                            public calculateChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int): byte[]
                            public encryptSeq(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decryptSeq(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public encrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: byte[], arg5: int, arg6: int): byte[]
                            public encryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int, arg6: byte[]): byte[]
                            public static class: java.lang.Class<any>
                        }
                        class Des3DkCrypto extends sun.security.krb5.internal.crypto.dk.DkCrypto {
                            public constructor()
                            protected getKeySeedLength(): int
                            public stringToKey(arg0: char[]): byte[]
                            public parityFix(arg0: byte[]): byte[]
                            protected randomToKey(arg0: byte[]): byte[]
                            protected getCipher(arg0: byte[], arg1: byte[], arg2: int): javax.crypto.Cipher
                            public getChecksumLength(): int
                            protected getHmac(arg0: byte[], arg1: byte[]): byte[]
                            public static class: java.lang.Class<any>
                        }
                        abstract class DkCrypto {
                            protected static debug: boolean
                            public constructor()
                            protected getKeySeedLength(): int
                            protected randomToKey(arg0: byte[]): byte[]
                            protected getCipher(arg0: byte[], arg1: byte[], arg2: int): javax.crypto.Cipher
                            public getChecksumLength(): int
                            protected getHmac(arg0: byte[], arg1: byte[]): byte[]
                            public encrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: byte[], arg5: int, arg6: int): byte[]
                            public encryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public decrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                            public calculateChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int): byte[]
                            public static class: java.lang.Class<any>
                        }
                    }
                    class Aes128 {
                        public static stringToKey(arg0: char[], arg1: java.lang.String | string, arg2: byte[]): byte[]
                        public static getChecksumLength(): int
                        public static calculateChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int): byte[]
                        public static encrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static encryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static decrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static decryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class Aes128CtsHmacSha1EType extends sun.security.krb5.internal.crypto.EType {
                        public constructor()
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        public blockSize(): int
                        public keyType(): int
                        public keySize(): int
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decryptedData(arg0: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class Aes256 {
                        public static stringToKey(arg0: char[], arg1: java.lang.String | string, arg2: byte[]): byte[]
                        public static getChecksumLength(): int
                        public static calculateChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int): byte[]
                        public static encrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static encryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static decrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static decryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class Aes256CtsHmacSha1EType extends sun.security.krb5.internal.crypto.EType {
                        public constructor()
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        public blockSize(): int
                        public keyType(): int
                        public keySize(): int
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decryptedData(arg0: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class ArcFourHmac {
                        public static stringToKey(arg0: char[]): byte[]
                        public static getChecksumLength(): int
                        public static calculateChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int): byte[]
                        public static encryptSeq(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static decryptSeq(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static encrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static encryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static decrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static decryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int, arg6: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class ArcFourHmacEType extends sun.security.krb5.internal.crypto.EType {
                        public constructor()
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        public blockSize(): int
                        public keyType(): int
                        public keySize(): int
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decryptedData(arg0: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                    abstract class CksumType {
                        public constructor()
                        public static getInstance(arg0: int): sun.security.krb5.internal.crypto.CksumType
                        public static getInstance(): sun.security.krb5.internal.crypto.CksumType
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static isChecksumEqual(arg0: byte[], arg1: byte[]): boolean
                        public static class: java.lang.Class<any>
                    }
                    class Crc32CksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static int2quad(arg0: long): byte[]
                        public static bytes2long(arg0: byte[]): long
                        public static class: java.lang.Class<any>
                    }
                    class Des {
                        public constructor()
                        public static set_parity(arg0: byte[]): byte[]
                        public static set_parity(arg0: long): long
                        public static bad_key(arg0: long): boolean
                        public static bad_key(arg0: byte[]): boolean
                        public static octet2long(arg0: byte[]): long
                        public static octet2long(arg0: byte[], arg1: int): long
                        public static long2octet(arg0: long): byte[]
                        public static long2octet(arg0: long, arg1: byte[]): void
                        public static long2octet(arg0: long, arg1: byte[], arg2: int): void
                        public static cbc_encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: byte[], arg4: boolean): void
                        public static char_to_key(arg0: char[]): long
                        public static des_cksum(arg0: byte[], arg1: byte[], arg2: byte[]): byte[]
                        public static string_to_key_bytes(arg0: char[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class Des3 {
                        public static stringToKey(arg0: char[]): byte[]
                        public static parityFix(arg0: byte[]): byte[]
                        public static getChecksumLength(): int
                        public static calculateChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int, arg4: int): byte[]
                        public static encrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static encryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static decrypt(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static decryptRaw(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int, arg5: int): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class Des3CbcHmacSha1KdEType extends sun.security.krb5.internal.crypto.EType {
                        public constructor()
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        public blockSize(): int
                        public keyType(): int
                        public keySize(): int
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decryptedData(arg0: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class DesCbcCrcEType extends sun.security.krb5.internal.crypto.DesCbcEType {
                        public constructor()
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        protected calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public keySize(): int
                        public keyType(): int
                        public blockSize(): int
                        public static class: java.lang.Class<any>
                    }
                    abstract class DesCbcEType extends sun.security.krb5.internal.crypto.EType {
                        protected calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public blockSize(): int
                        public keyType(): int
                        public keySize(): int
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        protected isChecksumValid(arg0: byte[]): boolean
                        public static class: java.lang.Class<any>
                    }
                    class DesCbcMd5EType extends sun.security.krb5.internal.crypto.DesCbcEType {
                        public constructor()
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        protected calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public keySize(): int
                        public keyType(): int
                        public blockSize(): int
                        public static class: java.lang.Class<any>
                    }
                    class DesMacCksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static class: java.lang.Class<any>
                    }
                    class DesMacKCksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static class: java.lang.Class<any>
                    }
                    abstract class EType {
                        public constructor()
                        public static initStatic(): void
                        public static getInstance(arg0: int): sun.security.krb5.internal.crypto.EType
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        public blockSize(): int
                        public keyType(): int
                        public keySize(): int
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public dataSize(arg0: byte[]): int
                        public padSize(arg0: byte[]): int
                        public startOfChecksum(): int
                        public startOfData(): int
                        public startOfPad(arg0: byte[]): int
                        public decryptedData(arg0: byte[]): byte[]
                        public static getBuiltInDefaults(): int[]
                        public static getDefaults(arg0: java.lang.String | string): int[]
                        public static getDefaults(arg0: java.lang.String | string, arg1: sun.security.krb5.EncryptionKey[]): int[]
                        public static isSupported(arg0: int, arg1: int[]): boolean
                        public static isSupported(arg0: int): boolean
                        public static toString(arg0: int): string
                        public static class: java.lang.Class<any>
                    }
                    class HmacMd5ArcFourCksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static class: java.lang.Class<any>
                    }
                    class HmacSha1Aes128CksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static class: java.lang.Class<any>
                    }
                    class HmacSha1Aes256CksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static class: java.lang.Class<any>
                    }
                    class HmacSha1Des3KdCksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static class: java.lang.Class<any>
                    }
                    class KeyUsage {
                        public static KU_UNKNOWN: int
                        public static KU_PA_ENC_TS: int
                        public static KU_TICKET: int
                        public static KU_ENC_AS_REP_PART: int
                        public static KU_TGS_REQ_AUTH_DATA_SESSKEY: int
                        public static KU_TGS_REQ_AUTH_DATA_SUBKEY: int
                        public static KU_PA_TGS_REQ_CKSUM: int
                        public static KU_PA_TGS_REQ_AUTHENTICATOR: int
                        public static KU_ENC_TGS_REP_PART_SESSKEY: int
                        public static KU_ENC_TGS_REP_PART_SUBKEY: int
                        public static KU_AUTHENTICATOR_CKSUM: int
                        public static KU_AP_REQ_AUTHENTICATOR: int
                        public static KU_ENC_AP_REP_PART: int
                        public static KU_ENC_KRB_PRIV_PART: int
                        public static KU_ENC_KRB_CRED_PART: int
                        public static KU_KRB_SAFE_CKSUM: int
                        public static KU_PA_FOR_USER_ENC_CKSUM: int
                        public static KU_AD_KDC_ISSUED_CKSUM: int
                        public static isValid(arg0: int): boolean
                        public static class: java.lang.Class<any>
                    }
                    class Nonce {
                        public constructor()
                        public static value(): int
                        public static class: java.lang.Class<any>
                    }
                    class NullEType extends sun.security.krb5.internal.crypto.EType {
                        public constructor()
                        public eType(): int
                        public minimumPadSize(): int
                        public confounderSize(): int
                        public checksumType(): int
                        public checksumSize(): int
                        public blockSize(): int
                        public keyType(): int
                        public keySize(): int
                        public encrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public encrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: int): byte[]
                        public decrypt(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class RsaMd5CksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public static class: java.lang.Class<any>
                    }
                    class RsaMd5DesCksumType extends sun.security.krb5.internal.crypto.CksumType {
                        public constructor()
                        public confounderSize(): int
                        public cksumType(): int
                        public isSafe(): boolean
                        public cksumSize(): int
                        public keyType(): int
                        public keySize(): int
                        public calculateKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: int): byte[]
                        public verifyKeyedChecksum(arg0: byte[], arg1: int, arg2: byte[], arg3: byte[], arg4: int): boolean
                        public calculateChecksum(arg0: byte[], arg1: int): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class crc32 extends java.security.MessageDigestSpi implements java.lang.Cloneable {
                        public constructor()
                        public clone(): java.lang.Object
                        protected engineGetDigestLength(): int
                        protected engineDigest(): byte[]
                        protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
                        protected engineUpdate(arg0: byte): void
                        protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                        protected engineReset(): void
                        public init(): void
                        public static int2crc32(arg0: int): int
                        public static printcrc32Table(): void
                        public static byte2crc32sum(arg0: int, arg1: byte[], arg2: int): int
                        public static byte2crc32sum(arg0: int, arg1: byte[]): int
                        public static byte2crc32sum(arg0: byte[]): int
                        public static byte2crc32(arg0: byte[]): int
                        public static byte2crc32sum_bytes(arg0: byte[]): byte[]
                        public static byte2crc32sum_bytes(arg0: byte[], arg1: int): byte[]
                        public static int2quad(arg0: long): byte[]
                        public static class: java.lang.Class<any>
                    }
                }
                namespace ktab {
                    class KeyTab implements sun.security.krb5.internal.ktab.KeyTabConstants {
                        public static getInstance(arg0: java.lang.String | string): sun.security.krb5.internal.ktab.KeyTab
                        public static getInstance(arg0: java.io.File): sun.security.krb5.internal.ktab.KeyTab
                        public static getInstance(): sun.security.krb5.internal.ktab.KeyTab
                        public isMissing(): boolean
                        public isValid(): boolean
                        public static normalize(arg0: java.lang.String | string): string
                        public getOneName(): sun.security.krb5.PrincipalName
                        public readServiceKeys(arg0: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[]
                        public findServiceEntry(arg0: sun.security.krb5.PrincipalName): boolean
                        public tabName(): string
                        public addEntry(arg0: sun.security.krb5.PrincipalName, arg1: char[], arg2: int, arg3: boolean): void
                        public addEntry(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string, arg2: char[], arg3: int, arg4: boolean): void
                        public getEntries(): sun.security.krb5.internal.ktab.KeyTabEntry[]
                        public static create(): sun.security.krb5.internal.ktab.KeyTab
                        public static create(arg0: java.lang.String | string): sun.security.krb5.internal.ktab.KeyTab
                        public save(): void
                        public deleteEntries(arg0: sun.security.krb5.PrincipalName, arg1: int, arg2: int): int
                        public createVersion(arg0: java.io.File): void
                        public static class: java.lang.Class<any>
                    }
                    interface KeyTabConstants {
                        principalComponentSize: int
                        realmSize: int
                        principalSize: int
                        principalTypeSize: int
                        timestampSize: int
                        keyVersionSize: int
                        keyTypeSize: int
                        keySize: int
                        KRB5_KT_VNO_1: int
                        KRB5_KT_VNO: int
                    }
                    class KeyTabEntry implements sun.security.krb5.internal.ktab.KeyTabConstants {
                        public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.Realm, arg2: sun.security.krb5.internal.KerberosTime, arg3: int, arg4: int, arg5: byte[])
                        public getService(): sun.security.krb5.PrincipalName
                        public getKey(): sun.security.krb5.EncryptionKey
                        public getKeyString(): string
                        public entryLength(): int
                        public getTimeStamp(): sun.security.krb5.internal.KerberosTime
                        public static class: java.lang.Class<any>
                    }
                    class KeyTabInputStream extends sun.security.krb5.internal.util.KrbDataInputStream implements sun.security.krb5.internal.ktab.KeyTabConstants {
                        public constructor(arg0: java.io.InputStream)
                        public static class: java.lang.Class<any>
                    }
                    class KeyTabOutputStream extends sun.security.krb5.internal.util.KrbDataOutputStream implements sun.security.krb5.internal.ktab.KeyTabConstants {
                        public version: int
                        public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
                        public writeVersion(arg0: int): void
                        public writeEntry(arg0: sun.security.krb5.internal.ktab.KeyTabEntry): void
                        public static class: java.lang.Class<any>
                    }
                }
                namespace rcache {
                    class AuthList {
                        public constructor(arg0: int)
                        public put(arg0: sun.security.krb5.internal.rcache.AuthTimeWithHash, arg1: sun.security.krb5.internal.KerberosTime): void
                        public isEmpty(): boolean
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class AuthTime {
                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int)
                        public toString(): string
                        public static readFrom(arg0: java.nio.channels.SeekableByteChannel): sun.security.krb5.internal.rcache.AuthTime
                        protected encode0(arg0: java.lang.String | string, arg1: java.lang.String | string): byte[]
                        public encode(arg0: boolean): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class AuthTimeWithHash extends sun.security.krb5.internal.rcache.AuthTime implements java.lang.Comparable<sun.security.krb5.internal.rcache.AuthTimeWithHash> {
                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int, arg4: java.lang.String | string)
                        public equals(arg0: java.lang.Object): boolean
                        public hashCode(): int
                        public toString(): string
                        public compareTo(arg0: sun.security.krb5.internal.rcache.AuthTimeWithHash): int
                        public isSameIgnoresHash(arg0: sun.security.krb5.internal.rcache.AuthTime): boolean
                        public encode(arg0: boolean): byte[]
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    class DflCache extends sun.security.krb5.internal.ReplayCache {
                        public constructor(arg0: java.lang.String | string)
                        public checkAndStore(arg0: sun.security.krb5.internal.KerberosTime, arg1: sun.security.krb5.internal.rcache.AuthTimeWithHash): void
                        public static class: java.lang.Class<any>
                    }
                    class MemoryCache extends sun.security.krb5.internal.ReplayCache {
                        public constructor()
                        public checkAndStore(arg0: sun.security.krb5.internal.KerberosTime, arg1: sun.security.krb5.internal.rcache.AuthTimeWithHash): void
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
                namespace util {
                    class KerberosFlags {
                        protected static BITS_PER_UNIT: int
                        public constructor(arg0: int)
                        public constructor(arg0: int, arg1: byte[])
                        public constructor(arg0: boolean[])
                        public set(arg0: int, arg1: boolean): void
                        public get(arg0: int): boolean
                        public toBooleanArray(): boolean[]
                        public asn1Encode(): byte[]
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class KerberosString {
                        public static MSNAME: boolean
                        public constructor(arg0: java.lang.String | string)
                        public constructor(arg0: sun.security.util.DerValue)
                        public toString(): string
                        public toDerValue(): sun.security.util.DerValue
                        public static class: java.lang.Class<any>
                    }
                    class KrbDataInputStream extends java.io.BufferedInputStream {
                        public setNativeByteOrder(): void
                        public constructor(arg0: java.io.InputStream)
                        public readLength4(): int
                        public read(arg0: int): int
                        public readVersion(): int
                        public static class: java.lang.Class<any>
                    }
                    class KrbDataOutputStream extends java.io.BufferedOutputStream {
                        public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
                        public write32(arg0: int): void
                        public write16(arg0: int): void
                        public write8(arg0: int): void
                        public static class: java.lang.Class<any>
                    }
                }
                class APOptions extends sun.security.krb5.internal.util.KerberosFlags {
                    public constructor()
                    public constructor(arg0: int)
                    public constructor(arg0: int, arg1: byte[])
                    public constructor(arg0: boolean[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.APOptions
                    public static class: java.lang.Class<any>
                }
                class APRep {
                    public pvno: int
                    public msgType: int
                    public encPart: sun.security.krb5.EncryptedData
                    public constructor(arg0: sun.security.krb5.EncryptedData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class APReq {
                    public pvno: int
                    public msgType: int
                    public apOptions: sun.security.krb5.internal.APOptions
                    public ticket: sun.security.krb5.internal.Ticket
                    public authenticator: sun.security.krb5.EncryptedData
                    public constructor(arg0: sun.security.krb5.internal.APOptions, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.EncryptedData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class ASRep extends sun.security.krb5.internal.KDCRep {
                    public constructor(arg0: sun.security.krb5.internal.PAData[], arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.internal.Ticket, arg3: sun.security.krb5.EncryptedData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public static class: java.lang.Class<any>
                }
                class ASReq extends sun.security.krb5.internal.KDCReq {
                    public constructor(arg0: sun.security.krb5.internal.PAData[], arg1: sun.security.krb5.internal.KDCReqBody)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public static class: java.lang.Class<any>
                }
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
                class Authenticator {
                    public authenticator_vno: int
                    public cname: sun.security.krb5.PrincipalName
                    public cusec: int
                    public ctime: sun.security.krb5.internal.KerberosTime
                    public authorizationData: sun.security.krb5.internal.AuthorizationData
                    public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.Checksum, arg2: int, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.EncryptionKey, arg5: java.lang.Integer, arg6: sun.security.krb5.internal.AuthorizationData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public getChecksum(): sun.security.krb5.Checksum
                    public getSeqNumber(): java.lang.Integer
                    public getSubKey(): sun.security.krb5.EncryptionKey
                    public static class: java.lang.Class<any>
                }
                class AuthorizationData implements java.lang.Cloneable {
                    public constructor(arg0: sun.security.krb5.internal.AuthorizationDataEntry[])
                    public constructor(arg0: sun.security.krb5.internal.AuthorizationDataEntry)
                    public clone(): java.lang.Object
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.AuthorizationData
                    public writeAuth(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
                    public toString(): string
                    public count(): int
                    public item(arg0: int): sun.security.krb5.internal.AuthorizationDataEntry
                    public static class: java.lang.Class<any>
                }
                class AuthorizationDataEntry implements java.lang.Cloneable {
                    public adType: int
                    public adData: byte[]
                    public constructor(arg0: int, arg1: byte[])
                    public clone(): java.lang.Object
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public writeEntry(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CredentialsUtil {
                    public constructor()
                    public static acquireS4U2selfCreds(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                    public static acquireS4U2proxyCreds(arg0: java.lang.String | string, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                    public static acquireServiceCreds(arg0: java.lang.String | string, arg1: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                    public static class: java.lang.Class<any>
                }
                class ETypeInfo {
                    public constructor(arg0: int, arg1: java.lang.String | string)
                    public clone(): java.lang.Object
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public getEType(): int
                    public getSalt(): string
                    public static class: java.lang.Class<any>
                }
                class ETypeInfo2 {
                    public constructor(arg0: int, arg1: java.lang.String | string, arg2: byte[])
                    public clone(): java.lang.Object
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public getEType(): int
                    public getSalt(): string
                    public getParams(): byte[]
                    public static class: java.lang.Class<any>
                }
                class EncAPRepPart {
                    public ctime: sun.security.krb5.internal.KerberosTime
                    public cusec: int
                    public constructor(arg0: sun.security.krb5.internal.KerberosTime, arg1: int, arg2: sun.security.krb5.EncryptionKey, arg3: java.lang.Integer)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public getSubKey(): sun.security.krb5.EncryptionKey
                    public getSeqNumber(): java.lang.Integer
                    public static class: java.lang.Class<any>
                }
                class EncASRepPart extends sun.security.krb5.internal.EncKDCRepPart {
                    public constructor(arg0: sun.security.krb5.EncryptionKey, arg1: sun.security.krb5.internal.LastReq, arg2: int, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.TicketFlags, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.KerberosTime, arg9: sun.security.krb5.PrincipalName, arg10: sun.security.krb5.internal.HostAddresses)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class EncKDCRepPart {
                    public key: sun.security.krb5.EncryptionKey
                    public lastReq: sun.security.krb5.internal.LastReq
                    public nonce: int
                    public keyExpiration: sun.security.krb5.internal.KerberosTime
                    public flags: sun.security.krb5.internal.TicketFlags
                    public authtime: sun.security.krb5.internal.KerberosTime
                    public starttime: sun.security.krb5.internal.KerberosTime
                    public endtime: sun.security.krb5.internal.KerberosTime
                    public renewTill: sun.security.krb5.internal.KerberosTime
                    public sname: sun.security.krb5.PrincipalName
                    public caddr: sun.security.krb5.internal.HostAddresses
                    public msgType: int
                    public constructor(arg0: sun.security.krb5.EncryptionKey, arg1: sun.security.krb5.internal.LastReq, arg2: int, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.TicketFlags, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.KerberosTime, arg9: sun.security.krb5.PrincipalName, arg10: sun.security.krb5.internal.HostAddresses, arg11: int)
                    public constructor()
                    public constructor(arg0: byte[], arg1: int)
                    public constructor(arg0: sun.security.util.DerValue, arg1: int)
                    protected init(arg0: sun.security.util.DerValue, arg1: int): void
                    public asn1Encode(arg0: int): byte[]
                    public static class: java.lang.Class<any>
                }
                class EncKrbCredPart {
                    public ticketInfo: sun.security.krb5.internal.KrbCredInfo[]
                    public timeStamp: sun.security.krb5.internal.KerberosTime
                    public constructor(arg0: sun.security.krb5.internal.KrbCredInfo[], arg1: sun.security.krb5.internal.KerberosTime, arg2: java.lang.Integer, arg3: java.lang.Integer, arg4: sun.security.krb5.internal.HostAddress, arg5: sun.security.krb5.internal.HostAddresses)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class EncKrbPrivPart {
                    public userData: byte[]
                    public timestamp: sun.security.krb5.internal.KerberosTime
                    public usec: java.lang.Integer
                    public seqNumber: java.lang.Integer
                    public sAddress: sun.security.krb5.internal.HostAddress
                    public rAddress: sun.security.krb5.internal.HostAddress
                    public constructor(arg0: byte[], arg1: sun.security.krb5.internal.KerberosTime, arg2: java.lang.Integer, arg3: java.lang.Integer, arg4: sun.security.krb5.internal.HostAddress, arg5: sun.security.krb5.internal.HostAddress)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class EncTGSRepPart extends sun.security.krb5.internal.EncKDCRepPart {
                    public constructor(arg0: sun.security.krb5.EncryptionKey, arg1: sun.security.krb5.internal.LastReq, arg2: int, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.TicketFlags, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.KerberosTime, arg9: sun.security.krb5.PrincipalName, arg10: sun.security.krb5.internal.HostAddresses)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class EncTicketPart {
                    public flags: sun.security.krb5.internal.TicketFlags
                    public key: sun.security.krb5.EncryptionKey
                    public cname: sun.security.krb5.PrincipalName
                    public transited: sun.security.krb5.internal.TransitedEncoding
                    public authtime: sun.security.krb5.internal.KerberosTime
                    public starttime: sun.security.krb5.internal.KerberosTime
                    public endtime: sun.security.krb5.internal.KerberosTime
                    public renewTill: sun.security.krb5.internal.KerberosTime
                    public caddr: sun.security.krb5.internal.HostAddresses
                    public authorizationData: sun.security.krb5.internal.AuthorizationData
                    public constructor(arg0: sun.security.krb5.internal.TicketFlags, arg1: sun.security.krb5.EncryptionKey, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.internal.TransitedEncoding, arg4: sun.security.krb5.internal.KerberosTime, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.HostAddresses, arg9: sun.security.krb5.internal.AuthorizationData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class HostAddress implements java.lang.Cloneable {
                    public clone(): java.lang.Object
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public getInetAddress(): java.net.InetAddress
                    public constructor()
                    public constructor(arg0: int, arg1: byte[])
                    public constructor(arg0: java.net.InetAddress)
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.HostAddress
                    public static class: java.lang.Class<any>
                }
                class HostAddresses implements java.lang.Cloneable {
                    public constructor(arg0: sun.security.krb5.internal.HostAddress[])
                    public constructor()
                    public constructor(arg0: sun.security.krb5.PrincipalName)
                    public clone(): java.lang.Object
                    public inList(arg0: sun.security.krb5.internal.HostAddress): boolean
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.HostAddresses
                    public writeAddrs(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
                    public getInetAddresses(): java.net.InetAddress[]
                    public static getLocalAddresses(): sun.security.krb5.internal.HostAddresses
                    public constructor(arg0: java.net.InetAddress[])
                    public static class: java.lang.Class<any>
                }
                class KDCOptions extends sun.security.krb5.internal.util.KerberosFlags {
                    public static RESERVED: int
                    public static FORWARDABLE: int
                    public static FORWARDED: int
                    public static PROXIABLE: int
                    public static PROXY: int
                    public static ALLOW_POSTDATE: int
                    public static POSTDATED: int
                    public static UNUSED7: int
                    public static RENEWABLE: int
                    public static UNUSED9: int
                    public static UNUSED10: int
                    public static UNUSED11: int
                    public static CNAME_IN_ADDL_TKT: int
                    public static RENEWABLE_OK: int
                    public static ENC_TKT_IN_SKEY: int
                    public static RENEW: int
                    public static VALIDATE: int
                    public static with(...arg0: int[]): sun.security.krb5.internal.KDCOptions
                    public constructor()
                    public constructor(arg0: int, arg1: byte[])
                    public constructor(arg0: boolean[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public constructor(arg0: byte[])
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.KDCOptions
                    public set(arg0: int, arg1: boolean): void
                    public get(arg0: int): boolean
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class KDCRep {
                    public cname: sun.security.krb5.PrincipalName
                    public ticket: sun.security.krb5.internal.Ticket
                    public encPart: sun.security.krb5.EncryptedData
                    public encKDCRepPart: sun.security.krb5.internal.EncKDCRepPart
                    public pAData: sun.security.krb5.internal.PAData[]
                    public constructor(arg0: sun.security.krb5.internal.PAData[], arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.internal.Ticket, arg3: sun.security.krb5.EncryptedData, arg4: int)
                    public constructor()
                    public constructor(arg0: byte[], arg1: int)
                    public constructor(arg0: sun.security.util.DerValue, arg1: int)
                    protected init(arg0: sun.security.util.DerValue, arg1: int): void
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class KDCReq {
                    public reqBody: sun.security.krb5.internal.KDCReqBody
                    public constructor(arg0: sun.security.krb5.internal.PAData[], arg1: sun.security.krb5.internal.KDCReqBody, arg2: int)
                    public constructor()
                    public constructor(arg0: byte[], arg1: int)
                    public constructor(arg0: sun.security.util.DerValue, arg1: int)
                    protected init(arg0: sun.security.util.DerValue, arg1: int): void
                    public asn1Encode(): byte[]
                    public asn1EncodeReqBody(): byte[]
                    public static class: java.lang.Class<any>
                }
                class KDCReqBody {
                    public kdcOptions: sun.security.krb5.internal.KDCOptions
                    public cname: sun.security.krb5.PrincipalName
                    public sname: sun.security.krb5.PrincipalName
                    public from: sun.security.krb5.internal.KerberosTime
                    public till: sun.security.krb5.internal.KerberosTime
                    public rtime: sun.security.krb5.internal.KerberosTime
                    public addresses: sun.security.krb5.internal.HostAddresses
                    public constructor(arg0: sun.security.krb5.internal.KDCOptions, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.KerberosTime, arg5: sun.security.krb5.internal.KerberosTime, arg6: int, arg7: int[], arg8: sun.security.krb5.internal.HostAddresses, arg9: sun.security.krb5.EncryptedData, arg10: sun.security.krb5.internal.Ticket[])
                    public constructor(arg0: sun.security.util.DerValue, arg1: int)
                    public asn1Encode(arg0: int): byte[]
                    public getNonce(): int
                    public static class: java.lang.Class<any>
                }
                class KRBCred {
                    public tickets: sun.security.krb5.internal.Ticket[]
                    public encPart: sun.security.krb5.EncryptedData
                    public constructor(arg0: sun.security.krb5.internal.Ticket[], arg1: sun.security.krb5.EncryptedData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class KRBError implements java.io.Serializable {
                    public constructor(arg0: sun.security.krb5.internal.APOptions, arg1: sun.security.krb5.internal.KerberosTime, arg2: java.lang.Integer, arg3: sun.security.krb5.internal.KerberosTime, arg4: java.lang.Integer, arg5: int, arg6: sun.security.krb5.PrincipalName, arg7: sun.security.krb5.PrincipalName, arg8: java.lang.String | string, arg9: byte[])
                    public constructor(arg0: sun.security.krb5.internal.APOptions, arg1: sun.security.krb5.internal.KerberosTime, arg2: java.lang.Integer, arg3: sun.security.krb5.internal.KerberosTime, arg4: java.lang.Integer, arg5: int, arg6: sun.security.krb5.PrincipalName, arg7: sun.security.krb5.PrincipalName, arg8: java.lang.String | string, arg9: byte[], arg10: sun.security.krb5.Checksum)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public getServerTime(): sun.security.krb5.internal.KerberosTime
                    public getClientTime(): sun.security.krb5.internal.KerberosTime
                    public getServerMicroSeconds(): java.lang.Integer
                    public getClientMicroSeconds(): java.lang.Integer
                    public getErrorCode(): int
                    public getPA(): sun.security.krb5.internal.PAData[]
                    public getErrorString(): string
                    public asn1Encode(): byte[]
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class KRBPriv {
                    public pvno: int
                    public msgType: int
                    public encPart: sun.security.krb5.EncryptedData
                    public constructor(arg0: sun.security.krb5.EncryptedData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class KRBSafe {
                    public pvno: int
                    public msgType: int
                    public safeBody: sun.security.krb5.internal.KRBSafeBody
                    public cksum: sun.security.krb5.Checksum
                    public constructor(arg0: sun.security.krb5.internal.KRBSafeBody, arg1: sun.security.krb5.Checksum)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class KRBSafeBody {
                    public userData: byte[]
                    public timestamp: sun.security.krb5.internal.KerberosTime
                    public usec: java.lang.Integer
                    public seqNumber: java.lang.Integer
                    public sAddress: sun.security.krb5.internal.HostAddress
                    public rAddress: sun.security.krb5.internal.HostAddress
                    public constructor(arg0: byte[], arg1: sun.security.krb5.internal.KerberosTime, arg2: java.lang.Integer, arg3: java.lang.Integer, arg4: sun.security.krb5.internal.HostAddress, arg5: sun.security.krb5.internal.HostAddress)
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.KRBSafeBody
                    public static class: java.lang.Class<any>
                }
                class KdcErrException extends sun.security.krb5.KrbException {
                    public constructor(arg0: int)
                    public constructor(arg0: int, arg1: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
                class KerberosTime {
                    public constructor(arg0: long)
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.util.Date)
                    public static now(): sun.security.krb5.internal.KerberosTime
                    public toGeneralizedTimeString(): string
                    public asn1Encode(): byte[]
                    public getTime(): long
                    public toDate(): java.util.Date
                    public getMicroSeconds(): int
                    public withMicroSeconds(arg0: int): sun.security.krb5.internal.KerberosTime
                    public inClockSkew(): boolean
                    public greaterThanWRTClockSkew(arg0: sun.security.krb5.internal.KerberosTime, arg1: int): boolean
                    public greaterThanWRTClockSkew(arg0: sun.security.krb5.internal.KerberosTime): boolean
                    public greaterThan(arg0: sun.security.krb5.internal.KerberosTime): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public isZero(): boolean
                    public getSeconds(): int
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.KerberosTime
                    public static getDefaultSkew(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class Krb5 {
                    public static DEFAULT_ALLOWABLE_CLOCKSKEW: int
                    public static DEFAULT_MINIMUM_LIFETIME: int
                    public static DEFAULT_MAXIMUM_RENEWABLE_LIFETIME: int
                    public static DEFAULT_MAXIMUM_TICKET_LIFETIME: int
                    public static DEFAULT_FORWARDABLE_ALLOWED: boolean
                    public static DEFAULT_PROXIABLE_ALLOWED: boolean
                    public static DEFAULT_POSTDATE_ALLOWED: boolean
                    public static DEFAULT_RENEWABLE_ALLOWED: boolean
                    public static AP_EMPTY_ADDRESSES_ALLOWED: boolean
                    public static AP_OPTS_RESERVED: int
                    public static AP_OPTS_USE_SESSION_KEY: int
                    public static AP_OPTS_MUTUAL_REQUIRED: int
                    public static AP_OPTS_MAX: int
                    public static TKT_OPTS_RESERVED: int
                    public static TKT_OPTS_FORWARDABLE: int
                    public static TKT_OPTS_FORWARDED: int
                    public static TKT_OPTS_PROXIABLE: int
                    public static TKT_OPTS_PROXY: int
                    public static TKT_OPTS_MAY_POSTDATE: int
                    public static TKT_OPTS_POSTDATED: int
                    public static TKT_OPTS_INVALID: int
                    public static TKT_OPTS_RENEWABLE: int
                    public static TKT_OPTS_INITIAL: int
                    public static TKT_OPTS_PRE_AUTHENT: int
                    public static TKT_OPTS_HW_AUTHENT: int
                    public static TKT_OPTS_DELEGATE: int
                    public static TKT_OPTS_MAX: int
                    public static KDC_OPTS_MAX: int
                    public static KRB_FLAGS_MAX: int
                    public static LRTYPE_NONE: int
                    public static LRTYPE_TIME_OF_INITIAL_TGT: int
                    public static LRTYPE_TIME_OF_INITIAL_REQ: int
                    public static LRTYPE_TIME_OF_NEWEST_TGT: int
                    public static LRTYPE_TIME_OF_LAST_RENEWAL: int
                    public static LRTYPE_TIME_OF_LAST_REQ: int
                    public static ADDR_LEN_INET: int
                    public static ADDR_LEN_CHAOS: int
                    public static ADDR_LEN_OSI: int
                    public static ADDR_LEN_XNS: int
                    public static ADDR_LEN_APPLETALK: int
                    public static ADDR_LEN_DECNET: int
                    public static ADDRTYPE_UNIX: int
                    public static ADDRTYPE_INET: int
                    public static ADDRTYPE_IMPLINK: int
                    public static ADDRTYPE_PUP: int
                    public static ADDRTYPE_CHAOS: int
                    public static ADDRTYPE_XNS: int
                    public static ADDRTYPE_IPX: int
                    public static ADDRTYPE_ISO: int
                    public static ADDRTYPE_ECMA: int
                    public static ADDRTYPE_DATAKIT: int
                    public static ADDRTYPE_CCITT: int
                    public static ADDRTYPE_SNA: int
                    public static ADDRTYPE_DECNET: int
                    public static ADDRTYPE_DLI: int
                    public static ADDRTYPE_LAT: int
                    public static ADDRTYPE_HYLINK: int
                    public static ADDRTYPE_APPLETALK: int
                    public static ADDRTYPE_NETBIOS: int
                    public static ADDRTYPE_VOICEVIEW: int
                    public static ADDRTYPE_FIREFOX: int
                    public static ADDRTYPE_BAN: int
                    public static ADDRTYPE_ATM: int
                    public static ADDRTYPE_INET6: int
                    public static KDC_INET_DEFAULT_PORT: int
                    public static KDC_RETRY_LIMIT: int
                    public static KDC_DEFAULT_UDP_PREF_LIMIT: int
                    public static KDC_HARD_UDP_LIMIT: int
                    public static KEYTYPE_NULL: int
                    public static KEYTYPE_DES: int
                    public static KEYTYPE_DES3: int
                    public static KEYTYPE_AES: int
                    public static KEYTYPE_ARCFOUR_HMAC: int
                    public static PA_TGS_REQ: int
                    public static PA_ENC_TIMESTAMP: int
                    public static PA_PW_SALT: int
                    public static PA_ETYPE_INFO: int
                    public static PA_ETYPE_INFO2: int
                    public static PA_FOR_USER: int
                    public static OSF_DCE: int
                    public static SESAME: int
                    public static ATT_CHALLENGE_RESPONSE: int
                    public static DOMAIN_X500_COMPRESS: int
                    public static PVNO: int
                    public static AUTHNETICATOR_VNO: int
                    public static TICKET_VNO: int
                    public static KRB_AS_REQ: int
                    public static KRB_AS_REP: int
                    public static KRB_TGS_REQ: int
                    public static KRB_TGS_REP: int
                    public static KRB_AP_REQ: int
                    public static KRB_AP_REP: int
                    public static KRB_SAFE: int
                    public static KRB_PRIV: int
                    public static KRB_CRED: int
                    public static KRB_ERROR: int
                    public static KRB_TKT: int
                    public static KRB_AUTHENTICATOR: int
                    public static KRB_ENC_TKT_PART: int
                    public static KRB_ENC_AS_REP_PART: int
                    public static KRB_ENC_TGS_REP_PART: int
                    public static KRB_ENC_AP_REP_PART: int
                    public static KRB_ENC_KRB_PRIV_PART: int
                    public static KRB_ENC_KRB_CRED_PART: int
                    public static KDC_ERR_NONE: int
                    public static KDC_ERR_NAME_EXP: int
                    public static KDC_ERR_SERVICE_EXP: int
                    public static KDC_ERR_BAD_PVNO: int
                    public static KDC_ERR_C_OLD_MAST_KVNO: int
                    public static KDC_ERR_S_OLD_MAST_KVNO: int
                    public static KDC_ERR_C_PRINCIPAL_UNKNOWN: int
                    public static KDC_ERR_S_PRINCIPAL_UNKNOWN: int
                    public static KDC_ERR_PRINCIPAL_NOT_UNIQUE: int
                    public static KDC_ERR_NULL_KEY: int
                    public static KDC_ERR_CANNOT_POSTDATE: int
                    public static KDC_ERR_NEVER_VALID: int
                    public static KDC_ERR_POLICY: int
                    public static KDC_ERR_BADOPTION: int
                    public static KDC_ERR_ETYPE_NOSUPP: int
                    public static KDC_ERR_SUMTYPE_NOSUPP: int
                    public static KDC_ERR_PADATA_TYPE_NOSUPP: int
                    public static KDC_ERR_TRTYPE_NOSUPP: int
                    public static KDC_ERR_CLIENT_REVOKED: int
                    public static KDC_ERR_SERVICE_REVOKED: int
                    public static KDC_ERR_TGT_REVOKED: int
                    public static KDC_ERR_CLIENT_NOTYET: int
                    public static KDC_ERR_SERVICE_NOTYET: int
                    public static KDC_ERR_KEY_EXPIRED: int
                    public static KDC_ERR_PREAUTH_FAILED: int
                    public static KDC_ERR_PREAUTH_REQUIRED: int
                    public static KRB_AP_ERR_BAD_INTEGRITY: int
                    public static KRB_AP_ERR_TKT_EXPIRED: int
                    public static KRB_AP_ERR_TKT_NYV: int
                    public static KRB_AP_ERR_REPEAT: int
                    public static KRB_AP_ERR_NOT_US: int
                    public static KRB_AP_ERR_BADMATCH: int
                    public static KRB_AP_ERR_SKEW: int
                    public static KRB_AP_ERR_BADADDR: int
                    public static KRB_AP_ERR_BADVERSION: int
                    public static KRB_AP_ERR_MSG_TYPE: int
                    public static KRB_AP_ERR_MODIFIED: int
                    public static KRB_AP_ERR_BADORDER: int
                    public static KRB_AP_ERR_BADKEYVER: int
                    public static KRB_AP_ERR_NOKEY: int
                    public static KRB_AP_ERR_MUT_FAIL: int
                    public static KRB_AP_ERR_BADDIRECTION: int
                    public static KRB_AP_ERR_METHOD: int
                    public static KRB_AP_ERR_BADSEQ: int
                    public static KRB_AP_ERR_INAPP_CKSUM: int
                    public static KRB_ERR_RESPONSE_TOO_BIG: int
                    public static KRB_ERR_GENERIC: int
                    public static KRB_ERR_FIELD_TOOLONG: int
                    public static KRB_CRYPTO_NOT_SUPPORT: int
                    public static KRB_AP_ERR_NOREALM: int
                    public static KRB_AP_ERR_GEN_CRED: int
                    public static KRB_AP_ERR_REQ_OPTIONS: int
                    public static API_INVALID_ARG: int
                    public static BITSTRING_SIZE_INVALID: int
                    public static BITSTRING_INDEX_OUT_OF_BOUNDS: int
                    public static BITSTRING_BAD_LENGTH: int
                    public static REALM_ILLCHAR: int
                    public static REALM_NULL: int
                    public static ASN1_BAD_TIMEFORMAT: int
                    public static ASN1_MISSING_FIELD: int
                    public static ASN1_MISPLACED_FIELD: int
                    public static ASN1_TYPE_MISMATCH: int
                    public static ASN1_OVERFLOW: int
                    public static ASN1_OVERRUN: int
                    public static ASN1_BAD_ID: int
                    public static ASN1_BAD_LENGTH: int
                    public static ASN1_BAD_FORMAT: int
                    public static ASN1_PARSE_ERROR: int
                    public static ASN1_BAD_CLASS: int
                    public static ASN1_BAD_TYPE: int
                    public static ASN1_BAD_TAG: int
                    public static ASN1_UNSUPPORTED_TYPE: int
                    public static ASN1_CANNOT_ENCODE: int
                    public static DEBUG: boolean
                    public static hexDumper: sun.misc.HexDumpEncoder
                    public constructor()
                    public static getErrorMessage(arg0: int): string
                    public static class: java.lang.Class<any>
                }
                class KrbApErrException extends sun.security.krb5.KrbException {
                    public constructor(arg0: int)
                    public constructor(arg0: int, arg1: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
                class KrbCredInfo {
                    public key: sun.security.krb5.EncryptionKey
                    public pname: sun.security.krb5.PrincipalName
                    public flags: sun.security.krb5.internal.TicketFlags
                    public authtime: sun.security.krb5.internal.KerberosTime
                    public starttime: sun.security.krb5.internal.KerberosTime
                    public endtime: sun.security.krb5.internal.KerberosTime
                    public renewTill: sun.security.krb5.internal.KerberosTime
                    public sname: sun.security.krb5.PrincipalName
                    public caddr: sun.security.krb5.internal.HostAddresses
                    public constructor(arg0: sun.security.krb5.EncryptionKey, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.internal.TicketFlags, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.KerberosTime, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.PrincipalName, arg8: sun.security.krb5.internal.HostAddresses)
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class KrbErrException extends sun.security.krb5.KrbException {
                    public constructor(arg0: int)
                    public constructor(arg0: int, arg1: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
                class LastReq {
                    public constructor(arg0: sun.security.krb5.internal.LastReqEntry[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.LastReq
                    public static class: java.lang.Class<any>
                }
                class LastReqEntry {
                    public constructor(arg0: int, arg1: sun.security.krb5.internal.KerberosTime)
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class LocalSeqNumber implements sun.security.krb5.internal.SeqNumber {
                    public constructor()
                    public constructor(arg0: int)
                    public constructor(arg0: java.lang.Integer)
                    public randInit(): void
                    public init(arg0: int): void
                    public current(): int
                    public next(): int
                    public step(): int
                    public static class: java.lang.Class<any>
                }
                class LoginOptions extends sun.security.krb5.internal.KDCOptions {
                    public static RESERVED: int
                    public static FORWARDABLE: int
                    public static PROXIABLE: int
                    public static ALLOW_POSTDATE: int
                    public static RENEWABLE: int
                    public static RENEWABLE_OK: int
                    public static ENC_TKT_IN_SKEY: int
                    public static RENEW: int
                    public static VALIDATE: int
                    public static MAX: int
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class MethodData {
                    public constructor(arg0: int, arg1: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                abstract class NetClient implements java.lang.AutoCloseable {
                    public constructor()
                    public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int): sun.security.krb5.internal.NetClient
                    public send(arg0: byte[]): void
                    public receive(): byte[]
                    public close(): void
                    public static class: java.lang.Class<any>
                }
                abstract class NetClient$$Lambda implements java.lang.AutoCloseable {
                    public constructor()
                }
                class PAData {
                    public constructor(arg0: int, arg1: byte[])
                    public clone(): java.lang.Object
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public getType(): int
                    public getValue(): byte[]
                    public static getPreferredEType(arg0: sun.security.krb5.internal.PAData[], arg1: int): int
                    public static getSaltAndParams(arg0: int, arg1: sun.security.krb5.internal.PAData[]): sun.security.krb5.internal.PAData$SaltAndParams
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class PAEncTSEnc {
                    public pATimeStamp: sun.security.krb5.internal.KerberosTime
                    public pAUSec: java.lang.Integer
                    public constructor(arg0: sun.security.krb5.internal.KerberosTime, arg1: java.lang.Integer)
                    public constructor()
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static class: java.lang.Class<any>
                }
                class PAForUserEnc {
                    public name: sun.security.krb5.PrincipalName
                    public static AUTH_PACKAGE: string
                    public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.EncryptionKey)
                    public constructor(arg0: sun.security.util.DerValue, arg1: sun.security.krb5.EncryptionKey)
                    public asn1Encode(): byte[]
                    public getS4UByteArray(): byte[]
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                abstract class ReplayCache {
                    public constructor()
                    public static getInstance(arg0: java.lang.String | string): sun.security.krb5.internal.ReplayCache
                    public static getInstance(): sun.security.krb5.internal.ReplayCache
                    public checkAndStore(arg0: sun.security.krb5.internal.KerberosTime, arg1: sun.security.krb5.internal.rcache.AuthTimeWithHash): void
                    public static class: java.lang.Class<any>
                }
                interface SeqNumber {
                    randInit(): void
                    init(arg0: int): void
                    current(): int
                    next(): int
                    step(): int
                }
                class TGSRep extends sun.security.krb5.internal.KDCRep {
                    public constructor(arg0: sun.security.krb5.internal.PAData[], arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.internal.Ticket, arg3: sun.security.krb5.EncryptedData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public static class: java.lang.Class<any>
                }
                class TGSReq extends sun.security.krb5.internal.KDCReq {
                    public constructor(arg0: sun.security.krb5.internal.PAData[], arg1: sun.security.krb5.internal.KDCReqBody)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public static class: java.lang.Class<any>
                }
                class Ticket implements java.lang.Cloneable {
                    public tkt_vno: int
                    public sname: sun.security.krb5.PrincipalName
                    public encPart: sun.security.krb5.EncryptedData
                    public clone(): java.lang.Object
                    public constructor(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.EncryptedData)
                    public constructor(arg0: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.Ticket
                    public static class: java.lang.Class<any>
                }
                class TicketFlags extends sun.security.krb5.internal.util.KerberosFlags {
                    public constructor()
                    public constructor(arg0: boolean[])
                    public constructor(arg0: int, arg1: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.TicketFlags
                    public clone(): java.lang.Object
                    public match(arg0: sun.security.krb5.internal.LoginOptions): boolean
                    public match(arg0: sun.security.krb5.internal.TicketFlags): boolean
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class TransitedEncoding {
                    public trType: int
                    public contents: byte[]
                    public constructor(arg0: int, arg1: byte[])
                    public constructor(arg0: sun.security.util.DerValue)
                    public asn1Encode(): byte[]
                    public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.internal.TransitedEncoding
                    public static class: java.lang.Class<any>
                }
            }
            class Asn1Exception extends sun.security.krb5.KrbException {
                public constructor(arg0: int)
                public static class: java.lang.Class<any>
            }
            class Checksum {
                public static CKSUMTYPE_NULL: int
                public static CKSUMTYPE_CRC32: int
                public static CKSUMTYPE_RSA_MD4: int
                public static CKSUMTYPE_RSA_MD4_DES: int
                public static CKSUMTYPE_DES_MAC: int
                public static CKSUMTYPE_DES_MAC_K: int
                public static CKSUMTYPE_RSA_MD4_DES_K: int
                public static CKSUMTYPE_RSA_MD5: int
                public static CKSUMTYPE_RSA_MD5_DES: int
                public static CKSUMTYPE_HMAC_SHA1_DES3_KD: int
                public static CKSUMTYPE_HMAC_SHA1_96_AES128: int
                public static CKSUMTYPE_HMAC_SHA1_96_AES256: int
                public static CKSUMTYPE_HMAC_MD5_ARCFOUR: int
                public static initStatic(): void
                public constructor(arg0: byte[], arg1: int)
                public constructor(arg0: int, arg1: byte[])
                public constructor(arg0: int, arg1: byte[], arg2: sun.security.krb5.EncryptionKey, arg3: int)
                public verifyKeyedChecksum(arg0: byte[], arg1: sun.security.krb5.EncryptionKey, arg2: int): boolean
                public asn1Encode(): byte[]
                public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.Checksum
                public getBytes(): byte[]
                public getType(): int
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class Config {
                public static getInstance(): sun.security.krb5.Config
                public static refresh(): void
                public get(...arg0: java.lang.String[]): string
                public getAll(...arg0: java.lang.String[]): string
                public exists(...arg0: java.lang.String[]): boolean
                public getIntValue(...arg0: java.lang.String[]): int
                public getBooleanValue(...arg0: java.lang.String[]): boolean
                public listTable(): void
                public defaultEtype(arg0: java.lang.String | string): int[]
                public static getType(arg0: java.lang.String | string): int
                public resetDefaultRealm(arg0: java.lang.String | string): void
                public useAddresses(): boolean
                public getDefaultRealm(): string
                public getKDCList(arg0: java.lang.String | string): string
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class Confounder {
                public static bytes(arg0: int): byte[]
                public static intValue(): int
                public static longValue(): long
                public static class: java.lang.Class<any>
            }
            class Credentials {
                public constructor(arg0: sun.security.krb5.internal.Ticket, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.EncryptionKey, arg4: sun.security.krb5.internal.TicketFlags, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.KerberosTime, arg9: sun.security.krb5.internal.HostAddresses, arg10: sun.security.krb5.internal.AuthorizationData)
                public constructor(arg0: sun.security.krb5.internal.Ticket, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.EncryptionKey, arg4: sun.security.krb5.internal.TicketFlags, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: sun.security.krb5.internal.KerberosTime, arg8: sun.security.krb5.internal.KerberosTime, arg9: sun.security.krb5.internal.HostAddresses)
                public constructor(arg0: byte[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: byte[], arg4: int, arg5: boolean[], arg6: java.util.Date, arg7: java.util.Date, arg8: java.util.Date, arg9: java.util.Date, arg10: java.net.InetAddress[])
                public getClient(): sun.security.krb5.PrincipalName
                public getServer(): sun.security.krb5.PrincipalName
                public getSessionKey(): sun.security.krb5.EncryptionKey
                public getAuthTime(): java.util.Date
                public getStartTime(): java.util.Date
                public getEndTime(): java.util.Date
                public getRenewTill(): java.util.Date
                public getFlags(): boolean[]
                public getClientAddresses(): java.net.InetAddress[]
                public getEncoded(): byte[]
                public isForwardable(): boolean
                public isRenewable(): boolean
                public getTicket(): sun.security.krb5.internal.Ticket
                public getTicketFlags(): sun.security.krb5.internal.TicketFlags
                public getAuthzData(): sun.security.krb5.internal.AuthorizationData
                public checkDelegate(): boolean
                public resetDelegate(): void
                public renew(): sun.security.krb5.Credentials
                public static acquireTGTFromCache(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.Credentials
                public static acquireDefaultCreds(): sun.security.krb5.Credentials
                public static acquireServiceCreds(arg0: java.lang.String | string, arg1: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                public static acquireS4U2selfCreds(arg0: sun.security.krb5.PrincipalName, arg1: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                public static acquireS4U2proxyCreds(arg0: java.lang.String | string, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.Credentials): sun.security.krb5.Credentials
                public getCache(): sun.security.krb5.internal.ccache.CredentialsCache
                public getServiceKey(): sun.security.krb5.EncryptionKey
                public static printDebug(arg0: sun.security.krb5.Credentials): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class EncryptedData implements java.lang.Cloneable {
                public static ETYPE_NULL: int
                public static ETYPE_DES_CBC_CRC: int
                public static ETYPE_DES_CBC_MD4: int
                public static ETYPE_DES_CBC_MD5: int
                public static ETYPE_ARCFOUR_HMAC: int
                public static ETYPE_ARCFOUR_HMAC_EXP: int
                public static ETYPE_DES3_CBC_HMAC_SHA1_KD: int
                public static ETYPE_AES128_CTS_HMAC_SHA1_96: int
                public static ETYPE_AES256_CTS_HMAC_SHA1_96: int
                public clone(): java.lang.Object
                public constructor(arg0: int, arg1: java.lang.Integer, arg2: byte[])
                public constructor(arg0: sun.security.krb5.EncryptionKey, arg1: byte[], arg2: int)
                public decrypt(arg0: sun.security.krb5.EncryptionKey, arg1: int): byte[]
                public asn1Encode(): byte[]
                public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.EncryptedData
                public reset(arg0: byte[]): byte[]
                public getEType(): int
                public getKeyVersionNumber(): java.lang.Integer
                public getBytes(): byte[]
                public static class: java.lang.Class<any>
            }
            class EncryptionKey implements java.lang.Cloneable {
                public static NULL_KEY: sun.security.krb5.EncryptionKey
                public getEType(): int
                public getKeyVersionNumber(): java.lang.Integer
                public getBytes(): byte[]
                public clone(): java.lang.Object
                public static acquireSecretKeys(arg0: sun.security.krb5.PrincipalName, arg1: java.lang.String | string): sun.security.krb5.EncryptionKey[]
                public static acquireSecretKey(arg0: sun.security.krb5.PrincipalName, arg1: char[], arg2: int, arg3: sun.security.krb5.internal.PAData$SaltAndParams): sun.security.krb5.EncryptionKey
                public static acquireSecretKey(arg0: char[], arg1: java.lang.String | string, arg2: int, arg3: byte[]): sun.security.krb5.EncryptionKey
                public static acquireSecretKeys(arg0: char[], arg1: java.lang.String | string): sun.security.krb5.EncryptionKey[]
                public constructor(arg0: byte[], arg1: int, arg2: java.lang.Integer)
                public constructor(arg0: int, arg1: byte[])
                public constructor(arg0: char[], arg1: java.lang.String | string, arg2: java.lang.String | string)
                public constructor(arg0: sun.security.krb5.EncryptionKey)
                public constructor(arg0: sun.security.util.DerValue)
                public asn1Encode(): byte[]
                public destroy(): void
                public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.EncryptionKey
                public writeKey(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
                public toString(): string
                public static findKey(arg0: int, arg1: sun.security.krb5.EncryptionKey[]): sun.security.krb5.EncryptionKey
                public static findKey(arg0: int, arg1: java.lang.Integer, arg2: sun.security.krb5.EncryptionKey[]): sun.security.krb5.EncryptionKey
                public static class: java.lang.Class<any>
            }
            interface JavaxSecurityAuthKerberosAccess {
                keyTabTakeSnapshot(arg0: javax.security.auth.kerberos.KeyTab): sun.security.krb5.internal.ktab.KeyTab
            }
            interface JavaxSecurityAuthKerberosAccess$$Lambda {
                (arg0: javax.security.auth.kerberos.KeyTab): sun.security.krb5.internal.ktab.KeyTab
            }
            class KdcComm {
                public static initStatic(): void
                public constructor(arg0: java.lang.String | string)
                public send(arg0: byte[]): byte[]
                public static class: java.lang.Class<any>
            }
            class KerberosSecrets {
                public constructor()
                public static setJavaxSecurityAuthKerberosAccess(arg0: sun.security.krb5.JavaxSecurityAuthKerberosAccess | sun.security.krb5.JavaxSecurityAuthKerberosAccess$$Lambda): void
                public static getJavaxSecurityAuthKerberosAccess(): sun.security.krb5.JavaxSecurityAuthKerberosAccess
                public static class: java.lang.Class<any>
            }
            class KrbApRep {
                public constructor(arg0: sun.security.krb5.KrbApReq, arg1: boolean, arg2: sun.security.krb5.EncryptionKey)
                public constructor(arg0: byte[], arg1: sun.security.krb5.Credentials, arg2: sun.security.krb5.KrbApReq)
                public getSubKey(): sun.security.krb5.EncryptionKey
                public getSeqNumber(): java.lang.Integer
                public getMessage(): byte[]
                public static class: java.lang.Class<any>
            }
            class KrbApReq {
                public constructor(arg0: sun.security.krb5.Credentials, arg1: boolean, arg2: boolean, arg3: boolean, arg4: sun.security.krb5.Checksum)
                public constructor(arg0: byte[], arg1: sun.security.jgss.krb5.Krb5AcceptCredential, arg2: java.net.InetAddress)
                public getCreds(): sun.security.krb5.Credentials
                public getMutualAuthRequired(): boolean
                public getSubKey(): sun.security.krb5.EncryptionKey
                public getSeqNumber(): java.lang.Integer
                public getChecksum(): sun.security.krb5.Checksum
                public getMessage(): byte[]
                public getClient(): sun.security.krb5.PrincipalName
                public static class: java.lang.Class<any>
            }
            abstract class KrbAppMessage {
                public static class: java.lang.Class<any>
            }
            class KrbAsRep extends sun.security.krb5.KrbKdcRep {
                public static class: java.lang.Class<any>
            }
            class KrbAsReq {
                public constructor(arg0: sun.security.krb5.EncryptionKey, arg1: sun.security.krb5.internal.KDCOptions, arg2: sun.security.krb5.PrincipalName, arg3: sun.security.krb5.PrincipalName, arg4: sun.security.krb5.internal.KerberosTime, arg5: sun.security.krb5.internal.KerberosTime, arg6: sun.security.krb5.internal.KerberosTime, arg7: int[], arg8: sun.security.krb5.internal.HostAddresses)
                public static class: java.lang.Class<any>
            }
            class KrbAsReqBuilder {
                public constructor(arg0: sun.security.krb5.PrincipalName, arg1: javax.security.auth.kerberos.KeyTab)
                public constructor(arg0: sun.security.krb5.PrincipalName, arg1: char[])
                public getKeys(arg0: boolean): sun.security.krb5.EncryptionKey[]
                public setOptions(arg0: sun.security.krb5.internal.KDCOptions): void
                public setTarget(arg0: sun.security.krb5.PrincipalName): void
                public setAddresses(arg0: sun.security.krb5.internal.HostAddresses): void
                public action(): sun.security.krb5.KrbAsReqBuilder
                public getCreds(): sun.security.krb5.Credentials
                public getCCreds(): sun.security.krb5.internal.ccache.Credentials
                public destroy(): void
                public static class: java.lang.Class<any>
            }
            class KrbCred {
                public constructor(arg0: sun.security.krb5.Credentials, arg1: sun.security.krb5.Credentials, arg2: sun.security.krb5.EncryptionKey)
                public constructor(arg0: byte[], arg1: sun.security.krb5.EncryptionKey)
                public getDelegatedCreds(): sun.security.krb5.Credentials[]
                public getMessage(): byte[]
                public static class: java.lang.Class<any>
            }
            class KrbCryptoException extends sun.security.krb5.KrbException {
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class KrbException extends java.lang.Exception {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.Throwable)
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: java.lang.String | string)
                public constructor(arg0: sun.security.krb5.internal.KRBError)
                public constructor(arg0: sun.security.krb5.internal.KRBError, arg1: java.lang.String | string)
                public getError(): sun.security.krb5.internal.KRBError
                public returnCode(): int
                public returnCodeSymbol(): string
                public static returnCodeSymbol(arg0: int): string
                public returnCodeMessage(): string
                public static errorMessage(arg0: int): string
                public krbErrorMessage(): string
                public getMessage(): string
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
            abstract class KrbKdcRep {
                public static class: java.lang.Class<any>
            }
            class KrbPriv extends sun.security.krb5.KrbAppMessage {
                public getMessage(): byte[]
                public getData(): byte[]
                public static class: java.lang.Class<any>
            }
            class KrbSafe extends sun.security.krb5.KrbAppMessage {
                public constructor(arg0: byte[], arg1: sun.security.krb5.Credentials, arg2: sun.security.krb5.EncryptionKey, arg3: sun.security.krb5.internal.KerberosTime, arg4: sun.security.krb5.internal.SeqNumber, arg5: sun.security.krb5.internal.HostAddress, arg6: sun.security.krb5.internal.HostAddress)
                public constructor(arg0: byte[], arg1: sun.security.krb5.Credentials, arg2: sun.security.krb5.EncryptionKey, arg3: sun.security.krb5.internal.SeqNumber, arg4: sun.security.krb5.internal.HostAddress, arg5: sun.security.krb5.internal.HostAddress, arg6: boolean, arg7: boolean)
                public getMessage(): byte[]
                public getData(): byte[]
                public static class: java.lang.Class<any>
            }
            class KrbServiceLocator {
                public static class: java.lang.Class<any>
            }
            class KrbTgsRep extends sun.security.krb5.KrbKdcRep {
                public getCreds(): sun.security.krb5.Credentials
                public static class: java.lang.Class<any>
            }
            class KrbTgsReq {
                public constructor(arg0: sun.security.krb5.Credentials, arg1: sun.security.krb5.PrincipalName)
                public constructor(arg0: sun.security.krb5.Credentials, arg1: sun.security.krb5.internal.Ticket, arg2: sun.security.krb5.PrincipalName)
                public constructor(arg0: sun.security.krb5.Credentials, arg1: sun.security.krb5.PrincipalName, arg2: sun.security.krb5.internal.PAData)
                public send(): void
                public getReply(): sun.security.krb5.KrbTgsRep
                public sendAndGetCreds(): sun.security.krb5.Credentials
                public static class: java.lang.Class<any>
            }
            class PrincipalName implements java.lang.Cloneable {
                public static KRB_NT_UNKNOWN: int
                public static KRB_NT_PRINCIPAL: int
                public static KRB_NT_SRV_INST: int
                public static KRB_NT_SRV_HST: int
                public static KRB_NT_SRV_XHST: int
                public static KRB_NT_UID: int
                public static TGS_DEFAULT_SRV_NAME: string
                public static TGS_DEFAULT_NT: int
                public static NAME_COMPONENT_SEPARATOR: char
                public static NAME_REALM_SEPARATOR: char
                public static REALM_COMPONENT_SEPARATOR: char
                public static NAME_COMPONENT_SEPARATOR_STR: string
                public static NAME_REALM_SEPARATOR_STR: string
                public static REALM_COMPONENT_SEPARATOR_STR: string
                public constructor(arg0: int, arg1: java.lang.String[], arg2: sun.security.krb5.Realm)
                public constructor(arg0: java.lang.String[], arg1: java.lang.String | string)
                public clone(): java.lang.Object
                public equals(arg0: java.lang.Object): boolean
                public constructor(arg0: sun.security.util.DerValue, arg1: sun.security.krb5.Realm)
                public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean, arg3: sun.security.krb5.Realm): sun.security.krb5.PrincipalName
                public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: int)
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public static tgsService(arg0: java.lang.String | string, arg1: java.lang.String | string): sun.security.krb5.PrincipalName
                public getRealmAsString(): string
                public getPrincipalNameAsString(): string
                public hashCode(): int
                public getName(): string
                public getNameType(): int
                public getNameStrings(): java.lang.String[]
                public toByteArray(): byte[][]
                public getRealmString(): string
                public getRealm(): sun.security.krb5.Realm
                public getSalt(): string
                public toString(): string
                public getNameString(): string
                public asn1Encode(): byte[]
                public match(arg0: sun.security.krb5.PrincipalName): boolean
                public writePrincipal(arg0: sun.security.krb5.internal.ccache.CCacheOutputStream): void
                public getInstanceComponent(): string
                public isRealmDeduced(): boolean
                public static class: java.lang.Class<any>
            }
            class Realm implements java.lang.Cloneable {
                public static AUTODEDUCEREALM: boolean
                public constructor(arg0: java.lang.String | string)
                public static getDefault(): sun.security.krb5.Realm
                public clone(): java.lang.Object
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public constructor(arg0: sun.security.util.DerValue)
                public toString(): string
                public static parseRealmAtSeparator(arg0: java.lang.String | string): string
                public static parseRealmComponent(arg0: java.lang.String | string): string
                protected static parseRealm(arg0: java.lang.String | string): string
                protected static isValidRealmString(arg0: java.lang.String | string): boolean
                public asn1Encode(): byte[]
                public static parse(arg0: sun.security.util.DerInputStream, arg1: byte, arg2: boolean): sun.security.krb5.Realm
                public static getRealmsList(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String[]
                public static class: java.lang.Class<any>
            }
            class RealmException extends sun.security.krb5.KrbException {
                public constructor(arg0: int)
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: int, arg1: java.lang.String | string)
                public constructor(arg0: java.lang.Throwable)
                public static class: java.lang.Class<any>
            }
            class SCDynamicStoreConfig {
                public constructor()
                public static getConfig(): java.util.Hashtable<java.lang.String, java.lang.Object>
                public static class: java.lang.Class<any>
            }
        }
    }
}
