declare namespace sun {
    namespace misc {
        class JarIndex {
            public static readonly INDEX_NAME: string
            public constructor()
            public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
            public constructor(arg0: java.lang.String[])
            public static getJarIndex(arg0: java.util.jar.JarFile): sun.misc.JarIndex
            public static getJarIndex(arg0: java.util.jar.JarFile, arg1: sun.misc.MetaIndex): sun.misc.JarIndex
            public getJarFiles(): java.lang.String[]
            public get(arg0: java.lang.String | string): java.util.LinkedList<java.lang.String>
            public add(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public write(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
            public read(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
            public merge(arg0: sun.misc.JarIndex, arg1: java.lang.String | string): void
            public static class: java.lang.Class<any>
        }
    }
}