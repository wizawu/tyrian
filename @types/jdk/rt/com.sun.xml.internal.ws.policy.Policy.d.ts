declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
class Policy implements java.lang.Iterable<com.sun.xml.internal.ws.policy.AssertionSet> {
    public static createNullPolicy(): com.sun.xml.internal.ws.policy.Policy
    public static createEmptyPolicy(): com.sun.xml.internal.ws.policy.Policy
    public static createNullPolicy(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.policy.Policy
    public static createNullPolicy(arg0: com.sun.xml.internal.ws.policy.sourcemodel.wspolicy.NamespaceVersion, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.xml.internal.ws.policy.Policy
    public static createEmptyPolicy(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.policy.Policy
    public static createEmptyPolicy(arg0: com.sun.xml.internal.ws.policy.sourcemodel.wspolicy.NamespaceVersion, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.xml.internal.ws.policy.Policy
    public static createPolicy(arg0: java.util.Collection<com.sun.xml.internal.ws.policy.AssertionSet>): com.sun.xml.internal.ws.policy.Policy
    public static createPolicy(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Collection<com.sun.xml.internal.ws.policy.AssertionSet>): com.sun.xml.internal.ws.policy.Policy
    public static createPolicy(arg0: com.sun.xml.internal.ws.policy.sourcemodel.wspolicy.NamespaceVersion, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Collection<com.sun.xml.internal.ws.policy.AssertionSet>): com.sun.xml.internal.ws.policy.Policy
    public getId(): string
    public getName(): string
    public getNamespaceVersion(): com.sun.xml.internal.ws.policy.sourcemodel.wspolicy.NamespaceVersion
    public getIdOrName(): string
    public getNumberOfAssertionSets(): int
    public iterator(): java.util.Iterator<com.sun.xml.internal.ws.policy.AssertionSet>
    public isNull(): boolean
    public isEmpty(): boolean
    public contains(arg0: java.lang.String | string): boolean
    public getVocabulary(): java.util.Collection<javax.xml.namespace.QName>
    public contains(arg0: javax.xml.namespace.QName): boolean
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}