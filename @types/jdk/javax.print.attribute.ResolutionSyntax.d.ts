declare namespace javax {
  namespace print {
    namespace attribute {

      abstract class ResolutionSyntax implements java.io.Serializable, java.lang.Cloneable {

        public static readonly DPI: int
        public static readonly DPCM: int
        public constructor(arg0: int, arg1: int, arg2: int)
        public getResolution(arg0: int): int[]
        public getCrossFeedResolution(arg0: int): int
        public getFeedResolution(arg0: int): int
        public toString(arg0: int, arg1: java.lang.String): java.lang.String
        public lessThanOrEquals(arg0: javax.print.attribute.ResolutionSyntax): boolean
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
        protected getCrossFeedResolutionDphi(): int
        protected getFeedResolutionDphi(): int
      }

    }
  }
}
