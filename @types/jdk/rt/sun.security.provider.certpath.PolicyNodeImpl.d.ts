declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
class PolicyNodeImpl implements java.security.cert.PolicyNode {
    public getParent(): java.security.cert.PolicyNode
    public getChildren(): java.util.Iterator<sun.security.provider.certpath.PolicyNodeImpl>
    public getDepth(): int
    public getValidPolicy(): string
    public getPolicyQualifiers(): java.util.Set<java.security.cert.PolicyQualifierInfo>
    public getExpectedPolicies(): java.util.Set<java.lang.String>
    public isCritical(): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}