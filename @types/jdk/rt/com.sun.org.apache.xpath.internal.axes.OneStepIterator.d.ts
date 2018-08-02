declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace axes {
                            class OneStepIterator extends com.sun.org.apache.xpath.internal.axes.ChildTestIterator {
                                protected m_axis: int
                                protected m_iterator: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: int)
                                public setRoot(arg0: int, arg1: java.lang.Object): void
                                public detach(): void
                                protected getNextNode(): int
                                public clone(): java.lang.Object
                                public cloneWithReset(): com.sun.org.apache.xml.internal.dtm.DTMIterator
                                public isReverseAxes(): boolean
                                protected getProximityPosition(arg0: int): int
                                public getLength(): int
                                protected countProximityPosition(arg0: int): void
                                public reset(): void
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