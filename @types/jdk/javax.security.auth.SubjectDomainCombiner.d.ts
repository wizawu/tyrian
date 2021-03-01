declare namespace javax {
  namespace security {
    namespace auth {

      class SubjectDomainCombiner implements java.security.DomainCombiner {

        public constructor(arg0: javax.security.auth.Subject)
        public getSubject(): javax.security.auth.Subject
        public combine(arg0: java.security.ProtectionDomain[], arg1: java.security.ProtectionDomain[]): java.security.ProtectionDomain[]
      }

    }
  }
}
