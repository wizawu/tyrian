declare namespace org {
    namespace xml {
        namespace sax {
            namespace ext {
                interface Locator2 extends org.xml.sax.Locator {
                    getXMLVersion(): string
                    getEncoding(): string
                }
            }
        }
    }
}