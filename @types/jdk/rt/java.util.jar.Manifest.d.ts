declare namespace java {
    namespace util {
        namespace jar {
            class Manifest implements java.lang.Cloneable {
                public constructor()
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: java.util.jar.Manifest)
                public getMainAttributes(): java.util.jar.Attributes
                public getEntries(): java.util.Map<java.lang.String, java.util.jar.Attributes>
                public getAttributes(arg0: java.lang.String | string): java.util.jar.Attributes
                public clear(): void
                public write(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public read(arg0: java.io.InputStream): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}