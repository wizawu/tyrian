declare namespace com {
  namespace sun {
    namespace javadoc {

      interface Type {
        typeName(): java.lang.String
        qualifiedTypeName(): java.lang.String
        simpleTypeName(): java.lang.String
        dimension(): java.lang.String
        toString(): java.lang.String
        isPrimitive(): boolean
        asClassDoc(): com.sun.javadoc.ClassDoc
        asParameterizedType(): com.sun.javadoc.ParameterizedType
        asTypeVariable(): com.sun.javadoc.TypeVariable
        asWildcardType(): com.sun.javadoc.WildcardType
        asAnnotatedType(): com.sun.javadoc.AnnotatedType
        asAnnotationTypeDoc(): com.sun.javadoc.AnnotationTypeDoc
        getElementType(): com.sun.javadoc.Type
      }

    }
  }
}
