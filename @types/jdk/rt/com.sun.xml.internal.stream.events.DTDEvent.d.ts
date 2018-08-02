declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
class DTDEvent extends com.sun.xml.internal.stream.events.DummyEvent implements javax.xml.stream.events.DTD {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public setDocumentTypeDeclaration(arg0: java.lang.String | string): void
    public getDocumentTypeDeclaration(): string
    public setEntities(arg0: java.util.List): void
    public getEntities(): java.util.List
    public setNotations(arg0: java.util.List): void
    public getNotations(): java.util.List
    public getProcessedDTD(): java.lang.Object
    protected init(): void
    public toString(): string
    protected writeAsEncodedUnicodeEx(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}