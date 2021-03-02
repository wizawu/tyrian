declare namespace com {
  namespace sun {
    namespace jdi {

      interface ClassObjectReference extends com.sun.jdi.ObjectReference {
        reflectedType(): com.sun.jdi.ReferenceType
      }

    }
  }
}
