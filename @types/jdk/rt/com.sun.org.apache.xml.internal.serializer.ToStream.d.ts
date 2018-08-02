declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
abstract class ToStream extends com.sun.org.apache.xml.internal.serializer.SerializerBase {
    protected m_disableOutputEscapingStates: com.sun.org.apache.xml.internal.serializer.ToStream$BoolStack
    protected m_preserves: com.sun.org.apache.xml.internal.serializer.ToStream$BoolStack
    protected m_ispreserve: boolean
    protected m_isprevtext: boolean
    protected m_maxCharacter: int
    protected m_lineSep: char[]
    protected m_lineSepUse: boolean
    protected m_lineSepLen: int
    protected m_charInfo: com.sun.org.apache.xml.internal.serializer.CharInfo
    protected m_spaceBeforeClose: boolean
    protected m_inDoctype: boolean
    protected m_format: java.util.Properties
    protected m_cdataStartCalled: boolean
    public constructor()
    protected closeCDATA(): void
    public serialize(arg0: org.w3c.dom.Node): void
    protected flushWriter(): void
    public getOutputStream(): java.io.OutputStream
    public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public internalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    protected outputLineSep(): void
    public setOutputFormat(arg0: java.util.Properties): void
    protected init(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.util.Properties, arg2: boolean): void
    public getOutputFormat(): java.util.Properties
    public setWriter(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public setLineSepUse(arg0: boolean): boolean
    public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public setEscaping(arg0: boolean): boolean
    protected indent(arg0: int): void
    protected indent(): void
    public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
    public getWriter(): java.io.Writer
    public externalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    protected escapingNotNeeded(arg0: char): boolean
    protected writeUTF16Surrogate(arg0: char, arg1: char[], arg2: int, arg3: int): int
    protected accumDefaultEntity(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: char, arg2: int, arg3: char[], arg4: int, arg5: boolean, arg6: boolean): int
    public endNonEscaping(): void
    public startNonEscaping(): void
    protected cdata(arg0: char[], arg1: int, arg2: int): void
    protected charactersRaw(arg0: char[], arg1: int, arg2: int): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public characters(arg0: java.lang.String | string): void
    protected accumDefaultEscape(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: char, arg2: int, arg3: char[], arg4: int, arg5: boolean, arg6: boolean): int
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string): void
    public processAttributes(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: int): void
    public writeAttrString(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endElement(arg0: java.lang.String | string): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): boolean
    public comment(arg0: char[], arg1: int, arg2: int): void
    public endCDATA(): void
    public endDTD(): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public skippedEntity(arg0: java.lang.String | string): void
    public startCDATA(): void
    public startEntity(arg0: java.lang.String | string): void
    protected closeStartTag(): void
    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public getIndentAmount(): int
    public setIndentAmount(arg0: int): void
    protected shouldIndent(): boolean
    public setCdataSectionElements(arg0: java.util.Vector): void
    protected ensureAttributesNamespaceIsDeclared(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
    public flushPending(): void
    public setContentHandler(arg0: org.xml.sax.ContentHandler): void
    public addAttributeAlways(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: boolean): boolean
    protected firePseudoAttributes(): void
    public setTransformer(arg0: javax.xml.transform.Transformer): void
    public reset(): boolean
    public setEncoding(arg0: java.lang.String | string): void
    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public setDTDEntityExpansion(arg0: boolean): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}