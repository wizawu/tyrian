declare namespace javax {
  namespace sound {
    namespace midi {
      class MidiFileFormat {
        public static readonly UNKNOWN_LENGTH: int
        protected type: int
        protected divisionType: float
        protected resolution: int
        protected byteLength: int
        protected microsecondLength: long
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Long
        )
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Float,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Long,
          arg5: java.util.Map<java.lang.String, java.lang.Object>
        )
        public getType(): number
        public getDivisionType(): number
        public getResolution(): number
        public getByteLength(): number
        public getMicrosecondLength(): number
        public properties(): java.util.Map<java.lang.String, java.lang.Object>
        public getProperty(arg0: java.lang.String | string): java.lang.Object
      }
    }
  }
}
