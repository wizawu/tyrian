declare namespace javax {
  namespace sound {
    namespace sampled {
      class Port$Info extends javax.sound.sampled.Line$Info {
        public static readonly MICROPHONE: javax.sound.sampled.Port$Info
        public static readonly LINE_IN: javax.sound.sampled.Port$Info
        public static readonly COMPACT_DISC: javax.sound.sampled.Port$Info
        public static readonly SPEAKER: javax.sound.sampled.Port$Info
        public static readonly HEADPHONE: javax.sound.sampled.Port$Info
        public static readonly LINE_OUT: javax.sound.sampled.Port$Info
        public constructor(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: boolean | java.lang.Boolean
        )
        public getName(): java.lang.String
        public isSource(): boolean
        public matches(arg0: javax.sound.sampled.Line$Info): boolean
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
      }
    }
  }
}
