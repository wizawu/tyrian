declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace packaging {
                            namespace mime {
                                namespace internet {
class MimeMultipart {
    protected ds: javax.activation.DataSource
    protected parsed: boolean
    protected parts: com.sun.xml.internal.messaging.saaj.util.FinalArrayList
    protected contentType: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ContentType
    protected parent: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart
    protected static ignoreMissingEndBoundary: boolean
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: javax.activation.DataSource, arg1: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ContentType)
    public setSubType(arg0: java.lang.String | string): void
    public getCount(): int
    public getBodyPart(arg0: int): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart
    public getBodyPart(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart
    protected updateHeaders(): void
    public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    protected parse(): void
    protected createInternetHeaders(arg0: java.io.InputStream): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.InternetHeaders
    protected createMimeBodyPart(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.InternetHeaders, arg1: byte[], arg2: int): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart
    protected createMimeBodyPart(arg0: java.io.InputStream): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart
    protected setMultipartDataSource(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.MultipartDataSource): void
    public getContentType(): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ContentType
    public removeBodyPart(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart): boolean
    public removeBodyPart(arg0: int): void
    public addBodyPart(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart): void
    public addBodyPart(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart, arg1: int): void
    public static class: java.lang.Class<any>
}

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}