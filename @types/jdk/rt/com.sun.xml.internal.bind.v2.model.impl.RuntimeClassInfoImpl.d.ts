declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
class RuntimeClassInfoImpl extends com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method> implements com.sun.xml.internal.bind.v2.model.runtime.RuntimeClassInfo , com.sun.xml.internal.bind.v2.model.runtime.RuntimeElement {
    public constructor(arg0: com.sun.xml.internal.bind.v2.model.impl.RuntimeModelBuilder, arg1: com.sun.xml.internal.bind.v2.model.annotation.Locatable, arg2: java.lang.Class)
    protected createAccessorFactory(arg0: java.lang.Class): com.sun.xml.internal.bind.AccessorFactory
    protected findXmlAccessorFactoryAnnotation(arg0: java.lang.Class): com.sun.xml.internal.bind.XmlAccessorFactory
    public getFactoryMethod(): java.lang.reflect.Method
    public getBaseClass(): com.sun.xml.internal.bind.v2.model.impl.RuntimeClassInfoImpl
    protected createReferenceProperty(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method>): com.sun.xml.internal.bind.v2.model.impl.ReferencePropertyInfoImpl
    protected createAttributeProperty(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method>): com.sun.xml.internal.bind.v2.model.impl.AttributePropertyInfoImpl
    protected createValueProperty(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method>): com.sun.xml.internal.bind.v2.model.impl.ValuePropertyInfoImpl
    protected createElementProperty(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method>): com.sun.xml.internal.bind.v2.model.impl.ElementPropertyInfoImpl
    protected createMapProperty(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method>): com.sun.xml.internal.bind.v2.model.impl.MapPropertyInfoImpl
    public getProperties(): java.util.List<com.sun.xml.internal.bind.v2.model.runtime.RuntimePropertyInfo>
    public getProperty(arg0: java.lang.String | string): com.sun.xml.internal.bind.v2.model.runtime.RuntimePropertyInfo
    public link(): void
    public getAttributeWildcard<B>(): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<B, java.util.Map<javax.xml.namespace.QName, java.lang.String>>
    public getTransducer<B>(): com.sun.xml.internal.bind.v2.runtime.Transducer
    protected createFieldSeed<B>(arg0: java.lang.reflect.Field): com.sun.xml.internal.bind.v2.model.impl.RuntimeClassInfoImpl$RuntimePropertySeed
    public createAccessorSeed<B>(arg0: java.lang.reflect.Method, arg1: java.lang.reflect.Method): com.sun.xml.internal.bind.v2.model.impl.RuntimeClassInfoImpl$RuntimePropertySeed
    protected checkFieldXmlLocation<B>(arg0: java.lang.reflect.Field): void
    public getLocatorField<B>(): com.sun.xml.internal.bind.v2.runtime.reflect.Accessor<any, org.xml.sax.Locator>
    public createAccessorSeed<B>(arg0: java.lang.Object, arg1: java.lang.Object): com.sun.xml.internal.bind.v2.model.impl.PropertySeed
    protected createFieldSeed<B>(arg0: java.lang.Object): com.sun.xml.internal.bind.v2.model.impl.PropertySeed
    protected checkFieldXmlLocation<B>(arg0: java.lang.Object): void
    public getProperty<B>(arg0: java.lang.String | string): com.sun.xml.internal.bind.v2.model.core.PropertyInfo
    public getBaseClass<B>(): com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl
    public getBaseClass<B>(): com.sun.xml.internal.bind.v2.model.core.ClassInfo
    public getBaseClass<B>(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeClassInfo
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