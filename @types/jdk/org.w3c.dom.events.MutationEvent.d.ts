declare namespace org {
  namespace w3c {
    namespace dom {
      namespace events {
        interface MutationEvent extends org.w3c.dom.events.Event {
          readonly MODIFICATION: short
          readonly ADDITION: short
          readonly REMOVAL: short
          getRelatedNode(): org.w3c.dom.Node
          getPrevValue(): java.lang.String
          getNewValue(): java.lang.String
          getAttrName(): java.lang.String
          getAttrChange(): number
          initMutationEvent(
            arg0: java.lang.String | string,
            arg1: boolean | java.lang.Boolean,
            arg2: boolean | java.lang.Boolean,
            arg3: org.w3c.dom.Node,
            arg4: java.lang.String | string,
            arg5: java.lang.String | string,
            arg6: java.lang.String | string,
            arg7: number | java.lang.Short
          ): void
        }
      }
    }
  }
}
