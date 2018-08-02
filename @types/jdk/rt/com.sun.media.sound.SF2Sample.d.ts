declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SF2Sample extends javax.sound.midi.SoundbankResource {
                    public constructor(arg0: javax.sound.midi.Soundbank)
                    public constructor()
                    public getData(): java.lang.Object
                    public getDataBuffer(): com.sun.media.sound.ModelByteBuffer
                    public getData24Buffer(): com.sun.media.sound.ModelByteBuffer
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public setData(arg0: com.sun.media.sound.ModelByteBuffer): void
                    public setData(arg0: byte[]): void
                    public setData(arg0: byte[], arg1: int, arg2: int): void
                    public setData24(arg0: com.sun.media.sound.ModelByteBuffer): void
                    public setData24(arg0: byte[]): void
                    public setData24(arg0: byte[], arg1: int, arg2: int): void
                    public getName(): string
                    public setName(arg0: java.lang.String | string): void
                    public getEndLoop(): long
                    public setEndLoop(arg0: long): void
                    public getOriginalPitch(): int
                    public setOriginalPitch(arg0: int): void
                    public getPitchCorrection(): byte
                    public setPitchCorrection(arg0: byte): void
                    public getSampleLink(): int
                    public setSampleLink(arg0: int): void
                    public getSampleRate(): long
                    public setSampleRate(arg0: long): void
                    public getSampleType(): int
                    public setSampleType(arg0: int): void
                    public getStartLoop(): long
                    public setStartLoop(arg0: long): void
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}