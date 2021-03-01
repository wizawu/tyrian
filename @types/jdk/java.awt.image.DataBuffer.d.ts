declare namespace java {
  namespace awt {
    namespace image {

      abstract class DataBuffer {

        public static readonly TYPE_BYTE: int
        public static readonly TYPE_USHORT: int
        public static readonly TYPE_SHORT: int
        public static readonly TYPE_INT: int
        public static readonly TYPE_FLOAT: int
        public static readonly TYPE_DOUBLE: int
        public static readonly TYPE_UNDEFINED: int
        protected dataType: int
        protected banks: int
        protected offset: int
        protected size: int
        protected offsets: int[]
        theTrackable: sun.java2d.StateTrackableDelegate
        public static getDataTypeSize(arg0: int): int
        protected constructor(arg0: int, arg1: int)
        constructor(arg0: sun.java2d.StateTrackable$State, arg1: int, arg2: int)
        protected constructor(arg0: int, arg1: int, arg2: int)
        constructor(arg0: sun.java2d.StateTrackable$State, arg1: int, arg2: int, arg3: int)
        protected constructor(arg0: int, arg1: int, arg2: int, arg3: int)
        constructor(arg0: sun.java2d.StateTrackable$State, arg1: int, arg2: int, arg3: int, arg4: int)
        protected constructor(arg0: int, arg1: int, arg2: int, arg3: int[])
        constructor(arg0: sun.java2d.StateTrackable$State, arg1: int, arg2: int, arg3: int, arg4: int[])
        public getDataType(): int
        public getSize(): int
        public getOffset(): int
        public getOffsets(): int[]
        public getNumBanks(): int
        public getElem(arg0: int): int
        public abstract getElem(arg0: int, arg1: int): int
        public setElem(arg0: int, arg1: int): void
        public abstract setElem(arg0: int, arg1: int, arg2: int): void
        public getElemFloat(arg0: int): float
        public getElemFloat(arg0: int, arg1: int): float
        public setElemFloat(arg0: int, arg1: float): void
        public setElemFloat(arg0: int, arg1: int, arg2: float): void
        public getElemDouble(arg0: int): double
        public getElemDouble(arg0: int, arg1: int): double
        public setElemDouble(arg0: int, arg1: double): void
        public setElemDouble(arg0: int, arg1: int, arg2: double): void
        static toIntArray(arg0: java.lang.Object): int[]
      }

    }
  }
}
