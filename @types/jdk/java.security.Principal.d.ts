declare namespace java {
  namespace security {
    interface Principal {
      equals(arg0: java.lang.Object | any): boolean
      toString(): java.lang.String
      hashCode(): number
      getName(): java.lang.String
      implies(arg0: javax.security.auth.Subject): boolean
    }
  }
}
