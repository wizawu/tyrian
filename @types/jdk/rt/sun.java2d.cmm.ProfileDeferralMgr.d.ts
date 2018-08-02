declare namespace sun {
    namespace java2d {
        namespace cmm {
            class ProfileDeferralMgr {
                public static deferring: boolean
                public constructor()
                public static registerDeferral(arg0: sun.java2d.cmm.ProfileActivator | sun.java2d.cmm.ProfileActivator$$Lambda): void
                public static unregisterDeferral(arg0: sun.java2d.cmm.ProfileActivator | sun.java2d.cmm.ProfileActivator$$Lambda): void
                public static activateProfiles(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}