declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        namespace sax {
class SAXBufferProcessor extends com.sun.xml.internal.stream.buffer.AbstractProcessor implements org.xml.sax.XMLReader {
    protected _entityResolver: org.xml.sax.EntityResolver
    protected _dtdHandler: org.xml.sax.DTDHandler
    protected _contentHandler: org.xml.sax.ContentHandler
    protected _errorHandler: org.xml.sax.ErrorHandler
    protected _lexicalHandler: org.xml.sax.ext.LexicalHandler
    protected _namespacePrefixesFeature: boolean
    protected _attributes: com.sun.xml.internal.stream.buffer.AttributesHolder
    protected _namespacePrefixes: java.lang.String[]
    protected _namespacePrefixesIndex: int
    protected _namespaceAttributesStartingStack: int[]
    protected _namespaceAttributesStack: int[]
    protected _namespaceAttributesStackIndex: int
    public constructor()
    public constructor(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer)
    public constructor(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer, arg1: boolean)
    public getFeature(arg0: java.lang.String | string): boolean
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
    public getEntityResolver(): org.xml.sax.EntityResolver
    public setDTDHandler(arg0: org.xml.sax.DTDHandler): void
    public getDTDHandler(): org.xml.sax.DTDHandler
    public setContentHandler(arg0: org.xml.sax.ContentHandler): void
    public getContentHandler(): org.xml.sax.ContentHandler
    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
    public getErrorHandler(): org.xml.sax.ErrorHandler
    public setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
    public getLexicalHandler(): org.xml.sax.ext.LexicalHandler
    public parse(arg0: org.xml.sax.InputSource): void
    public parse(arg0: java.lang.String | string): void
    public process(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer): void
    public process(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer, arg1: boolean): void
    public setXMLStreamBuffer(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer): void
    public setXMLStreamBuffer(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer, arg1: boolean): void
    public process(): void
    protected processElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}