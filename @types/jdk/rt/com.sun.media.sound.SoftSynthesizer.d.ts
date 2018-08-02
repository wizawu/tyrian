declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class SoftSynthesizer implements com.sun.media.sound.AudioSynthesizer , com.sun.media.sound.ReferenceCountingDevice {
    public constructor()
    public getLatency(): long
    public getFormat(): javax.sound.sampled.AudioFormat
    public getMaxPolyphony(): int
    public getChannels(): javax.sound.midi.MidiChannel[]
    public getVoiceStatus(): javax.sound.midi.VoiceStatus[]
    public isSoundbankSupported(arg0: javax.sound.midi.Soundbank): boolean
    public loadInstrument(arg0: javax.sound.midi.Instrument): boolean
    public unloadInstrument(arg0: javax.sound.midi.Instrument): void
    public remapInstrument(arg0: javax.sound.midi.Instrument, arg1: javax.sound.midi.Instrument): boolean
    public getDefaultSoundbank(): javax.sound.midi.Soundbank
    public getAvailableInstruments(): javax.sound.midi.Instrument[]
    public getLoadedInstruments(): javax.sound.midi.Instrument[]
    public loadAllInstruments(arg0: javax.sound.midi.Soundbank): boolean
    public unloadAllInstruments(arg0: javax.sound.midi.Soundbank): void
    public loadInstruments(arg0: javax.sound.midi.Soundbank, arg1: javax.sound.midi.Patch[]): boolean
    public unloadInstruments(arg0: javax.sound.midi.Soundbank, arg1: javax.sound.midi.Patch[]): void
    public getDeviceInfo(): javax.sound.midi.MidiDevice$Info
    public getPropertyInfo(arg0: java.util.Map<java.lang.String, java.lang.Object>): com.sun.media.sound.AudioSynthesizerPropertyInfo[]
    public open(): void
    public open(arg0: javax.sound.sampled.SourceDataLine, arg1: java.util.Map<java.lang.String, java.lang.Object>): void
    public openStream(arg0: javax.sound.sampled.AudioFormat, arg1: java.util.Map<java.lang.String, java.lang.Object>): javax.sound.sampled.AudioInputStream
    public close(): void
    public isOpen(): boolean
    public getMicrosecondPosition(): long
    public getMaxReceivers(): int
    public getMaxTransmitters(): int
    public getReceiver(): javax.sound.midi.Receiver
    public getReceivers(): java.util.List<javax.sound.midi.Receiver>
    public getTransmitter(): javax.sound.midi.Transmitter
    public getTransmitters(): java.util.List<javax.sound.midi.Transmitter>
    public getReceiverReferenceCounting(): javax.sound.midi.Receiver
    public getTransmitterReferenceCounting(): javax.sound.midi.Transmitter
    public static class: java.lang.Class<any>
}

            }
        }
    }
}