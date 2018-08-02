declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            abstract class SerializerBase implements com.sun.org.apache.xml.internal.serializer.SerializationHandler , com.sun.org.apache.xml.internal.serializer.SerializerConstants {
                                protected m_needToCallStartDocument: boolean
                                protected m_cdataTagOpen: boolean
                                protected m_attributes: com.sun.org.apache.xml.internal.serializer.AttributesImplSerializer
                                protected m_inEntityRef: boolean
                                protected m_inExternalDTD: boolean
                                protected m_standaloneWasSpecified: boolean
                                protected m_isStandalone: boolean
                                protected m_doIndent: boolean
                                protected m_indentAmount: int
                                protected m_cdataSectionElements: java.util.Vector
                                protected m_prefixMap: com.sun.org.apache.xml.internal.serializer.NamespaceMappings
                                protected m_tracer: com.sun.org.apache.xml.internal.serializer.SerializerTrace
                                protected m_sourceLocator: javax.xml.transform.SourceLocator
                                protected m_writer: java.io.Writer
                                protected m_elemContext: com.sun.org.apache.xml.internal.serializer.ElemContext
                                protected m_charsBuff: char[]
                                protected m_attrBuff: char[]
                                protected m_needToCallSetDocumentInfo: boolean
                                public constructor()
                                protected fireEndElem(arg0: java.lang.String | string): void
                                protected fireCharEvent(arg0: char[], arg1: int, arg2: int): void
                                public comment(arg0: java.lang.String | string): void
                                protected patchName(arg0: java.lang.String | string): string
                                protected static getLocalName(arg0: java.lang.String | string): string
                                public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: boolean): void
                                public addAttributeAlways(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: boolean): boolean
                                public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public addXSLAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public addAttributes(arg0: org.xml.sax.Attributes): void
                                public asContentHandler(): org.xml.sax.ContentHandler
                                public endEntity(arg0: java.lang.String | string): void
                                public close(): void
                                protected initCDATA(): void
                                public getEncoding(): string
                                public setEncoding(arg0: java.lang.String | string): void
                                public setOmitXMLDeclaration(arg0: boolean): void
                                public getOmitXMLDeclaration(): boolean
                                public getDoctypePublic(): string
                                public setDoctypePublic(arg0: java.lang.String | string): void
                                public getDoctypeSystem(): string
                                public setDoctypeSystem(arg0: java.lang.String | string): void
                                public setDoctype(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public setStandalone(arg0: java.lang.String | string): void
                                protected setStandaloneInternal(arg0: java.lang.String | string): void
                                public getStandalone(): string
                                public getIndent(): boolean
                                public getMediaType(): string
                                public getVersion(): string
                                public setVersion(arg0: java.lang.String | string): void
                                public setMediaType(arg0: java.lang.String | string): void
                                public getIndentAmount(): int
                                public setIndentAmount(arg0: int): void
                                public setIndent(arg0: boolean): void
                                public setIsStandalone(arg0: boolean): void
                                public namespaceAfterStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public asDOMSerializer(): com.sun.org.apache.xml.internal.serializer.DOMSerializer
                                protected isCdataSection(): boolean
                                protected static getPrefixPart(arg0: java.lang.String | string): string
                                public getNamespaceMappings(): com.sun.org.apache.xml.internal.serializer.NamespaceMappings
                                public getPrefix(arg0: java.lang.String | string): string
                                public getNamespaceURI(arg0: java.lang.String | string, arg1: boolean): string
                                public getNamespaceURIFromPrefix(arg0: java.lang.String | string): string
                                public entityReference(arg0: java.lang.String | string): void
                                public setTransformer(arg0: javax.xml.transform.Transformer): void
                                public getTransformer(): javax.xml.transform.Transformer
                                public characters(arg0: org.w3c.dom.Node): void
                                public error(arg0: org.xml.sax.SAXParseException): void
                                public fatalError(arg0: org.xml.sax.SAXParseException): void
                                public warning(arg0: org.xml.sax.SAXParseException): void
                                protected fireStartEntity(arg0: java.lang.String | string): void
                                protected fireCDATAEvent(arg0: char[], arg1: int, arg2: int): void
                                protected fireCommentEvent(arg0: char[], arg1: int, arg2: int): void
                                public fireEndEntity(arg0: java.lang.String | string): void
                                protected fireStartDoc(): void
                                protected fireEndDoc(): void
                                protected fireStartElem(arg0: java.lang.String | string): void
                                protected fireEscapingEvent(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                protected fireEntityReference(arg0: java.lang.String | string): void
                                public startDocument(): void
                                protected startDocumentInternal(): void
                                protected setDocumentInfo(): void
                                public setSourceLocator(arg0: javax.xml.transform.SourceLocator): void
                                public setNamespaceMappings(arg0: com.sun.org.apache.xml.internal.serializer.NamespaceMappings): void
                                public reset(): boolean
                                public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
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