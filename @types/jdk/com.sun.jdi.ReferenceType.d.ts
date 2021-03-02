declare namespace com {
  namespace sun {
    namespace jdi {

      interface ReferenceType extends com.sun.jdi.Type, java.lang.Comparable<com.sun.jdi.ReferenceType>, com.sun.jdi.Accessible {
        name(): java.lang.String
        genericSignature(): java.lang.String
        classLoader(): com.sun.jdi.ClassLoaderReference
        module(): com.sun.jdi.ModuleReference
        sourceName(): java.lang.String
        sourceNames(arg0: java.lang.String): java.util.List<java.lang.String>
        sourcePaths(arg0: java.lang.String): java.util.List<java.lang.String>
        sourceDebugExtension(): java.lang.String
        isStatic(): boolean
        isAbstract(): boolean
        isFinal(): boolean
        isPrepared(): boolean
        isVerified(): boolean
        isInitialized(): boolean
        failedToInitialize(): boolean
        fields(): java.util.List<com.sun.jdi.Field>
        visibleFields(): java.util.List<com.sun.jdi.Field>
        allFields(): java.util.List<com.sun.jdi.Field>
        fieldByName(arg0: java.lang.String): com.sun.jdi.Field
        methods(): java.util.List<com.sun.jdi.Method>
        visibleMethods(): java.util.List<com.sun.jdi.Method>
        allMethods(): java.util.List<com.sun.jdi.Method>
        methodsByName(arg0: java.lang.String): java.util.List<com.sun.jdi.Method>
        methodsByName(arg0: java.lang.String, arg1: java.lang.String): java.util.List<com.sun.jdi.Method>
        nestedTypes(): java.util.List<com.sun.jdi.ReferenceType>
        getValue(arg0: com.sun.jdi.Field): com.sun.jdi.Value
        getValues(arg0: java.util.List<com.sun.jdi.Field>): java.util.Map<com.sun.jdi.Field,com.sun.jdi.Value>
        classObject(): com.sun.jdi.ClassObjectReference
        allLineLocations(): java.util.List<com.sun.jdi.Location>
        allLineLocations(arg0: java.lang.String, arg1: java.lang.String): java.util.List<com.sun.jdi.Location>
        locationsOfLine(arg0: int): java.util.List<com.sun.jdi.Location>
        locationsOfLine(arg0: java.lang.String, arg1: java.lang.String, arg2: int): java.util.List<com.sun.jdi.Location>
        availableStrata(): java.util.List<java.lang.String>
        defaultStratum(): java.lang.String
        instances(arg0: long): java.util.List<com.sun.jdi.ObjectReference>
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
        majorVersion(): int
        minorVersion(): int
        constantPoolCount(): int
        constantPool(): byte[]
      }

    }
  }
}
