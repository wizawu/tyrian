declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftEnvelopeGenerator implements com.sun.media.sound.SoftProcess {
                    public static readonly EG_OFF: int
                    public static readonly EG_DELAY: int
                    public static readonly EG_ATTACK: int
                    public static readonly EG_HOLD: int
                    public static readonly EG_DECAY: int
                    public static readonly EG_SUSTAIN: int
                    public static readonly EG_RELEASE: int
                    public static readonly EG_SHUTDOWN: int
                    public static readonly EG_END: int
                    public constructor()
                    public reset(): void
                    public init(arg0: com.sun.media.sound.SoftSynthesizer): void
                    public get(arg0: int, arg1: java.lang.String | string): double[]
                    public processControlLogic(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}