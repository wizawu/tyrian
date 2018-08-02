declare namespace javax {
    namespace sound {
        namespace sampled {
class AudioFileFormat {
    protected constructor(arg0: javax.sound.sampled.AudioFileFormat$Type, arg1: int, arg2: javax.sound.sampled.AudioFormat, arg3: int)
    public constructor(arg0: javax.sound.sampled.AudioFileFormat$Type, arg1: javax.sound.sampled.AudioFormat, arg2: int)
    public constructor(arg0: javax.sound.sampled.AudioFileFormat$Type, arg1: javax.sound.sampled.AudioFormat, arg2: int, arg3: java.util.Map<java.lang.String, java.lang.Object>)
    public getType(): javax.sound.sampled.AudioFileFormat$Type
    public getByteLength(): int
    public getFormat(): javax.sound.sampled.AudioFormat
    public getFrameLength(): int
    public properties(): java.util.Map<java.lang.String, java.lang.Object>
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}