declare namespace sun {
    namespace security {
        namespace jgss {
            namespace wrapper {
                class NativeGSSContext implements sun.security.jgss.spi.GSSContextSpi {
                    public getProvider(): java.security.Provider
                    public initSecContext(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int): byte[]
                    public acceptSecContext(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int): byte[]
                    public isEstablished(): boolean
                    public dispose(): void
                    public getWrapSizeLimit(arg0: int, arg1: boolean, arg2: int): int
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: java.io.OutputStream | java.io.OutputStream$$Lambda, arg4: org.ietf.jgss.MessageProp): void
                    public wrap(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: org.ietf.jgss.MessageProp): int
                    public wrap(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public unwrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public unwrap(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: org.ietf.jgss.MessageProp): int
                    public unwrap(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public unwrap(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: byte[], arg2: int, arg3: org.ietf.jgss.MessageProp): int
                    public getMIC(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    public getMIC(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    public verifyMIC(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: org.ietf.jgss.MessageProp): void
                    public verifyMIC(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
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
            }
        }
    }
}