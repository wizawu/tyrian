declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace validation {
                                class ValidationState implements com.sun.org.apache.xerces.internal.impl.dv.ValidationContext {
                                    public constructor()
                                    public setExtraChecking(arg0: boolean): void
                                    public setFacetChecking(arg0: boolean): void
                                    public setNormalizationRequired(arg0: boolean): void
                                    public setUsingNamespaces(arg0: boolean): void
                                    public setEntityState(arg0: com.sun.org.apache.xerces.internal.impl.validation.EntityState): void
                                    public setNamespaceSupport(arg0: com.sun.org.apache.xerces.internal.xni.NamespaceContext): void
                                    public setSymbolTable(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable): void
                                    public checkIDRefID(): string
                                    public reset(): void
                                    public resetIDTables(): void
                                    public needExtraChecking(): boolean
                                    public needFacetChecking(): boolean
                                    public needToNormalize(): boolean
                                    public useNamespaces(): boolean
                                    public isEntityDeclared(arg0: java.lang.String | string): boolean
                                    public isEntityUnparsed(arg0: java.lang.String | string): boolean
                                    public isIdDeclared(arg0: java.lang.String | string): boolean
                                    public addId(arg0: java.lang.String | string): void
                                    public addIdRef(arg0: java.lang.String | string): void
                                    public getSymbol(arg0: java.lang.String | string): string
                                    public getURI(arg0: java.lang.String | string): string
                                    public setLocale(arg0: java.util.Locale): void
                                    public getLocale(): java.util.Locale
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