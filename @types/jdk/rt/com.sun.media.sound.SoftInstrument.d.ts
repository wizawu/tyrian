declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftInstrument extends javax.sound.midi.Instrument {
                    public constructor(arg0: com.sun.media.sound.ModelInstrument)
                    public constructor(arg0: com.sun.media.sound.ModelInstrument, arg1: com.sun.media.sound.ModelPerformer[])
                    public getDirector(arg0: javax.sound.midi.MidiChannel, arg1: com.sun.media.sound.ModelDirectedPlayer | com.sun.media.sound.ModelDirectedPlayer$$Lambda): com.sun.media.sound.ModelDirector
                    public getSourceInstrument(): com.sun.media.sound.ModelInstrument
                    public getData(): java.lang.Object
                    public getPerformer(arg0: int): com.sun.media.sound.SoftPerformer
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}