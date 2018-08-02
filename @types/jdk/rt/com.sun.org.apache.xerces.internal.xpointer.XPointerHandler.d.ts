declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xpointer {
class XPointerHandler extends com.sun.org.apache.xerces.internal.xinclude.XIncludeHandler implements com.sun.org.apache.xerces.internal.xpointer.XPointerProcessor {
    protected fXPointerParts: java.util.Vector
    protected fXPointerPart: com.sun.org.apache.xerces.internal.xpointer.XPointerPart
    protected fFoundMatchingPtrPart: boolean
    protected fXPointerErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
    protected fErrorHandler: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
    protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
    protected fIsXPointerResolved: boolean
    protected fFixupBase: boolean
    protected fFixupLang: boolean
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler, arg2: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter)
    public parseXPointer(arg0: java.lang.String | string): void
    public resolveXPointer(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations, arg3: int): boolean
    public isFragmentResolved(): boolean
    public isChildFragmentResolved(): boolean
    public isXPointerResolved(): boolean
    public getXPointerPart(): com.sun.org.apache.xerces.internal.xpointer.XPointerPart
    protected initErrorReporter(): void
    protected init(): void
    public getPointerParts(): java.util.Vector
    public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}