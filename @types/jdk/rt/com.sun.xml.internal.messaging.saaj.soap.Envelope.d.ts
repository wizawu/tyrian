declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            interface Envelope extends javax.xml.soap.SOAPEnvelope {
                                getContent(): javax.xml.transform.Source
                                output(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                output(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: boolean): void
                            }
                        }
                    }
                }
            }
        }
    }
}