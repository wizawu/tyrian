declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
class DOMParserImpl$AbortHandler implements com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler , com.sun.org.apache.xerces.internal.xni.XMLDTDHandler , com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler {
    public startDocument(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public xmlDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public doctypeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endDocument(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public setDocumentSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource): void
    public getDocumentSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
    public startDTD(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startAttlist(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String | string, arg5: com.sun.org.apache.xerces.internal.xni.XMLString, arg6: com.sun.org.apache.xerces.internal.xni.XMLString, arg7: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endAttlist(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public internalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.XMLString, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public externalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public notationDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startConditional(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public ignoredCharacters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endConditional(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public setDTDSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource): void
    public getDTDSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource
    public startContentModel(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public any(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public empty(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public pcdata(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public element(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public separator(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public occurrence(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endGroup(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endContentModel(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public setDTDContentModelSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource): void
    public getDTDContentModelSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}