declare namespace com {
  namespace sun {
    namespace jdi {

      interface ClassType extends com.sun.jdi.ReferenceType {
        public static readonly INVOKE_SINGLE_THREADED: int
        superclass(): com.sun.jdi.ClassType
        interfaces(): java.util.List<com.sun.jdi.InterfaceType>
        allInterfaces(): java.util.List<com.sun.jdi.InterfaceType>
        subclasses(): java.util.List<com.sun.jdi.ClassType>
        isEnum(): boolean
        setValue(arg0: com.sun.jdi.Field, arg1: com.sun.jdi.Value): void
        invokeMethod(arg0: com.sun.jdi.ThreadReference, arg1: com.sun.jdi.Method, arg2: java.util.List<com.sun.jdi.Value>, arg3: int): com.sun.jdi.Value
        newInstance(arg0: com.sun.jdi.ThreadReference, arg1: com.sun.jdi.Method, arg2: java.util.List<com.sun.jdi.Value>, arg3: int): com.sun.jdi.ObjectReference
        concreteMethodByName(arg0: java.lang.String, arg1: java.lang.String): com.sun.jdi.Method
      }

    }
  }
}
