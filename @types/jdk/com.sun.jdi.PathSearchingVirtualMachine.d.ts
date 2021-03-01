declare namespace com {
  namespace sun {
    namespace jdi {

      interface PathSearchingVirtualMachine extends com.sun.jdi.VirtualMachine {

        classPath(): java.util.List<java.lang.String>
        bootClassPath(): java.util.List<java.lang.String>
        baseDirectory(): java.lang.String
      }

    }
  }
}
