declare namespace com {
  namespace sun {
    namespace jdi {

      interface ClassLoaderReference extends com.sun.jdi.ObjectReference {

        definedClasses(): java.util.List<com.sun.jdi.ReferenceType>
        visibleClasses(): java.util.List<com.sun.jdi.ReferenceType>
      }

    }
  }
}
