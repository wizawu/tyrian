declare namespace com {
    namespace sun {
        namespace security {
            namespace jgss {
                interface ExtendedGSSContext extends org.ietf.jgss.GSSContext {
                    inquireSecContext(arg0: com.sun.security.jgss.InquireType): java.lang.Object
                    requestDelegPolicy(arg0: boolean): void
                    getDelegPolicyState(): boolean
                }
            }
        }
    }
}