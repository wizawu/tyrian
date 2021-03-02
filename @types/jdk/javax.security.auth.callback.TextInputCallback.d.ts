declare namespace javax {
  namespace security {
    namespace auth {
      namespace callback {

        class TextInputCallback implements javax.security.auth.callback.Callback, java.io.Serializable {
          public constructor(arg0: java.lang.String | string)
          public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
          public getPrompt(): java.lang.String
          public getDefaultText(): java.lang.String
          public setText(arg0: java.lang.String | string): void
          public getText(): java.lang.String
        }

      }
    }
  }
}
