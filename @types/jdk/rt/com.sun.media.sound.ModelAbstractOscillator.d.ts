declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class ModelAbstractOscillator implements com.sun.media.sound.ModelOscillator , com.sun.media.sound.ModelOscillatorStream , javax.sound.midi.Soundbank {
                    protected pitch: float
                    protected samplerate: float
                    protected channel: javax.sound.midi.MidiChannel
                    protected voice: javax.sound.midi.VoiceStatus
                    protected noteNumber: int
                    protected velocity: int
                    protected on: boolean
                    public constructor()
                    public init(): void
                    public close(): void
                    public noteOff(arg0: int): void
                    public noteOn(arg0: javax.sound.midi.MidiChannel, arg1: javax.sound.midi.VoiceStatus, arg2: int, arg3: int): void
                    public read(arg0: float[][], arg1: int, arg2: int): int
                    public getChannel(): javax.sound.midi.MidiChannel
                    public getVoice(): javax.sound.midi.VoiceStatus
                    public getNoteNumber(): int
                    public getVelocity(): int
                    public isOn(): boolean
                    public setPitch(arg0: float): void
                    public getPitch(): float
                    public setSampleRate(arg0: float): void
                    public getSampleRate(): float
                    public getAttenuation(): float
                    public getChannels(): int
                    public getName(): string
                    public getPatch(): javax.sound.midi.Patch
                    public open(arg0: float): com.sun.media.sound.ModelOscillatorStream
                    public getPerformer(): com.sun.media.sound.ModelPerformer
                    public getInstrument(): com.sun.media.sound.ModelInstrument
                    public getSoundBank(): javax.sound.midi.Soundbank
                    public getDescription(): string
                    public getInstrument(arg0: javax.sound.midi.Patch): javax.sound.midi.Instrument
                    public getInstruments(): javax.sound.midi.Instrument[]
                    public getResources(): javax.sound.midi.SoundbankResource[]
                    public getVendor(): string
                    public getVersion(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}