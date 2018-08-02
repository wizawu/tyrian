declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
class Catalog {
    public static BASE: int
    public static CATALOG: int
    public static DOCUMENT: int
    public static OVERRIDE: int
    public static SGMLDECL: int
    public static DELEGATE_PUBLIC: int
    public static DELEGATE_SYSTEM: int
    public static DELEGATE_URI: int
    public static DOCTYPE: int
    public static DTDDECL: int
    public static ENTITY: int
    public static LINKTYPE: int
    public static NOTATION: int
    public static PUBLIC: int
    public static SYSTEM: int
    public static URI: int
    public static REWRITE_SYSTEM: int
    public static REWRITE_URI: int
    public static SYSTEM_SUFFIX: int
    public static URI_SUFFIX: int
    protected base: java.net.URL
    protected catalogCwd: java.net.URL
    protected catalogEntries: java.util.Vector
    protected default_override: boolean
    protected catalogManager: com.sun.org.apache.xml.internal.resolver.CatalogManager
    protected catalogFiles: java.util.Vector
    protected localCatalogFiles: java.util.Vector
    protected catalogs: java.util.Vector
    protected localDelegate: java.util.Vector
    protected readerMap: java.util.Map<java.lang.String, java.lang.Integer>
    protected readerArr: java.util.Vector
    public constructor()
    public constructor(arg0: com.sun.org.apache.xml.internal.resolver.CatalogManager)
    public getCatalogManager(): com.sun.org.apache.xml.internal.resolver.CatalogManager
    public setCatalogManager(arg0: com.sun.org.apache.xml.internal.resolver.CatalogManager): void
    public setupReaders(): void
    public addReader(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.resolver.readers.CatalogReader): void
    protected copyReaders(arg0: com.sun.org.apache.xml.internal.resolver.Catalog): void
    protected newCatalog(): com.sun.org.apache.xml.internal.resolver.Catalog
    public getCurrentBase(): string
    public getDefaultOverride(): string
    public loadSystemCatalogs(): void
    public parseCatalog(arg0: java.lang.String | string): void
    public parseCatalog(arg0: java.lang.String | string, arg1: java.io.InputStream): void
    public parseCatalog(arg0: java.net.URL): void
    protected parsePendingCatalogs(): void
    protected parseCatalogFile(arg0: java.lang.String | string): void
    public addEntry(arg0: com.sun.org.apache.xml.internal.resolver.CatalogEntry): void
    public unknownEntry(arg0: java.util.Vector): void
    public parseAllCatalogs(): void
    public resolveDoctype(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
    public resolveDocument(): string
    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
    public resolveNotation(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
    public resolvePublic(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    protected resolveLocalPublic(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): string
    public resolveSystem(arg0: java.lang.String | string): string
    protected resolveLocalSystem(arg0: java.lang.String | string): string
    public resolveURI(arg0: java.lang.String | string): string
    protected resolveLocalURI(arg0: java.lang.String | string): string
    protected resolveSubordinateCatalogs(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): string
    protected fixSlashes(arg0: java.lang.String | string): string
    protected makeAbsolute(arg0: java.lang.String | string): string
    protected normalizeURI(arg0: java.lang.String | string): string
    protected encodedByte(arg0: int): string
    protected addDelegate(arg0: com.sun.org.apache.xml.internal.resolver.CatalogEntry): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}