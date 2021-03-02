declare namespace javax {
  namespace swing {
    namespace text {

      class MaskFormatter extends javax.swing.text.DefaultFormatter {
        public constructor()
        public constructor(arg0: java.lang.String)
        public setMask(arg0: java.lang.String): void
        public getMask(): java.lang.String
        public setValidCharacters(arg0: java.lang.String): void
        public getValidCharacters(): java.lang.String
        public setInvalidCharacters(arg0: java.lang.String): void
        public getInvalidCharacters(): java.lang.String
        public setPlaceholder(arg0: java.lang.String): void
        public getPlaceholder(): java.lang.String
        public setPlaceholderCharacter(arg0: char): void
        public getPlaceholderCharacter(): char
        public setValueContainsLiteralCharacters(arg0: boolean): void
        public getValueContainsLiteralCharacters(): boolean
        public stringToValue(arg0: java.lang.String): java.lang.Object
        public valueToString(arg0: java.lang.Object): java.lang.String
        public install(arg0: javax.swing.JFormattedTextField): void
        isNavigatable(arg0: int): boolean
        isValidEdit(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
        canReplace(arg0: javax.swing.text.DefaultFormatter$ReplaceHolder): boolean
      }

    }
  }
}
