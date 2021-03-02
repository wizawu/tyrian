declare namespace java {
  namespace nio {

    abstract class Buffer {
      static readonly UNSAFE: jdk.internal.misc.Unsafe
      static readonly SPLITERATOR_CHARACTERISTICS: int
      address: long
      static readonly $assertionsDisabled: boolean
      constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      static createSameBufferException(): java.lang.IllegalArgumentException
      static createCapacityException(arg0: number | java.lang.Integer): java.lang.IllegalArgumentException
      public capacity(): number
      public position(): number
      public position(arg0: number | java.lang.Integer): java.nio.Buffer
      public limit(): number
      public limit(arg0: number | java.lang.Integer): java.nio.Buffer
      public mark(): java.nio.Buffer
      public reset(): java.nio.Buffer
      public clear(): java.nio.Buffer
      public flip(): java.nio.Buffer
      public rewind(): java.nio.Buffer
      public remaining(): number
      public hasRemaining(): boolean
      public abstract isReadOnly(): boolean
      public abstract hasArray(): boolean
      public abstract array(): java.lang.Object
      public abstract arrayOffset(): number
      public abstract isDirect(): boolean
      public abstract slice(): java.nio.Buffer
      public abstract duplicate(): java.nio.Buffer
      abstract base(): java.lang.Object
      nextGetIndex(): number
      nextGetIndex(arg0: number | java.lang.Integer): number
      nextPutIndex(): number
      nextPutIndex(arg0: number | java.lang.Integer): number
      checkIndex(arg0: number | java.lang.Integer): number
      checkIndex(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      markValue(): number
      truncate(): void
      discardMark(): void
      static checkBounds(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
    }

  }
}
