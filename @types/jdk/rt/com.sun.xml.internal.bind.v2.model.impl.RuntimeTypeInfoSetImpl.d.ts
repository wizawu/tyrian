declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
class RuntimeTypeInfoSetImpl extends com.sun.xml.internal.bind.v2.model.impl.TypeInfoSetImpl<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method> implements com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfoSet {
    public constructor(arg0: com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method>)
    protected createAnyType(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
    public getTypeInfo(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
    public getAnyTypeInfo(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
    public getClassInfo(arg0: java.lang.Class): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
    public beans(): java.util.Map<java.lang.Class, com.sun.xml.internal.bind.v2.model.impl.RuntimeClassInfoImpl>
    public builtins(): java.util.Map<java.lang.reflect.Type, com.sun.xml.internal.bind.v2.model.impl.RuntimeBuiltinLeafInfoImpl<any>>
    public enums(): java.util.Map<java.lang.Class, com.sun.xml.internal.bind.v2.model.impl.RuntimeEnumLeafInfoImpl<any, any>>
    public arrays(): java.util.Map<java.lang.Class, com.sun.xml.internal.bind.v2.model.impl.RuntimeArrayInfoImpl>
    public getElementInfo(arg0: java.lang.Class, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.model.impl.RuntimeElementInfoImpl
    public getElementMappings(arg0: java.lang.Class): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.bind.v2.model.impl.RuntimeElementInfoImpl>
    public getAllElements(): java.lang.Iterable<com.sun.xml.internal.bind.v2.model.impl.RuntimeElementInfoImpl>
    public getElementMappings(arg0: java.lang.Object): java.util.Map
    public getElementInfo(arg0: java.lang.Object, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.model.impl.ElementInfoImpl
    public getClassInfo(arg0: java.lang.Object): com.sun.xml.internal.bind.v2.model.core.NonElement
    public getAnyTypeInfo(): com.sun.xml.internal.bind.v2.model.core.NonElement
    public getTypeInfo(arg0: java.lang.Object): com.sun.xml.internal.bind.v2.model.core.NonElement
    protected createAnyType(): com.sun.xml.internal.bind.v2.model.core.NonElement
    public getElementInfo(arg0: java.lang.Object, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.model.core.ElementInfo
    public getElementInfo(arg0: java.lang.Class, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.model.runtime.RuntimeElementInfo
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