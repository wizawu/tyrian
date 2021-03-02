declare namespace javax {
  namespace security {
    namespace auth {
      namespace callback {

        class NameCallback implements javax.security.auth.callback.Callback, java.io.Serializable {
          public constructor(arg0: java.lang.String | string)
          public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
          public getPrompt(): java.lang.String
          public getDefaultName(): java.lang.String
          public setName(arg0: java.lang.String | string): void
          public getName(): java.lang.String
        }

      }
    }
  }
}
