declare namespace javax {
  namespace security {
    namespace auth {
      namespace callback {

        class ConfirmationCallback implements javax.security.auth.callback.Callback, java.io.Serializable {
          public static readonly UNSPECIFIED_OPTION: int
          public static readonly YES_NO_OPTION: int
          public static readonly YES_NO_CANCEL_OPTION: int
          public static readonly OK_CANCEL_OPTION: int
          public static readonly YES: int
          public static readonly NO: int
          public static readonly CANCEL: int
          public static readonly OK: int
          public static readonly INFORMATION: int
          public static readonly WARNING: int
          public static readonly ERROR: int
          public constructor(arg0: int, arg1: int, arg2: int)
          public constructor(arg0: int, arg1: java.lang.String[], arg2: int)
          public constructor(arg0: java.lang.String, arg1: int, arg2: int, arg3: int)
          public constructor(arg0: java.lang.String, arg1: int, arg2: java.lang.String[], arg3: int)
          public getPrompt(): java.lang.String
          public getMessageType(): int
          public getOptionType(): int
          public getOptions(): java.lang.String[]
          public getDefaultOption(): int
          public setSelectedIndex(arg0: int): void
          public getSelectedIndex(): int
        }

      }
    }
  }
}
