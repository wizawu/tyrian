declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class ModelByteBufferWavetable implements com.sun.media.sound.ModelWavetable {
                    public constructor(arg0: com.sun.media.sound.ModelByteBuffer)
                    public constructor(arg0: com.sun.media.sound.ModelByteBuffer, arg1: float)
                    public constructor(arg0: com.sun.media.sound.ModelByteBuffer, arg1: javax.sound.sampled.AudioFormat)
                    public constructor(arg0: com.sun.media.sound.ModelByteBuffer, arg1: javax.sound.sampled.AudioFormat, arg2: float)
                    public set8BitExtensionBuffer(arg0: com.sun.media.sound.ModelByteBuffer): void
                    public get8BitExtensionBuffer(): com.sun.media.sound.ModelByteBuffer
                    public getBuffer(): com.sun.media.sound.ModelByteBuffer
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public openStream(): com.sun.media.sound.AudioFloatInputStream
                    public getChannels(): int
                    public open(arg0: float): com.sun.media.sound.ModelOscillatorStream
                    public getAttenuation(): float
                    public setAttenuation(arg0: float): void
                    public getLoopLength(): float
                    public setLoopLength(arg0: float): void
                    public getLoopStart(): float
                    public setLoopStart(arg0: float): void
                    public setLoopType(arg0: int): void
                    public getLoopType(): int
                    public getPitchcorrection(): float
                    public setPitchcorrection(arg0: float): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}