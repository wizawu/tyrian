declare namespace java {
  namespace awt {
    namespace color {

      abstract class ColorSpace implements java.io.Serializable {
        static readonly serialVersionUID: long
        public static readonly TYPE_XYZ: int
        public static readonly TYPE_Lab: int
        public static readonly TYPE_Luv: int
        public static readonly TYPE_YCbCr: int
        public static readonly TYPE_Yxy: int
        public static readonly TYPE_RGB: int
        public static readonly TYPE_GRAY: int
        public static readonly TYPE_HSV: int
        public static readonly TYPE_HLS: int
        public static readonly TYPE_CMYK: int
        public static readonly TYPE_CMY: int
        public static readonly TYPE_2CLR: int
        public static readonly TYPE_3CLR: int
        public static readonly TYPE_4CLR: int
        public static readonly TYPE_5CLR: int
        public static readonly TYPE_6CLR: int
        public static readonly TYPE_7CLR: int
        public static readonly TYPE_8CLR: int
        public static readonly TYPE_9CLR: int
        public static readonly TYPE_ACLR: int
        public static readonly TYPE_BCLR: int
        public static readonly TYPE_CCLR: int
        public static readonly TYPE_DCLR: int
        public static readonly TYPE_ECLR: int
        public static readonly TYPE_FCLR: int
        public static readonly CS_sRGB: int
        public static readonly CS_LINEAR_RGB: int
        public static readonly CS_CIEXYZ: int
        public static readonly CS_PYCC: int
        public static readonly CS_GRAY: int
        protected constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public static getInstance(arg0: number | java.lang.Integer): java.awt.color.ColorSpace
        public isCS_sRGB(): boolean
        public abstract toRGB(arg0: number[] | java.lang.Float[]): number[]
        public abstract fromRGB(arg0: number[] | java.lang.Float[]): number[]
        public abstract toCIEXYZ(arg0: number[] | java.lang.Float[]): number[]
        public abstract fromCIEXYZ(arg0: number[] | java.lang.Float[]): number[]
        public getType(): number
        public getNumComponents(): number
        public getName(arg0: number | java.lang.Integer): java.lang.String
        public getMinValue(arg0: number | java.lang.Integer): number
        public getMaxValue(arg0: number | java.lang.Integer): number
        static isCS_CIEXYZ(arg0: java.awt.color.ColorSpace): boolean
      }

    }
  }
}
