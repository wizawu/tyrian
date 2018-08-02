declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SF2Region {
                    public static GENERATOR_STARTADDRSOFFSET: int
                    public static GENERATOR_ENDADDRSOFFSET: int
                    public static GENERATOR_STARTLOOPADDRSOFFSET: int
                    public static GENERATOR_ENDLOOPADDRSOFFSET: int
                    public static GENERATOR_STARTADDRSCOARSEOFFSET: int
                    public static GENERATOR_MODLFOTOPITCH: int
                    public static GENERATOR_VIBLFOTOPITCH: int
                    public static GENERATOR_MODENVTOPITCH: int
                    public static GENERATOR_INITIALFILTERFC: int
                    public static GENERATOR_INITIALFILTERQ: int
                    public static GENERATOR_MODLFOTOFILTERFC: int
                    public static GENERATOR_MODENVTOFILTERFC: int
                    public static GENERATOR_ENDADDRSCOARSEOFFSET: int
                    public static GENERATOR_MODLFOTOVOLUME: int
                    public static GENERATOR_UNUSED1: int
                    public static GENERATOR_CHORUSEFFECTSSEND: int
                    public static GENERATOR_REVERBEFFECTSSEND: int
                    public static GENERATOR_PAN: int
                    public static GENERATOR_UNUSED2: int
                    public static GENERATOR_UNUSED3: int
                    public static GENERATOR_UNUSED4: int
                    public static GENERATOR_DELAYMODLFO: int
                    public static GENERATOR_FREQMODLFO: int
                    public static GENERATOR_DELAYVIBLFO: int
                    public static GENERATOR_FREQVIBLFO: int
                    public static GENERATOR_DELAYMODENV: int
                    public static GENERATOR_ATTACKMODENV: int
                    public static GENERATOR_HOLDMODENV: int
                    public static GENERATOR_DECAYMODENV: int
                    public static GENERATOR_SUSTAINMODENV: int
                    public static GENERATOR_RELEASEMODENV: int
                    public static GENERATOR_KEYNUMTOMODENVHOLD: int
                    public static GENERATOR_KEYNUMTOMODENVDECAY: int
                    public static GENERATOR_DELAYVOLENV: int
                    public static GENERATOR_ATTACKVOLENV: int
                    public static GENERATOR_HOLDVOLENV: int
                    public static GENERATOR_DECAYVOLENV: int
                    public static GENERATOR_SUSTAINVOLENV: int
                    public static GENERATOR_RELEASEVOLENV: int
                    public static GENERATOR_KEYNUMTOVOLENVHOLD: int
                    public static GENERATOR_KEYNUMTOVOLENVDECAY: int
                    public static GENERATOR_INSTRUMENT: int
                    public static GENERATOR_RESERVED1: int
                    public static GENERATOR_KEYRANGE: int
                    public static GENERATOR_VELRANGE: int
                    public static GENERATOR_STARTLOOPADDRSCOARSEOFFSET: int
                    public static GENERATOR_KEYNUM: int
                    public static GENERATOR_VELOCITY: int
                    public static GENERATOR_INITIALATTENUATION: int
                    public static GENERATOR_RESERVED2: int
                    public static GENERATOR_ENDLOOPADDRSCOARSEOFFSET: int
                    public static GENERATOR_COARSETUNE: int
                    public static GENERATOR_FINETUNE: int
                    public static GENERATOR_SAMPLEID: int
                    public static GENERATOR_SAMPLEMODES: int
                    public static GENERATOR_RESERVED3: int
                    public static GENERATOR_SCALETUNING: int
                    public static GENERATOR_EXCLUSIVECLASS: int
                    public static GENERATOR_OVERRIDINGROOTKEY: int
                    public static GENERATOR_UNUSED5: int
                    public static GENERATOR_ENDOPR: int
                    protected generators: java.util.Map<java.lang.Integer, java.lang.Short>
                    protected modulators: java.util.List<com.sun.media.sound.SF2Modulator>
                    public constructor()
                    public getGenerators(): java.util.Map<java.lang.Integer, java.lang.Short>
                    public contains(arg0: int): boolean
                    public static getDefaultValue(arg0: int): short
                    public getShort(arg0: int): short
                    public putShort(arg0: int, arg1: short): void
                    public getBytes(arg0: int): byte[]
                    public putBytes(arg0: int, arg1: byte[]): void
                    public getInteger(arg0: int): int
                    public putInteger(arg0: int, arg1: int): void
                    public getModulators(): java.util.List<com.sun.media.sound.SF2Modulator>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}