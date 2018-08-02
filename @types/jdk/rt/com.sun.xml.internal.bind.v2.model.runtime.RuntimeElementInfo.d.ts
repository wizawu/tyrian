declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace runtime {
                                interface RuntimeElementInfo extends com.sun.xml.internal.bind.v2.model.core.ElementInfo<java.lang.reflect.Type, java.lang.Class> , com.sun.xml.internal.bind.v2.model.runtime.RuntimeElement {
                                    getScope(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeClassInfo
                                    getProperty(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeElementPropertyInfo
                                    getType(): java.lang.Class<javax.xml.bind.JAXBElement>
                                    getContentType(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
                                    getType(): java.lang.Object
                                    getContentType(): com.sun.xml.internal.bind.v2.model.core.NonElement
                                    getProperty(): com.sun.xml.internal.bind.v2.model.core.ElementPropertyInfo
                                    getScope(): com.sun.xml.internal.bind.v2.model.core.ClassInfo
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}