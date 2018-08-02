declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
class XMLDocumentFragmentScannerImpl$ElementStack {
    protected fElements: com.sun.org.apache.xerces.internal.xni.QName[]
    protected fInt: int[]
    protected fDepth: int
    protected fCount: int
    protected fPosition: int
    protected fMark: int
    protected fLastDepth: int
    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl)
    public pushElement(arg0: com.sun.org.apache.xerces.internal.xni.QName): com.sun.org.apache.xerces.internal.xni.QName
    public getNext(): com.sun.org.apache.xerces.internal.xni.QName
    public push(): void
    public matchElement(arg0: com.sun.org.apache.xerces.internal.xni.QName): boolean
    public nextElement(): com.sun.org.apache.xerces.internal.xni.QName
    public popElement(): com.sun.org.apache.xerces.internal.xni.QName
    public reposition(): void
    public clear(): void
    public getLastPoppedElement(): com.sun.org.apache.xerces.internal.xni.QName
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}