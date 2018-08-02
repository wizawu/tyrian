declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
interface ElementInfo<T, C> extends com.sun.xml.internal.bind.v2.model.core.Element<T, C> {
    getProperty(): com.sun.xml.internal.bind.v2.model.core.ElementPropertyInfo<T, C>
    getContentType(): com.sun.xml.internal.bind.v2.model.core.NonElement<T, C>
    getContentInMemoryType(): T
    getType(): T
    getSubstitutionHead(): com.sun.xml.internal.bind.v2.model.core.ElementInfo<T, C>
    getSubstitutionMembers(): java.util.Collection<com.sun.xml.internal.bind.v2.model.core.ElementInfo<T, C>>
    getSubstitutionHead(): com.sun.xml.internal.bind.v2.model.core.Element
}

                            }
                        }
                    }
                }
            }
        }
    }
}