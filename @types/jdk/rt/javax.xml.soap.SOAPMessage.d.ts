declare namespace javax {
    namespace xml {
        namespace soap {
            abstract class SOAPMessage {
                public static readonly CHARACTER_SET_ENCODING: string
                public static readonly WRITE_XML_DECLARATION: string
                public constructor()
                public abstract setContentDescription(arg0: java.lang.String | string): void
                public abstract getContentDescription(): string
                public abstract getSOAPPart(): javax.xml.soap.SOAPPart
                public getSOAPBody(): javax.xml.soap.SOAPBody
                public getSOAPHeader(): javax.xml.soap.SOAPHeader
                public abstract removeAllAttachments(): void
                public abstract countAttachments(): int
                public abstract getAttachments(): java.util.Iterator
                public abstract getAttachments(arg0: javax.xml.soap.MimeHeaders): java.util.Iterator
                public abstract removeAttachments(arg0: javax.xml.soap.MimeHeaders): void
                public abstract getAttachment(arg0: javax.xml.soap.SOAPElement): javax.xml.soap.AttachmentPart
                public abstract addAttachmentPart(arg0: javax.xml.soap.AttachmentPart): void
                public abstract createAttachmentPart(): javax.xml.soap.AttachmentPart
                public createAttachmentPart(arg0: javax.activation.DataHandler): javax.xml.soap.AttachmentPart
                public abstract getMimeHeaders(): javax.xml.soap.MimeHeaders
                public createAttachmentPart(arg0: java.lang.Object, arg1: java.lang.String | string): javax.xml.soap.AttachmentPart
                public abstract saveChanges(): void
                public abstract saveRequired(): boolean
                public abstract writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getProperty(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}