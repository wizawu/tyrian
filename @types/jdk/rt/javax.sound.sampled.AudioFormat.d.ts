declare namespace javax {
    namespace sound {
        namespace sampled {
class AudioFormat {
    protected encoding: javax.sound.sampled.AudioFormat$Encoding
    protected sampleRate: float
    protected sampleSizeInBits: int
    protected channels: int
    protected frameSize: int
    protected frameRate: float
    protected bigEndian: boolean
    public constructor(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: float, arg2: int, arg3: int, arg4: int, arg5: float, arg6: boolean)
    public constructor(arg0: javax.sound.sampled.AudioFormat$Encoding, arg1: float, arg2: int, arg3: int, arg4: int, arg5: float, arg6: boolean, arg7: java.util.Map<java.lang.String, java.lang.Object>)
    public constructor(arg0: float, arg1: int, arg2: int, arg3: boolean, arg4: boolean)
    public getEncoding(): javax.sound.sampled.AudioFormat$Encoding
    public getSampleRate(): float
    public getSampleSizeInBits(): int
    public getChannels(): int
    public getFrameSize(): int
    public getFrameRate(): float
    public isBigEndian(): boolean
    public properties(): java.util.Map<java.lang.String, java.lang.Object>
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public matches(arg0: javax.sound.sampled.AudioFormat): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}