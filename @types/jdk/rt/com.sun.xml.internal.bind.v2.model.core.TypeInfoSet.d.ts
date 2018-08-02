declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
                                interface TypeInfoSet<T, C, F, M> {
                                    getNavigator(): com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, F, M>
                                    getTypeInfo(arg0: T): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    getAnyTypeInfo(): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    getClassInfo(arg0: C): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    arrays(): java.util.Map<T, com.sun.xml.internal.bind.v2.model.core.ArrayInfo<T, C>>
                                    beans(): java.util.Map<C, com.sun.xml.internal.bind.v2.model.core.ClassInfo<T, C>>
                                    builtins(): java.util.Map<T, com.sun.xml.internal.bind.v2.model.core.BuiltinLeafInfo<T, C>>
                                    enums(): java.util.Map<C, com.sun.xml.internal.bind.v2.model.core.EnumLeafInfo<T, C>>
                                    getElementInfo(arg0: C, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.model.core.ElementInfo<T, C>
                                    getTypeInfo(arg0: com.sun.xml.internal.bind.v2.model.core.Ref<T, C>): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    getElementMappings(arg0: C): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.bind.v2.model.core.ElementInfo<T, C>>
                                    getAllElements(): java.lang.Iterable<com.sun.xml.internal.bind.v2.model.core.ElementInfo<T, C>>
                                    getXmlNs(arg0: java.lang.String | string): java.util.Map<java.lang.String, java.lang.String>
                                    getSchemaLocations(): java.util.Map<java.lang.String, java.lang.String>
                                    getElementFormDefault(arg0: java.lang.String | string): javax.xml.bind.annotation.XmlNsForm
                                    getAttributeFormDefault(arg0: java.lang.String | string): javax.xml.bind.annotation.XmlNsForm
                                    dump(arg0: javax.xml.transform.Result): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}