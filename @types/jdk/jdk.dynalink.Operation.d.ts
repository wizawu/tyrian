declare namespace jdk {
  namespace dynalink {
    interface Operation {
      withNamespace(arg0: jdk.dynalink.Namespace): jdk.dynalink.NamespaceOperation
      withNamespaces(...vargs: jdk.dynalink.Namespace[]): jdk.dynalink.NamespaceOperation
      named(arg0: java.lang.Object | any): jdk.dynalink.NamedOperation
    }
  }
}
