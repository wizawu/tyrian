declare namespace sun {
    namespace java2d {
        namespace cmm {
            class CMSManager$CMMTracer implements sun.java2d.cmm.PCMM {
                public constructor(arg0: sun.java2d.cmm.PCMM)
                public loadProfile(arg0: byte[]): sun.java2d.cmm.Profile
                public freeProfile(arg0: sun.java2d.cmm.Profile): void
                public getProfileSize(arg0: sun.java2d.cmm.Profile): int
                public getProfileData(arg0: sun.java2d.cmm.Profile, arg1: byte[]): void
                public getTagSize(arg0: sun.java2d.cmm.Profile, arg1: int): int
                public getTagData(arg0: sun.java2d.cmm.Profile, arg1: int, arg2: byte[]): void
                public setTagData(arg0: sun.java2d.cmm.Profile, arg1: int, arg2: byte[]): void
                public createTransform(arg0: java.awt.color.ICC_Profile, arg1: int, arg2: int): sun.java2d.cmm.ColorTransform
                public createTransform(arg0: sun.java2d.cmm.ColorTransform[]): sun.java2d.cmm.ColorTransform
                public static class: java.lang.Class<any>
            }
        }
    }
}