declare namespace javax {
  namespace print {
    namespace attribute {

      interface PrintJobAttributeSet extends javax.print.attribute.AttributeSet {
        add(arg0: javax.print.attribute.Attribute): boolean
        addAll(arg0: javax.print.attribute.AttributeSet): boolean
      }

    }
  }
}
