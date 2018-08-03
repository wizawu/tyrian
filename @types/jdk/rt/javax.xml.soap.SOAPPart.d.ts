declare namespace javax {
    namespace xml {
        namespace soap {
            abstract class SOAPPart implements org.w3c.dom.Document , javax.xml.soap.Node {
                public constructor()
                public abstract getEnvelope(): javax.xml.soap.SOAPEnvelope
                public getContentId(): string
                public getContentLocation(): string
                public setContentId(arg0: java.lang.String | string): void
                public setContentLocation(arg0: java.lang.String | string): void
                public abstract removeMimeHeader(arg0: java.lang.String | string): void
                public abstract removeAllMimeHeaders(): void
                public abstract getMimeHeader(arg0: java.lang.String | string): java.lang.String[]
                public abstract setMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public abstract addMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public abstract getAllMimeHeaders(): java.util.Iterator
                public abstract getMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                public abstract getNonMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                public abstract setContent(arg0: javax.xml.transform.Source): void
                public abstract getContent(): javax.xml.transform.Source
                public static class: java.lang.Class<any>
            }
        }
    }
}