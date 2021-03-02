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
        allLineLocations(arg0: java.lang.String | string, arg1: java.lang.String | string): java.util.List<com.sun.jdi.Location>
        locationsOfLine(arg0: number | java.lang.Integer): java.util.List<com.sun.jdi.Location>
        locationsOfLine(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer): java.util.List<com.sun.jdi.Location>
        locationOfCodeIndex(arg0: number | java.lang.Long): com.sun.jdi.Location
        variables(): java.util.List<com.sun.jdi.LocalVariable>
        variablesByName(arg0: java.lang.String | string): java.util.List<com.sun.jdi.LocalVariable>
        arguments(): java.util.List<com.sun.jdi.LocalVariable>
        bytecodes(): number[]
        location(): com.sun.jdi.Location
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
      }

    }
  }
}
