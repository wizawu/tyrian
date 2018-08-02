declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace events {
                            class StartElementEvent extends com.sun.xml.internal.fastinfoset.stax.events.EventBase implements javax.xml.stream.events.StartElement {
                                public reset(): void
                                public constructor()
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                public constructor(arg0: javax.xml.namespace.QName)
                                public constructor(arg0: javax.xml.stream.events.StartElement)
                                protected init(): void
                                public getName(): javax.xml.namespace.QName
                                public getAttributes(): java.util.Iterator
                                public getNamespaces(): java.util.Iterator
                                public getAttributeByName(arg0: javax.xml.namespace.QName): javax.xml.stream.events.Attribute
                                public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                                public setName(arg0: javax.xml.namespace.QName): void
                                public getNamespace(): string
                                public getNamespaceURI(arg0: java.lang.String | string): string
                                public toString(): string
                                public nameAsString(): string
                                public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
                                public addAttribute(arg0: javax.xml.stream.events.Attribute): void
                                public addAttributes(arg0: java.util.Iterator): void
                                public addNamespace(arg0: javax.xml.stream.events.Namespace): void
                                public addNamespaces(arg0: java.util.Iterator): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}