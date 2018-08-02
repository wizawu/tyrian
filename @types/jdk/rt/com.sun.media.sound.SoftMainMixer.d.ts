declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftMainMixer {
                    public static CHANNEL_LEFT: int
                    public static CHANNEL_RIGHT: int
                    public static CHANNEL_MONO: int
                    public static CHANNEL_DELAY_LEFT: int
                    public static CHANNEL_DELAY_RIGHT: int
                    public static CHANNEL_DELAY_MONO: int
                    public static CHANNEL_EFFECT1: int
                    public static CHANNEL_EFFECT2: int
                    public static CHANNEL_DELAY_EFFECT1: int
                    public static CHANNEL_DELAY_EFFECT2: int
                    public static CHANNEL_LEFT_DRY: int
                    public static CHANNEL_RIGHT_DRY: int
                    public static CHANNEL_SCRATCH1: int
                    public static CHANNEL_SCRATCH2: int
                    public activity(): void
                    public stopMixer(arg0: com.sun.media.sound.ModelChannelMixer): void
                    public registerMixer(arg0: com.sun.media.sound.ModelChannelMixer): void
                    public constructor(arg0: com.sun.media.sound.SoftSynthesizer)
                    public getInputStream(): javax.sound.sampled.AudioInputStream
                    public reset(): void
                    public setVolume(arg0: int): void
                    public setBalance(arg0: int): void
                    public setFineTuning(arg0: int): void
                    public setCoarseTuning(arg0: int): void
                    public getVolume(): int
                    public getBalance(): int
                    public getFineTuning(): int
                    public getCoarseTuning(): int
                    public globalParameterControlChange(arg0: int[], arg1: long[], arg2: long[]): void
                    public processMessage(arg0: java.lang.Object): void
                    public processMessage(arg0: javax.sound.midi.MidiMessage): void
                    public processMessage(arg0: byte[]): void
                    public processMessage(arg0: int, arg1: int, arg2: int, arg3: int): void
                    public getMicrosecondPosition(): long
                    public close(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}