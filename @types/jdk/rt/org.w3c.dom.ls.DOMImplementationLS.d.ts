declare namespace org {
    namespace w3c {
        namespace dom {
            namespace ls {
                interface DOMImplementationLS {
                    MODE_SYNCHRONOUS: short
                    MODE_ASYNCHRONOUS: short
                    createLSParser(arg0: short, arg1: java.lang.String | string): org.w3c.dom.ls.LSParser
                    createLSSerializer(): org.w3c.dom.ls.LSSerializer
                    createLSInput(): org.w3c.dom.ls.LSInput
                    createLSOutput(): org.w3c.dom.ls.LSOutput
                }
            }
        }
    }
}