declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                class StructureLoader extends com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader {
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.ClassBeanInfoImpl)
                                    public init(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.runtime.ClassBeanInfoImpl, arg2: com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<any, java.util.Map<javax.xml.namespace.QName, java.lang.String>>): void
                                    public startElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): void
                                    public childElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): void
                                    public getExpectedChildElements(): java.util.Collection<javax.xml.namespace.QName>
                                    public getExpectedAttributes(): java.util.Collection<javax.xml.namespace.QName>
                                    public text(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: java.lang.CharSequence): void
                                    public leaveElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): void
                                    public getBeanInfo(): com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo
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