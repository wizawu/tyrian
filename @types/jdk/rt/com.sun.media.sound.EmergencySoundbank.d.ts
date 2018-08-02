declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class EmergencySoundbank {
    public constructor()
    public static createSoundbank(): com.sun.media.sound.SF2Soundbank
    public static new_bell(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_guitar1(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_guitar_dist(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_guitar_pick(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_gpiano(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_gpiano2(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_piano_hammer(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_piano1(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_epiano1(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_epiano2(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_bass1(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_synthbass(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_bass2(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_solostring(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_orchhit(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_string2(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_choir(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_organ(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_ch_organ(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_flute(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_horn(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_trumpet(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_brass_section(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_trombone(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_sax(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_oboe(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_bassoon(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_clarinet(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_timpani(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_melodic_toms(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_reverse_cymbal(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_snare_drum(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_bass_drum(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_tom(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_closed_hihat(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_open_hihat(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_crash_cymbal(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static new_side_stick(arg0: com.sun.media.sound.SF2Soundbank): com.sun.media.sound.SF2Layer
    public static newSimpleFFTSample(arg0: com.sun.media.sound.SF2Soundbank, arg1: java.lang.String | string, arg2: double[], arg3: double): com.sun.media.sound.SF2Sample
    public static newSimpleFFTSample(arg0: com.sun.media.sound.SF2Soundbank, arg1: java.lang.String | string, arg2: double[], arg3: double, arg4: int): com.sun.media.sound.SF2Sample
    public static newSimpleFFTSample_dist(arg0: com.sun.media.sound.SF2Soundbank, arg1: java.lang.String | string, arg2: double[], arg3: double, arg4: double): com.sun.media.sound.SF2Sample
    public static newSimpleDrumSample(arg0: com.sun.media.sound.SF2Soundbank, arg1: java.lang.String | string, arg2: double[]): com.sun.media.sound.SF2Sample
    public static newLayer(arg0: com.sun.media.sound.SF2Soundbank, arg1: java.lang.String | string, arg2: com.sun.media.sound.SF2Sample): com.sun.media.sound.SF2Layer
    public static newInstrument(arg0: com.sun.media.sound.SF2Soundbank, arg1: java.lang.String | string, arg2: javax.sound.midi.Patch, ...arg3: com.sun.media.sound.SF2Layer[]): com.sun.media.sound.SF2Instrument
    public static ifft(arg0: double[]): void
    public static fft(arg0: double[]): void
    public static complexGaussianDist(arg0: double[], arg1: double, arg2: double, arg3: double): void
    public static randomPhase(arg0: double[]): void
    public static randomPhase(arg0: double[], arg1: java.util.Random): void
    public static normalize(arg0: double[], arg1: double): void
    public static normalize(arg0: float[], arg1: double): void
    public static realPart(arg0: double[]): double[]
    public static imgPart(arg0: double[]): double[]
    public static toFloat(arg0: double[]): float[]
    public static toBytes(arg0: float[], arg1: javax.sound.sampled.AudioFormat): byte[]
    public static fadeUp(arg0: double[], arg1: int): void
    public static fadeUp(arg0: float[], arg1: int): void
    public static loopExtend(arg0: double[], arg1: int): double[]
    public static loopExtend(arg0: float[], arg1: int): float[]
    public static class: java.lang.Class<any>
}

            }
        }
    }
}