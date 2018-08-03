declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            class AttachmentPartImpl extends javax.xml.soap.AttachmentPart {
                                protected static readonly log: java.util.logging.Logger
                                public constructor()
                                public constructor(arg0: com.sun.xml.internal.org.jvnet.mimepull.MIMEPart)
                                public getSize(): int
                                public clearContent(): void
                                public getContent(): java.lang.Object
                                public setContent(arg0: java.lang.Object, arg1: java.lang.String | string): void
                                public getDataHandler(): javax.activation.DataHandler
                                public setDataHandler(arg0: javax.activation.DataHandler): void
                                public removeAllMimeHeaders(): void
                                public removeMimeHeader(arg0: java.lang.String | string): void
                                public getMimeHeader(arg0: java.lang.String | string): java.lang.String[]
                                public setMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public addMimeHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public getAllMimeHeaders(): java.util.Iterator
                                public getMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                                public getNonMatchingMimeHeaders(arg0: java.lang.String[]): java.util.Iterator
                                public static copyMimeHeaders(arg0: javax.xml.soap.MimeHeaders, arg1: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart): void
                                public static copyMimeHeaders(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart, arg1: com.sun.xml.internal.messaging.saaj.soap.AttachmentPartImpl): void
                                public setBase64Content(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): void
                                public getBase64Content(): java.io.InputStream
                                public setRawContent(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string): void
                                public setRawContentBytes(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String | string): void
                                public getRawContent(): java.io.InputStream
                                public getRawContentBytes(): byte[]
                                public equals(arg0: java.lang.Object): boolean
                                public hashCode(): int
                                public getMimeHeaders(): javax.xml.soap.MimeHeaders
                                public static initializeJavaActivationHandlers(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}