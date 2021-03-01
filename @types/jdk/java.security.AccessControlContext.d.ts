declare namespace java {
  namespace security {

    class AccessControlContext {

      static getDebug(): sun.security.util.Debug
      public constructor(arg0: java.security.ProtectionDomain[])
      public constructor(arg0: java.security.AccessControlContext, arg1: java.security.DomainCombiner)
      constructor(arg0: java.security.AccessControlContext, arg1: java.security.DomainCombiner, arg2: boolean)
      constructor(arg0: java.security.ProtectionDomain, arg1: java.security.DomainCombiner, arg2: java.security.AccessControlContext, arg3: java.security.AccessControlContext, arg4: java.security.Permission[])
      constructor(arg0: java.security.ProtectionDomain[], arg1: boolean)
      constructor(arg0: java.security.ProtectionDomain[], arg1: java.security.AccessControlContext)
      getContext(): java.security.ProtectionDomain[]
      isPrivileged(): boolean
      getAssignedCombiner(): java.security.DomainCombiner
      public getDomainCombiner(): java.security.DomainCombiner
      getCombiner(): java.security.DomainCombiner
      isAuthorized(): boolean
      public checkPermission(arg0: java.security.Permission): void
      optimize(): java.security.AccessControlContext
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
    }

  }
}
