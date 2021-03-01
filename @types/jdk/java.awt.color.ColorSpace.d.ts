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
        protected constructor(arg0: int, arg1: int)
        public static getInstance(arg0: int): java.awt.color.ColorSpace
        public isCS_sRGB(): boolean
        public abstract toRGB(arg0: float[]): float[]
        public abstract fromRGB(arg0: float[]): float[]
        public abstract toCIEXYZ(arg0: float[]): float[]
        public abstract fromCIEXYZ(arg0: float[]): float[]
        public getType(): int
        public getNumComponents(): int
        public getName(arg0: int): java.lang.String
        public getMinValue(arg0: int): float
        public getMaxValue(arg0: int): float
        static isCS_CIEXYZ(arg0: java.awt.color.ColorSpace): boolean
      }

    }
  }
}
