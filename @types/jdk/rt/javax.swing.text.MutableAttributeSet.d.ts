declare namespace javax {
    namespace swing {
        namespace text {
interface MutableAttributeSet extends javax.swing.text.AttributeSet {
    addAttribute(arg0: java.lang.Object, arg1: java.lang.Object): void
    addAttributes(arg0: javax.swing.text.AttributeSet): void
    removeAttribute(arg0: java.lang.Object): void
    removeAttributes(arg0: java.util.Enumeration<any>): void
    removeAttributes(arg0: javax.swing.text.AttributeSet): void
    setResolveParent(arg0: javax.swing.text.AttributeSet): void
}

        }
    }
}