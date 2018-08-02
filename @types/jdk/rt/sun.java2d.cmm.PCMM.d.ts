declare namespace sun {
    namespace java2d {
        namespace cmm {
interface PCMM {
    loadProfile(arg0: byte[]): sun.java2d.cmm.Profile
    freeProfile(arg0: sun.java2d.cmm.Profile): void
    getProfileSize(arg0: sun.java2d.cmm.Profile): int
    getProfileData(arg0: sun.java2d.cmm.Profile, arg1: byte[]): void
    getTagData(arg0: sun.java2d.cmm.Profile, arg1: int, arg2: byte[]): void
    getTagSize(arg0: sun.java2d.cmm.Profile, arg1: int): int
    setTagData(arg0: sun.java2d.cmm.Profile, arg1: int, arg2: byte[]): void
    createTransform(arg0: java.awt.color.ICC_Profile, arg1: int, arg2: int): sun.java2d.cmm.ColorTransform
    createTransform(arg0: sun.java2d.cmm.ColorTransform[]): sun.java2d.cmm.ColorTransform
}

        }
    }
}