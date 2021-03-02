declare namespace java {
  namespace nio {

    abstract class Buffer {
      static readonly UNSAFE: jdk.internal.misc.Unsafe
      static readonly SPLITERATOR_CHARACTERISTICS: int
      address: long
      static readonly $assertionsDisabled: boolean
      constructor(arg0: int, arg1: int, arg2: int, arg3: int)
      static createSameBufferException(): java.lang.IllegalArgumentException
      static createCapacityException(arg0: int): java.lang.IllegalArgumentException
      public capacity(): int
      public position(): int
      public position(arg0: int): java.nio.Buffer
      public limit(): int
      public limit(arg0: int): java.nio.Buffer
      public mark(): java.nio.Buffer
      public reset(): java.nio.Buffer
      public clear(): java.nio.Buffer
      public flip(): java.nio.Buffer
      public rewind(): java.nio.Buffer
      public remaining(): int
      public hasRemaining(): boolean
      public abstract isReadOnly(): boolean
      public abstract hasArray(): boolean
      public abstract array(): java.lang.Object
      public abstract arrayOffset(): int
      public abstract isDirect(): boolean
      public abstract slice(): java.nio.Buffer
      public abstract duplicate(): java.nio.Buffer
      abstract base(): java.lang.Object
      nextGetIndex(): int
      nextGetIndex(arg0: int): int
      nextPutIndex(): int
      nextPutIndex(arg0: int): int
      checkIndex(arg0: int): int
      checkIndex(arg0: int, arg1: int): int
      markValue(): int
      truncate(): void
      discardMark(): void
      static checkBounds(arg0: int, arg1: int, arg2: int): void
    }

  }
}
