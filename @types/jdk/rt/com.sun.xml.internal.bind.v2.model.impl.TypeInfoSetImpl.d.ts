declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class TypeInfoSetImpl<T, C, F, M> implements com.sun.xml.internal.bind.v2.model.core.TypeInfoSet<T, C, F, M> {
                                    public nav: com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, F, M>
                                    public reader: com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<T, C, F, M>
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, F, M>, arg1: com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<T, C, F, M>, arg2: java.util.Map<T, com.sun.xml.internal.bind.v2.model.impl.BuiltinLeafInfoImpl<T, C>>)
                                    protected createAnyType(): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    public getNavigator(): com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, F, M>
                                    public add(arg0: com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl<T, C, F, M>): void
                                    public add(arg0: com.sun.xml.internal.bind.v2.model.impl.EnumLeafInfoImpl<T, C, F, M>): void
                                    public add(arg0: com.sun.xml.internal.bind.v2.model.impl.ArrayInfoImpl<T, C, F, M> | com.sun.xml.internal.bind.v2.model.impl.ArrayInfoImpl$$Lambda<T, C, F, M>): void
                                    public getTypeInfo(arg0: T): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    public getAnyTypeInfo(): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    public getTypeInfo(arg0: com.sun.xml.internal.bind.v2.model.core.Ref<T, C>): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    public beans(): java.util.Map<C, com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl<T, C, F, M>>
                                    public builtins(): java.util.Map<T, com.sun.xml.internal.bind.v2.model.core.BuiltinLeafInfo<T, C>>
                                    public enums(): java.util.Map<C, com.sun.xml.internal.bind.v2.model.impl.EnumLeafInfoImpl<T, C, F, M>>
                                    public arrays(): java.util.Map<T, com.sun.xml.internal.bind.v2.model.impl.ArrayInfoImpl<T, C, F, M>>
                                    public getClassInfo(arg0: C): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    public getElementInfo(arg0: C, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl<T, C, F, M>
                                    public add(arg0: com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl<T, C, F, M>, arg1: com.sun.xml.internal.bind.v2.model.impl.ModelBuilder<T, C, F, M>): void
                                    public getElementMappings(arg0: C): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl<T, C, F, M>>
                                    public getAllElements(): java.lang.Iterable<com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl<T, C, F, M>>
                                    public getXmlNs(arg0: java.lang.String | string): java.util.Map<java.lang.String, java.lang.String>
                                    public getSchemaLocations(): java.util.Map<java.lang.String, java.lang.String>
                                    public getElementFormDefault(arg0: java.lang.String | string): javax.xml.bind.annotation.XmlNsForm
                                    public getAttributeFormDefault(arg0: java.lang.String | string): javax.xml.bind.annotation.XmlNsForm
                                    public dump(arg0: javax.xml.transform.Result): void
                                    public getElementInfo(arg0: java.lang.Object, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.model.core.ElementInfo
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