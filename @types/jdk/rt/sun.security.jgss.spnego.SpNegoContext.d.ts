declare namespace sun {
    namespace security {
        namespace jgss {
            namespace spnego {
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

            }
        }
    }
}