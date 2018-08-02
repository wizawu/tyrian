declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                class NameCallback implements javax.security.auth.callback.Callback , java.io.Serializable {
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                    public getPrompt(): string
                    public getDefaultName(): string
                    public setName(arg0: java.lang.String | string): void
                    public getName(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}