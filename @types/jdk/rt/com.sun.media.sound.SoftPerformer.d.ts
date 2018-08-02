declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftPerformer {
                    public keyFrom: int
                    public keyTo: int
                    public velFrom: int
                    public velTo: int
                    public exclusiveClass: int
                    public selfNonExclusive: boolean
                    public forcedVelocity: boolean
                    public forcedKeynumber: boolean
                    public performer: com.sun.media.sound.ModelPerformer
                    public connections: com.sun.media.sound.ModelConnectionBlock[]
                    public oscillators: com.sun.media.sound.ModelOscillator[]
                    public midi_rpn_connections: java.util.Map<java.lang.Integer, int[]>
                    public midi_nrpn_connections: java.util.Map<java.lang.Integer, int[]>
                    public midi_ctrl_connections: int[][]
                    public midi_connections: int[][]
                    public ctrl_connections: int[]
                    public constructor(arg0: com.sun.media.sound.ModelPerformer)
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}