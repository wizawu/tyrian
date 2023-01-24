declare namespace com {
  namespace sun {
    namespace jdi {
      interface ModuleReference extends com.sun.jdi.ObjectReference {
        name(): java.lang.String
        classLoader(): com.sun.jdi.ClassLoaderReference
      }
    }
  }
}
