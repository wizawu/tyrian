declare namespace java {
  namespace awt {
    namespace event {

      interface HierarchyBoundsListener extends java.util.EventListener {

        ancestorMoved(arg0: java.awt.event.HierarchyEvent): void
        ancestorResized(arg0: java.awt.event.HierarchyEvent): void
      }

    }
  }
}
