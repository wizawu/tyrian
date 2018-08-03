declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace dtm {
                            namespace ref {
                                namespace sax2dtm {
                                    class SAX2DTM2 extends com.sun.org.apache.xml.internal.dtm.ref.sax2dtm.SAX2DTM {
                                        protected m_extendedTypes: com.sun.org.apache.xml.internal.dtm.ref.ExtendedType[]
                                        protected m_values: java.util.Vector
                                        protected m_SHIFT: int
                                        protected m_MASK: int
                                        protected m_blocksize: int
                                        protected static readonly TEXT_LENGTH_BITS: int
                                        protected static readonly TEXT_OFFSET_BITS: int
                                        protected static readonly TEXT_LENGTH_MAX: int
                                        protected static readonly TEXT_OFFSET_MAX: int
                                        protected m_buildIdIndex: boolean
                                        public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager, arg1: javax.xml.transform.Source, arg2: int, arg3: com.sun.org.apache.xml.internal.dtm.DTMWSFilter | com.sun.org.apache.xml.internal.dtm.DTMWSFilter$$Lambda, arg4: com.sun.org.apache.xml.internal.utils.XMLStringFactory, arg5: boolean)
                                        public constructor(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager, arg1: javax.xml.transform.Source, arg2: int, arg3: com.sun.org.apache.xml.internal.dtm.DTMWSFilter | com.sun.org.apache.xml.internal.dtm.DTMWSFilter$$Lambda, arg4: com.sun.org.apache.xml.internal.utils.XMLStringFactory, arg5: boolean, arg6: int, arg7: boolean, arg8: boolean, arg9: boolean)
                                        public _exptype(arg0: int): int
                                        public _exptype2(arg0: int): int
                                        public _nextsib2(arg0: int): int
                                        public _firstch2(arg0: int): int
                                        public _parent2(arg0: int): int
                                        public _type2(arg0: int): int
                                        public getExpandedTypeID2(arg0: int): int
                                        public _exptype2Type(arg0: int): int
                                        public getIdForNamespace(arg0: java.lang.String | string): int
                                        public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                        public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                        public comment(arg0: char[], arg1: int, arg2: int): void
                                        public startDocument(): void
                                        public endDocument(): void
                                        protected addNode(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: boolean): int
                                        protected charactersFlush(): void
                                        public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public getFirstAttribute(arg0: int): int
                                        protected getFirstAttributeIdentity(arg0: int): int
                                        protected getNextAttributeIdentity(arg0: int): int
                                        protected getTypedAttribute(arg0: int, arg1: int): int
                                        public getLocalName(arg0: int): string
                                        public getNodeNameX(arg0: int): string
                                        public getNodeName(arg0: int): string
                                        public getStringValue(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
                                        public getStringValueX(arg0: int): string
                                        public getStringValue(): string
                                        public dispatchCharactersEvents(arg0: int, arg1: org.xml.sax.ContentHandler, arg2: boolean): void
                                        public getNodeValue(arg0: int): string
                                        protected copyTextNode(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                        protected copyElement(arg0: int, arg1: int, arg2: com.sun.org.apache.xml.internal.serializer.SerializationHandler): string
                                        protected copyNS(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler, arg2: boolean): void
                                        protected getNextNamespaceNode2(arg0: int): int
                                        protected copyAttributes(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                        protected copyAttribute(arg0: int, arg1: int, arg2: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
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
}