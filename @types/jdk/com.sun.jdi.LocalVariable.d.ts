declare namespace com {
  namespace sun {
    namespace jdi {

      interface LocalVariable extends com.sun.jdi.Mirror, java.lang.Comparable<com.sun.jdi.LocalVariable> {
        name(): java.lang.String
        typeName(): java.lang.String
        type(): com.sun.jdi.Type
        signature(): java.lang.String
        genericSignature(): java.lang.String
        isVisible(arg0: com.sun.jdi.StackFrame): boolean
        isArgument(): boolean
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
      }

    }
  }
}
