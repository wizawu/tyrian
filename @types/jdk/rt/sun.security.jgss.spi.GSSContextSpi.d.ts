declare namespace sun {
    namespace security {
        namespace jgss {
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
                    initSecContext(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int): byte[]
                    acceptSecContext(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int): byte[]
                    getWrapSizeLimit(arg0: int, arg1: boolean, arg2: int): int
                    wrap(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    wrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    unwrap(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    unwrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    getMIC(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    getMIC(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                    verifyMIC(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.io.InputStream | java.io.InputStream$$Lambda, arg2: org.ietf.jgss.MessageProp): void
                    verifyMIC(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int, arg6: org.ietf.jgss.MessageProp): void
                    export(): byte[]
                    dispose(): void
                    inquireSecContext(arg0: com.sun.security.jgss.InquireType): java.lang.Object
                }
            }
        }
    }
}