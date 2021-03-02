declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {

        interface LSParser {
          public static readonly ACTION_APPEND_AS_CHILDREN: short
          public static readonly ACTION_REPLACE_CHILDREN: short
          public static readonly ACTION_INSERT_BEFORE: short
          public static readonly ACTION_INSERT_AFTER: short
          public static readonly ACTION_REPLACE: short
          getDomConfig(): org.w3c.dom.DOMConfiguration
          getFilter(): org.w3c.dom.ls.LSParserFilter
          setFilter(arg0: org.w3c.dom.ls.LSParserFilter): void
          getAsync(): boolean
          getBusy(): boolean
          parse(arg0: org.w3c.dom.ls.LSInput): org.w3c.dom.Document
          parseURI(arg0: java.lang.String): org.w3c.dom.Document
          parseWithContext(arg0: org.w3c.dom.ls.LSInput, arg1: org.w3c.dom.Node, arg2: short): org.w3c.dom.Node
          abort(): void
        }

      }
    }
  }
}
