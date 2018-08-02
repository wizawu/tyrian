declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace events {
abstract class EventBase implements javax.xml.stream.events.XMLEvent {
    protected _eventType: int
    protected _location: javax.xml.stream.Location
    public constructor()
    public constructor(arg0: int)
    public getEventType(): int
    protected setEventType(arg0: int): void
    public isStartElement(): boolean
    public isEndElement(): boolean
    public isEntityReference(): boolean
    public isProcessingInstruction(): boolean
    public isStartDocument(): boolean
    public isEndDocument(): boolean
    public getLocation(): javax.xml.stream.Location
    public setLocation(arg0: javax.xml.stream.Location): void
    public getSystemId(): string
    public asCharacters(): javax.xml.stream.events.Characters
    public asEndElement(): javax.xml.stream.events.EndElement
    public asStartElement(): javax.xml.stream.events.StartElement
    public getSchemaType(): javax.xml.namespace.QName
    public isAttribute(): boolean
    public isCharacters(): boolean
    public isNamespace(): boolean
    public writeAsEncodedUnicode(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}