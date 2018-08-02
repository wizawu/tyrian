declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
class ClassInfoImpl<T, C, F, M> extends com.sun.xml.internal.bind.v2.model.impl.TypeInfoImpl<T, C, F, M> implements com.sun.xml.internal.bind.v2.model.core.ClassInfo<T, C> , com.sun.xml.internal.bind.v2.model.core.Element<T, C> {
    protected clazz: C
    protected attributeWildcard: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>
    public getBaseClass(): com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl<T, C, F, M>
    public getSubstitutionHead(): com.sun.xml.internal.bind.v2.model.core.Element<T, C>
    public getClazz(): C
    public getScope(): com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl<T, C, F, M>
    public getType(): T
    public canBeReferencedByIDREF(): boolean
    public getName(): string
    public readAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
    public asElement<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.bind.v2.model.core.Element<T, C>
    public getProperties<A extends java.lang.annotation.Annotation>(): java.util.List<com.sun.xml.internal.bind.v2.model.core.PropertyInfo<T, C>>
    public hasValueProperty<A extends java.lang.annotation.Annotation>(): boolean
    public getProperty<A extends java.lang.annotation.Annotation>(arg0: java.lang.String | string): com.sun.xml.internal.bind.v2.model.core.PropertyInfo<T, C>
    protected checkFieldXmlLocation<A extends java.lang.annotation.Annotation>(arg0: F): void
    public hasProperties<A extends java.lang.annotation.Annotation>(): boolean
    protected createReferenceProperty<A extends java.lang.annotation.Annotation>(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>): com.sun.xml.internal.bind.v2.model.impl.ReferencePropertyInfoImpl<T, C, F, M>
    protected createAttributeProperty<A extends java.lang.annotation.Annotation>(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>): com.sun.xml.internal.bind.v2.model.impl.AttributePropertyInfoImpl<T, C, F, M>
    protected createValueProperty<A extends java.lang.annotation.Annotation>(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>): com.sun.xml.internal.bind.v2.model.impl.ValuePropertyInfoImpl<T, C, F, M>
    protected createElementProperty<A extends java.lang.annotation.Annotation>(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>): com.sun.xml.internal.bind.v2.model.impl.ElementPropertyInfoImpl<T, C, F, M>
    protected createMapProperty<A extends java.lang.annotation.Annotation>(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>): com.sun.xml.internal.bind.v2.model.impl.MapPropertyInfoImpl<T, C, F, M>
    protected createFieldSeed<A extends java.lang.annotation.Annotation>(arg0: F): com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>
    protected createAccessorSeed<A extends java.lang.annotation.Annotation>(arg0: M, arg1: M): com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>
    public isElement<A extends java.lang.annotation.Annotation>(): boolean
    public isAbstract<A extends java.lang.annotation.Annotation>(): boolean
    public isOrdered<A extends java.lang.annotation.Annotation>(): boolean
    public isFinal<A extends java.lang.annotation.Annotation>(): boolean
    public hasSubClasses<A extends java.lang.annotation.Annotation>(): boolean
    public hasAttributeWildcard<A extends java.lang.annotation.Annotation>(): boolean
    public inheritsAttributeWildcard<A extends java.lang.annotation.Annotation>(): boolean
    public declaresAttributeWildcard<A extends java.lang.annotation.Annotation>(): boolean
    public getElementName<A extends java.lang.annotation.Annotation>(): javax.xml.namespace.QName
    public getTypeName<A extends java.lang.annotation.Annotation>(): javax.xml.namespace.QName
    public isSimpleType<A extends java.lang.annotation.Annotation>(): boolean
    public getLocation<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.bind.v2.runtime.Location
    public getFactoryMethod<A extends java.lang.annotation.Annotation>(): java.lang.reflect.Method
    public toString<A extends java.lang.annotation.Annotation>(): string
    public getUpstream<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.bind.v2.model.annotation.Locatable
    public getBaseClass<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.bind.v2.model.core.ClassInfo
    public getScope<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.bind.v2.model.core.ClassInfo
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