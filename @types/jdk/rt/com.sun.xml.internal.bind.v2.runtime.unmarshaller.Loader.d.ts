declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
abstract class Loader {
    protected expectText: boolean
    protected constructor(arg0: boolean)
    protected constructor()
    public startElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName): void
    public childElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName): void
    protected reportUnexpectedChildElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName, arg1: boolean): void
    public getExpectedChildElements(): java.util.Collection<javax.xml.namespace.QName>
    public getExpectedAttributes(): java.util.Collection<javax.xml.namespace.QName>
    public text(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: java.lang.CharSequence): void
    public expectText(): boolean
    public leaveElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName): void
    protected fireBeforeUnmarshal(arg0: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo, arg1: java.lang.Object, arg2: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State): void
    protected fireAfterUnmarshal(arg0: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo, arg1: java.lang.Object, arg2: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State): void
    protected static handleGenericException(arg0: java.lang.Exception): void
    public static handleGenericException(arg0: java.lang.Exception, arg1: boolean): void
    public static handleGenericError(arg0: java.lang.Error): void
    protected static reportError(arg0: java.lang.String | string, arg1: boolean): void
    public static reportError(arg0: java.lang.String | string, arg1: java.lang.Exception, arg2: boolean): void
    protected static handleParseConversionException(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: java.lang.Exception): void
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