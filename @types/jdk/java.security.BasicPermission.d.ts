declare namespace java {
  namespace security {

    abstract class BasicPermission extends java.security.Permission implements java.io.Serializable {

      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      public getActions(): java.lang.String
      public newPermissionCollection(): java.security.PermissionCollection
      readonly getCanonicalName(): java.lang.String
    }

  }
}
