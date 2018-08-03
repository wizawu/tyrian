declare namespace com {
    namespace sun {
        namespace nio {
            namespace zipfs {
                class ZipFileSystem$4 extends java.nio.channels.FileChannel {
                    public write(arg0: java.nio.ByteBuffer): int
                    public write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                    public position(): long
                    public position(arg0: long): java.nio.channels.FileChannel
                    public size(): long
                    public truncate(arg0: long): java.nio.channels.FileChannel
                    public force(arg0: boolean): void
                    public transferTo(arg0: long, arg1: long, arg2: java.nio.channels.WritableByteChannel | java.nio.channels.WritableByteChannel$$Lambda): long
                    public transferFrom(arg0: java.nio.channels.ReadableByteChannel | java.nio.channels.ReadableByteChannel$$Lambda, arg1: long, arg2: long): long
                    public read(arg0: java.nio.ByteBuffer): int
                    public read(arg0: java.nio.ByteBuffer, arg1: long): int
                    public read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                    public write(arg0: java.nio.ByteBuffer, arg1: long): int
                    public map(arg0: java.nio.channels.FileChannel$MapMode, arg1: long, arg2: long): java.nio.MappedByteBuffer
                    public lock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
                    public tryLock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
                    protected implCloseChannel(): void
                    public truncate(arg0: long): java.nio.channels.SeekableByteChannel
                    public position(arg0: long): java.nio.channels.SeekableByteChannel
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}