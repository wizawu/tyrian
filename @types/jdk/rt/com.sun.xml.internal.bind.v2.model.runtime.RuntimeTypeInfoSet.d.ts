declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace runtime {
interface RuntimeTypeInfoSet extends com.sun.xml.internal.bind.v2.model.core.TypeInfoSet<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method> {
    arrays(): java.util.Map<java.lang.Class, com.sun.xml.internal.bind.v2.model.runtime.RuntimeArrayInfo>
    beans(): java.util.Map<java.lang.Class, com.sun.xml.internal.bind.v2.model.runtime.RuntimeClassInfo>
    builtins(): java.util.Map<java.lang.reflect.Type, com.sun.xml.internal.bind.v2.model.runtime.RuntimeBuiltinLeafInfo>
    enums(): java.util.Map<java.lang.Class, com.sun.xml.internal.bind.v2.model.runtime.RuntimeEnumLeafInfo>
    getTypeInfo(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
    getAnyTypeInfo(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
    getClassInfo(arg0: java.lang.Class): com.sun.xml.internal.bind.v2.model.runtime.RuntimeNonElement
    getElementInfo(arg0: java.lang.Class, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.model.runtime.RuntimeElementInfo
    getElementMappings(arg0: java.lang.Class): java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.bind.v2.model.runtime.RuntimeElementInfo>
    getAllElements(): java.lang.Iterable<com.sun.xml.internal.bind.v2.model.runtime.RuntimeElementInfo>
    getElementMappings(arg0: java.lang.Object): java.util.Map
    getElementInfo(arg0: java.lang.Object, arg1: javax.xml.namespace.QName): com.sun.xml.internal.bind.v2.model.core.ElementInfo
    getClassInfo(arg0: java.lang.Object): com.sun.xml.internal.bind.v2.model.core.NonElement
    getAnyTypeInfo(): com.sun.xml.internal.bind.v2.model.core.NonElement
    getTypeInfo(arg0: java.lang.Object): com.sun.xml.internal.bind.v2.model.core.NonElement
}

                            }
                        }
                    }
                }
            }
        }
    }
}