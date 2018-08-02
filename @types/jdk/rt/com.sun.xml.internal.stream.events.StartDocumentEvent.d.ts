declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
class StartDocumentEvent extends com.sun.xml.internal.stream.events.DummyEvent implements javax.xml.stream.events.StartDocument {
    protected fSystemId: string
    protected fEncodingScheam: string
    protected fStandalone: boolean
    protected fVersion: string
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: javax.xml.stream.Location)
    protected init(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: javax.xml.stream.Location): void
    public getSystemId(): string
    public getCharacterEncodingScheme(): string
    public isStandalone(): boolean
    public getVersion(): string
    public setStandalone(arg0: boolean): void
    public setStandalone(arg0: java.lang.String | string): void
    public encodingSet(): boolean
    public standaloneSet(): boolean
    public setEncoding(arg0: java.lang.String | string): void
    public setVersion(arg0: java.lang.String | string): void
    public toString(): string
    public isStartDocument(): boolean
    protected writeAsEncodedUnicodeEx(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}