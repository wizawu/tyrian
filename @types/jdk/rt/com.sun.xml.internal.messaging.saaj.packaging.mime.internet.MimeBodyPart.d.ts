declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace packaging {
                            namespace mime {
                                namespace internet {
                                    class MimeBodyPart {
                                        public static ATTACHMENT: string
                                        public static INLINE: string
                                        public constructor()
                                        public constructor(arg0: java.io.InputStream)
                                        public constructor(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.InternetHeaders, arg1: byte[], arg2: int)
                                        public constructor(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.InternetHeaders, arg1: byte[], arg2: int, arg3: int)
                                        public constructor(arg0: com.sun.xml.internal.org.jvnet.mimepull.MIMEPart)
                                        public getParent(): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeMultipart
                                        public setParent(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeMultipart): void
                                        public getSize(): int
                                        public getLineCount(): int
                                        public getContentType(): string
                                        public isMimeType(arg0: java.lang.String | string): boolean
                                        public getDisposition(): string
                                        public setDisposition(arg0: java.lang.String | string): void
                                        public getEncoding(): string
                                        public getContentID(): string
                                        public setContentID(arg0: java.lang.String | string): void
                                        public getContentMD5(): string
                                        public setContentMD5(arg0: java.lang.String | string): void
                                        public getContentLanguage(): java.lang.String[]
                                        public setContentLanguage(arg0: java.lang.String[]): void
                                        public getDescription(): string
                                        public setDescription(arg0: java.lang.String | string): void
                                        public setDescription(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public getFileName(): string
                                        public setFileName(arg0: java.lang.String | string): void
                                        public getInputStream(): java.io.InputStream
                                        public getRawInputStream(): java.io.InputStream
                                        public getDataHandler(): javax.activation.DataHandler
                                        public getContent(): java.lang.Object
                                        public setDataHandler(arg0: javax.activation.DataHandler): void
                                        public setContent(arg0: java.lang.Object, arg1: java.lang.String | string): void
                                        public setText(arg0: java.lang.String | string): void
                                        public setText(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public setContent(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeMultipart): void
                                        public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                        public getHeader(arg0: java.lang.String | string): java.lang.String[]
                                        public getHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                        public setHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public addHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public removeHeader(arg0: java.lang.String | string): void
                                        public getAllHeaders(): com.sun.xml.internal.messaging.saaj.util.FinalArrayList
                                        public addHeaderLine(arg0: java.lang.String | string): void
                                        protected updateHeaders(): void
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