declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            abstract class MessageImpl extends javax.xml.soap.SOAPMessage implements javax.xml.soap.SOAPConstants {
                                public static readonly CONTENT_ID: string
                                public static readonly CONTENT_LOCATION: string
                                protected static readonly log: java.util.logging.Logger
                                protected static readonly PLAIN_XML_FLAG: int
                                protected static readonly MIME_MULTIPART_FLAG: int
                                protected static readonly SOAP1_1_FLAG: int
                                protected static readonly SOAP1_2_FLAG: int
                                protected static readonly MIME_MULTIPART_XOP_SOAP1_1_FLAG: int
                                protected static readonly MIME_MULTIPART_XOP_SOAP1_2_FLAG: int
                                protected static readonly XOP_FLAG: int
                                protected static readonly FI_ENCODED_FLAG: int
                                protected headers: javax.xml.soap.MimeHeaders
                                protected contentType: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ContentType
                                protected soapPartImpl: com.sun.xml.internal.messaging.saaj.soap.SOAPPartImpl
                                protected attachments: com.sun.xml.internal.messaging.saaj.util.FinalArrayList
                                protected saved: boolean
                                protected messageBytes: byte[]
                                protected messageByteCount: int
                                protected properties: java.util.HashMap
                                protected multiPart: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeMultipart
                                protected attachmentsInitialized: boolean
                                protected isFastInfoset: boolean
                                protected acceptFastInfoset: boolean
                                protected mmp: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeMultipart
                                protected constructor()
                                protected constructor(arg0: boolean, arg1: boolean)
                                protected constructor(arg0: javax.xml.soap.SOAPMessage)
                                protected static isSoap1_1Content(arg0: int): boolean
                                protected static isSoap1_2Content(arg0: int): boolean
                                protected constructor(arg0: javax.xml.soap.MimeHeaders, arg1: java.io.InputStream | java.io.InputStream$$Lambda)
                                protected constructor(arg0: javax.xml.soap.MimeHeaders, arg1: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ContentType, arg2: int, arg3: java.io.InputStream | java.io.InputStream$$Lambda)
                                public isFastInfoset(): boolean
                                public acceptFastInfoset(): boolean
                                public setIsFastInfoset(arg0: boolean): void
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                protected abstract isCorrectSoapVersion(arg0: int): boolean
                                protected abstract getExpectedContentType(): string
                                protected abstract getExpectedAcceptHeader(): string
                                public getMimeHeaders(): javax.xml.soap.MimeHeaders
                                public getContentType(): string
                                public setContentType(arg0: java.lang.String | string): void
                                public getBaseType(): string
                                public setBaseType(arg0: java.lang.String | string): void
                                public getAction(): string
                                public setAction(arg0: java.lang.String | string): void
                                public getCharset(): string
                                public setCharset(arg0: java.lang.String | string): void
                                public saveRequired(): boolean
                                public getContentDescription(): string
                                public setContentDescription(arg0: java.lang.String | string): void
                                public abstract getSOAPPart(): javax.xml.soap.SOAPPart
                                public removeAllAttachments(): void
                                public countAttachments(): int
                                public addAttachmentPart(arg0: javax.xml.soap.AttachmentPart): void
                                public getAttachments(): java.util.Iterator
                                public getAttachments(arg0: javax.xml.soap.MimeHeaders): java.util.Iterator
                                public removeAttachments(arg0: javax.xml.soap.MimeHeaders): void
                                public createAttachmentPart(): javax.xml.soap.AttachmentPart
                                public getAttachment(arg0: javax.xml.soap.SOAPElement): javax.xml.soap.AttachmentPart
                                public saveChanges(): void
                                public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                public getSOAPBody(): javax.xml.soap.SOAPBody
                                public getSOAPHeader(): javax.xml.soap.SOAPHeader
                                public setLazyAttachments(arg0: boolean): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}