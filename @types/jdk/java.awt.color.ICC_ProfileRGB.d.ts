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
        public getMediaWhitePoint(): number[]
        public getMatrix(): number[][]
        public getGamma(arg0: number | java.lang.Integer): number
        public getTRC(arg0: number | java.lang.Integer): number[]
      }
    }
  }
}
