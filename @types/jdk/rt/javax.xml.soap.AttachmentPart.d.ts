declare namespace javax {
    namespace xml {
        namespace soap {
            abstract class AttachmentPart {
                public constructor()
                public abstract getSize(): int
                public abstract clearContent(): void
                public abstract getContent(): java.lang.Object
                public abstract getRawContent(): java.io.InputStream
                public abstract getRawContentBytes(): byte[]
                public abstract getBase64Content(): java.io.InputStream
                public abstract setContent(arg0: java.lang.Object, arg1: java.lang.String | string): void
                public abstract setRawContent(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): void
                public abstract setRawContentBytes(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String | string): void
                public abstract setBase64Content(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): void
                public abstract getDataHandler(): javax.activation.DataHandler
                public abstract setDataHandler(arg0: javax.activation.DataHandler): void
                public getContentId(): string
                public getContentLocation(): string
                public getContentType(): string
                public setContentId(arg0: java.lang.String | string): void
                public setContentLocation(arg0: java.lang.String | string): void
                public setContentType(arg0: java.lang.String | string): void
                public abstract removeMimeHeader(arg0: java.lang.String | string): void
                public abstract removeAllMimeHeaders(): void
                public abstract getMimeHeader(arg0: java.lang.String | string): java.lang.String[]
                public abstract setMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public abstract addMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public abstract getAllMimeHeaders(): java.util.Iterator
                public abstract getMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                public abstract getNonMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                public static class: java.lang.Class<any>
            }
        }
    }
}