declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
class AssertionSet implements java.lang.Iterable<com.sun.xml.internal.ws.policy.PolicyAssertion> , java.lang.Comparable<com.sun.xml.internal.ws.policy.AssertionSet> {
    public static createMergedAssertionSet(arg0: java.util.Collection<com.sun.xml.internal.ws.policy.AssertionSet>): com.sun.xml.internal.ws.policy.AssertionSet
    public static createAssertionSet(arg0: java.util.Collection<com.sun.xml.internal.ws.policy.PolicyAssertion>): com.sun.xml.internal.ws.policy.AssertionSet
    public static emptyAssertionSet(): com.sun.xml.internal.ws.policy.AssertionSet
    public iterator(): java.util.Iterator<com.sun.xml.internal.ws.policy.PolicyAssertion>
    public get(arg0: javax.xml.namespace.QName): java.util.Collection<com.sun.xml.internal.ws.policy.PolicyAssertion>
    public isEmpty(): boolean
    public contains(arg0: javax.xml.namespace.QName): boolean
    public compareTo(arg0: com.sun.xml.internal.ws.policy.AssertionSet): int
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public compareTo(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}