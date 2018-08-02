declare namespace javax {
    namespace xml {
        namespace soap {
abstract class AttachmentPart {
    public constructor()
    public getSize(): int
    public clearContent(): void
    public getContent(): java.lang.Object
    public getRawContent(): java.io.InputStream
    public getRawContentBytes(): byte[]
    public getBase64Content(): java.io.InputStream
    public setContent(arg0: java.lang.Object, arg1: java.lang.String | string): void
    public setRawContent(arg0: java.io.InputStream, arg1: java.lang.String | string): void
    public setRawContentBytes(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String | string): void
    public setBase64Content(arg0: java.io.InputStream, arg1: java.lang.String | string): void
    public getDataHandler(): javax.activation.DataHandler
    public setDataHandler(arg0: javax.activation.DataHandler): void
    public getContentId(): string
    public getContentLocation(): string
    public getContentType(): string
    public setContentId(arg0: java.lang.String | string): void
    public setContentLocation(arg0: java.lang.String | string): void
    public setContentType(arg0: java.lang.String | string): void
    public removeMimeHeader(arg0: java.lang.String | string): void
    public removeAllMimeHeaders(): void
    public getMimeHeader(arg0: java.lang.String | string): java.lang.String[]
    public setMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public addMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public getAllMimeHeaders(): java.util.Iterator
    public getMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
    public getNonMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
    public static class: java.lang.Class<any>
}

        }
    }
}