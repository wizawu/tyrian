declare namespace org {
    namespace xml {
        namespace sax {
interface XMLFilter extends org.xml.sax.XMLReader {
    setParent(arg0: org.xml.sax.XMLReader): void
    getParent(): org.xml.sax.XMLReader
}

        }
    }
}