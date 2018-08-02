declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        class PolicyMap implements java.lang.Iterable<com.sun.xml.internal.ws.policy.Policy> {
                            public static createPolicyMap(arg0: java.util.Collection<com.sun.xml.internal.ws.policy.PolicyMapMutator>): com.sun.xml.internal.ws.policy.PolicyMap
                            public getServiceEffectivePolicy(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey): com.sun.xml.internal.ws.policy.Policy
                            public getEndpointEffectivePolicy(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey): com.sun.xml.internal.ws.policy.Policy
                            public getOperationEffectivePolicy(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey): com.sun.xml.internal.ws.policy.Policy
                            public getInputMessageEffectivePolicy(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey): com.sun.xml.internal.ws.policy.Policy
                            public getOutputMessageEffectivePolicy(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey): com.sun.xml.internal.ws.policy.Policy
                            public getFaultMessageEffectivePolicy(arg0: com.sun.xml.internal.ws.policy.PolicyMapKey): com.sun.xml.internal.ws.policy.Policy
                            public getAllServiceScopeKeys(): java.util.Collection<com.sun.xml.internal.ws.policy.PolicyMapKey>
                            public getAllEndpointScopeKeys(): java.util.Collection<com.sun.xml.internal.ws.policy.PolicyMapKey>
                            public getAllOperationScopeKeys(): java.util.Collection<com.sun.xml.internal.ws.policy.PolicyMapKey>
                            public getAllInputMessageScopeKeys(): java.util.Collection<com.sun.xml.internal.ws.policy.PolicyMapKey>
                            public getAllOutputMessageScopeKeys(): java.util.Collection<com.sun.xml.internal.ws.policy.PolicyMapKey>
                            public getAllFaultMessageScopeKeys(): java.util.Collection<com.sun.xml.internal.ws.policy.PolicyMapKey>
                            public getPolicySubjects(): java.util.Collection<com.sun.xml.internal.ws.policy.PolicySubject>
                            public isInputMessageSubject(arg0: com.sun.xml.internal.ws.policy.PolicySubject): boolean
                            public isOutputMessageSubject(arg0: com.sun.xml.internal.ws.policy.PolicySubject): boolean
                            public isFaultMessageSubject(arg0: com.sun.xml.internal.ws.policy.PolicySubject): boolean
                            public isEmpty(): boolean
                            public static createWsdlServiceScopeKey(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.policy.PolicyMapKey
                            public static createWsdlEndpointScopeKey(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.policy.PolicyMapKey
                            public static createWsdlOperationScopeKey(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.policy.PolicyMapKey
                            public static createWsdlMessageScopeKey(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.policy.PolicyMapKey
                            public static createWsdlFaultMessageScopeKey(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName): com.sun.xml.internal.ws.policy.PolicyMapKey
                            public toString(): string
                            public iterator(): java.util.Iterator<com.sun.xml.internal.ws.policy.Policy>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}