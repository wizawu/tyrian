declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            namespace events {
                                class MutationEventImpl extends com.sun.org.apache.xerces.internal.dom.events.EventImpl implements org.w3c.dom.events.MutationEvent {
                                    public attrChange: short
                                    public static DOM_SUBTREE_MODIFIED: string
                                    public static DOM_NODE_INSERTED: string
                                    public static DOM_NODE_REMOVED: string
                                    public static DOM_NODE_REMOVED_FROM_DOCUMENT: string
                                    public static DOM_NODE_INSERTED_INTO_DOCUMENT: string
                                    public static DOM_ATTR_MODIFIED: string
                                    public static DOM_CHARACTER_DATA_MODIFIED: string
                                    public constructor()
                                    public getAttrName(): string
                                    public getAttrChange(): short
                                    public getNewValue(): string
                                    public getPrevValue(): string
                                    public getRelatedNode(): org.w3c.dom.Node
                                    public initMutationEvent(arg0: java.lang.String | string, arg1: boolean, arg2: boolean, arg3: org.w3c.dom.Node, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: short): void
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}