declare namespace com {
  namespace sun {
    namespace jdi {
      interface ThreadGroupReference extends com.sun.jdi.ObjectReference {
        name(): java.lang.String
        parent(): com.sun.jdi.ThreadGroupReference
        suspend(): void
        resume(): void
        threads(): java.util.List<com.sun.jdi.ThreadReference>
        threadGroups(): java.util.List<com.sun.jdi.ThreadGroupReference>
      }
    }
  }
}
