declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
                                class XMLDTDDescription extends com.sun.org.apache.xerces.internal.util.XMLResourceIdentifierImpl implements com.sun.org.apache.xerces.internal.xni.grammars.XMLDTDDescription {
                                    protected fRootName: string
                                    protected fPossibleRoots: java.util.ArrayList
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg1: java.lang.String | string)
                                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string)
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource)
                                    public getGrammarType(): string
                                    public getRootName(): string
                                    public setRootName(arg0: java.lang.String | string): void
                                    public setPossibleRoots(arg0: java.util.ArrayList): void
                                    public setPossibleRoots(arg0: java.util.Vector): void
                                    public equals(arg0: java.lang.Object): boolean
                                    public hashCode(): int
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