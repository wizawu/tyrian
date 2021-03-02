declare namespace javax {
  namespace swing {
    namespace text {

      class NumberFormatter extends javax.swing.text.InternationalFormatter {
        public constructor()
        public constructor(arg0: java.text.NumberFormat)
        public setFormat(arg0: java.text.Format): void
        stringToValue(arg0: java.lang.String, arg1: java.text.Format): java.lang.Object
        isLegalInsertText(arg0: java.lang.String): boolean
        isLiteral(arg0: java.util.Map<unknown,unknown>): boolean
        isNavigatable(arg0: int): boolean
        replace(arg0: javax.swing.text.DocumentFilter$FilterBypass, arg1: int, arg2: int, arg3: java.lang.String, arg4: javax.swing.text.AttributeSet): void
      }

    }
  }
}
