declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ranges {

        interface Range {
          public static readonly START_TO_START: short
          public static readonly START_TO_END: short
          public static readonly END_TO_END: short
          public static readonly END_TO_START: short
          getStartContainer(): org.w3c.dom.Node
          getStartOffset(): number
          getEndContainer(): org.w3c.dom.Node
          getEndOffset(): number
          getCollapsed(): boolean
          getCommonAncestorContainer(): org.w3c.dom.Node
          setStart(arg0: org.w3c.dom.Node, arg1: number | java.lang.Integer): void
          setEnd(arg0: org.w3c.dom.Node, arg1: number | java.lang.Integer): void
          setStartBefore(arg0: org.w3c.dom.Node): void
          setStartAfter(arg0: org.w3c.dom.Node): void
          setEndBefore(arg0: org.w3c.dom.Node): void
          setEndAfter(arg0: org.w3c.dom.Node): void
          collapse(arg0: boolean | java.lang.Boolean): void
          selectNode(arg0: org.w3c.dom.Node): void
          selectNodeContents(arg0: org.w3c.dom.Node): void
          compareBoundaryPoints(arg0: number | java.lang.Short, arg1: org.w3c.dom.ranges.Range): number
          deleteContents(): void
          extractContents(): org.w3c.dom.DocumentFragment
          cloneContents(): org.w3c.dom.DocumentFragment
          insertNode(arg0: org.w3c.dom.Node): void
          surroundContents(arg0: org.w3c.dom.Node): void
          cloneRange(): org.w3c.dom.ranges.Range
          toString(): java.lang.String
          detach(): void
        }

      }
    }
  }
}
