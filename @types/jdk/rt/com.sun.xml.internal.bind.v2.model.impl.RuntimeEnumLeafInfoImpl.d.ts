declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                class RuntimeEnumLeafInfoImpl<T extends java.lang.Enum<T>, B> extends com.sun.xml.internal.bind.v2.model.impl.EnumLeafInfoImpl<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method> implements com.sun.xml.internal.bind.v2.model.runtime.RuntimeEnumLeafInfo , com.sun.xml.internal.bind.v2.runtime.Transducer<T> {
                                    public getTransducer(): com.sun.xml.internal.bind.v2.runtime.Transducer<T>
                                    public createEnumConstant(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.reflect.Field, arg3: com.sun.xml.internal.bind.v2.model.impl.EnumConstantImpl<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method>): com.sun.xml.internal.bind.v2.model.impl.RuntimeEnumConstantImpl
                                    public getTypeNames(): javax.xml.namespace.QName[]
                                    public isDefault(): boolean
                                    public getClazz(): java.lang.Class
                                    public useNamespace(): boolean
                                    public declareNamespace(arg0: T, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                    public print(arg0: T): java.lang.CharSequence
                                    public parse(arg0: java.lang.CharSequence): T
                                    public writeText(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: T, arg2: java.lang.String | string): void
                                    public writeLeafElement(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: com.sun.xml.internal.bind.v2.runtime.Name, arg2: T, arg3: java.lang.String | string): void
                                    public getTypeName(arg0: T): javax.xml.namespace.QName
                                    public getClazz(): java.lang.Object
                                    public createEnumConstant(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: com.sun.xml.internal.bind.v2.model.impl.EnumConstantImpl): com.sun.xml.internal.bind.v2.model.impl.EnumConstantImpl
                                    public getTypeName(arg0: java.lang.Object): javax.xml.namespace.QName
                                    public writeLeafElement(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: com.sun.xml.internal.bind.v2.runtime.Name, arg2: java.lang.Object, arg3: java.lang.String | string): void
                                    public writeText(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: java.lang.Object, arg2: java.lang.String | string): void
                                    public parse(arg0: java.lang.CharSequence): java.lang.Object
                                    public print(arg0: java.lang.Object): java.lang.CharSequence
                                    public declareNamespace(arg0: java.lang.Object, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
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