declare namespace com {
  namespace sun {
    namespace jdi {

      class InvocationException extends java.lang.Exception {
        exception: com.sun.jdi.ObjectReference
        public constructor(arg0: com.sun.jdi.ObjectReference)
        public exception(): com.sun.jdi.ObjectReference
      }

    }
  }
}
