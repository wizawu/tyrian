declare namespace javax {
  namespace swing {
    namespace text {
      interface AbstractDocument$AttributeContext {
        addAttribute(
          arg0: javax.swing.text.AttributeSet,
          arg1: java.lang.Object | any,
          arg2: java.lang.Object | any
        ): javax.swing.text.AttributeSet
        addAttributes(
          arg0: javax.swing.text.AttributeSet,
          arg1: javax.swing.text.AttributeSet
        ): javax.swing.text.AttributeSet
        removeAttribute(
          arg0: javax.swing.text.AttributeSet,
          arg1: java.lang.Object | any
        ): javax.swing.text.AttributeSet
        removeAttributes(
          arg0: javax.swing.text.AttributeSet,
          arg1: java.util.Enumeration<unknown>
        ): javax.swing.text.AttributeSet
        removeAttributes(
          arg0: javax.swing.text.AttributeSet,
          arg1: javax.swing.text.AttributeSet
        ): javax.swing.text.AttributeSet
        getEmptySet(): javax.swing.text.AttributeSet
        reclaim(arg0: javax.swing.text.AttributeSet): void
      }
    }
  }
}
