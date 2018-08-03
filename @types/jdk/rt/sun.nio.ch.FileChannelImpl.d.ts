declare namespace sun {
    namespace nio {
        namespace ch {
            class FileChannelImpl extends java.nio.channels.FileChannel {
                public static open(arg0: java.io.FileDescriptor, arg1: java.lang.String | string, arg2: boolean, arg3: boolean, arg4: java.lang.Object): java.nio.channels.FileChannel
                public static open(arg0: java.io.FileDescriptor, arg1: java.lang.String | string, arg2: boolean, arg3: boolean, arg4: boolean, arg5: java.lang.Object): java.nio.channels.FileChannel
                protected implCloseChannel(): void
                public read(arg0: java.nio.ByteBuffer): int
                public read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public write(arg0: java.nio.ByteBuffer): int
                public write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public position(): long
                public position(arg0: long): java.nio.channels.FileChannel
                public size(): long
                public truncate(arg0: long): java.nio.channels.FileChannel
                public force(arg0: boolean): void
                public transferTo(arg0: long, arg1: long, arg2: java.nio.channels.WritableByteChannel | java.nio.channels.WritableByteChannel$$Lambda): long
                public transferFrom(arg0: java.nio.channels.ReadableByteChannel | java.nio.channels.ReadableByteChannel$$Lambda, arg1: long, arg2: long): long
                public read(arg0: java.nio.ByteBuffer, arg1: long): int
                public write(arg0: java.nio.ByteBuffer, arg1: long): int
                public map(arg0: java.nio.channels.FileChannel$MapMode, arg1: long, arg2: long): java.nio.MappedByteBuffer
                public static getMappedBufferPool(): sun.misc.JavaNioAccess$BufferPool
                public lock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
                public tryLock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
                public truncate(arg0: long): java.nio.channels.SeekableByteChannel
                public position(arg0: long): java.nio.channels.SeekableByteChannel
                public static class: java.lang.Class<any>
            }
        }
    }
}