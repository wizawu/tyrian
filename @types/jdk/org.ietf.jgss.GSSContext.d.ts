declare namespace org {
  namespace ietf {
    namespace jgss {

      interface GSSContext {
        public static readonly DEFAULT_LIFETIME: int
        public static readonly INDEFINITE_LIFETIME: int
        initSecContext(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
        initSecContext(arg0: java.io.InputStream, arg1: java.io.OutputStream): number
        acceptSecContext(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number[]
        acceptSecContext(arg0: java.io.InputStream, arg1: java.io.OutputStream): void
        isEstablished(): boolean
        dispose(): void
        getWrapSizeLimit(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean, arg2: number | java.lang.Integer): number
        wrap(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: org.ietf.jgss.MessageProp): number[]
        wrap(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: org.ietf.jgss.MessageProp): void
        unwrap(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: org.ietf.jgss.MessageProp): number[]
        unwrap(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: org.ietf.jgss.MessageProp): void
        getMIC(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: org.ietf.jgss.MessageProp): number[]
        getMIC(arg0: java.io.InputStream, arg1: java.io.OutputStream, arg2: org.ietf.jgss.MessageProp): void
        verifyMIC(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: byte[], arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: org.ietf.jgss.MessageProp): void
        verifyMIC(arg0: java.io.InputStream, arg1: java.io.InputStream, arg2: org.ietf.jgss.MessageProp): void
        export(): number[]
        requestMutualAuth(arg0: boolean | java.lang.Boolean): void
        requestReplayDet(arg0: boolean | java.lang.Boolean): void
        requestSequenceDet(arg0: boolean | java.lang.Boolean): void
        requestCredDeleg(arg0: boolean | java.lang.Boolean): void
        requestAnonymity(arg0: boolean | java.lang.Boolean): void
        requestConf(arg0: boolean | java.lang.Boolean): void
        requestInteg(arg0: boolean | java.lang.Boolean): void
        requestLifetime(arg0: number | java.lang.Integer): void
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
        getLifetime(): number
        getSrcName(): org.ietf.jgss.GSSName
        getTargName(): org.ietf.jgss.GSSName
        getMech(): org.ietf.jgss.Oid
        getDelegCred(): org.ietf.jgss.GSSCredential
        isInitiator(): boolean
      }

    }
  }
}
