declare namespace javax {
  namespace swing {
    namespace text {
      interface MutableAttributeSet extends javax.swing.text.AttributeSet {
        addAttribute(arg0: java.lang.Object | any, arg1: java.lang.Object | any): void
        addAttributes(arg0: javax.swing.text.AttributeSet): void
        removeAttribute(arg0: java.lang.Object | any): void
        removeAttributes(arg0: java.util.Enumeration<unknown>): void
        removeAttributes(arg0: javax.swing.text.AttributeSet): void
        setResolveParent(arg0: javax.swing.text.AttributeSet): void
      }
    }
  }
}
