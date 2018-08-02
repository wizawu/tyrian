declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                abstract class TagName {
                                    public uri: string
                                    public local: string
                                    public atts: org.xml.sax.Attributes
                                    public constructor()
                                    public matches(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                    public matches(arg0: com.sun.xml.internal.bind.v2.runtime.Name): boolean
                                    public toString(): string
                                    public getQname(): string
                                    public getPrefix(): string
                                    public createQName(): javax.xml.namespace.QName
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