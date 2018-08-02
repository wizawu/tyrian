declare namespace sun {
    namespace tools {
        namespace jar {
            class Manifest {
                public constructor()
                public constructor(arg0: byte[])
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: java.io.InputStream, arg1: boolean)
                public constructor(arg0: java.lang.String[])
                public addEntry(arg0: sun.net.www.MessageHeader): void
                public getEntry(arg0: java.lang.String | string): sun.net.www.MessageHeader
                public entryAt(arg0: int): sun.net.www.MessageHeader
                public entries(): java.util.Enumeration<sun.net.www.MessageHeader>
                public addFiles(arg0: java.io.File, arg1: java.lang.String[]): void
                public addFile(arg0: java.io.File): void
                public doHashes(arg0: sun.net.www.MessageHeader): void
                public stream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static isManifestName(arg0: java.lang.String | string): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}