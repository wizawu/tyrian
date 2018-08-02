declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
abstract class ModelInstrument extends javax.sound.midi.Instrument {
    protected constructor(arg0: javax.sound.midi.Soundbank, arg1: javax.sound.midi.Patch, arg2: java.lang.String | string, arg3: java.lang.Class<any>)
    public getDirector(arg0: com.sun.media.sound.ModelPerformer[], arg1: javax.sound.midi.MidiChannel, arg2: com.sun.media.sound.ModelDirectedPlayer | com.sun.media.sound.ModelDirectedPlayer$$Lambda): com.sun.media.sound.ModelDirector
    public getPerformers(): com.sun.media.sound.ModelPerformer[]
    public getChannelMixer(arg0: javax.sound.midi.MidiChannel, arg1: javax.sound.sampled.AudioFormat): com.sun.media.sound.ModelChannelMixer
    public getPatchAlias(): javax.sound.midi.Patch
    public getKeys(): java.lang.String[]
    public getChannels(): boolean[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}