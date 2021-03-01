declare namespace java {
  namespace awt {
    namespace color {

      class ICC_ProfileGray extends java.awt.color.ICC_Profile {

        static readonly serialVersionUID: long
        constructor(arg0: sun.java2d.cmm.Profile)
        constructor(arg0: sun.java2d.cmm.ProfileDeferralInfo)
        public getMediaWhitePoint(): float[]
        public getGamma(): float
        public getTRC(): short[]
      }

    }
  }
}
