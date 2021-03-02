declare namespace javax {
  namespace sound {
    namespace sampled {

      abstract class FloatControl extends javax.sound.sampled.Control {
        protected constructor(arg0: javax.sound.sampled.FloatControl$Type, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number | java.lang.Float, arg4: number | java.lang.Integer, arg5: number | java.lang.Float, arg6: java.lang.String | string, arg7: java.lang.String | string, arg8: java.lang.String | string, arg9: java.lang.String | string)
        protected constructor(arg0: javax.sound.sampled.FloatControl$Type, arg1: number | java.lang.Float, arg2: number | java.lang.Float, arg3: number | java.lang.Float, arg4: number | java.lang.Integer, arg5: number | java.lang.Float, arg6: java.lang.String | string)
        public setValue(arg0: number | java.lang.Float): void
        public getValue(): number
        public getMaximum(): number
        public getMinimum(): number
        public getUnits(): java.lang.String
        public getMinLabel(): java.lang.String
        public getMidLabel(): java.lang.String
        public getMaxLabel(): java.lang.String
        public getPrecision(): number
        public getUpdatePeriod(): number
        public shift(arg0: number | java.lang.Float, arg1: number | java.lang.Float, arg2: number | java.lang.Integer): void
        public toString(): java.lang.String
      }

    }
  }
}
