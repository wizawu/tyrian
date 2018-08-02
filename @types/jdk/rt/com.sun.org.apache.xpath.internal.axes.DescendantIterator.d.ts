declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
                            class DescendantIterator extends com.sun.org.apache.xpath.internal.axes.LocPathIterator {
                                protected m_traverser: com.sun.org.apache.xml.internal.dtm.DTMAxisTraverser
                                protected m_axis: int
                                protected m_extendedTypeID: int
                                public constructor()
                                public cloneWithReset(): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public nextNode(): int
                                public setRoot(arg0: int, arg1: java.lang.Object): void
                                public asNode(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
                                public detach(): void
                                public getAxis(): int
                                public deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression | com.sun.org.apache.xpath.internal.Expression$$Lambda): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}