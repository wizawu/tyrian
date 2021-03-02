declare namespace com {
  namespace sun {
    namespace javadoc {

      interface ClassDoc extends com.sun.javadoc.ProgramElementDoc, com.sun.javadoc.Type {
        isAbstract(): boolean
        isSerializable(): boolean
        isExternalizable(): boolean
        serializationMethods(): com.sun.javadoc.MethodDoc[]
        serializableFields(): com.sun.javadoc.FieldDoc[]
        definesSerializableFields(): boolean
        superclass(): com.sun.javadoc.ClassDoc
        superclassType(): com.sun.javadoc.Type
        subclassOf(arg0: com.sun.javadoc.ClassDoc): boolean
        interfaces(): com.sun.javadoc.ClassDoc[]
        interfaceTypes(): com.sun.javadoc.Type[]
        typeParameters(): com.sun.javadoc.TypeVariable[]
        typeParamTags(): com.sun.javadoc.ParamTag[]
        fields(): com.sun.javadoc.FieldDoc[]
        fields(arg0: boolean): com.sun.javadoc.FieldDoc[]
        enumConstants(): com.sun.javadoc.FieldDoc[]
        methods(): com.sun.javadoc.MethodDoc[]
        methods(arg0: boolean): com.sun.javadoc.MethodDoc[]
        constructors(): com.sun.javadoc.ConstructorDoc[]
        constructors(arg0: boolean): com.sun.javadoc.ConstructorDoc[]
        innerClasses(): com.sun.javadoc.ClassDoc[]
        innerClasses(arg0: boolean): com.sun.javadoc.ClassDoc[]
        findClass(arg0: java.lang.String): com.sun.javadoc.ClassDoc
        importedClasses(): com.sun.javadoc.ClassDoc[]
        importedPackages(): com.sun.javadoc.PackageDoc[]
      }

    }
  }
}
