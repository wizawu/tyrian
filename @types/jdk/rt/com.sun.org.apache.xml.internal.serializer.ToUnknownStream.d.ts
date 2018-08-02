declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
class ToUnknownStream extends com.sun.org.apache.xml.internal.serializer.SerializerBase {
    public constructor()
    public asContentHandler(): org.xml.sax.ContentHandler
    public close(): void
    public getOutputFormat(): java.util.Properties
    public getOutputStream(): java.io.OutputStream
    public getWriter(): java.io.Writer
    public reset(): boolean
    public serialize(arg0: org.w3c.dom.Node): void
    public setEscaping(arg0: boolean): boolean
    public setOutputFormat(arg0: java.util.Properties): void
    public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public setWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: boolean): void
    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public addUniqueAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): void
    public characters(arg0: java.lang.String | string): void
    public endElement(arg0: java.lang.String | string): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public namespaceAfterStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): boolean
    public setVersion(arg0: java.lang.String | string): void
    public startDocument(): void
    public startElement(arg0: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public comment(arg0: java.lang.String | string): void
    public getDoctypePublic(): string
    public getDoctypeSystem(): string
    public getEncoding(): string
    public getIndent(): boolean
    public getIndentAmount(): int
    public getMediaType(): string
    public getOmitXMLDeclaration(): boolean
    public getStandalone(): string
    public getVersion(): string
    public setDoctype(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public setDoctypePublic(arg0: java.lang.String | string): void
    public setDoctypeSystem(arg0: java.lang.String | string): void
    public setEncoding(arg0: java.lang.String | string): void
    public setIndent(arg0: boolean): void
    public setIndentAmount(arg0: int): void
    public setMediaType(arg0: java.lang.String | string): void
    public setOmitXMLDeclaration(arg0: boolean): void
    public setStandalone(arg0: java.lang.String | string): void
    public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
    public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public externalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public internalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public endDocument(): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public skippedEntity(arg0: java.lang.String | string): void
    public comment(arg0: char[], arg1: int, arg2: int): void
    public endCDATA(): void
    public endDTD(): void
    public endEntity(arg0: java.lang.String | string): void
    public startCDATA(): void
    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public startEntity(arg0: java.lang.String | string): void
    public asDOMSerializer(): com.sun.org.apache.xml.internal.serializer.DOMSerializer
    public setCdataSectionElements(arg0: java.util.Vector): void
    public addAttributes(arg0: org.xml.sax.Attributes): void
    public getNamespaceMappings(): com.sun.org.apache.xml.internal.serializer.NamespaceMappings
    public flushPending(): void
    public getPrefix(arg0: java.lang.String | string): string
    public entityReference(arg0: java.lang.String | string): void
    public getNamespaceURI(arg0: java.lang.String | string, arg1: boolean): string
    public getNamespaceURIFromPrefix(arg0: java.lang.String | string): string
    public setTransformer(arg0: javax.xml.transform.Transformer): void
    public getTransformer(): javax.xml.transform.Transformer
    public setContentHandler(arg0: org.xml.sax.ContentHandler): void
    public setSourceLocator(arg0: javax.xml.transform.SourceLocator): void
    protected firePseudoElement(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}