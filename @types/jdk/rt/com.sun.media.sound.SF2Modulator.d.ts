declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class SF2Modulator {
    public static SOURCE_NONE: int
    public static SOURCE_NOTE_ON_VELOCITY: int
    public static SOURCE_NOTE_ON_KEYNUMBER: int
    public static SOURCE_POLY_PRESSURE: int
    public static SOURCE_CHANNEL_PRESSURE: int
    public static SOURCE_PITCH_WHEEL: int
    public static SOURCE_PITCH_SENSITIVITY: int
    public static SOURCE_MIDI_CONTROL: int
    public static SOURCE_DIRECTION_MIN_MAX: int
    public static SOURCE_DIRECTION_MAX_MIN: int
    public static SOURCE_POLARITY_UNIPOLAR: int
    public static SOURCE_POLARITY_BIPOLAR: int
    public static SOURCE_TYPE_LINEAR: int
    public static SOURCE_TYPE_CONCAVE: int
    public static SOURCE_TYPE_CONVEX: int
    public static SOURCE_TYPE_SWITCH: int
    public static TRANSFORM_LINEAR: int
    public static TRANSFORM_ABSOLUTE: int
    public constructor()
    public getAmount(): short
    public setAmount(arg0: short): void
    public getAmountSourceOperator(): int
    public setAmountSourceOperator(arg0: int): void
    public getTransportOperator(): int
    public setTransportOperator(arg0: int): void
    public getDestinationOperator(): int
    public setDestinationOperator(arg0: int): void
    public getSourceOperator(): int
    public setSourceOperator(arg0: int): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}