declare namespace java {
    namespace nio {
        namespace channels {
abstract class FileChannel extends java.nio.channels.spi.AbstractInterruptibleChannel implements java.nio.channels.SeekableByteChannel , java.nio.channels.GatheringByteChannel , java.nio.channels.ScatteringByteChannel {
    protected constructor()
    public static open(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
    public static open(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.nio.channels.FileChannel
    public read(arg0: java.nio.ByteBuffer): int
    public read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
    public read(arg0: java.nio.ByteBuffer[]): long
    public write(arg0: java.nio.ByteBuffer): int
    public write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
    public write(arg0: java.nio.ByteBuffer[]): long
    public position(): long
    public position(arg0: long): java.nio.channels.FileChannel
    public size(): long
    public truncate(arg0: long): java.nio.channels.FileChannel
    public force(arg0: boolean): void
    public transferTo(arg0: long, arg1: long, arg2: java.nio.channels.WritableByteChannel): long
    public transferFrom(arg0: java.nio.channels.ReadableByteChannel, arg1: long, arg2: long): long
    public read(arg0: java.nio.ByteBuffer, arg1: long): int
    public write(arg0: java.nio.ByteBuffer, arg1: long): int
    public map(arg0: java.nio.channels.FileChannel$MapMode, arg1: long, arg2: long): java.nio.MappedByteBuffer
    public lock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
    public lock(): java.nio.channels.FileLock
    public tryLock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
    public tryLock(): java.nio.channels.FileLock
    public truncate(arg0: long): java.nio.channels.SeekableByteChannel
    public position(arg0: long): java.nio.channels.SeekableByteChannel
    public static class: java.lang.Class<any>
}

        }
    }
}