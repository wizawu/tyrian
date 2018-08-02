declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace identity {
                                    class Selector$Matcher extends com.sun.org.apache.xerces.internal.impl.xs.identity.XPathMatcher {
                                        protected fFieldActivator: com.sun.org.apache.xerces.internal.impl.xs.identity.FieldActivator
                                        protected fInitialDepth: int
                                        protected fElementDepth: int
                                        protected fMatchedDepth: int
                                        public constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Selector, arg1: com.sun.org.apache.xerces.internal.impl.xs.identity.Selector$XPath, arg2: com.sun.org.apache.xerces.internal.impl.xs.identity.FieldActivator, arg3: int)
                                        public startDocumentFragment(): void
                                        public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                                        public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg2: boolean, arg3: java.lang.Object, arg4: short, arg5: com.sun.org.apache.xerces.internal.xs.ShortList): void
                                        public getIdentityConstraint(): com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint
                                        public getInitialDepth(): int
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