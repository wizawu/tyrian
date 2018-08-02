declare namespace javax {
    namespace sound {
        namespace sampled {
class DataLine$Info extends javax.sound.sampled.Line$Info {
    public constructor(arg0: java.lang.Class<any>, arg1: javax.sound.sampled.AudioFormat[], arg2: int, arg3: int)
    public constructor(arg0: java.lang.Class<any>, arg1: javax.sound.sampled.AudioFormat, arg2: int)
    public constructor(arg0: java.lang.Class<any>, arg1: javax.sound.sampled.AudioFormat)
    public getFormats(): javax.sound.sampled.AudioFormat[]
    public isFormatSupported(arg0: javax.sound.sampled.AudioFormat): boolean
    public getMinBufferSize(): int
    public getMaxBufferSize(): int
    public matches(arg0: javax.sound.sampled.Line$Info): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}