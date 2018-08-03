declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace transforms {
                                namespace params {
                                    class XPathFilterCHGPContainer extends com.sun.org.apache.xml.internal.security.utils.ElementProxy implements com.sun.org.apache.xml.internal.security.transforms.TransformParam {
                                        public static readonly TRANSFORM_XPATHFILTERCHGP: string
                                        public static readonly _TAG_XPATHCHGP: string
                                        public static readonly _ATT_INCLUDESLASH: string
                                        public static readonly IncludeSlash: boolean
                                        public static readonly ExcludeSlash: boolean
                                        public static getInstance(arg0: org.w3c.dom.Document, arg1: boolean, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPathFilterCHGPContainer
                                        public static getInstance(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.transforms.params.XPathFilterCHGPContainer
                                        public getIncludeButSearch(): string
                                        public getExcludeButSearch(): string
                                        public getExclude(): string
                                        public getIncludeSlashPolicy(): boolean
                                        public getHereContextNodeIncludeButSearch(): org.w3c.dom.Node
                                        public getHereContextNodeExcludeButSearch(): org.w3c.dom.Node
                                        public getHereContextNodeExclude(): org.w3c.dom.Node
                                        public getBaseLocalName(): string
                                        public getBaseNamespace(): string
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