declare namespace com {
  namespace sun {
    namespace javadoc {

      interface Tag {

        name(): java.lang.String
        holder(): com.sun.javadoc.Doc
        kind(): java.lang.String
        text(): java.lang.String
        toString(): java.lang.String
        inlineTags(): com.sun.javadoc.Tag[]
        firstSentenceTags(): com.sun.javadoc.Tag[]
        position(): com.sun.javadoc.SourcePosition
      }

    }
  }
}
