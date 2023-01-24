declare namespace java {
  namespace nio {
    abstract class MappedByteBuffer extends java.nio.ByteBuffer {
      constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: java.io.FileDescriptor
      )
      constructor(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      )
      public isLoaded(): boolean
      public load(): java.nio.MappedByteBuffer
      public force(): java.nio.MappedByteBuffer
      public position(arg0: number | java.lang.Integer): java.nio.MappedByteBuffer
      public limit(arg0: number | java.lang.Integer): java.nio.MappedByteBuffer
      public mark(): java.nio.MappedByteBuffer
      public reset(): java.nio.MappedByteBuffer
      public clear(): java.nio.MappedByteBuffer
      public flip(): java.nio.MappedByteBuffer
      public rewind(): java.nio.MappedByteBuffer
      public rewind(): java.nio.ByteBuffer
      public flip(): java.nio.ByteBuffer
      public clear(): java.nio.ByteBuffer
      public reset(): java.nio.ByteBuffer
      public mark(): java.nio.ByteBuffer
      public limit(arg0: number | java.lang.Integer): java.nio.ByteBuffer
      public position(arg0: number | java.lang.Integer): java.nio.ByteBuffer
      public rewind(): java.nio.Buffer
      public flip(): java.nio.Buffer
      public clear(): java.nio.Buffer
      public reset(): java.nio.Buffer
      public mark(): java.nio.Buffer
      public limit(arg0: number | java.lang.Integer): java.nio.Buffer
      public position(arg0: number | java.lang.Integer): java.nio.Buffer
    }
  }
}
