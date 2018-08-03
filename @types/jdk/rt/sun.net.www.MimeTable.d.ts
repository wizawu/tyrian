declare namespace sun {
    namespace net {
        namespace www {
            class MimeTable implements java.net.FileNameMap {
                protected static mailcapLocations: java.lang.String[]
                public static getDefaultTable(): sun.net.www.MimeTable
                public static loadTable(): java.net.FileNameMap
                public getSize(): int
                public getContentTypeFor(arg0: java.lang.String | string): string
                public add(arg0: sun.net.www.MimeEntry): void
                public remove(arg0: java.lang.String | string): sun.net.www.MimeEntry
                public remove(arg0: sun.net.www.MimeEntry): sun.net.www.MimeEntry
                public find(arg0: java.lang.String | string): sun.net.www.MimeEntry
                public findByFileName(arg0: java.lang.String | string): sun.net.www.MimeEntry
                public findByExt(arg0: java.lang.String | string): sun.net.www.MimeEntry
                public findByDescription(arg0: java.lang.String | string): sun.net.www.MimeEntry
                public elements(): java.util.Enumeration<sun.net.www.MimeEntry>
                public load(): void
                public save(arg0: java.lang.String | string): boolean
                public getAsProperties(): java.util.Properties
                protected saveAsProperties(arg0: java.io.File): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}