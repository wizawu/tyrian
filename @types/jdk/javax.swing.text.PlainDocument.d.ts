declare namespace javax {
  namespace swing {
    namespace text {

      class PlainDocument extends javax.swing.text.AbstractDocument {
        public static readonly tabSizeAttribute: java.lang.String
        public static readonly lineLimitAttribute: java.lang.String
        public constructor()
        public constructor(arg0: javax.swing.text.AbstractDocument$Content)
        public insertString(arg0: number | java.lang.Integer, arg1: java.lang.String | string, arg2: javax.swing.text.AttributeSet): void
        public getDefaultRootElement(): javax.swing.text.Element
        protected createDefaultRoot(): javax.swing.text.AbstractDocument$AbstractElement
        public getParagraphElement(arg0: number | java.lang.Integer): javax.swing.text.Element
        protected insertUpdate(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent, arg1: javax.swing.text.AttributeSet): void
        protected removeUpdate(arg0: javax.swing.text.AbstractDocument$DefaultDocumentEvent): void
      }

    }
  }
}
