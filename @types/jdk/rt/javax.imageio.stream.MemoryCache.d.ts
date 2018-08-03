declare namespace javax {
    namespace imageio {
        namespace stream {
            class MemoryCache {
                public loadFromStream(arg0: java.io.InputStream, arg1: long): long
                public writeToStream(arg0: java.io.OutputStream, arg1: long, arg2: long): void
                public write(arg0: byte[], arg1: int, arg2: int, arg3: long): void
                public write(arg0: int, arg1: long): void
                public getLength(): long
                public read(arg0: long): int
                public read(arg0: byte[], arg1: int, arg2: int, arg3: long): void
                public disposeBefore(arg0: long): void
                public reset(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}