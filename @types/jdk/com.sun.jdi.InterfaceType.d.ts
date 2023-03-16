declare namespace com {
  namespace sun {
    namespace jdi {
      interface InterfaceType extends com.sun.jdi.ReferenceType {
        superinterfaces(): java.util.List<com.sun.jdi.InterfaceType>
        subinterfaces(): java.util.List<com.sun.jdi.InterfaceType>
        implementors(): java.util.List<com.sun.jdi.ClassType>
        invokeMethod?(
          arg0: com.sun.jdi.ThreadReference,
          arg1: com.sun.jdi.Method,
          arg2: java.util.List<com.sun.jdi.Value>,
          arg3: number | java.lang.Integer
        ): com.sun.jdi.Value
      }
    }
  }
}
