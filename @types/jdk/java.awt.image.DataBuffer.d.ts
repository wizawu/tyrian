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
        public static getDataTypeSize(arg0: number | java.lang.Integer): number
        protected constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        constructor(arg0: sun.java2d.StateTrackable$State, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        protected constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        constructor(arg0: sun.java2d.StateTrackable$State, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        protected constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
        constructor(arg0: sun.java2d.StateTrackable$State, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
        protected constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number[] | java.lang.Integer[])
        constructor(arg0: sun.java2d.StateTrackable$State, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number[] | java.lang.Integer[])
        public getDataType(): number
        public getSize(): number
        public getOffset(): number
        public getOffsets(): number[]
        public getNumBanks(): number
        public getElem(arg0: number | java.lang.Integer): number
        public abstract getElem(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public setElem(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public abstract setElem(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
        public getElemFloat(arg0: number | java.lang.Integer): number
        public getElemFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public setElemFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): void
        public setElemFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Float): void
        public getElemDouble(arg0: number | java.lang.Integer): number
        public getElemDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
        public setElemDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): void
        public setElemDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Double): void
        static toIntArray(arg0: java.lang.Object | any): number[]
      }

    }
  }
}
