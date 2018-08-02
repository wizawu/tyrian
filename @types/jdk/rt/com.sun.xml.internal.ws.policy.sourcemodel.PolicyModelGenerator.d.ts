declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        namespace sourcemodel {
abstract class PolicyModelGenerator {
    protected constructor()
    public static getGenerator(): com.sun.xml.internal.ws.policy.sourcemodel.PolicyModelGenerator
    protected static getCompactGenerator(arg0: com.sun.xml.internal.ws.policy.sourcemodel.PolicyModelGenerator$PolicySourceModelCreator): com.sun.xml.internal.ws.policy.sourcemodel.PolicyModelGenerator
    protected static getNormalizedGenerator(arg0: com.sun.xml.internal.ws.policy.sourcemodel.PolicyModelGenerator$PolicySourceModelCreator): com.sun.xml.internal.ws.policy.sourcemodel.PolicyModelGenerator
    public translate(arg0: com.sun.xml.internal.ws.policy.Policy): com.sun.xml.internal.ws.policy.sourcemodel.PolicySourceModel
    protected translate(arg0: com.sun.xml.internal.ws.policy.sourcemodel.ModelNode, arg1: com.sun.xml.internal.ws.policy.NestedPolicy): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
    protected translate(arg0: com.sun.xml.internal.ws.policy.sourcemodel.ModelNode, arg1: com.sun.xml.internal.ws.policy.AssertionSet): void
    protected translate(arg0: com.sun.xml.internal.ws.policy.sourcemodel.ModelNode, arg1: java.util.Iterator<com.sun.xml.internal.ws.policy.PolicyAssertion>): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}