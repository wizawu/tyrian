declare namespace com {
  namespace sun {
    namespace jdi {

      interface ArrayReference extends com.sun.jdi.ObjectReference {
        length(): number
        getValue(arg0: number | java.lang.Integer): com.sun.jdi.Value
        getValues(): java.util.List<com.sun.jdi.Value>
        getValues(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.List<com.sun.jdi.Value>
        setValue(arg0: number | java.lang.Integer, arg1: com.sun.jdi.Value): void
        setValues(arg0: java.util.List<com.sun.jdi.Value>): void
        setValues(arg0: number | java.lang.Integer, arg1: java.util.List<com.sun.jdi.Value>, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      }

    }
  }
}
