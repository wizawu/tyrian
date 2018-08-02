declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                interface SoftProcess extends com.sun.media.sound.SoftControl {
                    init(arg0: com.sun.media.sound.SoftSynthesizer): void
                    get(arg0: int, arg1: java.lang.String | string): double[]
                    processControlLogic(): void
                    reset(): void
                }
            }
        }
    }
}