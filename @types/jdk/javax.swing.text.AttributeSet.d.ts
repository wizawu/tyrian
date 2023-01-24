declare namespace javax {
  namespace swing {
    namespace text {
      interface AttributeSet {
        readonly NameAttribute: java.lang.Object
        readonly ResolveAttribute: java.lang.Object
        getAttributeCount(): number
        isDefined(arg0: java.lang.Object | any): boolean
        isEqual(arg0: javax.swing.text.AttributeSet): boolean
        copyAttributes(): javax.swing.text.AttributeSet
        getAttribute(arg0: java.lang.Object | any): java.lang.Object
        getAttributeNames(): java.util.Enumeration<unknown>
        containsAttribute(arg0: java.lang.Object | any, arg1: java.lang.Object | any): boolean
        containsAttributes(arg0: javax.swing.text.AttributeSet): boolean
        getResolveParent(): javax.swing.text.AttributeSet
      }
    }
  }
}
