declare namespace java {
  namespace security {

    interface Principal {
      equals(arg0: java.lang.Object): boolean
      toString(): java.lang.String
      hashCode(): int
      getName(): java.lang.String
      implies(arg0: javax.security.auth.Subject): boolean
    }

  }
}
