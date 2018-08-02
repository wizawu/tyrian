declare namespace javax {
    namespace management {
        namespace loading {
            class MLetParser {
                public constructor()
                public skipSpace(arg0: java.io.Reader): void
                public scanIdentifier(arg0: java.io.Reader): string
                public scanTag(arg0: java.io.Reader): java.util.Map<java.lang.String, java.lang.String>
                public parse(arg0: java.net.URL): java.util.List<javax.management.loading.MLetContent>
                public parseURL(arg0: java.lang.String | string): java.util.List<javax.management.loading.MLetContent>
                public static class: java.lang.Class<any>
            }
        }
    }
}