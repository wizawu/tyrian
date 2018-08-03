declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace domapi {
                            class XPathResultImpl implements org.w3c.dom.xpath.XPathResult , org.w3c.dom.events.EventListener {
                                public getResultType(): short
                                public getNumberValue(): double
                                public getStringValue(): string
                                public getBooleanValue(): boolean
                                public getSingleNodeValue(): org.w3c.dom.Node
                                public getInvalidIteratorState(): boolean
                                public getSnapshotLength(): int
                                public iterateNext(): org.w3c.dom.Node
                                public snapshotItem(arg0: int): org.w3c.dom.Node
                                public handleEvent(arg0: org.w3c.dom.events.Event): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}