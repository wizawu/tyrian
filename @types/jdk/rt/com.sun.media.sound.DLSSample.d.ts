declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class DLSSample extends javax.sound.midi.SoundbankResource {
    public constructor(arg0: javax.sound.midi.Soundbank)
    public constructor()
    public getInfo(): com.sun.media.sound.DLSInfo
    public getData(): java.lang.Object
    public getDataBuffer(): com.sun.media.sound.ModelByteBuffer
    public getFormat(): javax.sound.sampled.AudioFormat
    public setFormat(arg0: javax.sound.sampled.AudioFormat): void
    public setData(arg0: com.sun.media.sound.ModelByteBuffer): void
    public setData(arg0: byte[]): void
    public setData(arg0: byte[], arg1: int, arg2: int): void
    public getName(): string
    public setName(arg0: java.lang.String | string): void
    public getSampleoptions(): com.sun.media.sound.DLSSampleOptions
    public setSampleoptions(arg0: com.sun.media.sound.DLSSampleOptions): void
    public toString(): string
    public getGuid(): byte[]
    public setGuid(arg0: byte[]): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}