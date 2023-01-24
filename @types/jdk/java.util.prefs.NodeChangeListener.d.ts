declare namespace java {
  namespace util {
    namespace prefs {
      interface NodeChangeListener extends java.util.EventListener {
        childAdded(arg0: java.util.prefs.NodeChangeEvent): void
        childRemoved(arg0: java.util.prefs.NodeChangeEvent): void
      }
    }
  }
}
