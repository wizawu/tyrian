declare namespace java {
    namespace nio {
        namespace channels {
            abstract class FileChannel extends java.nio.channels.spi.AbstractInterruptibleChannel implements java.nio.channels.SeekableByteChannel , java.nio.channels.GatheringByteChannel , java.nio.channels.ScatteringByteChannel {
                protected constructor()
                public static open(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...arg2: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel
                public static open(arg0: java.nio.file.Path, ...arg1: java.nio.file.OpenOption[]): java.nio.channels.FileChannel
                public abstract read(arg0: java.nio.ByteBuffer): int
                public abstract read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public read(arg0: java.nio.ByteBuffer[]): long
                public abstract write(arg0: java.nio.ByteBuffer): int
                public abstract write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public write(arg0: java.nio.ByteBuffer[]): long
                public abstract position(): long
                public abstract position(arg0: long): java.nio.channels.FileChannel
                public abstract size(): long
                public abstract truncate(arg0: long): java.nio.channels.FileChannel
                public abstract force(arg0: boolean): void
                public abstract transferTo(arg0: long, arg1: long, arg2: java.nio.channels.WritableByteChannel): long
                public abstract transferFrom(arg0: java.nio.channels.ReadableByteChannel, arg1: long, arg2: long): long
                public abstract read(arg0: java.nio.ByteBuffer, arg1: long): int
                public abstract write(arg0: java.nio.ByteBuffer, arg1: long): int
                public abstract map(arg0: java.nio.channels.FileChannel$MapMode, arg1: long, arg2: long): java.nio.MappedByteBuffer
                public abstract lock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
                public lock(): java.nio.channels.FileLock
                public abstract tryLock(arg0: long, arg1: long, arg2: boolean): java.nio.channels.FileLock
                public tryLock(): java.nio.channels.FileLock
                public truncate(arg0: long): java.nio.channels.SeekableByteChannel
                public position(arg0: long): java.nio.channels.SeekableByteChannel
                public static class: java.lang.Class<any>
            }
        }
    }
}