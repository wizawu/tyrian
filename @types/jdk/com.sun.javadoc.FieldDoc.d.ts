declare namespace com {
  namespace sun {
    namespace javadoc {

      interface FieldDoc extends com.sun.javadoc.MemberDoc {
        type(): com.sun.javadoc.Type
        isTransient(): boolean
        isVolatile(): boolean
        serialFieldTags(): com.sun.javadoc.SerialFieldTag[]
        constantValue(): java.lang.Object
        constantValueExpression(): java.lang.String
      }

    }
  }
}
