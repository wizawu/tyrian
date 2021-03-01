declare namespace javax {
  namespace sound {
    namespace sampled {

      class ReverbType {

        protected constructor(arg0: java.lang.String, arg1: int, arg2: float, arg3: int, arg4: float, arg5: int)
        public getName(): java.lang.String
        public readonly getEarlyReflectionDelay(): int
        public readonly getEarlyReflectionIntensity(): float
        public readonly getLateReflectionDelay(): int
        public readonly getLateReflectionIntensity(): float
        public readonly getDecayTime(): int
        public readonly equals(arg0: java.lang.Object): boolean
        public readonly hashCode(): int
        public readonly toString(): java.lang.String
      }

    }
  }
}
