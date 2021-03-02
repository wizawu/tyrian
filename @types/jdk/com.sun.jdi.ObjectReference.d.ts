declare namespace com {
  namespace sun {
    namespace jdi {

      interface ObjectReference extends com.sun.jdi.Value {
        public static readonly INVOKE_SINGLE_THREADED: int
        public static readonly INVOKE_NONVIRTUAL: int
        referenceType(): com.sun.jdi.ReferenceType
        getValue(arg0: com.sun.jdi.Field): com.sun.jdi.Value
        getValues(arg0: java.util.List<com.sun.jdi.Field>): java.util.Map<com.sun.jdi.Field,com.sun.jdi.Value>
        setValue(arg0: com.sun.jdi.Field, arg1: com.sun.jdi.Value): void
        invokeMethod(arg0: com.sun.jdi.ThreadReference, arg1: com.sun.jdi.Method, arg2: java.util.List<com.sun.jdi.Value>, arg3: number | java.lang.Integer): com.sun.jdi.Value
        disableCollection(): void
        enableCollection(): void
        isCollected(): boolean
        uniqueID(): number
        waitingThreads(): java.util.List<com.sun.jdi.ThreadReference>
        owningThread(): com.sun.jdi.ThreadReference
        entryCount(): number
        referringObjects(arg0: number | java.lang.Long): java.util.List<com.sun.jdi.ObjectReference>
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
      }

    }
  }
}
