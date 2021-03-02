declare namespace javax {
  namespace swing {
    namespace text {

      interface AttributeSet {
        public static readonly NameAttribute: java.lang.Object
        public static readonly ResolveAttribute: java.lang.Object
        getAttributeCount(): int
        isDefined(arg0: java.lang.Object): boolean
        isEqual(arg0: javax.swing.text.AttributeSet): boolean
        copyAttributes(): javax.swing.text.AttributeSet
        getAttribute(arg0: java.lang.Object): java.lang.Object
        getAttributeNames(): java.util.Enumeration<unknown>
        containsAttribute(arg0: java.lang.Object, arg1: java.lang.Object): boolean
        containsAttributes(arg0: javax.swing.text.AttributeSet): boolean
        getResolveParent(): javax.swing.text.AttributeSet
      }

    }
  }
}
