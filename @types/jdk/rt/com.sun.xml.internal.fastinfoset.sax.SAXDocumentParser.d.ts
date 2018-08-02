declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace sax {
class SAXDocumentParser extends com.sun.xml.internal.fastinfoset.Decoder implements com.sun.xml.internal.org.jvnet.fastinfoset.sax.FastInfosetReader {
    protected _namespacePrefixesFeature: boolean
    protected _entityResolver: org.xml.sax.EntityResolver
    protected _dtdHandler: org.xml.sax.DTDHandler
    protected _contentHandler: org.xml.sax.ContentHandler
    protected _errorHandler: org.xml.sax.ErrorHandler
    protected _lexicalHandler: org.xml.sax.ext.LexicalHandler
    protected _declHandler: org.xml.sax.ext.DeclHandler
    protected _algorithmHandler: com.sun.xml.internal.org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler
    protected _primitiveHandler: com.sun.xml.internal.org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler
    protected builtInAlgorithmState: com.sun.xml.internal.fastinfoset.algorithm.BuiltInEncodingAlgorithmState
    protected _attributes: com.sun.xml.internal.fastinfoset.sax.AttributesHolder
    protected _namespacePrefixes: int[]
    protected _namespacePrefixesIndex: int
    protected _clearAttributes: boolean
    public constructor()
    protected resetOnError(): void
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
    public parse(arg0: org.xml.sax.InputSource): void
    public parse(arg0: java.lang.String | string): void
    public parse(arg0: java.io.InputStream): void
    public setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
    public getLexicalHandler(): org.xml.sax.ext.LexicalHandler
    public setDeclHandler(arg0: org.xml.sax.ext.DeclHandler): void
    public getDeclHandler(): org.xml.sax.ext.DeclHandler
    public setEncodingAlgorithmContentHandler(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler): void
    public getEncodingAlgorithmContentHandler(): com.sun.xml.internal.org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler
    public setPrimitiveTypeContentHandler(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler): void
    public getPrimitiveTypeContentHandler(): com.sun.xml.internal.org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler
    public parse(): void
    protected processDII(): void
    protected processDIIFragment(): void
    protected processDIIOptionalProperties(): void
    protected processEII(arg0: com.sun.xml.internal.fastinfoset.QualifiedName, arg1: boolean): void
    protected processEIIWithNamespaces(): void
    protected processAIIs(): void
    protected processCommentII(): void
    protected processProcessingII(): void
    protected processCIIEncodingAlgorithm(arg0: boolean): void
    protected processCIIBuiltInEncodingAlgorithmAsPrimitive(): void
    protected processAIIEncodingAlgorithm(arg0: com.sun.xml.internal.fastinfoset.QualifiedName, arg1: boolean): void
    protected processBuiltInEncodingAlgorithmAsCharacters(arg0: java.lang.StringBuffer): void
    protected processBuiltInEncodingAlgorithmAsObject(): java.lang.Object
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}