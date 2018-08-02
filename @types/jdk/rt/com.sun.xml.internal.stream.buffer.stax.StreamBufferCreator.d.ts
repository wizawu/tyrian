declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        namespace stax {
abstract class StreamBufferCreator extends com.sun.xml.internal.stream.buffer.AbstractCreator {
    protected attributeValuePrefixes: java.util.List<java.lang.String>
    protected storeQualifiedName(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    protected storeNamespaceAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    protected storeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
    public getAttributeValuePrefixes(): java.util.List
    protected storeProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public isCheckAttributeValue(): boolean
    public setCheckAttributeValue(arg0: boolean): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}