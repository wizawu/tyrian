declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace security {
                    class JMXSubjectDomainCombiner extends javax.security.auth.SubjectDomainCombiner {
                        public constructor(arg0: javax.security.auth.Subject)
                        public combine(arg0: java.security.ProtectionDomain[], arg1: java.security.ProtectionDomain[]): java.security.ProtectionDomain[]
                        public static getContext(arg0: javax.security.auth.Subject): java.security.AccessControlContext
                        public static getDomainCombinerContext(arg0: javax.security.auth.Subject): java.security.AccessControlContext
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}