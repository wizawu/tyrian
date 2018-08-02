declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
class StartElementEvent extends com.sun.xml.internal.stream.events.DummyEvent implements javax.xml.stream.events.StartElement {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public constructor(arg0: javax.xml.namespace.QName)
    public constructor(arg0: javax.xml.stream.events.StartElement)
    protected init(): void
    public getName(): javax.xml.namespace.QName
    public setName(arg0: javax.xml.namespace.QName): void
    public getAttributes(): java.util.Iterator
    public getNamespaces(): java.util.Iterator
    public getAttributeByName(arg0: javax.xml.namespace.QName): javax.xml.stream.events.Attribute
    public getNamespace(): string
    public getNamespaceURI(arg0: java.lang.String | string): string
    public toString(): string
    public nameAsString(): string
    public getNamespaceContext(): javax.xml.namespace.NamespaceContext
    public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
    protected writeAsEncodedUnicodeEx(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}