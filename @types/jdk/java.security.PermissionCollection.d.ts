declare namespace java {
  namespace security {

    abstract class PermissionCollection implements java.io.Serializable {
      public constructor()
      public abstract add(arg0: java.security.Permission): void
      public abstract implies(arg0: java.security.Permission): boolean
      public abstract elements(): java.util.Enumeration<java.security.Permission>
      public elementsAsStream(): java.util.stream.Stream<java.security.Permission>
      public setReadOnly(): void
      public isReadOnly(): boolean
      public toString(): java.lang.String
    }

  }
}
