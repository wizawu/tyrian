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
          public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
          public constructor(arg0: number | java.lang.Integer, arg1: java.lang.String[] | string[], arg2: number | java.lang.Integer)
          public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
          public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.lang.String[] | string[], arg3: number | java.lang.Integer)
          public getPrompt(): java.lang.String
          public getMessageType(): number
          public getOptionType(): number
          public getOptions(): java.lang.String[]
          public getDefaultOption(): number
          public setSelectedIndex(arg0: number | java.lang.Integer): void
          public getSelectedIndex(): number
        }

      }
    }
  }
}
