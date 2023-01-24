declare namespace javax {
  namespace swing {
    namespace undo {
      interface StateEditable {
        readonly RCSID: java.lang.String
        storeState(arg0: java.util.Hashtable<java.lang.Object, java.lang.Object>): void
        restoreState(arg0: java.util.Hashtable<unknown, unknown>): void
      }
    }
  }
}
