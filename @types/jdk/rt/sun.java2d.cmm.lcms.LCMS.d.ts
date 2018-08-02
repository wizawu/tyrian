declare namespace sun {
    namespace java2d {
        namespace cmm {
            namespace lcms {
class LCMS implements sun.java2d.cmm.PCMM {
    public loadProfile(arg0: byte[]): sun.java2d.cmm.Profile
    public freeProfile(arg0: sun.java2d.cmm.Profile): void
    public getProfileSize(arg0: sun.java2d.cmm.Profile): int
    public getProfileData(arg0: sun.java2d.cmm.Profile, arg1: byte[]): void
    public getTagSize(arg0: sun.java2d.cmm.Profile, arg1: int): int
    public getTagData(arg0: sun.java2d.cmm.Profile, arg1: int, arg2: byte[]): void
    public setTagData(arg0: sun.java2d.cmm.Profile, arg1: int, arg2: byte[]): void
    public static getProfileID(arg0: java.awt.color.ICC_Profile): sun.java2d.cmm.lcms.LCMSProfile
    public createTransform(arg0: java.awt.color.ICC_Profile, arg1: int, arg2: int): sun.java2d.cmm.ColorTransform
    public createTransform(arg0: sun.java2d.cmm.ColorTransform[]): sun.java2d.cmm.ColorTransform
    public static colorConvert(arg0: sun.java2d.cmm.lcms.LCMSTransform, arg1: sun.java2d.cmm.lcms.LCMSImageLayout, arg2: sun.java2d.cmm.lcms.LCMSImageLayout): void
    public static freeTransform(arg0: long): void
    public static initLCMS(arg0: java.lang.Class, arg1: java.lang.Class, arg2: java.lang.Class): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}