declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
interface ClassInfo<T, C> extends com.sun.xml.internal.bind.v2.model.core.MaybeElement<T, C> {
    getBaseClass(): com.sun.xml.internal.bind.v2.model.core.ClassInfo<T, C>
    getClazz(): C
    getName(): string
    getProperties(): java.util.List<com.sun.xml.internal.bind.v2.model.core.PropertyInfo<T, C>>
    hasValueProperty(): boolean
    getProperty(arg0: java.lang.String | string): com.sun.xml.internal.bind.v2.model.core.PropertyInfo<T, C>
    hasProperties(): boolean
    isAbstract(): boolean
    isOrdered(): boolean
    isFinal(): boolean
    hasSubClasses(): boolean
    hasAttributeWildcard(): boolean
    inheritsAttributeWildcard(): boolean
    declaresAttributeWildcard(): boolean
}

                            }
                        }
                    }
                }
            }
        }
    }
}