declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
                                abstract class SAX2StAXBaseWriter extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler {
                                    protected isCDATA: boolean
                                    protected CDATABuffer: java.lang.StringBuffer
                                    protected namespaces: java.util.Vector
                                    protected docLocator: org.xml.sax.Locator
                                    protected reporter: javax.xml.stream.XMLReporter
                                    public constructor()
                                    public constructor(arg0: javax.xml.stream.XMLReporter | javax.xml.stream.XMLReporter$$Lambda)
                                    public setXMLReporter(arg0: javax.xml.stream.XMLReporter | javax.xml.stream.XMLReporter$$Lambda): void
                                    public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                    public getCurrentLocation(): javax.xml.stream.Location
                                    public error(arg0: org.xml.sax.SAXParseException): void
                                    public fatalError(arg0: org.xml.sax.SAXParseException): void
                                    public warning(arg0: org.xml.sax.SAXParseException): void
                                    public startDocument(): void
                                    public endDocument(): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public endPrefixMapping(arg0: java.lang.String | string): void
                                    public startCDATA(): void
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public endCDATA(): void
                                    public comment(arg0: char[], arg1: int, arg2: int): void
                                    public endDTD(): void
                                    public endEntity(arg0: java.lang.String | string): void
                                    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public startEntity(arg0: java.lang.String | string): void
                                    protected reportException(arg0: java.lang.String | string, arg1: org.xml.sax.SAXException): void
                                    public static parseQName(arg0: java.lang.String | string, arg1: java.lang.String[]): void
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