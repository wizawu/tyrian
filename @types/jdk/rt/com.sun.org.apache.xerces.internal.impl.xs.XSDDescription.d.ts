declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class XSDDescription extends com.sun.org.apache.xerces.internal.util.XMLResourceIdentifierImpl implements com.sun.org.apache.xerces.internal.xni.grammars.XMLSchemaDescription {
                                    public static readonly CONTEXT_INITIALIZE: short
                                    public static readonly CONTEXT_INCLUDE: short
                                    public static readonly CONTEXT_REDEFINE: short
                                    public static readonly CONTEXT_IMPORT: short
                                    public static readonly CONTEXT_PREPARSE: short
                                    public static readonly CONTEXT_INSTANCE: short
                                    public static readonly CONTEXT_ELEMENT: short
                                    public static readonly CONTEXT_ATTRIBUTE: short
                                    public static readonly CONTEXT_XSITYPE: short
                                    protected fContextType: short
                                    protected fLocationHints: java.lang.String[]
                                    protected fTriggeringComponent: com.sun.org.apache.xerces.internal.xni.QName
                                    protected fEnclosedElementName: com.sun.org.apache.xerces.internal.xni.QName
                                    protected fAttributes: com.sun.org.apache.xerces.internal.xni.XMLAttributes
                                    public constructor()
                                    public getGrammarType(): string
                                    public getContextType(): short
                                    public getTargetNamespace(): string
                                    public getLocationHints(): java.lang.String[]
                                    public getTriggeringComponent(): com.sun.org.apache.xerces.internal.xni.QName
                                    public getEnclosingElementName(): com.sun.org.apache.xerces.internal.xni.QName
                                    public getAttributes(): com.sun.org.apache.xerces.internal.xni.XMLAttributes
                                    public fromInstance(): boolean
                                    public isExternal(): boolean
                                    public equals(arg0: java.lang.Object): boolean
                                    public hashCode(): int
                                    public setContextType(arg0: short): void
                                    public setTargetNamespace(arg0: java.lang.String | string): void
                                    public setLocationHints(arg0: java.lang.String[]): void
                                    public setTriggeringComponent(arg0: com.sun.org.apache.xerces.internal.xni.QName): void
                                    public setEnclosingElementName(arg0: com.sun.org.apache.xerces.internal.xni.QName): void
                                    public setAttributes(arg0: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                                    public reset(): void
                                    public makeClone(): com.sun.org.apache.xerces.internal.impl.xs.XSDDescription
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