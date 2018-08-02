declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
class CatalogManager {
    public debug: com.sun.org.apache.xml.internal.resolver.helpers.Debug
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public setBootstrapResolver(arg0: com.sun.org.apache.xml.internal.resolver.helpers.BootstrapResolver | com.sun.org.apache.xml.internal.resolver.helpers.BootstrapResolver$$Lambda): void
    public getBootstrapResolver(): com.sun.org.apache.xml.internal.resolver.helpers.BootstrapResolver
    public static getStaticManager(): com.sun.org.apache.xml.internal.resolver.CatalogManager
    public getIgnoreMissingProperties(): boolean
    public setIgnoreMissingProperties(arg0: boolean): void
    public ignoreMissingProperties(arg0: boolean): void
    public getVerbosity(): int
    public setVerbosity(arg0: int): void
    public verbosity(): int
    public getRelativeCatalogs(): boolean
    public setRelativeCatalogs(arg0: boolean): void
    public relativeCatalogs(): boolean
    public getCatalogFiles(): java.util.Vector
    public setCatalogFiles(arg0: java.lang.String | string): void
    public catalogFiles(): java.util.Vector
    public getPreferPublic(): boolean
    public setPreferPublic(arg0: boolean): void
    public preferPublic(): boolean
    public getUseStaticCatalog(): boolean
    public setUseStaticCatalog(arg0: boolean): void
    public staticCatalog(): boolean
    public getPrivateCatalog(): com.sun.org.apache.xml.internal.resolver.Catalog
    public getCatalog(): com.sun.org.apache.xml.internal.resolver.Catalog
    public queryAllowOasisXMLCatalogPI(): boolean
    public getAllowOasisXMLCatalogPI(): boolean
    public overrideDefaultParser(): boolean
    public setAllowOasisXMLCatalogPI(arg0: boolean): void
    public allowOasisXMLCatalogPI(): boolean
    public queryCatalogClassName(): string
    public getCatalogClassName(): string
    public setCatalogClassName(arg0: java.lang.String | string): void
    public catalogClassName(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}