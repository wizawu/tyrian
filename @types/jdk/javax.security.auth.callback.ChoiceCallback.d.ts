declare namespace javax {
  namespace security {
    namespace auth {
      namespace callback {
        class ChoiceCallback implements javax.security.auth.callback.Callback, java.io.Serializable {
          public constructor(
            arg0: java.lang.String | string,
            arg1: java.lang.String[] | string[],
            arg2: number | java.lang.Integer,
            arg3: boolean | java.lang.Boolean
          )
          public getPrompt(): java.lang.String
          public getChoices(): java.lang.String[]
          public getDefaultChoice(): number
          public allowMultipleSelections(): boolean
          public setSelectedIndex(arg0: number | java.lang.Integer): void
          public setSelectedIndexes(arg0: number[] | java.lang.Integer[]): void
          public getSelectedIndexes(): number[]
        }
      }
    }
  }
}
