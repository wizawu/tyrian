declare namespace org {
    namespace w3c {
        namespace dom {
            namespace ranges {
                interface Range {
                    START_TO_START: short
                    START_TO_END: short
                    END_TO_END: short
                    END_TO_START: short
                    getStartContainer(): org.w3c.dom.Node
                    getStartOffset(): int
                    getEndContainer(): org.w3c.dom.Node
                    getEndOffset(): int
                    getCollapsed(): boolean
                    getCommonAncestorContainer(): org.w3c.dom.Node
                    setStart(arg0: org.w3c.dom.Node, arg1: int): void
                    setEnd(arg0: org.w3c.dom.Node, arg1: int): void
                    setStartBefore(arg0: org.w3c.dom.Node): void
                    setStartAfter(arg0: org.w3c.dom.Node): void
                    setEndBefore(arg0: org.w3c.dom.Node): void
                    setEndAfter(arg0: org.w3c.dom.Node): void
                    collapse(arg0: boolean): void
                    selectNode(arg0: org.w3c.dom.Node): void
                    selectNodeContents(arg0: org.w3c.dom.Node): void
                    compareBoundaryPoints(arg0: short, arg1: org.w3c.dom.ranges.Range): short
                    deleteContents(): void
                    extractContents(): org.w3c.dom.DocumentFragment
                    cloneContents(): org.w3c.dom.DocumentFragment
                    insertNode(arg0: org.w3c.dom.Node): void
                    surroundContents(arg0: org.w3c.dom.Node): void
                    cloneRange(): org.w3c.dom.ranges.Range
                    toString(): string
                    detach(): void
                }
            }
        }
    }
}