declare namespace sun {
    namespace java2d {
        namespace cmm {
            abstract class CMMServiceProvider {
                public constructor()
                public getColorManagementModule(): sun.java2d.cmm.PCMM
                protected abstract getModule(): sun.java2d.cmm.PCMM
                public static class: java.lang.Class<any>
            }
            interface CMMServiceProvider$$Lambda {
                (): sun.java2d.cmm.PCMM
            }
        }
    }
}