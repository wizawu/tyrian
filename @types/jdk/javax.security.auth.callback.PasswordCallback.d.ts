declare namespace javax {
  namespace security {
    namespace auth {
      namespace callback {

        class PasswordCallback implements javax.security.auth.callback.Callback, java.io.Serializable {
          public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
          public getPrompt(): java.lang.String
          public isEchoOn(): boolean
          public setPassword(arg0: string[] | java.lang.Character[]): void
          public getPassword(): string[]
          public clearPassword(): void
        }

      }
    }
  }
}
