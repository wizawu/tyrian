declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace core {
interface MaybeElement<T, C> extends com.sun.xml.internal.bind.v2.model.core.NonElement<T, C> {
    isElement(): boolean
    getElementName(): javax.xml.namespace.QName
    asElement(): com.sun.xml.internal.bind.v2.model.core.Element<T, C>
}

                            }
                        }
                    }
                }
            }
        }
    }
}