declare namespace com {
  namespace sun {
    namespace security {
      namespace auth {
        namespace module {
          class UnixSystem {
            protected username: java.lang.String
            protected uid: long
            protected gid: long
            protected groups: long[]
            public constructor()
            public getUsername(): java.lang.String
            public getUid(): number
            public getGid(): number
            public getGroups(): number[]
          }
        }
      }
    }
  }
}
