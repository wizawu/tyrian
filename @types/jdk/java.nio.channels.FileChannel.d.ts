declare namespace java {
  namespace nio {
    namespace channels {

      abstract class FileChannel extends java.nio.channels.spi.AbstractInterruptibleChannel implements java.nio.channels.SeekableByteChannel, java.nio.channels.GatheringByteChannel, java.nio.channels.ScatteringByteChannel {
        protected constructor()
        public static open(arg0: java.nio.file.Path, arg1: java.util.Set<java.nio.file.OpenOption>, ...vargs: (java.nio.file.attribute.FileAttribute<unknown>)[]): java.nio.channels.FileChannel
        public static open(arg0: java.nio.file.Path, ...vargs: (java.nio.file.OpenOption)[]): java.nio.channels.FileChannel
        public abstract read(arg0: java.nio.ByteBuffer): number
        public abstract read(arg0: java.nio.ByteBuffer[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public read(arg0: java.nio.ByteBuffer[]): number
        public abstract write(arg0: java.nio.ByteBuffer): number
        public abstract write(arg0: java.nio.ByteBuffer[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        public write(arg0: java.nio.ByteBuffer[]): number
        public abstract position(): number
        public abstract position(arg0: number | java.lang.Long): java.nio.channels.FileChannel
        public abstract size(): number
        public abstract truncate(arg0: number | java.lang.Long): java.nio.channels.FileChannel
        public abstract force(arg0: boolean | java.lang.Boolean): void
        public abstract transferTo(arg0: number | java.lang.Long, arg1: number | java.lang.Long, arg2: java.nio.channels.WritableByteChannel): number
        public abstract transferFrom(arg0: java.nio.channels.ReadableByteChannel, arg1: number | java.lang.Long, arg2: number | java.lang.Long): number
        public abstract read(arg0: java.nio.ByteBuffer, arg1: number | java.lang.Long): number
        public abstract write(arg0: java.nio.ByteBuffer, arg1: number | java.lang.Long): number
        public abstract map(arg0: java.nio.channels.FileChannel$MapMode, arg1: number | java.lang.Long, arg2: number | java.lang.Long): java.nio.MappedByteBuffer
        public abstract lock(arg0: number | java.lang.Long, arg1: number | java.lang.Long, arg2: boolean | java.lang.Boolean): java.nio.channels.FileLock
        public lock(): java.nio.channels.FileLock
        public abstract tryLock(arg0: number | java.lang.Long, arg1: number | java.lang.Long, arg2: boolean | java.lang.Boolean): java.nio.channels.FileLock
        public tryLock(): java.nio.channels.FileLock
        public truncate(arg0: number | java.lang.Long): java.nio.channels.SeekableByteChannel
        public position(arg0: number | java.lang.Long): java.nio.channels.SeekableByteChannel
      }

    }
  }
}
