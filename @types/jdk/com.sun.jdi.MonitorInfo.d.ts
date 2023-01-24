declare namespace com {
  namespace sun {
    namespace jdi {
      interface MonitorInfo extends com.sun.jdi.Mirror {
        monitor(): com.sun.jdi.ObjectReference
        stackDepth(): number
        thread(): com.sun.jdi.ThreadReference
      }
    }
  }
}
