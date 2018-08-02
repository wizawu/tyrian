declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class ModelBuilder<T, C, F, M> implements com.sun.xml.internal.bind.v2.model.impl.ModelBuilderI<T, C, F, M> {
                                    public reader: com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<T, C, F, M>
                                    public nav: com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, F, M>
                                    public defaultNsUri: string
                                    public hasSwaRef: boolean
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<T, C, F, M>, arg1: com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, F, M>, arg2: java.util.Map<C, C>, arg3: java.lang.String | string)
                                    protected createTypeInfoSet(): com.sun.xml.internal.bind.v2.model.impl.TypeInfoSetImpl<T, C, F, M>
                                    public getClassInfo(arg0: C, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    public getClassInfo(arg0: C, arg1: boolean, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    public getTypeInfo(arg0: T, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    public getTypeInfo(arg0: com.sun.xml.internal.bind.v2.model.core.Ref<T, C>): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
                                    protected createEnumLeafInfo(arg0: C, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.impl.EnumLeafInfoImpl<T, C, F, M>
                                    protected createClassInfo(arg0: C, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl<T, C, F, M>
                                    protected createElementInfo(arg0: com.sun.xml.internal.bind.v2.model.impl.RegistryInfoImpl<T, C, F, M>, arg1: M): com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl<T, C, F, M>
                                    protected createArrayInfo(arg0: com.sun.xml.internal.bind.v2.model.annotation.Locatable, arg1: T): com.sun.xml.internal.bind.v2.model.impl.ArrayInfoImpl<T, C, F, M>
                                    public addRegistry(arg0: C, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.core.RegistryInfo<T, C>
                                    public getRegistry(arg0: java.lang.String | string): com.sun.xml.internal.bind.v2.model.core.RegistryInfo<T, C>
                                    public link(): com.sun.xml.internal.bind.v2.model.core.TypeInfoSet<T, C, F, M>
                                    public setErrorHandler(arg0: com.sun.xml.internal.bind.v2.model.core.ErrorHandler | com.sun.xml.internal.bind.v2.model.core.ErrorHandler$$Lambda): void
                                    public reportError(arg0: com.sun.xml.internal.bind.v2.runtime.IllegalAnnotationException): void
                                    public isReplaced(arg0: C): boolean
                                    public getNavigator(): com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, F, M>
                                    public getReader(): com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<T, C, F, M>
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