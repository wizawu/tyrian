declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class ModelSource {
                    public static SOURCE_NONE: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_NOTEON_KEYNUMBER: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_NOTEON_VELOCITY: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_EG1: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_EG2: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_LFO1: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_LFO2: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_MIDI_PITCH: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_MIDI_CHANNEL_PRESSURE: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_MIDI_POLY_PRESSURE: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_MIDI_CC_0: com.sun.media.sound.ModelIdentifier
                    public static SOURCE_MIDI_RPN_0: com.sun.media.sound.ModelIdentifier
                    public constructor()
                    public constructor(arg0: com.sun.media.sound.ModelIdentifier)
                    public constructor(arg0: com.sun.media.sound.ModelIdentifier, arg1: boolean)
                    public constructor(arg0: com.sun.media.sound.ModelIdentifier, arg1: boolean, arg2: boolean)
                    public constructor(arg0: com.sun.media.sound.ModelIdentifier, arg1: boolean, arg2: boolean, arg3: int)
                    public constructor(arg0: com.sun.media.sound.ModelIdentifier, arg1: com.sun.media.sound.ModelTransform | com.sun.media.sound.ModelTransform$$Lambda)
                    public getIdentifier(): com.sun.media.sound.ModelIdentifier
                    public setIdentifier(arg0: com.sun.media.sound.ModelIdentifier): void
                    public getTransform(): com.sun.media.sound.ModelTransform
                    public setTransform(arg0: com.sun.media.sound.ModelTransform | com.sun.media.sound.ModelTransform$$Lambda): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}