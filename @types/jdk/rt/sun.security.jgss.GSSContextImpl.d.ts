declare namespace sun {
    namespace security {
        namespace jgss {
            class GSSContextImpl implements com.sun.security.jgss.ExtendedGSSContext {
                public constructor(arg0: sun.security.jgss.GSSManagerImpl, arg1: org.ietf.jgss.GSSName, arg2: org.ietf.jgss.Oid, arg3: org.ietf.jgss.GSSCredential, arg4: int)
                public constructor(arg0: sun.security.jgss.GSSManagerImpl, arg1: org.ietf.jgss.GSSCredential)
                public constructor(arg0: sun.security.jgss.GSSManagerImpl, arg1: byte[])
                public initSecContext(arg0: byte[], arg1: int, arg2: int): byte[]
                public initSecContext(arg0: java.io.InputStream, arg1: java.io.OutputStream): int
                public acceptSecContext(arg0: byte[], arg1: int, arg2: int): byte[]
                public acceptSecContext(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
                public isEstablished(): boolean
                public getWrapSizeLimit(arg0: int, arg1: boolean, arg2: int): int
                public wrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                public wrap(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: org.ietf.jgss.MessageProp): void
                public unwrap(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                public unwrap(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: org.ietf.jgss.MessageProp): void
                public getMIC(arg0: byte[], arg1: int, arg2: int, arg3: org.ietf.jgss.MessageProp): byte[]
                public getMIC(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: org.ietf.jgss.MessageProp): void
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
        }
    }
}