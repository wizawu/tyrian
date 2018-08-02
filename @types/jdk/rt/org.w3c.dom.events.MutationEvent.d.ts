declare namespace org {
    namespace w3c {
        namespace dom {
            namespace events {
interface MutationEvent extends org.w3c.dom.events.Event {
    MODIFICATION: short
    ADDITION: short
    REMOVAL: short
    getRelatedNode(): org.w3c.dom.Node
    getPrevValue(): string
    getNewValue(): string
    getAttrName(): string
    getAttrChange(): short
    initMutationEvent(arg0: java.lang.String | string, arg1: boolean, arg2: boolean, arg3: org.w3c.dom.Node, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: short): void
}

            }
        }
    }
}