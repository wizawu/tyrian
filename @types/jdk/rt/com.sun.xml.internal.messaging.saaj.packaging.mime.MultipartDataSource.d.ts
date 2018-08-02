declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace packaging {
                            namespace mime {
                                interface MultipartDataSource extends javax.activation.DataSource {
                                    getCount(): int
                                    getBodyPart(arg0: int): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeBodyPart
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}