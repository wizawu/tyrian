declare namespace com {
  namespace sun {
    namespace javadoc {
      interface ParamTag extends com.sun.javadoc.Tag {
        parameterName(): java.lang.String
        parameterComment(): java.lang.String
        isTypeParameter(): boolean
      }
    }
  }
}
