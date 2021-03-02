declare namespace javax {
  namespace sound {
    namespace sampled {

      abstract class FloatControl extends javax.sound.sampled.Control {
        protected constructor(arg0: javax.sound.sampled.FloatControl$Type, arg1: float, arg2: float, arg3: float, arg4: int, arg5: float, arg6: java.lang.String, arg7: java.lang.String, arg8: java.lang.String, arg9: java.lang.String)
        protected constructor(arg0: javax.sound.sampled.FloatControl$Type, arg1: float, arg2: float, arg3: float, arg4: int, arg5: float, arg6: java.lang.String)
        public setValue(arg0: float): void
        public getValue(): float
        public getMaximum(): float
        public getMinimum(): float
        public getUnits(): java.lang.String
        public getMinLabel(): java.lang.String
        public getMidLabel(): java.lang.String
        public getMaxLabel(): java.lang.String
        public getPrecision(): float
        public getUpdatePeriod(): int
        public shift(arg0: float, arg1: float, arg2: int): void
        public toString(): java.lang.String
      }

    }
  }
}
