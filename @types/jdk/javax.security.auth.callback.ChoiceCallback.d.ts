declare namespace javax {
  namespace security {
    namespace auth {
      namespace callback {

        class ChoiceCallback implements javax.security.auth.callback.Callback, java.io.Serializable {

          public constructor(arg0: java.lang.String, arg1: java.lang.String[], arg2: int, arg3: boolean)
          public getPrompt(): java.lang.String
          public getChoices(): java.lang.String[]
          public getDefaultChoice(): int
          public allowMultipleSelections(): boolean
          public setSelectedIndex(arg0: int): void
          public setSelectedIndexes(arg0: int[]): void
          public getSelectedIndexes(): int[]
        }

      }
    }
  }
}
