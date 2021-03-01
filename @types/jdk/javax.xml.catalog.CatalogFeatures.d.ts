declare namespace javax {
  namespace xml {
    namespace catalog {

      class CatalogFeatures {

        static readonly CATALOG_FILES: java.lang.String
        static readonly CATALOG_PREFER: java.lang.String
        static readonly CATALOG_DEFER: java.lang.String
        static readonly CATALOG_RESOLVE: java.lang.String
        static readonly PREFER_SYSTEM: java.lang.String
        static readonly PREFER_PUBLIC: java.lang.String
        static readonly DEFER_TRUE: java.lang.String
        static readonly DEFER_FALSE: java.lang.String
        static readonly RESOLVE_STRICT: java.lang.String
        static readonly RESOLVE_CONTINUE: java.lang.String
        static readonly RESOLVE_IGNORE: java.lang.String
        public static defaults(): javax.xml.catalog.CatalogFeatures
        constructor(arg0: javax.xml.catalog.CatalogFeatures$Builder)
        public get(arg0: javax.xml.catalog.CatalogFeatures$Feature): java.lang.String
        public static builder(): javax.xml.catalog.CatalogFeatures$Builder
      }

    }
  }
}
