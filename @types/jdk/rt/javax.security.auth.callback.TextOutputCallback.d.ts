declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
                class TextOutputCallback implements javax.security.auth.callback.Callback , java.io.Serializable {
                    public static INFORMATION: int
                    public static WARNING: int
                    public static ERROR: int
                    public constructor(arg0: int, arg1: java.lang.String | string)
                    public getMessageType(): int
                    public getMessage(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}