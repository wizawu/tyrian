declare namespace javax {
  namespace swing {
    namespace text {
      abstract class DocumentFilter$FilterBypass {
        public constructor()
        public abstract getDocument(): javax.swing.text.Document
        public abstract remove(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public abstract insertString(
          arg0: number | java.lang.Integer,
          arg1: java.lang.String | string,
          arg2: javax.swing.text.AttributeSet
        ): void
        public abstract replace(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.lang.String | string,
          arg3: javax.swing.text.AttributeSet
        ): void
      }
    }
  }
}
