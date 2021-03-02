declare namespace com {
  namespace sun {
    namespace security {
      namespace jgss {

        interface ExtendedGSSCredential extends org.ietf.jgss.GSSCredential {
          impersonate(arg0: org.ietf.jgss.GSSName): org.ietf.jgss.GSSCredential
        }

      }
    }
  }
}
