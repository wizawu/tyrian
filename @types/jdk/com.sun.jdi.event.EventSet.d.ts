declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface EventSet extends com.sun.jdi.Mirror, java.util.Set<com.sun.jdi.event.Event> {
          suspendPolicy(): number
          eventIterator(): com.sun.jdi.event.EventIterator
          resume(): void
        }
      }
    }
  }
}
