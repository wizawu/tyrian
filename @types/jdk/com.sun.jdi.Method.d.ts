declare namespace com {
  namespace sun {
    namespace jdi {

      interface Method extends com.sun.jdi.TypeComponent, com.sun.jdi.Locatable, java.lang.Comparable<com.sun.jdi.Method> {
        returnTypeName(): java.lang.String
        returnType(): com.sun.jdi.Type
        argumentTypeNames(): java.util.List<java.lang.String>
        argumentTypes(): java.util.List<com.sun.jdi.Type>
        isAbstract(): boolean
        isDefault(): boolean
        isSynchronized(): boolean
        isNative(): boolean
        isVarArgs(): boolean
        isBridge(): boolean
        isConstructor(): boolean
        isStaticInitializer(): boolean
        isObsolete(): boolean
        allLineLocations(): java.util.List<com.sun.jdi.Location>
        allLineLocations(arg0: java.lang.String, arg1: java.lang.String): java.util.List<com.sun.jdi.Location>
        locationsOfLine(arg0: int): java.util.List<com.sun.jdi.Location>
        locationsOfLine(arg0: java.lang.String, arg1: java.lang.String, arg2: int): java.util.List<com.sun.jdi.Location>
        locationOfCodeIndex(arg0: long): com.sun.jdi.Location
        variables(): java.util.List<com.sun.jdi.LocalVariable>
        variablesByName(arg0: java.lang.String): java.util.List<com.sun.jdi.LocalVariable>
        arguments(): java.util.List<com.sun.jdi.LocalVariable>
        bytecodes(): byte[]
        location(): com.sun.jdi.Location
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
      }

    }
  }
}
