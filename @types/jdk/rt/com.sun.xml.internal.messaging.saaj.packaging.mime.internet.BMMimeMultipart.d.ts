declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace packaging {
                            namespace mime {
                                namespace internet {
                                    class BMMimeMultipart extends com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeMultipart {
                                        public constructor()
                                        public constructor(arg0: java.lang.String | string)
                                        public constructor(arg0: javax.activation.DataSource, arg1: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ContentType)
                                        public initStream(): java.io.InputStream
                                        protected parse(): void
                                        public lastBodyPartFound(): boolean
                                        public getNextPart(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: byte[], arg2: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.SharedInputStream): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart
                                        public parse(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: byte[], arg2: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.SharedInputStream): boolean
                                        public readNext(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: byte[], arg2: int, arg3: java.util.BitSet, arg4: long[], arg5: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.SharedInputStream): int
                                        public find(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: byte[], arg2: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.SharedInputStream): boolean
                                        public find(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: byte[], arg2: long[], arg3: com.sun.xml.internal.messaging.saaj.util.ByteOutputStream, arg4: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.SharedInputStream): boolean
                                        public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                        public setInputStream(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                                        public getInputStream(): java.io.InputStream
                                        public setBoundary(arg0: java.lang.String | string): void
                                        public getBoundary(): string
                                        public isEndOfStream(): boolean
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
    }
}