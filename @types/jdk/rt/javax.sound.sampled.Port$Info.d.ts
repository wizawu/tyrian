declare namespace javax {
    namespace sound {
        namespace sampled {
            class Port$Info extends javax.sound.sampled.Line$Info {
                public static MICROPHONE: javax.sound.sampled.Port$Info
                public static LINE_IN: javax.sound.sampled.Port$Info
                public static COMPACT_DISC: javax.sound.sampled.Port$Info
                public static SPEAKER: javax.sound.sampled.Port$Info
                public static HEADPHONE: javax.sound.sampled.Port$Info
                public static LINE_OUT: javax.sound.sampled.Port$Info
                public constructor(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: boolean)
                public getName(): string
                public isSource(): boolean
                public matches(arg0: javax.sound.sampled.Line$Info): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}