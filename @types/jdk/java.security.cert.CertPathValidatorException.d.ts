declare namespace java {
  namespace security {
    namespace cert {

      class CertPathValidatorException extends java.security.GeneralSecurityException {

        public constructor()
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.Throwable)
        public constructor(arg0: java.lang.String, arg1: java.lang.Throwable)
        public constructor(arg0: java.lang.String, arg1: java.lang.Throwable, arg2: java.security.cert.CertPath, arg3: int)
        public constructor(arg0: java.lang.String, arg1: java.lang.Throwable, arg2: java.security.cert.CertPath, arg3: int, arg4: java.security.cert.CertPathValidatorException$Reason)
        public getCertPath(): java.security.cert.CertPath
        public getIndex(): int
        public getReason(): java.security.cert.CertPathValidatorException$Reason
      }

    }
  }
}
