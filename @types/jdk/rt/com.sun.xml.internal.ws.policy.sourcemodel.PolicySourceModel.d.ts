declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        namespace sourcemodel {
class PolicySourceModel implements java.lang.Cloneable {
    public static createPolicySourceModel(arg0: com.sun.xml.internal.ws.policy.sourcemodel.wspolicy.NamespaceVersion): com.sun.xml.internal.ws.policy.sourcemodel.PolicySourceModel
    public static createPolicySourceModel(arg0: com.sun.xml.internal.ws.policy.sourcemodel.wspolicy.NamespaceVersion, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.xml.internal.ws.policy.sourcemodel.PolicySourceModel
    protected constructor(arg0: com.sun.xml.internal.ws.policy.sourcemodel.wspolicy.NamespaceVersion, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Collection<com.sun.xml.internal.ws.policy.spi.PrefixMapper>)
    public getRootNode(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
    public getPolicyName(): string
    public getPolicyId(): string
    public getNamespaceVersion(): com.sun.xml.internal.ws.policy.sourcemodel.wspolicy.NamespaceVersion
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    protected clone(): com.sun.xml.internal.ws.policy.sourcemodel.PolicySourceModel
    public containsPolicyReferences(): boolean
    public expand(arg0: com.sun.xml.internal.ws.policy.sourcemodel.PolicySourceModelContext): void
    protected clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}