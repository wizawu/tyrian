declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
interface PropertyInfo<T, C> extends com.sun.xml.internal.bind.v2.model.annotation.AnnotationSource {
    parent(): com.sun.xml.internal.bind.v2.model.core.TypeInfo<T, C>
    getName(): string
    displayName(): string
    isCollection(): boolean
    ref(): java.util.Collection<com.sun.xml.internal.bind.v2.model.core.TypeInfo<T, C>>
    kind(): com.sun.xml.internal.bind.v2.model.core.PropertyKind
    getAdapter(): com.sun.xml.internal.bind.v2.model.core.Adapter<T, C>
    id(): com.sun.xml.internal.bind.v2.model.core.ID
    getExpectedMimeType(): javax.activation.MimeType
    inlineBinaryData(): boolean
    getSchemaType(): javax.xml.namespace.QName
}

                            }
                        }
                    }
                }
            }
        }
    }
}