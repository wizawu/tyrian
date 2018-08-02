declare namespace javax {
    namespace xml {
        namespace soap {
abstract class SOAPMessage {
    public static CHARACTER_SET_ENCODING: string
    public static WRITE_XML_DECLARATION: string
    public constructor()
    public setContentDescription(arg0: java.lang.String | string): void
    public getContentDescription(): string
    public getSOAPPart(): javax.xml.soap.SOAPPart
    public getSOAPBody(): javax.xml.soap.SOAPBody
    public getSOAPHeader(): javax.xml.soap.SOAPHeader
    public removeAllAttachments(): void
    public countAttachments(): int
    public getAttachments(): java.util.Iterator
    public getAttachments(arg0: javax.xml.soap.MimeHeaders): java.util.Iterator
    public removeAttachments(arg0: javax.xml.soap.MimeHeaders): void
    public getAttachment(arg0: javax.xml.soap.SOAPElement): javax.xml.soap.AttachmentPart
    public addAttachmentPart(arg0: javax.xml.soap.AttachmentPart): void
    public createAttachmentPart(): javax.xml.soap.AttachmentPart
    public createAttachmentPart(arg0: javax.activation.DataHandler): javax.xml.soap.AttachmentPart
    public getMimeHeaders(): javax.xml.soap.MimeHeaders
    public createAttachmentPart(arg0: java.lang.Object, arg1: java.lang.String | string): javax.xml.soap.AttachmentPart
    public saveChanges(): void
    public saveRequired(): boolean
    public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}