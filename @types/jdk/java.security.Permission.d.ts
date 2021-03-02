declare namespace java {
  namespace security {

    abstract class Permission implements java.security.Guard, java.io.Serializable {
      public constructor(arg0: java.lang.String)
      public checkGuard(arg0: java.lang.Object): void
      public abstract implies(arg0: java.security.Permission): boolean
      public abstract equals(arg0: java.lang.Object): boolean
      public abstract hashCode(): int
      public getName(): java.lang.String
      public abstract getActions(): java.lang.String
      public newPermissionCollection(): java.security.PermissionCollection
      public toString(): java.lang.String
    }

  }
}
