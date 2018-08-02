declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
class PasswordCallback implements javax.security.auth.callback.Callback , java.io.Serializable {
    public constructor(arg0: java.lang.String | string, arg1: boolean)
    public getPrompt(): string
    public isEchoOn(): boolean
    public setPassword(arg0: char[]): void
    public getPassword(): char[]
    public clearPassword(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}