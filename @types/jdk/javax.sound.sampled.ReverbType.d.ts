declare namespace javax {
  namespace sound {
    namespace sampled {

      class ReverbType {
        protected constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Float, arg3: number | java.lang.Integer, arg4: number | java.lang.Float, arg5: number | java.lang.Integer)
        public getName(): java.lang.String
        public getEarlyReflectionDelay(): number
        public getEarlyReflectionIntensity(): number
        public getLateReflectionDelay(): number
        public getLateReflectionIntensity(): number
        public getDecayTime(): number
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }

    }
  }
}
