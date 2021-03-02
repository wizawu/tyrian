declare namespace java {
  namespace awt {
    namespace color {

      class ICC_ProfileRGB extends java.awt.color.ICC_Profile {
        static readonly serialVersionUID: long
        public static readonly REDCOMPONENT: int
        public static readonly GREENCOMPONENT: int
        public static readonly BLUECOMPONENT: int
        constructor(arg0: sun.java2d.cmm.Profile)
        constructor(arg0: sun.java2d.cmm.ProfileDeferralInfo)
        public getMediaWhitePoint(): float[]
        public getMatrix(): float[][]
        public getGamma(arg0: int): float
        public getTRC(arg0: int): short[]
      }

    }
  }
}
