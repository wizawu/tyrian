declare namespace java {
  namespace awt {
    namespace color {

      class ICC_ColorSpace extends java.awt.color.ColorSpace {
        static readonly serialVersionUID: long
        public constructor(arg0: java.awt.color.ICC_Profile)
        public getProfile(): java.awt.color.ICC_Profile
        public toRGB(arg0: number[] | java.lang.Float[]): number[]
        public fromRGB(arg0: number[] | java.lang.Float[]): number[]
        public toCIEXYZ(arg0: number[] | java.lang.Float[]): number[]
        public fromCIEXYZ(arg0: number[] | java.lang.Float[]): number[]
        public getMinValue(arg0: number | java.lang.Integer): number
        public getMaxValue(arg0: number | java.lang.Integer): number
      }

    }
  }
}
