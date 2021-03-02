declare namespace javax {
  namespace naming {

    class NamingException extends java.lang.Exception {
      protected resolvedName: javax.naming.Name
      protected resolvedObj: java.lang.Object
      protected remainingName: javax.naming.Name
      protected rootException: java.lang.Throwable
      public constructor(arg0: java.lang.String)
      public constructor()
      public getResolvedName(): javax.naming.Name
      public getRemainingName(): javax.naming.Name
      public getResolvedObj(): java.lang.Object
      public getExplanation(): java.lang.String
      public setResolvedName(arg0: javax.naming.Name): void
      public setRemainingName(arg0: javax.naming.Name): void
      public setResolvedObj(arg0: java.lang.Object): void
      public appendRemainingComponent(arg0: java.lang.String): void
      public appendRemainingName(arg0: javax.naming.Name): void
      public getRootCause(): java.lang.Throwable
      public setRootCause(arg0: java.lang.Throwable): void
      public getCause(): java.lang.Throwable
      public initCause(arg0: java.lang.Throwable): java.lang.Throwable
      public toString(): java.lang.String
      public toString(arg0: boolean): java.lang.String
    }

  }
}
