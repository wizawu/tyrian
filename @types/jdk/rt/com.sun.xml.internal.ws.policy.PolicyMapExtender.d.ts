declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        class PolicyMapExtender extends com.sun.xml.internal.ws.policy.PolicyMapMutator {
                            public static createPolicyMapExtender(): com.sun.xml.internal.ws.policy.PolicyMapExtender
                            public putServiceSubject(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey, arg1: com.sun.xml.internal.ws.policy.PolicySubject): void
                            public putEndpointSubject(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey, arg1: com.sun.xml.internal.ws.policy.PolicySubject): void
                            public putOperationSubject(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey, arg1: com.sun.xml.internal.ws.policy.PolicySubject): void
                            public putInputMessageSubject(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey, arg1: com.sun.xml.internal.ws.policy.PolicySubject): void
                            public putOutputMessageSubject(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey, arg1: com.sun.xml.internal.ws.policy.PolicySubject): void
                            public putFaultMessageSubject(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey, arg1: com.sun.xml.internal.ws.policy.PolicySubject): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}