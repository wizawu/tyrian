declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        namespace sourcemodel {
class ModelNode implements java.lang.Iterable<com.sun.xml.internal.ws.policy.sourcemodel.ModelNode> , java.lang.Cloneable {
    public createChildPolicyNode(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
    public createChildAllNode(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
    public createChildExactlyOneNode(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
    public createChildAssertionNode(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
    public createChildAssertionNode(arg0: com.sun.xml.internal.ws.policy.sourcemodel.AssertionData): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
    public createChildAssertionParameterNode(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
    public getParentModel(): com.sun.xml.internal.ws.policy.sourcemodel.PolicySourceModel
    public getType(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode$Type
    public getParentNode(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
    public getNodeData(): com.sun.xml.internal.ws.policy.sourcemodel.AssertionData
    public setOrReplaceNodeData(arg0: com.sun.xml.internal.ws.policy.sourcemodel.AssertionData): com.sun.xml.internal.ws.policy.sourcemodel.AssertionData
    public childrenSize(): int
    public hasChildren(): boolean
    public iterator(): java.util.Iterator<com.sun.xml.internal.ws.policy.sourcemodel.ModelNode>
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public toString(arg0: int, arg1: java.lang.StringBuffer): java.lang.StringBuffer
    protected clone(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode
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