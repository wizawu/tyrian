declare namespace com {
    namespace sun {
        namespace security {
            namespace jgss {
                class AuthorizationDataEntry {
                    public constructor(arg0: int, arg1: byte[])
                    public getType(): int
                    public getData(): byte[]
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                interface ExtendedGSSContext extends org.ietf.jgss.GSSContext {
                    inquireSecContext(arg0: com.sun.security.jgss.InquireType): java.lang.Object
                    requestDelegPolicy(arg0: boolean): void
                    getDelegPolicyState(): boolean
                }
                interface ExtendedGSSCredential extends org.ietf.jgss.GSSCredential {
                    impersonate(arg0: org.ietf.jgss.GSSName): org.ietf.jgss.GSSCredential
                }
                class GSSUtil {
                    public constructor()
                    public static createSubject(arg0: org.ietf.jgss.GSSName, arg1: org.ietf.jgss.GSSCredential): javax.security.auth.Subject
                    public static class: java.lang.Class<any>
                }
                class InquireSecContextPermission extends java.security.BasicPermission {
                    public constructor(arg0: java.lang.String | string)
                    public static class: java.lang.Class<any>
                }
                class InquireType extends java.lang.Enum<com.sun.security.jgss.InquireType> {
                    public static KRB5_GET_SESSION_KEY: com.sun.security.jgss.InquireType
                    public static KRB5_GET_TKT_FLAGS: com.sun.security.jgss.InquireType
                    public static KRB5_GET_AUTHZ_DATA: com.sun.security.jgss.InquireType
                    public static KRB5_GET_AUTHTIME: com.sun.security.jgss.InquireType
                    public static values(): com.sun.security.jgss.InquireType[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.security.jgss.InquireType
                    public static class: java.lang.Class<any>
                }
            }
            namespace sasl {
                namespace gsskerb {
                    class FactoryImpl implements javax.security.sasl.SaslClientFactory , javax.security.sasl.SaslServerFactory {
                        public constructor()
                        public createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
                        public createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
                        public getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
                        public static class: java.lang.Class<any>
                    }
                    abstract class GssKrb5Base extends com.sun.security.sasl.util.AbstractSaslImpl {
                        protected static KRB5_OID: org.ietf.jgss.Oid
                        protected static EMPTY: byte[]
                        protected secCtx: org.ietf.jgss.GSSContext
                        protected static JGSS_QOP: int
                        protected constructor(arg0: java.util.Map<java.lang.String, any>, arg1: java.lang.String | string)
                        public getMechanismName(): string
                        public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
                        public dispose(): void
                        protected finalize(): void
                        public static class: java.lang.Class<any>
                    }
                    class GssKrb5Client extends com.sun.security.sasl.gsskerb.GssKrb5Base implements javax.security.sasl.SaslClient {
                        public hasInitialResponse(): boolean
                        public evaluateChallenge(arg0: byte[]): byte[]
                        public static class: java.lang.Class<any>
                    }
                    class GssKrb5Server extends com.sun.security.sasl.gsskerb.GssKrb5Base implements javax.security.sasl.SaslServer {
                        public evaluateResponse(arg0: byte[]): byte[]
                        public getAuthorizationID(): string
                        public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
