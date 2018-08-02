declare namespace java {
    namespace security {
class AccessControlContext {
    public constructor(arg0: java.security.ProtectionDomain[])
    public constructor(arg0: java.security.AccessControlContext, arg1: java.security.DomainCombiner | java.security.DomainCombiner$$Lambda)
    public checkPermission(arg0: java.security.Permission): void
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public getDomainCombiner(): java.security.DomainCombiner
    public static class: java.lang.Class<any>
}

    }
}