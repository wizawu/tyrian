declare namespace javax {
    namespace security {
        namespace auth {
            namespace callback {
class ConfirmationCallback implements javax.security.auth.callback.Callback , java.io.Serializable {
    public static UNSPECIFIED_OPTION: int
    public static YES_NO_OPTION: int
    public static YES_NO_CANCEL_OPTION: int
    public static OK_CANCEL_OPTION: int
    public static YES: int
    public static NO: int
    public static CANCEL: int
    public static OK: int
    public static INFORMATION: int
    public static WARNING: int
    public static ERROR: int
    public constructor(arg0: int, arg1: int, arg2: int)
    public constructor(arg0: int, arg1: java.lang.String[], arg2: int)
    public constructor(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int)
    public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String[], arg3: int)
    public getPrompt(): string
    public getMessageType(): int
    public getOptionType(): int
    public getOptions(): java.lang.String[]
    public getDefaultOption(): int
    public setSelectedIndex(arg0: int): void
    public getSelectedIndex(): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}