declare namespace sun {
    namespace security {
        namespace jgss {
            namespace krb5 {
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
            }
        }
    }
}