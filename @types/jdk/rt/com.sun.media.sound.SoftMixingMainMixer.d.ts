declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftMixingMainMixer {
                    public static CHANNEL_LEFT: int
                    public static CHANNEL_RIGHT: int
                    public static CHANNEL_EFFECT1: int
                    public static CHANNEL_EFFECT2: int
                    public static CHANNEL_EFFECT3: int
                    public static CHANNEL_EFFECT4: int
                    public static CHANNEL_LEFT_DRY: int
                    public static CHANNEL_RIGHT_DRY: int
                    public static CHANNEL_SCRATCH1: int
                    public static CHANNEL_SCRATCH2: int
                    public static CHANNEL_CHANNELMIXER_LEFT: int
                    public static CHANNEL_CHANNELMIXER_RIGHT: int
                    public getInputStream(): javax.sound.sampled.AudioInputStream
                    public constructor(arg0: com.sun.media.sound.SoftMixingMixer)
                    public openLine(arg0: com.sun.media.sound.SoftMixingDataLine): void
                    public closeLine(arg0: com.sun.media.sound.SoftMixingDataLine): void
                    public getOpenLines(): com.sun.media.sound.SoftMixingDataLine[]
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}