declare namespace javax {
  namespace accessibility {

    interface AccessibleHypertext extends javax.accessibility.AccessibleText {
      getLinkCount(): int
      getLink(arg0: int): javax.accessibility.AccessibleHyperlink
      getLinkIndex(arg0: int): int
    }

  }
}
