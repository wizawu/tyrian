declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftAudioBuffer {
                    public constructor(arg0: int, arg1: javax.sound.sampled.AudioFormat)
                    public swap(arg0: com.sun.media.sound.SoftAudioBuffer): void
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getSize(): int
                    public clear(): void
                    public isSilent(): boolean
                    public array(): float[]
                    public get(arg0: byte[], arg1: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}