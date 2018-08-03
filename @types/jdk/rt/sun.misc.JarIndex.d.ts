declare namespace sun {
    namespace misc {
        class JarIndex {
            public static INDEX_NAME: string
            public constructor()
            public constructor(arg0: java.io.InputStream)
            public constructor(arg0: java.lang.String[])
            public static getJarIndex(arg0: java.util.jar.JarFile): sun.misc.JarIndex
            public static getJarIndex(arg0: java.util.jar.JarFile, arg1: sun.misc.MetaIndex): sun.misc.JarIndex
            public getJarFiles(): java.lang.String[]
            public get(arg0: java.lang.String | string): java.util.LinkedList<java.lang.String>
            public add(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public write(arg0: java.io.OutputStream): void
            public read(arg0: java.io.InputStream): void
            public merge(arg0: sun.misc.JarIndex, arg1: java.lang.String | string): void
            public static class: java.lang.Class<any>
        }
    }
}