declare namespace org {
  namespace w3c {
    namespace dom {
      namespace events {

        interface MutationEvent extends org.w3c.dom.events.Event {
          public static readonly MODIFICATION: short
          public static readonly ADDITION: short
          public static readonly REMOVAL: short
          getRelatedNode(): org.w3c.dom.Node
          getPrevValue(): java.lang.String
          getNewValue(): java.lang.String
          getAttrName(): java.lang.String
          getAttrChange(): short
          initMutationEvent(arg0: java.lang.String, arg1: boolean, arg2: boolean, arg3: org.w3c.dom.Node, arg4: java.lang.String, arg5: java.lang.String, arg6: java.lang.String, arg7: short): void
        }

      }
    }
  }
}
