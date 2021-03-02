declare namespace java {
  namespace util {

    abstract class Locale$IsoCountryCode extends java.lang.Enum<java.util.Locale$IsoCountryCode> {
      public static readonly PART1_ALPHA2: java.util.Locale$IsoCountryCode
      public static readonly PART1_ALPHA3: java.util.Locale$IsoCountryCode
      public static readonly PART3: java.util.Locale$IsoCountryCode
      public static values(): java.util.Locale$IsoCountryCode[]
      public static valueOf(arg0: java.lang.String | string): java.util.Locale$IsoCountryCode
      abstract createCountryCodeSet(): java.util.Set<java.lang.String>
      static retrieveISOCountryCodes(arg0: java.util.Locale$IsoCountryCode): java.util.Set<java.lang.String>
    }

  }
}
