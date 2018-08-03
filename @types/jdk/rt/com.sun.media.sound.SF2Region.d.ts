declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SF2Region {
                    public static readonly GENERATOR_STARTADDRSOFFSET: int
                    public static readonly GENERATOR_ENDADDRSOFFSET: int
                    public static readonly GENERATOR_STARTLOOPADDRSOFFSET: int
                    public static readonly GENERATOR_ENDLOOPADDRSOFFSET: int
                    public static readonly GENERATOR_STARTADDRSCOARSEOFFSET: int
                    public static readonly GENERATOR_MODLFOTOPITCH: int
                    public static readonly GENERATOR_VIBLFOTOPITCH: int
                    public static readonly GENERATOR_MODENVTOPITCH: int
                    public static readonly GENERATOR_INITIALFILTERFC: int
                    public static readonly GENERATOR_INITIALFILTERQ: int
                    public static readonly GENERATOR_MODLFOTOFILTERFC: int
                    public static readonly GENERATOR_MODENVTOFILTERFC: int
                    public static readonly GENERATOR_ENDADDRSCOARSEOFFSET: int
                    public static readonly GENERATOR_MODLFOTOVOLUME: int
                    public static readonly GENERATOR_UNUSED1: int
                    public static readonly GENERATOR_CHORUSEFFECTSSEND: int
                    public static readonly GENERATOR_REVERBEFFECTSSEND: int
                    public static readonly GENERATOR_PAN: int
                    public static readonly GENERATOR_UNUSED2: int
                    public static readonly GENERATOR_UNUSED3: int
                    public static readonly GENERATOR_UNUSED4: int
                    public static readonly GENERATOR_DELAYMODLFO: int
                    public static readonly GENERATOR_FREQMODLFO: int
                    public static readonly GENERATOR_DELAYVIBLFO: int
                    public static readonly GENERATOR_FREQVIBLFO: int
                    public static readonly GENERATOR_DELAYMODENV: int
                    public static readonly GENERATOR_ATTACKMODENV: int
                    public static readonly GENERATOR_HOLDMODENV: int
                    public static readonly GENERATOR_DECAYMODENV: int
                    public static readonly GENERATOR_SUSTAINMODENV: int
                    public static readonly GENERATOR_RELEASEMODENV: int
                    public static readonly GENERATOR_KEYNUMTOMODENVHOLD: int
                    public static readonly GENERATOR_KEYNUMTOMODENVDECAY: int
                    public static readonly GENERATOR_DELAYVOLENV: int
                    public static readonly GENERATOR_ATTACKVOLENV: int
                    public static readonly GENERATOR_HOLDVOLENV: int
                    public static readonly GENERATOR_DECAYVOLENV: int
                    public static readonly GENERATOR_SUSTAINVOLENV: int
                    public static readonly GENERATOR_RELEASEVOLENV: int
                    public static readonly GENERATOR_KEYNUMTOVOLENVHOLD: int
                    public static readonly GENERATOR_KEYNUMTOVOLENVDECAY: int
                    public static readonly GENERATOR_INSTRUMENT: int
                    public static readonly GENERATOR_RESERVED1: int
                    public static readonly GENERATOR_KEYRANGE: int
                    public static readonly GENERATOR_VELRANGE: int
                    public static readonly GENERATOR_STARTLOOPADDRSCOARSEOFFSET: int
                    public static readonly GENERATOR_KEYNUM: int
                    public static readonly GENERATOR_VELOCITY: int
                    public static readonly GENERATOR_INITIALATTENUATION: int
                    public static readonly GENERATOR_RESERVED2: int
                    public static readonly GENERATOR_ENDLOOPADDRSCOARSEOFFSET: int
                    public static readonly GENERATOR_COARSETUNE: int
                    public static readonly GENERATOR_FINETUNE: int
                    public static readonly GENERATOR_SAMPLEID: int
                    public static readonly GENERATOR_SAMPLEMODES: int
                    public static readonly GENERATOR_RESERVED3: int
                    public static readonly GENERATOR_SCALETUNING: int
                    public static readonly GENERATOR_EXCLUSIVECLASS: int
                    public static readonly GENERATOR_OVERRIDINGROOTKEY: int
                    public static readonly GENERATOR_UNUSED5: int
                    public static readonly GENERATOR_ENDOPR: int
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