declare namespace javax {
  namespace print {
    namespace attribute {
      class AttributeSetUtilities {
        public static unmodifiableView(arg0: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
        public static unmodifiableView(
          arg0: javax.print.attribute.DocAttributeSet
        ): javax.print.attribute.DocAttributeSet
        public static unmodifiableView(
          arg0: javax.print.attribute.PrintRequestAttributeSet
        ): javax.print.attribute.PrintRequestAttributeSet
        public static unmodifiableView(
          arg0: javax.print.attribute.PrintJobAttributeSet
        ): javax.print.attribute.PrintJobAttributeSet
        public static unmodifiableView(
          arg0: javax.print.attribute.PrintServiceAttributeSet
        ): javax.print.attribute.PrintServiceAttributeSet
        public static synchronizedView(arg0: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
        public static synchronizedView(
          arg0: javax.print.attribute.DocAttributeSet
        ): javax.print.attribute.DocAttributeSet
        public static synchronizedView(
          arg0: javax.print.attribute.PrintRequestAttributeSet
        ): javax.print.attribute.PrintRequestAttributeSet
        public static synchronizedView(
          arg0: javax.print.attribute.PrintJobAttributeSet
        ): javax.print.attribute.PrintJobAttributeSet
        public static synchronizedView(
          arg0: javax.print.attribute.PrintServiceAttributeSet
        ): javax.print.attribute.PrintServiceAttributeSet
        public static verifyAttributeCategory(
          arg0: java.lang.Object | any,
          arg1: java.lang.Class<unknown>
        ): java.lang.Class<unknown>
        public static verifyAttributeValue(
          arg0: java.lang.Object | any,
          arg1: java.lang.Class<unknown>
        ): javax.print.attribute.Attribute
        public static verifyCategoryForValue(
          arg0: java.lang.Class<unknown>,
          arg1: javax.print.attribute.Attribute
        ): void
      }
    }
  }
}
