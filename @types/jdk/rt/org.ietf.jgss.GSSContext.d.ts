declare namespace org {
    namespace ietf {
        namespace jgss {
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

        }
    }
}