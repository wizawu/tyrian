declare namespace sun {
    namespace nio {
        namespace ch {
            class ChannelInputStream extends java.io.InputStream {
                protected ch: java.nio.channels.ReadableByteChannel
                public static read(arg0: java.nio.channels.ReadableByteChannel, arg1: java.nio.ByteBuffer, arg2: boolean): int
                public constructor(arg0: java.nio.channels.ReadableByteChannel)
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                protected read(arg0: java.nio.ByteBuffer): int
                public available(): int
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}