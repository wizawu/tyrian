declare namespace javax {
  namespace sound {
    namespace sampled {

      class ReverbType {
        protected constructor(arg0: java.lang.String, arg1: int, arg2: float, arg3: int, arg4: float, arg5: int)
        public getName(): java.lang.String
        public getEarlyReflectionDelay(): int
        public getEarlyReflectionIntensity(): float
        public getLateReflectionDelay(): int
        public getLateReflectionIntensity(): float
        public getDecayTime(): int
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
      }

    }
  }
}
