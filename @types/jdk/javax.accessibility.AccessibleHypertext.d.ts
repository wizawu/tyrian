declare namespace javax {
  namespace accessibility {
    interface AccessibleHypertext extends javax.accessibility.AccessibleText {
      getLinkCount(): number
      getLink(arg0: number | java.lang.Integer): javax.accessibility.AccessibleHyperlink
      getLinkIndex(arg0: number | java.lang.Integer): number
    }
  }
}
