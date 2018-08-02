declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace identity {
                                    class XPathMatcher {
                                        protected static DEBUG_ALL: boolean
                                        protected static DEBUG_METHODS: boolean
                                        protected static DEBUG_METHODS2: boolean
                                        protected static DEBUG_METHODS3: boolean
                                        protected static DEBUG_MATCH: boolean
                                        protected static DEBUG_STACK: boolean
                                        protected static DEBUG_ANY: boolean
                                        protected static MATCHED: int
                                        protected static MATCHED_ATTRIBUTE: int
                                        protected static MATCHED_DESCENDANT: int
                                        protected static MATCHED_DESCENDANT_PREVIOUS: int
                                        protected fMatchedString: java.lang.Object
                                        public constructor(arg0: com.sun.org.apache.xerces.internal.impl.xpath.XPath)
                                        public isMatched(): boolean
                                        protected handleContent(arg0: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg1: boolean, arg2: java.lang.Object, arg3: short, arg4: com.sun.org.apache.xerces.internal.xs.ShortList): void
                                        protected matched(arg0: java.lang.Object, arg1: short, arg2: com.sun.org.apache.xerces.internal.xs.ShortList, arg3: boolean): void
                                        public startDocumentFragment(): void
                                        public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                                        public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg2: boolean, arg3: java.lang.Object, arg4: short, arg5: com.sun.org.apache.xerces.internal.xs.ShortList): void
                                        public toString(): string
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
}