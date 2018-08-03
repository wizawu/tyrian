declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
                                abstract class PropertyInfoImpl<T, C, F, M> implements com.sun.xml.internal.bind.v2.model.core.PropertyInfo<T, C> , com.sun.xml.internal.bind.v2.model.annotation.Locatable , java.lang.Comparable<com.sun.xml.internal.bind.v2.model.impl.PropertyInfoImpl> {
                                    protected readonly seed: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>
                                    protected readonly parent: com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl<T, C, F, M>
                                    protected constructor(arg0: com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl<T, C, F, M>, arg1: com.sun.xml.internal.bind.v2.model.impl.PropertySeed<T, C, F, M>)
                                    public parent(): com.sun.xml.internal.bind.v2.model.impl.ClassInfoImpl<T, C, F, M>
                                    protected nav(): com.sun.xml.internal.bind.v2.model.nav.Navigator<T, C, F, M>
                                    protected reader(): com.sun.xml.internal.bind.v2.model.annotation.AnnotationReader<T, C, F, M>
                                    public getRawType(): T
                                    public getIndividualType(): T
                                    public getName(): string
                                    public getAdapter(): com.sun.xml.internal.bind.v2.model.core.Adapter<T, C>
                                    public displayName(): string
                                    public id(): com.sun.xml.internal.bind.v2.model.core.ID
                                    public getExpectedMimeType(): javax.activation.MimeType
                                    public inlineBinaryData(): boolean
                                    public getSchemaType(): javax.xml.namespace.QName
                                    public isCollection(): boolean
                                    protected link(): void
                                    public getUpstream(): com.sun.xml.internal.bind.v2.model.annotation.Locatable
                                    public getLocation(): com.sun.xml.internal.bind.v2.runtime.Location
                                    protected calcXmlName(arg0: javax.xml.bind.annotation.XmlElement): javax.xml.namespace.QName
                                    protected calcXmlName(arg0: javax.xml.bind.annotation.XmlElementWrapper): javax.xml.namespace.QName
                                    public compareTo(arg0: com.sun.xml.internal.bind.v2.model.impl.PropertyInfoImpl): int
                                    public readAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
                                    public hasAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
                                    public parent<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.bind.v2.model.core.TypeInfo
                                    public compareTo<A extends java.lang.annotation.Annotation>(arg0: java.lang.Object): int
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