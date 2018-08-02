declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
class DLSModulator {
    public static CONN_DST_NONE: int
    public static CONN_DST_GAIN: int
    public static CONN_DST_PITCH: int
    public static CONN_DST_PAN: int
    public static CONN_DST_LFO_FREQUENCY: int
    public static CONN_DST_LFO_STARTDELAY: int
    public static CONN_DST_EG1_ATTACKTIME: int
    public static CONN_DST_EG1_DECAYTIME: int
    public static CONN_DST_EG1_RELEASETIME: int
    public static CONN_DST_EG1_SUSTAINLEVEL: int
    public static CONN_DST_EG2_ATTACKTIME: int
    public static CONN_DST_EG2_DECAYTIME: int
    public static CONN_DST_EG2_RELEASETIME: int
    public static CONN_DST_EG2_SUSTAINLEVEL: int
    public static CONN_DST_KEYNUMBER: int
    public static CONN_DST_LEFT: int
    public static CONN_DST_RIGHT: int
    public static CONN_DST_CENTER: int
    public static CONN_DST_LEFTREAR: int
    public static CONN_DST_RIGHTREAR: int
    public static CONN_DST_LFE_CHANNEL: int
    public static CONN_DST_CHORUS: int
    public static CONN_DST_REVERB: int
    public static CONN_DST_VIB_FREQUENCY: int
    public static CONN_DST_VIB_STARTDELAY: int
    public static CONN_DST_EG1_DELAYTIME: int
    public static CONN_DST_EG1_HOLDTIME: int
    public static CONN_DST_EG1_SHUTDOWNTIME: int
    public static CONN_DST_EG2_DELAYTIME: int
    public static CONN_DST_EG2_HOLDTIME: int
    public static CONN_DST_FILTER_CUTOFF: int
    public static CONN_DST_FILTER_Q: int
    public static CONN_SRC_NONE: int
    public static CONN_SRC_LFO: int
    public static CONN_SRC_KEYONVELOCITY: int
    public static CONN_SRC_KEYNUMBER: int
    public static CONN_SRC_EG1: int
    public static CONN_SRC_EG2: int
    public static CONN_SRC_PITCHWHEEL: int
    public static CONN_SRC_CC1: int
    public static CONN_SRC_CC7: int
    public static CONN_SRC_CC10: int
    public static CONN_SRC_CC11: int
    public static CONN_SRC_RPN0: int
    public static CONN_SRC_RPN1: int
    public static CONN_SRC_RPN2: int
    public static CONN_SRC_POLYPRESSURE: int
    public static CONN_SRC_CHANNELPRESSURE: int
    public static CONN_SRC_VIBRATO: int
    public static CONN_SRC_MONOPRESSURE: int
    public static CONN_SRC_CC91: int
    public static CONN_SRC_CC93: int
    public static CONN_TRN_NONE: int
    public static CONN_TRN_CONCAVE: int
    public static CONN_TRN_CONVEX: int
    public static CONN_TRN_SWITCH: int
    public static DST_FORMAT_CB: int
    public static DST_FORMAT_CENT: int
    public static DST_FORMAT_TIMECENT: int
    public static DST_FORMAT_PERCENT: int
    public constructor()
    public getControl(): int
    public setControl(arg0: int): void
    public static getDestinationFormat(arg0: int): int
    public static getDestinationName(arg0: int): string
    public static getSourceName(arg0: int): string
    public getDestination(): int
    public setDestination(arg0: int): void
    public getScale(): int
    public setScale(arg0: int): void
    public getSource(): int
    public setSource(arg0: int): void
    public getVersion(): int
    public setVersion(arg0: int): void
    public getTransform(): int
    public setTransform(arg0: int): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}