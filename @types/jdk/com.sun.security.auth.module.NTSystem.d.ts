declare namespace com {
  namespace sun {
    namespace security {
      namespace auth {
        namespace module {

          class NTSystem {
            public constructor()
            constructor(arg0: boolean | java.lang.Boolean)
            public getName(): java.lang.String
            public getDomain(): java.lang.String
            public getDomainSID(): java.lang.String
            public getUserSID(): java.lang.String
            public getPrimaryGroupID(): java.lang.String
            public getGroupIDs(): java.lang.String[]
            public getImpersonationToken(): number
          }

        }
      }
    }
  }
}
