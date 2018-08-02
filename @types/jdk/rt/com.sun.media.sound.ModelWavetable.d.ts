declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
interface ModelWavetable extends com.sun.media.sound.ModelOscillator {
    LOOP_TYPE_OFF: int
    LOOP_TYPE_FORWARD: int
    LOOP_TYPE_RELEASE: int
    LOOP_TYPE_PINGPONG: int
    LOOP_TYPE_REVERSE: int
    openStream(): com.sun.media.sound.AudioFloatInputStream
    getLoopLength(): float
    getLoopStart(): float
    getLoopType(): int
    getPitchcorrection(): float
}

            }
        }
    }
}