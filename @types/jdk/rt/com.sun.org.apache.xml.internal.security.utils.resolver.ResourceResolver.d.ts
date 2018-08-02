declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace utils {
                                namespace resolver {
                                    class ResourceResolver {
                                        public constructor(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi)
                                        public static getInstance(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver
                                        public static getInstance(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string, arg2: boolean): com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver
                                        public static getInstance(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string, arg2: java.util.List<com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver>): com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver
                                        public static getInstance(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string, arg2: java.util.List<com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver>, arg3: boolean): com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolver
                                        public static register(arg0: java.lang.String | string): void
                                        public static registerAtStart(arg0: java.lang.String | string): void
                                        public static register(arg0: java.lang.Class<com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi>, arg1: boolean): void
                                        public static register(arg0: com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi, arg1: boolean): void
                                        public static registerDefaultResolvers(): void
                                        public resolve(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public resolve(arg0: org.w3c.dom.Attr, arg1: java.lang.String | string, arg2: boolean): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput
                                        public setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public getProperty(arg0: java.lang.String | string): string
                                        public addProperties(arg0: java.util.Map<java.lang.String, java.lang.String>): void
                                        public getPropertyKeys(): java.lang.String[]
                                        public understandsProperty(arg0: java.lang.String | string): boolean
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