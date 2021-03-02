declare namespace javax {
  namespace print {
    namespace attribute {

      abstract class Size2DSyntax implements java.io.Serializable, java.lang.Cloneable {
        public static readonly INCH: int
        public static readonly MM: int
        protected constructor(arg0: float, arg1: float, arg2: int)
        protected constructor(arg0: int, arg1: int, arg2: int)
        public getSize(arg0: int): float[]
        public getX(arg0: int): float
        public getY(arg0: int): float
        public toString(arg0: int, arg1: java.lang.String): java.lang.String
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
        protected getXMicrometers(): int
        protected getYMicrometers(): int
      }

    }
  }
}
