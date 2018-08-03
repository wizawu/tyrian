declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class RuntimeModelBuilder extends com.sun.xml.internal.bind.v2.model.impl.ModelBuilder<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method> {
                                    public readonly context: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.annotation.RuntimeAnnotationReader, arg2: java.util.Map<java.lang.Class, java.lang.Class>, arg3: java.lang.String | string)
                                    public getClassInfo(arg0: java.lang.Class, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
                                    public getClassInfo(arg0: java.lang.Class, arg1: boolean, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
                                    protected createEnumLeafInfo(arg0: java.lang.Class, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.impl.RuntimeEnumLeafInfoImpl
                                    protected createClassInfo(arg0: java.lang.Class, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.impl.RuntimeClassInfoImpl
                                    public createElementInfo(arg0: com.sun.xml.internal.bind.v2.model.impl.RegistryInfoImpl<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method>, arg1: java.lang.reflect.Method): com.sun.xml.internal.bind.v2.model.impl.RuntimeElementInfoImpl
                                    public createArrayInfo(arg0: com.sun.xml.internal.bind.v2.model.annotation.Locatable, arg1: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): com.sun.xml.internal.bind.v2.model.impl.RuntimeArrayInfoImpl
                                    protected createTypeInfoSet(): com.sun.xml.internal.bind.v2.model.impl.RuntimeTypeInfoSetImpl
                                    public link(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfoSet
                                    public static createTransducer(arg0: com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElementRef): com.sun.xml.internal.bind.v2.runtime.Transducer
                                    public link(): com.sun.xml.internal.bind.v2.model.core.TypeInfoSet
                                    public createArrayInfo(arg0: com.sun.xml.internal.bind.v2.model.annotation.Locatable, arg1: java.lang.Object): com.sun.xml.internal.bind.v2.model.impl.ArrayInfoImpl
                                    public createElementInfo(arg0: com.sun.xml.internal.bind.v2.model.impl.RegistryInfoImpl, arg1: java.lang.Object): com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl
                                    protected createClassInfo(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl
                                    protected createEnumLeafInfo(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.impl.EnumLeafInfoImpl
                                    public getClassInfo(arg0: java.lang.Object, arg1: boolean, arg2: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.core.NonElement
                                    public getClassInfo(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable): com.sun.xml.internal.bind.v2.model.core.NonElement
                                    protected createTypeInfoSet(): com.sun.xml.internal.bind.v2.model.impl.TypeInfoSetImpl
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