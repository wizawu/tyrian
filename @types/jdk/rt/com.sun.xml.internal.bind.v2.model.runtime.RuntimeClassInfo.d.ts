declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace runtime {
                                interface RuntimeClassInfo extends com.sun.xml.internal.bind.v2.model.core.ClassInfo<java.lang.reflect.Type, java.lang.Class> , com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement {
                                    getBaseClass(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeClassInfo
                                    getProperties(): java.util.List<com.sun.xml.internal.bind.v2.model.runtime.RuntimePropertyInfo>
                                    getProperty(arg0: java.lang.String | string): com.sun.xml.internal.bind.v2.model.runtime.RuntimePropertyInfo
                                    getFactoryMethod(): java.lang.reflect.Method
                                    getAttributeWildcard<BeanT>(): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, java.util.Map<javax.xml.namespace.QName, java.lang.String>>
                                    getLocatorField<BeanT>(): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<BeanT, org.xml.sax.Locator>
                                    getProperty<BeanT>(arg0: java.lang.String | string): com.sun.xml.internal.bind.v2.model.core.PropertyInfo
                                    getBaseClass<BeanT>(): com.sun.xml.internal.bind.v2.model.core.ClassInfo
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}