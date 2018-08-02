declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        abstract class PolicyAssertion {
                            protected constructor()
                            protected constructor(arg0: com.sun.xml.internal.ws.policy.sourcemodel.AssertionData, arg1: java.util.Collection<com.sun.xml.internal.ws.policy.PolicyAssertion>, arg2: com.sun.xml.internal.ws.policy.AssertionSet)
                            protected constructor(arg0: com.sun.xml.internal.ws.policy.sourcemodel.AssertionData, arg1: java.util.Collection<com.sun.xml.internal.ws.policy.PolicyAssertion>)
                            public getName(): javax.xml.namespace.QName
                            public getValue(): string
                            public isOptional(): boolean
                            public isIgnorable(): boolean
                            public isPrivate(): boolean
                            public getAttributesSet(): java.util.Set<java.util.Map$Entry<javax.xml.namespace.QName, java.lang.String>>
                            public getAttributes(): java.util.Map<javax.xml.namespace.QName, java.lang.String>
                            public getAttributeValue(arg0: javax.xml.namespace.QName): string
                            public hasNestedAssertions(): boolean
                            public hasParameters(): boolean
                            public getNestedAssertionsIterator(): java.util.Iterator<com.sun.xml.internal.ws.policy.PolicyAssertion>
                            public getParametersIterator(): java.util.Iterator<com.sun.xml.internal.ws.policy.PolicyAssertion>
                            public hasNestedPolicy(): boolean
                            public getNestedPolicy(): com.sun.xml.internal.ws.policy.NestedPolicy
                            public getImplementation<T extends com.sun.xml.internal.ws.policy.PolicyAssertion>(arg0: java.lang.Class<T>): T
                            public toString<T extends com.sun.xml.internal.ws.policy.PolicyAssertion>(): string
                            protected toString<T extends com.sun.xml.internal.ws.policy.PolicyAssertion>(arg0: int, arg1: java.lang.StringBuffer): java.lang.StringBuffer
                            public equals<T extends com.sun.xml.internal.ws.policy.PolicyAssertion>(arg0: java.lang.Object): boolean
                            public hashCode<T extends com.sun.xml.internal.ws.policy.PolicyAssertion>(): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}