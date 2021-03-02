declare namespace com {
  namespace sun {
    namespace javadoc {

      interface ExecutableMemberDoc extends com.sun.javadoc.MemberDoc {
        thrownExceptions(): com.sun.javadoc.ClassDoc[]
        thrownExceptionTypes(): com.sun.javadoc.Type[]
        isNative(): boolean
        isSynchronized(): boolean
        isVarArgs(): boolean
        parameters(): com.sun.javadoc.Parameter[]
        receiverType(): com.sun.javadoc.Type
        throwsTags(): com.sun.javadoc.ThrowsTag[]
        paramTags(): com.sun.javadoc.ParamTag[]
        typeParamTags(): com.sun.javadoc.ParamTag[]
        signature(): java.lang.String
        flatSignature(): java.lang.String
        typeParameters(): com.sun.javadoc.TypeVariable[]
      }

    }
  }
}
