declare namespace javax {
  namespace swing {
    namespace text {
      class DateFormatter extends javax.swing.text.InternationalFormatter {
        public constructor()
        public constructor(arg0: java.text.DateFormat)
        public setFormat(arg0: java.text.DateFormat): void
        getSupportsIncrement(): boolean
        getAdjustField(arg0: number | java.lang.Integer, arg1: java.util.Map<unknown, unknown>): java.lang.Object
        adjustValue(
          arg0: java.lang.Object | any,
          arg1: java.util.Map<unknown, unknown>,
          arg2: java.lang.Object | any,
          arg3: number | java.lang.Integer
        ): java.lang.Object
      }
    }
  }
}
