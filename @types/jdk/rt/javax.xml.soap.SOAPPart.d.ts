declare namespace javax {
    namespace xml {
        namespace soap {
            abstract class SOAPPart implements org.w3c.dom.Document , javax.xml.soap.Node {
                public constructor()
                public getEnvelope(): javax.xml.soap.SOAPEnvelope
                public getContentId(): string
                public getContentLocation(): string
                public setContentId(arg0: java.lang.String | string): void
                public setContentLocation(arg0: java.lang.String | string): void
                public removeMimeHeader(arg0: java.lang.String | string): void
                public removeAllMimeHeaders(): void
                public getMimeHeader(arg0: java.lang.String | string): java.lang.String[]
                public setMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public addMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public getAllMimeHeaders(): java.util.Iterator
                public getMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                public getNonMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                public setContent(arg0: javax.xml.transform.Source): void
                public getContent(): javax.xml.transform.Source
                public static class: java.lang.Class<any>
            }
        }
    }
}