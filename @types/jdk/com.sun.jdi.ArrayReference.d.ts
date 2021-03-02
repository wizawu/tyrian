declare namespace com {
  namespace sun {
    namespace jdi {

      interface ArrayReference extends com.sun.jdi.ObjectReference {
        length(): int
        getValue(arg0: int): com.sun.jdi.Value
        getValues(): java.util.List<com.sun.jdi.Value>
        getValues(arg0: int, arg1: int): java.util.List<com.sun.jdi.Value>
        setValue(arg0: int, arg1: com.sun.jdi.Value): void
        setValues(arg0: java.util.List<com.sun.jdi.Value>): void
        setValues(arg0: int, arg1: java.util.List<com.sun.jdi.Value>, arg2: int, arg3: int): void
      }

    }
  }
}
