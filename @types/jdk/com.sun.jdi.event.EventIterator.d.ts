declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {

        interface EventIterator extends java.util.Iterator<com.sun.jdi.event.Event> {

          nextEvent(): com.sun.jdi.event.Event
        }

      }
    }
  }
}
