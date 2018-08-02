declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class RangeImpl implements org.w3c.dom.ranges.Range {
                                public constructor(arg0: com.sun.org.apache.xerces.internal.dom.DocumentImpl | com.sun.org.apache.xerces.internal.dom.DocumentImpl$$Lambda)
                                public getStartContainer(): org.w3c.dom.Node
                                public getStartOffset(): int
                                public getEndContainer(): org.w3c.dom.Node
                                public getEndOffset(): int
                                public getCollapsed(): boolean
                                public getCommonAncestorContainer(): org.w3c.dom.Node
                                public setStart(arg0: org.w3c.dom.Node, arg1: int): void
                                public setEnd(arg0: org.w3c.dom.Node, arg1: int): void
                                public setStartBefore(arg0: org.w3c.dom.Node): void
                                public setStartAfter(arg0: org.w3c.dom.Node): void
                                public setEndBefore(arg0: org.w3c.dom.Node): void
                                public setEndAfter(arg0: org.w3c.dom.Node): void
                                public collapse(arg0: boolean): void
                                public selectNode(arg0: org.w3c.dom.Node): void
                                public selectNodeContents(arg0: org.w3c.dom.Node): void
                                public compareBoundaryPoints(arg0: short, arg1: org.w3c.dom.ranges.Range): short
                                public deleteContents(): void
                                public extractContents(): org.w3c.dom.DocumentFragment
                                public cloneContents(): org.w3c.dom.DocumentFragment
                                public insertNode(arg0: org.w3c.dom.Node): void
                                public surroundContents(arg0: org.w3c.dom.Node): void
                                public cloneRange(): org.w3c.dom.ranges.Range
                                public toString(): string
                                public detach(): void
                                public insertedNodeFromDOM(arg0: org.w3c.dom.Node): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}