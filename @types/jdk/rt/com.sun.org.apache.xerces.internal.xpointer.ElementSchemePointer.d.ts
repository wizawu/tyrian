declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xpointer {
class ElementSchemePointer implements com.sun.org.apache.xerces.internal.xpointer.XPointerPart {
    protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
    protected fErrorHandler: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter)
    public parseXPointer(arg0: java.lang.String | string): void
    public getSchemeName(): string
    public getSchemeData(): string
    public setSchemeName(arg0: java.lang.String | string): void
    public setSchemeData(arg0: java.lang.String | string): void
    public resolveXPointer(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations, arg3: int): boolean
    protected matchChildSequence(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: int): boolean
    protected checkMatch(): boolean
    public isFragmentResolved(): boolean
    public isChildFragmentResolved(): boolean
    protected reportError(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
    protected initErrorReporter(): void
    protected init(): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}