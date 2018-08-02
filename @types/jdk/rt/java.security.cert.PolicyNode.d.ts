declare namespace java {
    namespace security {
        namespace cert {
            interface PolicyNode {
                getParent(): java.security.cert.PolicyNode
                getChildren(): java.util.Iterator<java.security.cert.PolicyNode>
                getDepth(): int
                getValidPolicy(): string
                getPolicyQualifiers(): java.util.Set<java.security.cert.PolicyQualifierInfo>
                getExpectedPolicies(): java.util.Set<java.lang.String>
                isCritical(): boolean
            }
        }
    }
}