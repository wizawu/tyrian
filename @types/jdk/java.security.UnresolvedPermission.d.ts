declare namespace java {
  namespace security {

    class UnresolvedPermission extends java.security.Permission implements java.io.Serializable {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.security.cert.Certificate[])
      resolve(arg0: java.security.Permission, arg1: java.security.cert.Certificate[]): java.security.Permission
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      public getActions(): java.lang.String
      public getUnresolvedType(): java.lang.String
      public getUnresolvedName(): java.lang.String
      public getUnresolvedActions(): java.lang.String
      public getUnresolvedCerts(): java.security.cert.Certificate[]
      public toString(): java.lang.String
      public newPermissionCollection(): java.security.PermissionCollection
    }

  }
}
