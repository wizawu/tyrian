declare namespace javax {
  namespace swing {
    namespace text {
      class MaskFormatter extends javax.swing.text.DefaultFormatter {
        public constructor()
        public constructor(arg0: java.lang.String | string)
        public setMask(arg0: java.lang.String | string): void
        public getMask(): java.lang.String
        public setValidCharacters(arg0: java.lang.String | string): void
        public getValidCharacters(): java.lang.String
        public setInvalidCharacters(arg0: java.lang.String | string): void
        public getInvalidCharacters(): java.lang.String
        public setPlaceholder(arg0: java.lang.String | string): void
        public getPlaceholder(): java.lang.String
        public setPlaceholderCharacter(arg0: string | java.lang.Character): void
        public getPlaceholderCharacter(): string
        public setValueContainsLiteralCharacters(arg0: boolean | java.lang.Boolean): void
        public getValueContainsLiteralCharacters(): boolean
        public stringToValue(arg0: java.lang.String | string): java.lang.Object
        public valueToString(arg0: java.lang.Object | any): java.lang.String
        public install(arg0: javax.swing.JFormattedTextField): void
        isNavigatable(arg0: number | java.lang.Integer): boolean
        isValidEdit(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        canReplace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
      }
    }
  }
}
