declare namespace java {
  namespace security {
    abstract class Permission implements java.security.Guard, java.io.Serializable {
      public constructor(arg0: java.lang.String | string)
      public checkGuard(arg0: java.lang.Object | any): void
      public abstract implies(arg0: java.security.Permission): boolean
      public abstract equals(arg0: java.lang.Object | any): boolean
      public abstract hashCode(): number
      public getName(): java.lang.String
      public abstract getActions(): java.lang.String
      public newPermissionCollection(): java.security.PermissionCollection
      public toString(): java.lang.String
    }
  }
}
