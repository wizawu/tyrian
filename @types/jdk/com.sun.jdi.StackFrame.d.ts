declare namespace com {
  namespace sun {
    namespace jdi {

      interface StackFrame extends com.sun.jdi.Mirror, com.sun.jdi.Locatable {
        location(): com.sun.jdi.Location
        thread(): com.sun.jdi.ThreadReference
        thisObject(): com.sun.jdi.ObjectReference
        visibleVariables(): java.util.List<com.sun.jdi.LocalVariable>
        visibleVariableByName(arg0: java.lang.String): com.sun.jdi.LocalVariable
        getValue(arg0: com.sun.jdi.LocalVariable): com.sun.jdi.Value
        getValues(arg0: java.util.List<com.sun.jdi.LocalVariable>): java.util.Map<com.sun.jdi.LocalVariable,com.sun.jdi.Value>
        setValue(arg0: com.sun.jdi.LocalVariable, arg1: com.sun.jdi.Value): void
        getArgumentValues(): java.util.List<com.sun.jdi.Value>
      }

    }
  }
}
