declare namespace java {
  namespace security {
    abstract class IdentityScope extends java.security.Identity {
      protected constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.security.IdentityScope)
      public static getSystemScope(): java.security.IdentityScope
      protected static setSystemScope(arg0: java.security.IdentityScope): void
      public abstract size(): number
      public abstract getIdentity(arg0: java.lang.String | string): java.security.Identity
      public getIdentity(arg0: java.security.Principal): java.security.Identity
      public abstract getIdentity(arg0: java.security.PublicKey): java.security.Identity
      public abstract addIdentity(arg0: java.security.Identity): void
      public abstract removeIdentity(arg0: java.security.Identity): void
      public abstract identities(): java.util.Enumeration<java.security.Identity>
      public toString(): java.lang.String
    }
  }
}
