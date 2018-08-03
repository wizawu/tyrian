declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class MidiUtils {
                    public static readonly DEFAULT_TEMPO_MPQ: int
                    public static readonly META_END_OF_TRACK_TYPE: int
                    public static readonly META_TEMPO_TYPE: int
                    public static isMetaEndOfTrack(arg0: javax.sound.midi.MidiMessage | javax.sound.midi.MidiMessage$$Lambda): boolean
                    public static isMetaTempo(arg0: javax.sound.midi.MidiMessage | javax.sound.midi.MidiMessage$$Lambda): boolean
                    public static getTempoMPQ(arg0: javax.sound.midi.MidiMessage | javax.sound.midi.MidiMessage$$Lambda): int
                    public static convertTempo(arg0: double): double
                    public static ticks2microsec(arg0: long, arg1: double, arg2: int): long
                    public static microsec2ticks(arg0: long, arg1: double, arg2: int): long
                    public static tick2microsecond(arg0: javax.sound.midi.Sequence, arg1: long, arg2: com.sun.media.sound.MidiUtils$TempoCache): long
                    public static microsecond2tick(arg0: javax.sound.midi.Sequence, arg1: long, arg2: com.sun.media.sound.MidiUtils$TempoCache): long
                    public static tick2index(arg0: javax.sound.midi.Track, arg1: long): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}