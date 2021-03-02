declare namespace java {
  namespace nio {

    abstract class MappedByteBuffer extends java.nio.ByteBuffer {
      constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: java.io.FileDescriptor)
      constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      public isLoaded(): boolean
      public load(): java.nio.MappedByteBuffer
      public force(): java.nio.MappedByteBuffer
      public position(arg0: int): java.nio.MappedByteBuffer
      public limit(arg0: int): java.nio.MappedByteBuffer
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
      public limit(arg0: int): java.nio.ByteBuffer
      public position(arg0: int): java.nio.ByteBuffer
      public rewind(): java.nio.Buffer
      public flip(): java.nio.Buffer
      public clear(): java.nio.Buffer
      public reset(): java.nio.Buffer
      public mark(): java.nio.Buffer
      public limit(arg0: int): java.nio.Buffer
      public position(arg0: int): java.nio.Buffer
    }

  }
}
