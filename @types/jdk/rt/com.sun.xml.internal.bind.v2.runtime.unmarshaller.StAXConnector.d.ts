declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                abstract class StAXConnector {
                                    protected visitor: com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor
                                    protected context: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext
                                    protected predictor: com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor$TextPredictor
                                    protected tagName: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName
                                    public bridge(): void
                                    protected constructor(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor)
                                    protected getCurrentLocation(): javax.xml.stream.Location
                                    protected getCurrentQName(): string
                                    protected handleStartDocument(arg0: javax.xml.namespace.NamespaceContext): void
                                    protected handleEndDocument(): void
                                    protected static fixNull(arg0: java.lang.String | string): string
                                    protected getQName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
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