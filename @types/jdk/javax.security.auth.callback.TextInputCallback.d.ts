declare namespace javax {
  namespace security {
    namespace auth {
      namespace callback {

        class TextInputCallback implements javax.security.auth.callback.Callback, java.io.Serializable {
          public constructor(arg0: java.lang.String)
          public constructor(arg0: java.lang.String, arg1: java.lang.String)
          public getPrompt(): java.lang.String
          public getDefaultText(): java.lang.String
          public setText(arg0: java.lang.String): void
          public getText(): java.lang.String
        }

      }
    }
  }
}
