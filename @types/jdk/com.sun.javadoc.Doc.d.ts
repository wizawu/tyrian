declare namespace com {
  namespace sun {
    namespace javadoc {

      interface Doc extends java.lang.Comparable<java.lang.Object> {
        commentText(): java.lang.String
        tags(): com.sun.javadoc.Tag[]
        tags(arg0: java.lang.String | string): com.sun.javadoc.Tag[]
        seeTags(): com.sun.javadoc.SeeTag[]
        inlineTags(): com.sun.javadoc.Tag[]
        firstSentenceTags(): com.sun.javadoc.Tag[]
        getRawCommentText(): java.lang.String
        setRawCommentText(arg0: java.lang.String | string): void
        name(): java.lang.String
        compareTo(arg0: java.lang.Object | any): number
        isField(): boolean
        isEnumConstant(): boolean
        isConstructor(): boolean
        isMethod(): boolean
        isAnnotationTypeElement(): boolean
        isInterface(): boolean
        isException(): boolean
        isError(): boolean
        isEnum(): boolean
        isAnnotationType(): boolean
        isOrdinaryClass(): boolean
        isClass(): boolean
        isIncluded(): boolean
        position(): com.sun.javadoc.SourcePosition
      }

    }
  }
}
